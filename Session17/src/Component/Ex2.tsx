import  { useState } from 'react'

interface Product {
    id:string,
    name:string,
    price:number,
    quantity:string,
}

export default function Ex2() {
    const [Product]=useState<Product>({
        id:"01",
        name:"Iphone 15 ",
        price:1000000,
        quantity:"5"
    })
  return (
    <div>
        <h2>Thông tin sản phẩm</h2>
        <p>id:{Product.id}</p>
        <p>Name:{Product.name}</p>
        <p>Price:{Product.price}</p>
        <p>Quantity : {Product.quantity}</p>
    </div>
  )
}

