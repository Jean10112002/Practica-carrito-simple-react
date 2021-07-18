import { types } from "../actions/carritoActions";

export const initialStateProducts = {
  products: [
    {
      id: 1,
      name: "product 1",
      price: 100,
      counter: 1,
    },
    {
      id: 2,
      name: "product 2",
      price: 200,
      counter: 1,
    },
    {
      id: 3,
      name: "product 3",
      price: 300,
      counter: 1,
    },
    {
      id: 4,
      name: "product 4",
      price: 400,
      counter: 1,
    },
    {
      id: 5,
      name: "product 5",
      price: 500,
      counter: 1,
    },
  ],
  cart: [],
  precioFinal: 0,
};

export const carritoReducer = (state, action) => {
  let id, data, existe;
  switch (action.type) {
    case types.AGREGAR:
      id = action.payload;
      data = state.products.find((data) => data.id === id);
      existe = state.cart.filter((date) => date.id === id);
      if (existe.length > 0) {
        console.log("counter", existe);
        existe[0].counter += 0.5;
        return { ...state, cart: [...state.cart] };
      }
      return { ...state, cart: [...state.cart, data] };

    case types.ELIMINAR_ONE:
      id = action.payload;
      data = state.products.filter((data) => data.id === id);
      data[0].counter -= 0.5;
      return { ...state, cart: [...state.cart] };
    case types.ELIMINAR_TODO:
      id = action.payload;
      state.cart.filter((data) => data.id === id)[0].counter = 1;
      data = state.cart.filter((data) => data.id !== id);
      return { ...state, cart: data };

    case types.LIMPIAR:
      state.products.forEach((res) => {
        res.counter = 1;
      });
      return { ...state, cart: [], precioFinal: 0 };
    case types.PRICE:
        return { ...state, precioFinal: action.payload };
    default:
      console.log("default");
      return initialStateProducts;
  }
};
