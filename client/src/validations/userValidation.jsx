import * as yup from 'yup';

export const userSchema=yup.object().shape({
    username: yup.string().min(3).max(20).required(),
    email: yup.string().email().required(),
    password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).required()
})

