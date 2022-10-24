import React from "react";
import { useInvoice, useUpdateInvoice } from "../context/InvoiceContext";

const Toggle = ({ title, name, onClick }) => {
  const updateInvoice = useUpdateInvoice();
  return (
    <label
      htmlFor={name}
      className="inline-flex relative items-center mb-5 cursor-pointer"
    >
      <input
        type="checkbox"
        id={name}
        name={name}
        className="sr-only peer c"
        onClick={
          onClick ||
          (() =>
            updateInvoice((prevData) => ({
              ...prevData,
              [`${name}`]: {
                ...prevData[`${name}`],
                display: !prevData[`${name}`].display,
              },
            })))
        }
      />
      <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[6px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-lg font-medium text-gray-900 dark:text-gray-300">
        {title}
      </span>
    </label>
  );
};

export default Toggle;
