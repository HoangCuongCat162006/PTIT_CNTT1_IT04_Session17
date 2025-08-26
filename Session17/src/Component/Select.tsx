import {useState} from 'react'


export default function Select() {
    const [City,setCity]=useState<string>("");
    const citys:string[]=[
        "Hà Nội",
        "Hà Nam",
        "Ninh Bình",
        "Thanh Hóa",
        "Nghện An"
    ];
    const handeCity=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setCity(e.target.value)
    }
  return (
    <div style={{ padding: "20px" }}>
      <h3>Thành phố:</h3>
      <select value={City} onChange={handeCity}>
        <option>-- Chọn thành phố --</option>
        {citys.map((c, index) => (
          <option key={index} value={c}>
            {c}
          </option>
        ))}
      </select>

      {City && <p>Thành phố đã chọn {City}</p>}
    </div>
  )
}
