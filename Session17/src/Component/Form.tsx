import React, { useState } from "react";

export default function Form() {
  const [input, setInput] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value); // lấy giá trị nhập vào
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        placeholder="Nhập nội dung"
      />
      <p>{input}</p>
    </div>
  );
}
