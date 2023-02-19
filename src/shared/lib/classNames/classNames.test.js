import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('class')).toBe(classNames('class'));
    });

    test('with additional', () => {
        const expected = 'class class1 class2';
        expect(classNames('class', ['class1', 'class2'])).toBe(classNames(expected));
    });

    test('with mods', () => {
        const expected = 'class class1 class2 hovered scrollable';
        expect(
            classNames('class', ['class1', 'class2'], {
                hovered: true,
                scrollable: true,
            }),
        ).toBe(classNames(expected));
    });

    test('with mode false', () => {
        const expected = 'class class1 class2 hovered';
        expect(
            classNames('class', ['class1', 'class2'], {
                hovered: true,
                scrollable: false,
            }),
        ).toBe(classNames(expected));
    });

    test('with mode undefined', () => {
        const expected = 'class class1 class2 hovered';
        expect(
            classNames('class', ['class1', 'class2'], {
                hovered: true,
                scrollable: undefined,
            }),
        ).toBe(classNames(expected));
    });
});
