import React from "react";

type SelectOptions = {
  value: string;
  lable: string;

};

type SelectProps = React.ComponentPropsWithRef<"select"> & {
  options: SelectOptions[];
  error: any;
  errorMessage: string | undefined
}

    const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
      ({ options, className, error, errorMessage, ...rest }, forwardedRef) => {
        return (
          <>
    <select {...rest} className={className}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.lable}
        </option>
      ))}
    </select>
    {error && <span className='error'>{errorMessage}</span>}
      </>
    );
  }
);

export default Select;

