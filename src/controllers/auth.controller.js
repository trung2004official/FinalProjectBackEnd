import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Vui lòng nhập tài khoản và mật khẩu!' });
    }

    try {
        const user = await User.findOne({ where: { email }});

        if (!user) {
            return res.status(401).json({ message: 'Email không tồn tại '});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Sai mật khẩu' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1d' },
        );

        res.json({ message: 'Đăng nhập thành công', token});
    } catch (error) {
        res.status(500).json({ message: 'Lỗi Server', error });
    }
};