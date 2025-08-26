import { useState } from 'react'

export default function Demo() {

    const [email, setEmail] = useState("Cat@gmail.com");

  return (
    <div>
        <h2>Email:{email}</h2>
    </div>
    
  )
}
