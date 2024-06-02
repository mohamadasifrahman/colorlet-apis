import { Request, Response, NextFunction } from 'express';

import AuthService from '../services/authService'
import { LoginOptions } from '../types/apiResponse'
export const getLoginOptions = async (req: Request, res: Response) => {

    const { email } = req.body;
    const hasAccount = await AuthService.hasAccount(email);

    let loginOptions: LoginOptions = {
        hasAccount: hasAccount,
        emailOtpToken: '',
        emailOtpLogin: false,
        passwordLogin: false
    };
    if (hasAccount) {
        loginOptions.hasAccount = 
    } else {

    }
    

};