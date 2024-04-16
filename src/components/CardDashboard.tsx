import React, { ReactNode } from "react";

interface CardDashboardProps {
  item: {
    icon: ReactNode;
    title: string;
    count: string | number;
  };
}

function CardDashboard({ item: { icon, title, count } }: CardDashboardProps) {
  return (
    <div className='flex flex-grow flex-shrink-0 justify-start gap-4 bg-white py-8 px-6 rounded-lg shadow-sm shadow-zinc-200'>
      <div className='bg-lightblueColor rounded-lg text-blueColor text-3xl p-[15px]'>
        {icon}
      </div>
      <div className='flex flex-col gap-1 justify-center'>
        <div>
          <strong>{count}</strong>
        </div>
        <div className='text-sm text-Secondary'>{title}</div>
      </div>
    </div>
  );
}

export default CardDashboard;
