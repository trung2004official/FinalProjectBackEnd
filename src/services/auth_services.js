import User from "../models/user.js"

export const getUsers = async () => {
    const users = await User.findAll();
    return users;
}

export const getUserById = async (id) => {
    const user = await User.findByPk(id);
    return user;
}