import { Link } from "react-router-dom";
import Products from "../Components/Product";

export default function Home(){
    return(
        <div>
            <h2 className="heading">Welcome to the RTK Store</h2>
            <section>
                <Products></Products>
            </section>
        </div>
    )
}