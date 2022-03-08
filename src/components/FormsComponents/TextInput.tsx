/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import { IFormErrors } from '@src/interfaces/form';
import hasValidationErrors from '@utils/hook-form-errors';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
    label: string;
    value: string;
    className?: string;
    register: UseFormRegister<any & FieldValues>;
    errors: IFormErrors;
    errorMessage: string;
}

export default function TextInput({
    label,
    value,
    className,
    register,
    errors,
    errorMessage,
}: IProps): JSX.Element {
    const hasErrors = hasValidationErrors(value, errors);
    return (
        <div className={className || ''}>
            <label
                htmlFor={label}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
                <input
                    type="text"
                    id={label}
                    {...register(value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-isabelline"
                />
                {hasErrors && <p className="text-red-700">{errorMessage}</p>}
            </label>
        </div>
    );
}