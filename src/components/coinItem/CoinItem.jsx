import React from "react";
import { Link } from "react-router-dom";
import "./CoinItem.css";

const CoinItem = ({ coin }) => {
  const { name, current_price: price, symbol, image, id } = coin;

  return (
    <Link to={`/coin/${id}`}>
      <div className="coinItem">
        <div className="coinItem__info">
          <p className="coinItem__info__symbol">{symbol.toUpperCase()}</p>

          <div className="imageHolder">
            <img src={image} alt="alt" />
          </div>

          <p>{name}</p>
        </div>

        <p>{price} usd</p>
      </div>
    </Link>
  );
};

export default CoinItem;
