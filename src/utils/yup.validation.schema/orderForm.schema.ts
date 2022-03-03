import * as yup from 'yup';

type TArgs = {
    country: string;
};

const getOrderFormSchema = ({ country }: TArgs) => {
    const alphaLengthRegex = new RegExp(/^[a-zA-Z]{2}(\w*([ -])?\w+)*$/);
    const emailRegex = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/,
    );

    return yup
        .object({
            firstName: yup.string().trim().matches(alphaLengthRegex).required(),
            lastName: yup.string().trim().matches(alphaLengthRegex).required(),
            email: yup.string().matches(emailRegex).required(),
            locality: yup.string().required(),
            state: yup.string(),
        })
        .required();
};

export default getOrderFormSchema;
