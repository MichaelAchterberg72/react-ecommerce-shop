import { useContext } from "react";
import styled from "styled-components";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";


const Shop = () => {
    const {products} = useContext(ProductsContext);

    return (
        <ProductsContainer>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ProductsContainer>
    )
};

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap:10px;
    row-gap: 50px;
`

export default Shop;
