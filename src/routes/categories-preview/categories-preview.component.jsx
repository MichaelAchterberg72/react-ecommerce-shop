import { useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.components";


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <CategoryPreviewContainer>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                }
            )}
        </CategoryPreviewContainer>
        
    )
};

const CategoryPreviewContainer = styled.div`

`

export default CategoriesPreview;
