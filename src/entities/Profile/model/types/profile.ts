import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export interface Profile {
    firstname?: string;
    lastname?: string;
    age?: number;
    username?: string;
    avatar?: string;
    currency?: Currency;
    country?: Country;
    city?: string;
}

export interface ProfileSchema {
    isLoading: boolean;
    readonly: boolean;
    data?: Profile;
    form?: Profile;
    error?: string;
}
