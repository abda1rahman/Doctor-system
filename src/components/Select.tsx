import React from "react";

type SelectOptions = {
  value: string;
  lable: string;
};

type SelectProps = React.ComponentPropsWithoutRef<"select"> & {
  options: SelectOptions[];
};

function Select({ options, className, ...rest }: SelectProps) {
  return (
    <select {...rest} className={className}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.lable}
        </option>
      ))}
    </select>
  );
}

export default Select;
