import React from "react";

export default function Card({
  title,
  price,
  description,
}) {
  return (
    <div className="top-[149px] left-[269px] rounded-xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[439px] h-[248px] overflow-hidden border-[1px] border-solid border-gray">
    <b className="top-[36px] left-[39px]">{title}</b>
    <b className="top-[33px] left-[310px] text-13xl">${price}</b>
    <div className="top-[81px] left-[39px] inline-block w-[331px]">
        {description}
    </div>
    <div className="top-[189px] left-[229px] [text-decoration:underline] text-royalblue">
        More Details
    </div>
    </div>
  );
}
