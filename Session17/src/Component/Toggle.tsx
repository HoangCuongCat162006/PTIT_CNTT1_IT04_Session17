import {useState} from 'react'

export default function Toggle() {
    const [On,setOn]=useState<boolean>(true);
    const handeToggle=()=>{
        setOn(!On);
    }
  return (
    <div>
      {On&& <h2>Tiêu đề</h2>}

      <button onClick={handeToggle}>
        {On ? "Ẩn tiêu đề" : "Hiện tiêu đề"}
      </button>
    </div>
  )
}
