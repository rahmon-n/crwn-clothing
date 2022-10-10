import { AnyAction } from 'redux';

import { CartItem } from './cart.types';
import { setCartItems, setIsCartOpen } from './cart.actions';

export type CartState = {
  cartItems: CartItem[];
  isCartOpen: boolean;
};

const CART_INITIAL_STATE: CartState = {
  cartItems: [],
  isCartOpen: false
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setCartItems.match(action)) {
    return { ...state, cartItems: action.payload };
  }

  if (setIsCartOpen.match(action)) {
    return { ...state, isCartOpen: action.payload };
  }

  return state;
};
