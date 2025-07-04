import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import { getUserById, getUsers, updateProfile } from '../services/auth_services.js';

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Vui lòng nhập tài khoản và mật khẩu!' });
    }

    try {
        const user = await User.findOne({ where: { username }});

        if (!user) {
            return res.status(401).json({ message: 'tài khoản đăng nhập không đúng'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Sai mật khẩu' });
        }

        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1d' },
        );

        const { password: pw, ...userData } = user.get({ plain: true });

        res.json({ message: 'Đăng nhập thành công', token, user: userData});
    } catch (error) {   
        res.status(500).json({ message: 'Lỗi Server', error });
    }
};

export const registerUser = async (req, res) => {
    const { username, password, email, rePassword, fullname, address, phone } = req.body;
    const avatar = req.file ? req.file.filename : null;

    if (!username || !password || !email || !rePassword || !fullname ) {
        return res.status(400).json({message: 'Cần nhập đầy đủ thông tin!'});
    }

    if (password !== rePassword) {
        return res.status(400).json({message: 'Mật khẩu nhập lại không khớp'});
    }

    try {
        const newUser = await User.create({
            username: username,
            password: await bcrypt.hash(password,10),
            email: email,
            fullname,
            address,
            phone,
            avatar,
            role: 'user',
        });
        return res.status(200).json({message: 'Đăng ký thành công', user: newUser});
    } catch (error) {
        return res.status(401).json({message: 'Đăng ký tài khoản thất bại'});
    }
}

export const getAllUsers = async (req, res) => {
    const {id} = req.params;

    if(id) {
        const data = await getUserById(id);
        return res.status(200).json({user: data});
    }

    const data = await getUsers();
    return res.status(200).json({users: data});
}

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const {fullname, email, address, phone} = req.body;
    const avatar = req.file ? req.file.filename : undefined;

    if(!id) {
        return res.status(400).json({message: 'Không tìm thấy user id.'});
    }
    try {
        const user = await updateProfile(id, fullname, email, address, phone, avatar);
        await user.save();
    
        const { password, ...userData} = user.get({ plain: true});
        return res.status(200).json({message: 'Cập nhật user thành công.', user: userData});
    } catch ( error ) {
        return res.status(500).json({message: 'Lỗi server',error: error.message});
    }
}