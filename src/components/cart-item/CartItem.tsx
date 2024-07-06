import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Product } from '../../data/Products'
import * as Styles from './style'
import { useDispatch } from 'react-redux';
import { addProduct, decreaseProductQuantity, removeProduct } from '../../redux/cart/slice';

export const CartItem = (product: Product) => {
  const {name, price, quantity, imageUrl} = product;
  const dispatch = useDispatch();
  const handleClickIncreaseQuantity = () => {
    dispatch(addProduct(product));
  }
  const handleClickDecreaseQuantity = () => {
    dispatch(decreaseProductQuantity(product));
  }
  const handleClickRemoveItem = () => {
    dispatch(removeProduct(product));
  }
  return (
    <Styles.CartItemContainer>
        <Styles.CartItemImage imageUrl={imageUrl}/>

        <Styles.CartItemInfo>
            <p>{name}</p>
            <p>R${price}</p>

            <Styles.CartItemQuantity>
               <AiOutlineMinus 
               size={20}
               onClick={handleClickDecreaseQuantity}
               aria-label={`Descrease quantity of ${name}`}
               />
               <p>{quantity}</p>
               <AiOutlinePlus
               size={20}
               onClick={handleClickIncreaseQuantity}
               aria-label={`Increase quantity of ${name}`}/>
            </Styles.CartItemQuantity>
        </Styles.CartItemInfo>

        <Styles.RemoveButton
            onClick={handleClickRemoveItem}
            aria-label={`Remove ${name}`}>
                <AiOutlineClose size={25}/>
        </Styles.RemoveButton>
    </Styles.CartItemContainer>
  )
}
