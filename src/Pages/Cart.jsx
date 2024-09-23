import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

export default function Cart(){
    const products = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    const removeProduct = (productId) =>{
        dispatch(remove(productId))
    }
    return(
       <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h5>{product.title}</h5>
                    <h5>{product.price}</h5>
                    <button className="btn" onClick={()=>{removeProduct(product.id)}}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
       </div>
    )
}