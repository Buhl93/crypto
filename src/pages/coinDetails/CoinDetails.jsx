import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const CoinDetails = () => {
  const { id } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;
  const { data: coinDetail, error, isPending } = useFetch(url);

  useEffect(() => {
    console.log(coinDetail);
  }, [coinDetail]);

  return <div className="container">{coinDetail.id}</div>;
};

export default CoinDetails;
