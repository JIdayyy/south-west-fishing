import * as yup from 'yup';

const cartQuantitySchema = () =>
    yup
        .object({
            quantity: yup
                .number()
                .integer()
                .moreThan(0)
                .lessThan(31)
                .required(),
        })
        .required();

export default cartQuantitySchema;
