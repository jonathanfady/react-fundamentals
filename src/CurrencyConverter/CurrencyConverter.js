import { useState, useEffect } from "react";
import CurrencyRow from './CurrencyRow'

export default function CurrencyConverter() {
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [exchangeRate, setExchangeRate] = useState(1);
    const [amount, setAmount] = useState(1);
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

    let toAmount, fromAmount;

    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        fromAmount = amount / exchangeRate
        toAmount = amount
    }

    useEffect(() => {
        fetch("https://v6.exchangerate-api.com/v6/05bbce546692e912e30989bd/latest/EUR")
            .then(res => res.json())
            .then(obj => {
                setCurrencyOptions([obj.base_code, ...Object.keys(obj.conversion_rates)].filter((item, pos, self) => {
                    return self.indexOf(item) === pos;
                }))
                setFromCurrency(Object.keys(obj.conversion_rates)[0])
                setToCurrency(Object.keys(obj.conversion_rates)[1])
                setExchangeRate(obj.conversion_rates[Object.keys(obj.conversion_rates)[1]])
            })
    }, [])

    useEffect(() => {
        if (!fromCurrency || !toCurrency) return;

        fetch(`https://v6.exchangerate-api.com/v6/05bbce546692e912e30989bd/pair/${fromCurrency}/${toCurrency}`)
            .then(res => res.json())
            .then(obj => {
                setExchangeRate(obj.conversion_rate)
            })
    }, [fromCurrency, toCurrency])

    return (
        <>
            <h5>Currency Converter from <a href="https://www.exchangerate-api.com/" target="_blank" rel="noreferrer">https://www.exchangerate-api.com/</a></h5>
            <div className="position-relative">
                <div className="position-absolute start-50 translate-middle-x w-50">
                    <CurrencyRow
                        currencyOptions={currencyOptions}
                        selectedCurrency={fromCurrency}
                        onChangeCurrency={e => setFromCurrency(e.target.value)}
                        amount={fromAmount}
                        onChangeAmount={e => { setAmount(e.target.value); setAmountInFromCurrency(true) }} />
                    <h3 className="text-center">=</h3>
                    <CurrencyRow
                        currencyOptions={currencyOptions}
                        selectedCurrency={toCurrency}
                        onChangeCurrency={e => setToCurrency(e.target.value)}
                        amount={toAmount}
                        onChangeAmount={e => { setAmount(e.target.value); setAmountInFromCurrency(false) }} />

                </div>
            </div>
        </>
    )
}