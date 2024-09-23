import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

export default function Products() {
    const dispatch = useDispatch(); // Moved to the top

    const { data, isLoading, error } = useQuery({
        queryKey: ['productdata'],
        queryFn: async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            return response.json();
        },
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000
    });

    // Handle loading and error states
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h5>{error.message}</h5>;

    const AddProduct = (product) => {
        dispatch(add(product));
    };

    return (
        <div className="productsWrapper">
            {data.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className="btn" onClick={() => AddProduct(product)}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
}
