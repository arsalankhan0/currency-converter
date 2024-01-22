import { useState } from "react";
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo' 
const App = () => {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  // Custom Hook
  const currencyInfo = useCurrencyInfo(from)

  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    const conversionRate = currencyInfo ? currencyInfo[to] : 1;
    setConvertedAmount(amount * conversionRate);
  };

  return (
    <div
      className="w-100 d-flex flex-wrap justify-content-center align-items-center bg-dark"
      style={{height: '100vh'}}
    >
      <div className="container w-100">
        <h1 className="text-light text-center fw-light">Currency Converter</h1>
        <div className="w-100 border border-secondary rounded p-5">
          <form
            onSubmit={(e)  => {
              e.preventDefault();
              convert();
            }
            }
          >
            <div className="w-100 mb-1">
              <InputBox 
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                  setAmount(amount);
                }}
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="position-relative w-100" style={{height: "2px"}}>
              <button
                type="button"
                className="position-absolute start-50 translate-middle border-0 rounded bg-primary text-light px-2 py-5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-100 mt-1 mb-4">
              <InputBox 
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency)
                }}
                selectedCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit"
              className="w-100 bg-primary border-0 text-light px-4 py-3 rounded"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
