import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('with one param', () => {
        const params = getQueryParams({
            first: 'value1',
        });

        expect(params).toBe('?first=value1');
    });

    test('with multiple params', () => {
        const params = getQueryParams({
            first: 'value1',
            second: 'value2',
        });

        expect(params).toBe('?first=value1&second=value2');
    });

    test('with undefined param', () => {
        const params = getQueryParams({
            first: 'value1',
            second: undefined,
        });

        expect(params).toBe('?first=value1');
    });
});
