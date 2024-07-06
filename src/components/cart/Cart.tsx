import { useSelector } from "react-redux";
import { CartItem } from "../cart-item/CartItem";
import { Product } from "../../data/Products";
import * as Styles from "./style";
import { RootReducerType } from "../../redux/rootReducer";
import { selectProductTotalPrice } from "../../redux/cart/cart.selectors";

interface CartProps {
    isVisible: boolean,
    setIsVisible: (isVisible: boolean) => void;
}
export const Cart = ({isVisible, setIsVisible}: CartProps) => {
  const handleEscapeArea = () => setIsVisible(false);
  const totalPriceCart = useSelector((rootReducer:RootReducerType) => selectProductTotalPrice(rootReducer.cartSlice));
  const {products} = useSelector((rootReducer:RootReducerType) => rootReducer.cartSlice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
        <Styles.CartEscapeArea onClick={handleEscapeArea}/>
        
        <Styles.CartContent>
            <Styles.CartTitle>Seu carrinho</Styles.CartTitle>

            {products.map((product:Product) => <CartItem {...product}/>)}

            <Styles.CartTotal>R$ {totalPriceCart}</Styles.CartTotal>
        </Styles.CartContent>
    </Styles.CartContainer>
  );
}
