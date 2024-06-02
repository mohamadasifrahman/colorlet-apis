import UserModel from '../models/user';

class AuthService {
    static async hasAccount(email: string): Promise<boolean> {
        const user = await UserModel.findByEmail(email);
        if (user == null)
            return false
        return true
    }
}

export default AuthService;
