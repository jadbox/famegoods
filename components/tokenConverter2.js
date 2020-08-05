import React from "react";
import data from "../data/Data";
import SelectCurrency from "../components/SelectCurrency";
import Slider from "@material-ui/core/Slider";

const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 25,
    label: "25",
  },
  {
    value: 50,
    label: "50",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.value = 1;
    this.state = {
      currencies: data.currencies,
      currencyA: data.currencies[0],
      currencyB: data.fiat[0],
      currencyAval: data.currencies[0].sellRate,
      currencyBval: data.fiat[0].sellRate,
    };

    this.onSelectCurrency = this.onSelectCurrency.bind(this);
  }

  onSelectCurrency(code) {
    //console.log('selecting currency: '+code);
    const { currencies, currencyAval } = this.state;
    const currency = currencies.filter((currency) => currency.code === code);
    this.setState({
      currencyB: fiat[0], // this is an array with one item
      currencyBval: currencyAval * fiat[0].sellRate,
    });
  }

  onChangeHandler(e, newValue, currency) {
    this.value = newValue;
    console.log("e", e);
    const { currencyA, currencyB } = this.state;

    if (currency === "A") {
      const newValueA = newValue;
      this.setState({
        currencyAval: newValueA,
        currencyBval: newValueA * currencyB.sellRate,
      });
    } else if (currency === "B") {
      const newValueB = newValue;
      this.setState({
        currencyAval: newValueB / currencyB.sellRate,
        currencyBval: newValueB,
      });
    }
  }

  render() {
    const {
      currencies,
      currencyA,
      currencyB,
      currencyAval,
      currencyBval,
    } = this.state;
    return (
      <div>
        <div>
          <div className="flex justify-center mb-4">
            <SelectCurrency
              currencies={currencies}
              onSelectCurrency={this.onSelectCurrency}
            />
          </div>

          <br />
          <Slider
            className="w-full"
            defaultValue={1}
            aria-labelledby="discrete-slider-restrict"
            step={null}
            max={50}
            valueLabelDisplay="auto"
            marks={marks}
            onChange={(e, newValue) => {
              this.onChangeHandler(e, newValue, "A");
            }}
          />

          <div className="flex justify-left mb-4">
            <input
              className="w-30 form-control form-control-lg mx-3 my-1 bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 border-2 border-gray-400 rounded shadow m-1"
              type="number"
              value={currencyBval}
              aria-describedby="basic-addon3"
              step="1"
              pattern="\d\.\d{2}"
              onChange={(e) => {
                this.onChangeHandler(e, "B");
              }}
            />

            <div
              style={{
                lineHeight: "2.5em",
                fontSize: "1.2em",
                height: "2.5em",
              }}
            >
              USD
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <p>
              Exchange Rate {` ${currencyA.sellRate} ${currencyA.code}`} ={" "}
              {`${currencyB.sellRate} ${currencyB.code}`}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
/*

<button className="w-30 justify-center my-1 bg-white hover:bg-gray-400 text-black font-semibold py-2 px-4 border-2 border-gray-400 rounded shadow m-1">
              USD
            </button>

            <input
              className="w-30 form-control form-control-lg mx-3 my-1 bg-white hover:bg-gray-100 text-black font-semibold w-1/6 py-2 px-4 border-2 border-gray-400 rounded shadow m-1"
              type="number"
              value={currencyAval}
              aria-describedby="basic-addon2"
              step="1"
              pattern="\d\.\d{2}"
              onChange={(e) => {
                this.onChangeHandler(e, "A");
              }}
            />
*/

export default App;
