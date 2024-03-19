import React, { ReactNode } from "react";

type FormField = {
  error: any;
  children: ReactNode;
  errorMessage: string | undefined;
};

export function Field({ error, errorMessage, children }: FormField) {
  return (
    <div className='flex flex-col w-full'>
      {children}
      {error && <span className='error'>{errorMessage}</span>}
    </div>
  );
}
