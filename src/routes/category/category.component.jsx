import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";


const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <TitleContainer>
                <h2 className="title">{category.toUpperCase()}</h2>
            </TitleContainer>
            { isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                {
                    products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
            )}
            
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