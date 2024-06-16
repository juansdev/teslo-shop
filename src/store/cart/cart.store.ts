import {ICartProduct} from "@/interfaces";
import {create} from "zustand";
import {persist} from "zustand/middleware";

interface IGetSummaryInformation {
  total: number,
  itemsInCart: number,
  tax: number,
  subTotal: number
}

interface IState {
  cart: ICartProduct[];
  getTotalItems: () => number;
  getSummaryInformation: () => IGetSummaryInformation;
  addProductToCart: (product: ICartProduct) => void;
  updateProductQuantity: (product: ICartProduct, quantity: number) => void;
  removeProduct: (product: ICartProduct) => void;
  clearCart: () => void;
}

export const useCartStore = create<IState>()(
  persist(
    (set, get) => ({
      cart: [],
      getTotalItems: () => {
        const {cart} = get();
        return cart.reduce((totalValue, item) => totalValue + item.quantity, 0);
      },
      getSummaryInformation: () => {
        const {cart} = get();
        const subTotal = cart.reduce(
          (subTotal, product) => (product.quantity * product.price) + subTotal, 0
        );
        const tax = subTotal * .15;
        const total = subTotal + tax;
        const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

        return {
          subTotal,
          tax,
          total,
          itemsInCart
        }
      },
      addProductToCart: (product: ICartProduct) => {
        const {cart} = get();
        const existProductInCar = cart.some(
          (item) => item.id === product.id && item.size === product.size
        );
        if (!existProductInCar) {
          set({
            cart: [...cart, product]
          });
          return;
        }
        const updatedCartProducts = cart.map(item => {
          if (item.id === product.id && item.size === product.size)
            return {...item, quantity: item.quantity + product.quantity};
          return item;
        });
        set({cart: updatedCartProducts});
      },
      updateProductQuantity: (product: ICartProduct, quantity: number) => {
        if (quantity + product.quantity < 1) return;
        const {cart} = get();
        const updatedCartProducts = cart.map(item => {
          if (item.id === product.id && item.size === product.size)
            return {...item, quantity: item.quantity + quantity};
          return item;
        });
        set({cart: updatedCartProducts});
      },
      removeProduct: (product: ICartProduct) => {
        const {cart} = get();
        const updatedCartProducts = cart.filter(
          item => !(item.id === product.id && item.size === product.size)
        );
        set({cart: updatedCartProducts});
      },
      clearCart: () => {
        set({cart: []});
      }
    })
    , {
      name: "shopping-cart"
    })
);