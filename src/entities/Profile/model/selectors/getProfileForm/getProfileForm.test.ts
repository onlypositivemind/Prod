import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('selector getProfileForm', () => {
    test('should return form', () => {
        const form = {
            firstname: 'Evgenii',
            lastname: 'TSovich',
            age: 23,
            currency: Currency.EUR,
            country: Country.Russia,
            city: 'Moscow',
            username: 'admin',
        };

        const state: DeepPartial<StateSchema> = {
            profile: { form },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('should work with empty state', () => {
        const state = {};
        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});
