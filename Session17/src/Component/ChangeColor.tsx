import  { useState } from 'react'

export default function ChangeColor() {
    const [Color,setColor]=useState<string>("black");

    const changeColor=()=>{
        setColor(Color==="black"?"red":"black");
    }
  return (
    <div>
        <h2 style={{color:Color}}>Tiêu đề văn bản</h2>
        <button onClick={changeColor}>Thay đổi màu</button>
    </div>
  )
}


