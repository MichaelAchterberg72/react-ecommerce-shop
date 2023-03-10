import { useState, useContext, useEffect, Fragment } from "react";

import styled from "styled-components";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";


const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <TitleContainer>
                <h2 className="title">{category.toUpperCase()}</h2>
            </TitleContainer>
            <CategoryContainer>
                {
                    products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        </Fragment>
        
    )
};

const TitleContainer = styled.div`
.title {
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
}
`

const CategoryContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
row-gap: 50px;
`

export default Category;