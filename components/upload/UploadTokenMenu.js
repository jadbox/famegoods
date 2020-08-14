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
      <div className="my-4 mr-12">
        <div className="">
          <Button onClick={addToken}>Add Token</Button>
          {tokenOptions.length > 1 && (
            <Button onClick={delToken}>Remove Token</Button>
          )}
        </div>
      </div>

      {tokenOptions.map((x) => (
        <FormControl variant="outlined" className="w-full mx-6">
          <OutlinedInput
            key={x}
            className="w-auto ml-4"
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
      <div className="mx-6 text-center w-full">
        <FormHelperText className="text-center w-auto">
          Must hold this amount of tokens to have access
        </FormHelperText>
      </div>
    </div>
  );
}
