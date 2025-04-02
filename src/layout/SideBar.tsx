import React from "react";
import { Link } from "wouter";

const SideBar = () => {
  return (
    <div
      className="sticky top-[60px] flex flex-col h-[calc(100vh_-_60px)] min-w-[264px] overflow-y-auto px-2 py-3"
      // style={{
      //   height: "calc(100vh - 60px)",
      // }}
    >
      <Link
        href={"/debounce"}
        className={`w-full cursor-pointer rounded-md border px-2 py-1 transition-all`}
      >
        Buscadores
      </Link>
    </div>
  );
};

export default SideBar;
