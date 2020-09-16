import React, { useEffect } from "react";

const SelectCurrency = ({ tokens, onSelectCurrency }) => {

  if (tokens == []) return null;

  return (
    <select
      className="justify-center my-1 bg-white hover:bg-gray-400 text-black font-semibold w-30 py-2 px-4 border-2 border-gray-400 rounded shadow m-1"
      onChange={(e) => onSelectCurrency(e.target.value)}
    >
      {tokens.map((t) => {
        return (
          <option key={t} value={t}>
            {t}
          </option>
        );
      })}
    </select>
  );
};

export default SelectCurrency;
