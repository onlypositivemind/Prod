import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

const data = {
    firstname: 'Evgenii',
    lastname: 'TSovich',
    age: 23,
    currency: Currency.EUR,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: 'avatarUrl',
};

describe('validateProfileData', () => {
    test('success', async () => {
        const res = validateProfileData(data);

        expect(res).toEqual([]);
    });

    test('without first and last name', async () => {
        const res = validateProfileData({ ...data, firstname: '', lastname: '' });

        expect(res).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('without username', async () => {
        const res = validateProfileData({ ...data, username: '' });

        expect(res).toEqual([
            ValidateProfileError.INCORRECT_USERNAME,
        ]);
    });

    test('incorrect age', async () => {
        const res = validateProfileData({ ...data, age: 0 });

        expect(res).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const res = validateProfileData({ ...data, country: undefined });

        expect(res).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect city', async () => {
        const res = validateProfileData({ ...data, city: '' });

        expect(res).toEqual([
            ValidateProfileError.INCORRECT_CITY,
        ]);
    });

    test('incorrect currency', async () => {
        const res = validateProfileData({ ...data, currency: undefined });

        expect(res).toEqual([
            ValidateProfileError.INCORRECT_CURRENCY,
        ]);
    });

    test('incorrect all', async () => {
        const res = validateProfileData({});

        expect(res).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USERNAME,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_CURRENCY,
        ]);
    });
});
