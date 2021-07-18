import React from "react";
import { useReducer } from "react";
import {
  carritoReducer,
  initialStateProducts,
} from "../store/reducers/carritoReducer";
import CarritoNumber from "./CarritoNumber";

const Carrito = () => {
  const [state, dispatch] = useReducer(carritoReducer, initialStateProducts);
  return (
    <div>
      <h2>carrito de compras</h2>
      <div className="row g-4">
        {state?.products?.map((data) => (
          <div className="col-md-4 col-6" key={data.id}>
            <div className="card shadow">
              <div className="card-body">
                <p>name: {data.name}</p>
                <p>price: {data.price}</p>
                <button
                  onClick={() =>
                    dispatch({ type: "AGREGAR", payload: data.id })
                  }
                  className="btn btn-primary"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CarritoNumber state={state} dispatch={dispatch} />
    </div>
  );
};

export default Carrito;
