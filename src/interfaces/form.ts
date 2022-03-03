import { FieldError } from 'react-hook-form';

export interface IFormData extends FormAddress {
    firstName: string;
    lastName: string;
    email: string;
}

export interface IFormErrors
    extends Partial<Record<keyof IFormData, FieldError | undefined>> {
    [x: string]: FieldError | undefined;
}

export enum AddressKeys {
    COUNTRYNAME = 'country-name',
    STREETADDRESS = 'street-address',
    POSTALCODE = 'postal-code',
    LOCALITY = 'locality',
    STATE = 'state',
}

export enum BuyerKeys {
    EMAIL = 'email',
    FIRSTNAME = 'firstName',
    LASTNAME = 'lastName',
}

export type FormAddress = {
    [key in AddressKeys]: string;
};
