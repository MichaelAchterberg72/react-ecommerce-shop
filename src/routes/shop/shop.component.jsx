import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";


const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
};

const ShopContainer = styled.div`

`

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap:10px;
    row-gap: 50px;
`

export default Shop;
