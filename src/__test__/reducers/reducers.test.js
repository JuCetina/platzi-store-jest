import { TestScheduler } from '@jest/core';
import reducer from '../../reducers';
import ProductMock from '../../__mocks__/productMock';

describe('Reducers', () => {
    test('Retornar el Initial State', () => {
        expect(reducer({}, '')).toEqual({});
    });

    test('ADD_TO_CART', () => {
        const initialState = {
            cart: [],
        }

        const payload = ProductMock;
        
        const action = {
            type: 'ADD_TO_CART',
            payload,
        }

        const expected = {
            cart: [
                ProductMock
            ],
        }

        expect(reducer(initialState, action)).toEqual(expected);
    });
});