import React from "react";
// import data from "../data/Data";
import SelectCurrency from "../components/SelectCurrency";
import Slider from "@material-ui/core/Slider";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

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

    console.log("this.tokens", this.tokens);

    this.tokens = props.tokens || [];

    this.data = {
      currencies: this.tokens.map((t) => ({
        code: t.token.symbol,
        sellRate: 1,
        decAmount: t.decAmount,
        name: t.token.symbol + " Token",
      })),
      fiat: [
        {
          code: "USD",
          sellRate: 0.7041,
          name: "United States Dollars",
        },
      ],
    };

    const data = this.data;
    console.log("data", data);

    this.onChange = props.onChange;
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
    if (this.onChange) this.onChange(this.value, code);
    return;
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
    if (this.onChange) this.onChange(newValue);

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
      <div className="w-screen">
        <FormControl variant="outlined" className="w-full mx-6">
          <OutlinedInput
            className="w-auto ml-4"
            id="outlined-adornment-weight"
            // value={1}
            defaultValue={1}
            onChange={(e, newValue) => {
              if (!e.target.value) {
                return;
              }
              const v = Number.parseFloat(e.target.value);
              if (isNaN(v)) {
                alert("Please use a number for the token field");
                return;
              }
              console.log("(e, newValue", v);
              this.onChangeHandler(e, v, "A");
            }}
            endAdornment={
              <InputAdornment position="end">Tokens</InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            labelWidth={0}
          />
          <FormHelperText
            className="text-center"
            id="outlined-weight-helper-text"
          >
            Must hold this amount of tokens to have access
          </FormHelperText>
        </FormControl>

        <div className="flex justify-center my-4 mr-12">
          <div className="flex justify-left">
            <SelectCurrency
              currencies={currencies}
              onSelectCurrency={this.onSelectCurrency}
            />
          </div>

          {false && (
            <div className="flex justify-center">
              <input
                className="w-32 form-control form-control-lg mx-3 my-1 bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 border-2 border-gray-400 rounded shadow m-1"
                type="number"
                value={currencyBval}
                aria-describedby="basic-addon3"
                step="1"
                pattern="\d\.\d{2}"
                onChange={(e) => {
                  this.onChangeHandler(e, "B");
                }}
              />

              <div className="mt-3 flexjustify-left">USD</div>
            </div>
          )}
        </div>

        <div>
          <div className="flex justify-center ml-2">
            <p className="text-xs">
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
        <Slider
          className="m-2 mx-6"
          defaultValue={5}
          aria-labelledby="discrete-slider-restrict"
          step={1}
          max={100}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={(e, newValue) => {
            this.onChangeHandler(e, newValue, "A");
          }}
        />
        
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
