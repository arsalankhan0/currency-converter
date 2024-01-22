import {useId} from "react"
import PropTypes from "prop-types";
const InputBox = ({ 
  label, 
  amount, 
  onAmountChange, 
  selectedCurrency = "usd",
  onCurrencyChange, 
  currencyOptions = [], 
  amountDisable = false, 
  currencyDisable = false, 
}) => {

  const amountInputId = useId()
  return (
    <div className={`bg-light p-3 rounded d-flex`}>
      <div className="w-50">
        <label htmlFor={amountInputId} className="text-dark mb-2 d-inline">
          {label}
        </label>
        <input 
          id={amountInputId}
          type="number" 
          className="w-100 border-0 bg-transparent py-1" 
          placeholder="Amount" 
          disabled={amountDisable} 
          value={amount} 
          onChange={(e) => onAmountChange && 
                onAmountChange(Number(e.target.value))}/>
      </div>
      <div className="w-100 d-flex flex-wrap justify-content-end text-end">
        <p className="text-dark mb-2 w-100">Currency Type</p>
        <select 
          className="rounded px-1 py-1 
          bg-light"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
          
        </select>
      </div>

    </div>
  )
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func,
  selectedCurrency: PropTypes.string,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.array,
  amountDisable: PropTypes.bool,
  currencyDisable: PropTypes.bool,
};

export default InputBox;

