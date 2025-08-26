import  { useState } from "react";


export default function Increase() {
    const [name]=useState<string>("Hoàng Cương Cát");
  return (
    <div>
        <h2>{name}</h2>
    </div>
  )
}
