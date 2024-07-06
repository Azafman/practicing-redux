import * as Styles from "./style";

interface CartProps {
    isVisible: boolean,
    setIsVisible: (isVisible: boolean) => void;
}
export const Cart = ({isVisible, setIsVisible}: CartProps) => {
  const handleEscapeArea = () => setIsVisible(false);

  return (
    <Styles.CartContainer isVisible={isVisible}>
        <Styles.CartEscapeArea onClick={handleEscapeArea}/>
        
        <Styles.CartContent>
            <Styles.CartTitle>Seu carrinho</Styles.CartTitle>

            <Styles.CartTotal></Styles.CartTotal>
        </Styles.CartContent>
    </Styles.CartContainer>
  );
}
