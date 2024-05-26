const { User } = require('../models/index');
const { comparePassword, hashPassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class UserController {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email) {
                throw { name: "EmailIsRequired" };
            }
            if (!password) {
                throw { name: "PasswordIsRequired" };
            }
            const user = await User.findOne({
                where: { email: email }
            });
            if (!user) {
                throw { name: 'UserNotExist' };
            }
            const isPasswordValid = comparePassword(password, user.password);
            if (!isPasswordValid) {
                throw { name: 'PasswordInvalid' };
            }
            const access_token = signToken(user);
            res.status(200).json({ access_token, user });
        } catch (error) {
            next(error);
        }
    }

    static async addUser(req, res, next) {
        try {
            const {email, password } = req.body
            const passwordBcrypt = await hashPassword(password)
            const user = await User.create({email, password: passwordBcrypt})

            res.status(201).json({
                id: user.id,
                email,
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController
