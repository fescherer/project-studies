import { checkSelectedProduct } from "./helper";
import ProductCard from "./ProductCard";
import { Product } from "./typess";


type Props = {
    products : Product[];
    onSelectedProduct: (product : Product) => void;
    selectedProducts : Product[]
}

function ProductsList({products, onSelectedProduct, selectedProducts} : Props){
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (<
                    ProductCard key={product.id} 
                    product={product} 
                    onSelectedProduct={onSelectedProduct}
                    isSelected = {checkSelectedProduct(selectedProducts, product)}
                    />))}
                
            </div>
        </div>
    )
}

export default ProductsList;