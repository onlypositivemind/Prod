import { Country, Currency } from 'shared/const/common';

export interface Profile {
    firstname: string;
    lastname: string;
    age: number;
    username: string;
    avatar: string;
    currency: Currency;
    country: Country;
    city: string;
}

export interface ProfileSchema {
    isLoading: boolean;
    readonly: boolean;
    data?: Profile;
    error?: string;
}
