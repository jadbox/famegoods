import React, { useState, useEffect } from "react";
// import data from "../data/Data";
import SelectCurrency from "./SelectCurrency";
import Slider from "@material-ui/core/Slider";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";

export default function App({ tokens, onChange }) {
  const [tokenOptions, setTokenOptions] = useState([1]);

  const [state, setState] = useState({});

  tokens = tokens || [];

  useEffect(
    (x) => {
      onChange(state);
    },
    [state]
  );

  const data = {
    currencies: tokens.map((t) => ({
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

  function onSelectCurrency(idx, x, val) {
    // console.log("x", idx, x, val);
    const y = { ...state };

    y[idx] = y[idx] || {};

    if (x) {
      y[idx] = { ...y[idx], name: x, amount: 1 || y[idx].amount };
    }

    if (val) {
      val = parseFloat(val);
      y[idx] = { ...y[idx], amount: val };
    }

    setState(y);
  }

  function addToken() {
    setTokenOptions((x) => {
      const y = [...x, x.length + 1];
      return y;
    });
  }

  function delToken() {
    setTokenOptions((x) => {
      const y = [...x];
      y.pop();
      return y;
    });
  }

  // console.log("state", state);

  return (
    <div className="w-screen">
      <div className="ml-2 w-full text-xs text-gray-500">
        <p>
          Users must hold this amount of tokens to have access
        </p>
      </div>
      <div className="my-4 mr-12">
        <div>
          <button className="bg-gray-100 tracking-wide uppercase text-sm font-bold p-2 border-2 border-solid rounded-sm mr-2" onClick={addToken}>Add Token</button>
          {tokenOptions.length > 1 && (
            <button className="bg-gray-100 tracking-wide uppercase  text-sm font-bold p-2 border-2 border-solid rounded-sm" onClick={delToken}>Remove Token</button>
          )}
        </div>
      </div>

      {tokenOptions.map((x) => (
        <FormControl key={x} variant="outlined" className="w-full mx-6">
          <OutlinedInput
            className="w-auto mb-2"
            id="outlined-adornment-weight"
            // value={1}
            defaultValue={1}
            onChange={(e, newValue) =>
              onSelectCurrency(x, null, e.target.value)
            }
            endAdornment={
              <InputAdornment position="end">
                <SelectCurrency
                  currencies={data.currencies}
                  onSelectCurrency={(d) => onSelectCurrency(x, d)}
                />
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            labelWidth={0}
          />
        </FormControl>
      ))}
    </div>
  );
}