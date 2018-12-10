// Types
import { types } from './types';

export const profileActions = {
    acfillProfiletion: (profile) => {
        return {
            type:    types.FILL_PROFILE,
            payload: profile,
        };
    },
};
