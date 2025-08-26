import {useState} from 'react'

export default function CounText () {
    const [Count,setCount]=useState<string>("0")
    const handeCount=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setCount(e.target.value);
    }

    
  return (
    <div>
        <textarea name="" id="" onChange={handeCount} >

        </textarea>
        <p>Số ký tự : {Count}</p>
    </div>
  )
}
