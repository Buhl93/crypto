import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useFetch } from "../../hooks/useFetch";

// components
import CoinItem from "../coinItem/CoinItem";
import SearchBar from "../searchBar/SearchBar";

import "./CoinList.css";

const CoinList = () => {
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const listCategories = ["Coin", "Name", "Price"];
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false";
  const { data: coins, error, isPending } = useFetch(url);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageNumberReturn, setPageNumberReturn] = useState(0);
  const coinsPerPage = 6;
  const coinsViewed = pageNumber * coinsPerPage;
  const [displayCoins, setDisplayCoins] = useState(
    filteredCoins.slice(coinsViewed, coinsViewed + coinsPerPage)
  );
  // const displayCoins = filteredCoins.slice(coinsViewed, coinsViewed + coinsPerPage)

  const pageCount = Math.ceil(filteredCoins.length / coinsPerPage);

  useEffect(() => {
    if (searchWord && pageNumber > 0) {
      setPageNumberReturn(pageNumber);
    }
    if (searchWord) {
      setFilteredCoins(
        coins.filter((coin) => {
          return coin.name.toLowerCase().includes(searchWord.toLowerCase());
        })
      );
      setPageNumber(0);
    } else {
      setFilteredCoins(coins);
      setPageNumber(pageNumberReturn);
    }
  }, [searchWord, coins]);

  useEffect(() => {
    setDisplayCoins(
      filteredCoins.slice(coinsViewed, coinsViewed + coinsPerPage)
    );
  }, [filteredCoins, pageNumber]);

  const handleSearchWord = (searchWord) => {
    setSearchWord(searchWord);
  };

  const onPageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container">
      <div className="coinList">
        <div className="coinList__listHolder">
          <div className="coinList__listHolder__searchBarHolder">
            <SearchBar handleSearchWord={handleSearchWord} />
          </div>
          <div className="coinList__listHolder__categories">
            {listCategories.map((category) => {
              return <p key={category}>{category}</p>;
            })}
          </div>
          <div className="coinList__listHolder__list">
            {isPending && <div>Loading crypto...</div>}

            {error && <div>Something went wrong</div>}

            {displayCoins &&
              displayCoins.map((coin) => {
                return <CoinItem key={coin.id} coin={coin} />;
              })}

            {displayCoins.length === 0 && (
              <div>Nothing matched your search...</div>
            )}
          </div>
        </div>
      </div>
      <div className="coinList__paginationHolder">
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          pageCount={pageCount}
          onPageChange={onPageChange}
          containerClassName="paginationButtons"
        />
      </div>
    </div>
  );
};

export default CoinList;
