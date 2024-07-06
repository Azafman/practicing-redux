import { useState } from 'react';
import { Cart } from '../cart/Cart';
import * as Styles from './style';
import { useSelector } from 'react-redux';
import { selectProductsCount } from '../../redux/cart/cart.selectors';
import { RootReducerType } from '../../redux/rootReducer';
export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const productsCount = useSelector((rootReducer:RootReducerType) => selectProductsCount(rootReducer.cartSlice));

  const handleCartClick = () => {
    setIsVisible(true);
  }
  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>

      <Styles.Buttons>
        <div>Login</div>
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={isVisible} setIsVisible={setIsVisible}/>
    </Styles.Container>
  )
}
