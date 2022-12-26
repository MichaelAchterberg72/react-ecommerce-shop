import styled from "styled-components";


const CartItem = ({ cartItem }) => {
    const { imageUrl, price, name, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`{${name}}`} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </CartItemContainer>
    );
};

const CartItemContainer = styled.div`
width: 100%;
display: flex;
height: 80px;
margin-bottom: 15px;

img {
    width:30%;
}
.item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 16px;

    .name {
        font-size: 16px;
    }
}
`

export default CartItem;