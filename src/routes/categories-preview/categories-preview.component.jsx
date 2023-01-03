import { useSelector } from "react-redux";
import styled from "styled-components";

import CategoryPreview from "../../components/category-preview/category-preview.components";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";


const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <CategoryPreviewContainer>
            { isLoading ? (
                <Spinner />
                ) : (
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                }
                )
            )}
        </CategoryPreviewContainer>
        
    )
};

const CategoryPreviewContainer = styled.div`

`

export default CategoriesPreview;
