import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('selector getProfileData', () => {
    test('should return data', () => {
        const data = {
            firstname: 'Evgenii',
            lastname: 'TSovich',
            age: 23,
            currency: Currency.EUR,
            country: Country.Russia,
            city: 'Moscow',
            username: 'admin',
        };

        const state: DeepPartial<StateSchema> = {
            profile: { data },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state = {};
        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
