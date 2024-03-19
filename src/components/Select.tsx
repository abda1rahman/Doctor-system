import React from "react";

type SelectOptions = {
  value: string;
  lable: string;
};

type SelectProps = React.ComponentPropsWithRef<"select"> & {
  options: SelectOptions[];
} 

// const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
//   ({ options, register, className, ...rest }, forwardedRef) => {
//     return (

// function Select({ options, className, ...rest }, forwardRef: SelectProps) {
//   return (

    const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
      ({ options, className, ...rest }, forwardedRef) => {
        return (
    <select {...rest} ref={forwardedRef} className={className}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.lable}
        </option>
      ))}
    </select>
    );
  }
);

export default Select;
