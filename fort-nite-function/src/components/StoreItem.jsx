import React from "react";

import { v4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
const StoreItem = ({ name, id, full_background, price, addGood }) => {
  return (
    <div className="storeItem">
      <div className="card">
        <div className="card-image ">
          <img src={full_background} />
        </div>
        <div className="card-content ">
          <p className="pcolor">{price}$</p>
        </div>
        <div className="card-action">
          <button
            className="waves-effect waves-light btn green"
            onClick={() => {
              const good = {
                id,
                name,
                price,
                quantity: 1,
              };
              addGood(good);
              toast.success(good.name);
            }}
          >
            Buy
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
