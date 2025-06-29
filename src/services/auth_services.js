import User from "../models/user.js"

export const getUsers = async () => {
    const users = await User.findAll();
    return users;
}

export const getUserById = async (id) => {
    const user = await User.findByPk(id);
    return user;
}

export const updateProfile = async (id, fullname, email, address, phone, avatar) => {
    const updatedUser = await User.findByPk(id);

    updatedUser.fullname = fullname || updatedUser.fullname;
    updatedUser.email = email || updatedUser.email;
    updatedUser.address = address || updatedUser.address;
    updatedUser.phone = phone || updatedUser.phone;
    if (avatar) updatedUser.avatar = avatar;

    return updatedUser;
}