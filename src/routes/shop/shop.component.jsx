import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";


const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories')
            dispatch(setCategories(categoriesArray));
        };
        getCategoriesMap();
    }, []);

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
