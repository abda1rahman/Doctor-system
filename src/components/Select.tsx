import React from "react";

type SelectOptions = {
  value: string;
  lable: string;
};

type SelectProps = React.ComponentPropsWithRef<"select"> & {
  options: SelectOptions[];
  error: any;
  errorMessage: string | undefined;
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, className, error, errorMessage, ...rest }, forwardedRef) => {
    console.log(error);
    return (
      <div className='col-span-2 md:col-span-1'>
        <select {...rest} className={className}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.lable}
            </option>
          ))}
        </select>
        {error && <span className='error'>{errorMessage}</span>}
      </div>
    );
  }
);

export default Select;
