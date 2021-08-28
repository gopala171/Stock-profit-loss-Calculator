import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [initialPrice, setInitialPrice] = useState("");
  var [stockQty, setStockQty] = useState("");
  var [currentPrice, setCurrentPrice] = useState("");
  var [output, setOutput] = useState("");

  function initialPriceHandler(event) {
    setInitialPrice(Number(event.target.value));
  }
  function stockQtyHandler(event) {
    setStockQty(Number(event.target.value));
  }
  function currentPriceHandler(event) {
    setCurrentPrice(Number(event.target.value));
  }

  function clickHandler() {
    if (currentPrice >= 0 && initialPrice >= 0 && stockQty > 0) {
      if (initialPrice < currentPrice) {
        var profit = currentPrice - initialPrice;
        var totalProfit = profit * stockQty;
        var profitPercent = (profit / initialPrice) * 100;
        profitPercent = Number.parseFloat(profitPercent).toFixed(2);
        setOutput(
          `Hurray, the profit is ${totalProfit} and the profit percent is ${profitPercent}% 🤑`
        );
      } else if (initialPrice > currentPrice) {
        var loss = initialPrice - currentPrice;
        var totalLoss = loss * stockQty;
        var lossPercent = (loss / initialPrice) * 100;
        lossPercent = Number.parseFloat(lossPercent).toFixed(2);
        setOutput(
          `Oops, the Loss is ${totalLoss} and the loss percent is ${lossPercent}% 🙁`
        );
      } else {
        setOutput(`No pain no gain, no gain no pain 😉`);
      }
    } else {
      setOutput("please enter valid data");
    }
  }
  return (
    <div className="App">
      <h1> Stock Profit & Loss Calculator </h1>
      <label>
        Initial price
        <input
          type="number"
          onChange={initialPriceHandler}
          required
          minLength="1"
        ></input>
      </label>
      <label>
        Quantity of Stocks
        <input
          type="number"
          onChange={stockQtyHandler}
          required
          minLength="1"
        ></input>
      </label>
      <label>
        Current price
        <input
          type="number"
          onChange={currentPriceHandler}
          required
          minLength="1"
        ></input>
      </label>
      <button onClick={clickHandler}>Check</button>
      <div id="output">{output}</div>
    </div>
  );
}
