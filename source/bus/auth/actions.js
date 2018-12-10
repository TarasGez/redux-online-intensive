// Types
import { types } from './types';

export const authActions = {
    // Sync
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },

    // Async
    signupAsync: (userData) => {
        return {
            type:    types.SIGNUP_ASYNC,
            payload: userData,
        };
    },

    loginAsync: (userInfo) => {
        return {
            type:    types.LOGIN_ASYNC,
            payload: userInfo,
        };
    },
};
