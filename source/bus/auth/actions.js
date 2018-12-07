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
    signupAsync: (userDate) => {
        return {
            type: types.SIGNUP_ASYNC,
            payload: userData,
        };
    },
};
