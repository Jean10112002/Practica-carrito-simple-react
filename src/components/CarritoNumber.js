import React from "react";
import { useEffect,useCallback} from "react";

const CarritoNumber = ({ state, dispatch }) => {
  let precio=0
  
  useEffect(()=>{
    verificarPrecio()
  },[state.cart])
  const verificarPrecio=()=>{
    state.cart?
    state.cart?.map(res=>{
      precio+=res.price*res.counter
      console.log(precio)
      dispatch({type:'PRICE',payload:precio})
    })
    :
    precio=0;
    dispatch({type:'PRICE',payload:precio})
  }
  
  console.log(state);
  return (
    <div>
      <hr />
      <h1>Cantidad de productos</h1>
      <div className="row g-4">
        {state.cart?.map((data, index) => (
          <div className="col-md-4 col-6" key={index}>
            <div className="card shadow">
              <div className="card-body">
                <p>name: {data.name}</p>
                <p>price: {data.price}</p>
                {state.cart[index].counter && (
                  <p> cantidad: {state.cart[index].counter} </p>
                )}
              </div>
              <div className="card-footer ">
                <button
                  onClick={() =>
                    dispatch({ type: "ELIMINAR_ONE", payload: data.id })
                  }
                  className="btn btn-primary mx-2"
                  disabled={state.cart[index].counter === 1 ? true : false}
                >
                  Delete One
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "ELIMINAR_TODO", payload: data.id })
                  }
                  className="btn btn-primary"
                >
                  Delete All
                </button>
              </div>
            </div>
          </div>
        ))}
        <h2>price: ${state.precioFinal} </h2>
        <button
          onClick={() => dispatch({ type: "LIMPIAR" })}
          className="btn btn-primary"
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default CarritoNumber;
