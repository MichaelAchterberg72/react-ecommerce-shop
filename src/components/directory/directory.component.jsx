
import styled from "styled-components"
import CategoryItem from "../category-item/category-item.component"


const Directory = ({ categories }) => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    );
};

const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default Directory;