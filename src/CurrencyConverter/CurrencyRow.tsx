export default function CurrencyRow({ currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount }) {
    return (
        <div className="input-group">
            <input className="form-control form-control-lg w-75" type="number" value={amount} onChange={onChangeAmount} />
            <select className="form-select form-select-lg" value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
        </div >
    )
}