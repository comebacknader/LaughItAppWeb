import { SIGNUP_USER, LOGIN_USER, FORGOT_PASSWORD, RESET_PASSWORD } from './types';
import axios from "axios";

export async function signupUser(content) {
    
    const response = await axios.post(
        `${process.env.API_URL}/api/users`, {
            username: content.username,
            email: content.email,
            password: content.password
        })

    return {
        type: SIGNUP_USER,
        content: response.data.username
    }; 
}

export async function loginUser(content) {
    
    const response = await axios.post(
        `${process.env.API_URL}/api/login`, {
            credential: content.credential,
            password: content.password
        })

    return {
        type: LOGIN_USER,
        content: response.data.credential
    }; 
}

export async function forgotPassword(content) {
    
    const response = await axios.post(
        `${process.env.API_URL}/api/forgottenpasswords`, {
            email: content.email
        })

    return {
        type: FORGOT_PASSWORD,
        email: response.data.email
    }; 
}

export async function resetPassword(content) {
    
    const response = await axios.post(
        `${process.env.API_URL}/api/resets`, {
            password: content.password
        })

    return {
        type: RESET_PASSWORD,
        email: response.data.username
    }; 
}