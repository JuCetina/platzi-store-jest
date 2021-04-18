import actions from '../../actions';
import ProductMock from '../../__mocks__/productMock';

describe('Actions', () => {
    const payload = ProductMock;

    test('Add to Cart Action', () => {
        const expected = {
            type: "ADD_TO_CART",
            payload,
        }

        expect(actions.addToCart(payload)).toEqual(expected);
    });

    test('Remove from Cart Action', () => {
        const expected = {
            type: "REMOVE_FROM_CART",
            payload,
        }

        expect(actions.removeFromCart(payload)).toEqual(expected);
    });
});