import { useState } from "react";

export default function Checkbox() {
  const [Interest, setInterest] = useState<string[]>([]);

  const option: string[] = [
    "Đi chơi",
    "Code",
    "Bơi lội",
    "Nhảy dây"
    ];

  const handleInterest = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setInterest([...Interest, value]);
    } else {
      setInterest(Interest.filter((hobby) => hobby !== value));
    }
  };

  return (
    <div >
      <h3>Sở thích: [{Interest.join(", ")}]</h3>

      {option.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={option}
            checked={Interest.includes(option)}
            onChange={handleInterest}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
}
