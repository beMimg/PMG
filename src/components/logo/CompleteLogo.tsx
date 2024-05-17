import React from "react";

const CompleteLogo = () => {
  const style = "logo-background-color h-[40px] w-[40px]";
  return (
    <div className="grid grid-rows-3 gap-2">
      <div className="flex flex-row gap-2">
        <div id="1" className={style}></div>
        <div
          id="2"
          className={`${style} -translate-y-[120%] translate-x-[120%] rotate-[30deg]`}
        ></div>
        <div
          id="3"
          className={`${style} -translate-y-[180%] translate-x-[180%]`}
        ></div>
      </div>
      <div className="flex flex-row gap-2">
        <div id="4" className={style}></div>
        <div id="5" className={style}></div>
        <div
          id="6"
          className={`${style} -translate-y-[90%] translate-x-[90%] -rotate-[30deg]`}
        ></div>
      </div>
      <div className="flex flex-row gap-2">
        <div id="7" className={style}></div>
        <div id="8" className={style}></div>
        <div id="9" className={style}></div>
      </div>
    </div>
  );
};

export default CompleteLogo;
