import { Link } from "react-router-dom";
import styled from "styled-components";

import ProductCard from '../product-card/product-card.component';


const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Link className="title" to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) => 
                        <ProductCard key={product.id} product={product} />)
                }
            </div>
        </CategoryPreviewContainer>
    )
};

const CategoryPreviewContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;

.title {
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
}

.preview {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
}
`

export default CategoryPreview;