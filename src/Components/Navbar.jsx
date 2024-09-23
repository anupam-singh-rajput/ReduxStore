import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar(){

    const items = useSelector((state)=>state.cart)

    return(
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to='/'>Home</Link>
                <Link className="navLink" to='/cart'>Cart</Link>
            </div>
            <span className="cartCount">Cart items: {items.length}</span>
        </div>
    )
}