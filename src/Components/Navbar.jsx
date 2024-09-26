import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Navbar(){

    const items = useSelector((state)=>state.cart)
    const [totalAmount,setTotalAmount] = useState(0);

    let total=0;
    useEffect(()=>{
        items.forEach((item)=>{
            total+=item.price;
        })
        setTotalAmount(parseInt(total));
    })

    console.log(totalAmount);

    
    return(
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to='/'>Home</Link>
                <Link className="navLink" to='/cart'>Cart</Link>
            </div>
            <div>
                <span className="cartCount">Cart items: {items.length}</span>
                <span className="cartCount">Total Price: {totalAmount}</span>
            </div>
        </div>
    )
}