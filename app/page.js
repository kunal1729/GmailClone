'use client'
import Header from "./components/Header.js";
import Body from "./components/Body.js"
import { useState } from "react";

export default function Home() {

  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-[#f6f8fc] h-full">
      <Header setMenu = {setMenu} />
      <Body menu = {menu} />
      
    </div>
  );
}
