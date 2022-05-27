import React from "react";
import { Link } from "react-router-dom";
import "./CoinItem.css";

const CoinItem = ({ coin }) => {
  const {
    name,
    current_price: price,
    symbol,
    image,
    market_cap_rank: rank,
    price_change_percentage_24h: priceChangePerc24h,
    id,
  } = coin;
  console.log(coin);

  return (
    <Link to={`/coin/${id}`}>
      <div className="coinItem">
        <div className="coinItem__info">
          <p className="coinItem__info-rank">{rank}</p>

          <div className="coinItem__info-image">
            <img src={image} alt="alt" />
          </div>

          <p className="coinItem__info-name">{name}</p>

          <p className="coinItem__info-symbol">{symbol.toUpperCase()}</p>
        </div>
        <div className="coinItem__eco">
          <p className="coinItem__eco-price">{price} usd</p>
          <p className="coinItem__eco-24h"
            style={{ color: priceChangePerc24h > 0 ? "green" : "red" }}
          >{`${Math.round(priceChangePerc24h * 10) / 10} %`}</p>
        </div>
      </div>
    </Link>
  );
};

export default CoinItem;
