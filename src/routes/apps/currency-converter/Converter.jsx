import { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import CurrencyLine from "./components.jsx/CurrencyLine";
import AddCurrency from "./components.jsx/AddCurrency";
const Converter = () => {
  const [displayed, setDisplayed] = useState([
    "USD",
    "EUR",
    "GBP",
    "BYN",
    "PLN",
    "UAH",
  ]);
  const [value, setValue] = useState(1);
  const getEq = (rate) => {
    return value ? parseFloat((value * rate).toFixed(2)) : "";
  };
  const add = (currency) => {
    setDisplayed((displayed) => [...displayed, currency]);
  };
  const remove = (ind) => {
    const copy = [...displayed];
    copy.splice(ind, 1);
    setDisplayed(copy);
  };
  const key = "ELqhzKyNHRnKlhix52pAkcvcXKj55DFy";
  const params = "&base=USD&ISO4217";
  const url = "https://api.currencybeacon.com/v1/latest?api_key=";
  const {
    data: currenciesData,
    isLoading,
    error,
  } = useFetch(url + key + params);
  if (isLoading)
    return (
      <>
        <div className="display-3 text-center my-3">Currency Converter</div>
        <div className="display-6 text-center">Loading...</div>
      </>
    );
  return (
    <>
      <div className="display-3 text-center my-3">Currency Converter</div>
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-8">
            {displayed.map((currency, ind) => (
              <CurrencyLine
                currency={currency}
                value={getEq(currenciesData.rates[currency])}
                onChange={(event) => {
                  !isNaN(event.target.value) &&
                    setValue(
                      event.target.value / currenciesData.rates[currency]
                    );
                }}
                onClick={() => remove(ind)}
                key={currency}
              />
            ))}
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <AddCurrency
              list={Object.keys(currenciesData.rates).filter(
                (currency) => !displayed.includes(currency)
              )}
              onClick={add}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Converter;
