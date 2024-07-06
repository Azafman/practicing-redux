
import { BsCartPlus } from "react-icons/bs";
import { CustomButton } from "../custom-buttom/CustomButton";
import { Product } from "../data/products";
import * as Styles from "./style";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cart/slice";

export const ProductItem = (product: Product) => {
  const {imageUrl, name, price} = product;
  const dispatch = useDispatch();
  const handleAddItemToCart = () => {
    dispatch(addProduct(product));
  }
  return (
    <Styles.ProductContainer>
        <Styles.ProductImage imageUrl={imageUrl}>
            <CustomButton startIcon={<BsCartPlus/>}
            onClick={handleAddItemToCart}>
              Adicionar ao carrinho
            </CustomButton>

        </Styles.ProductImage>


        <Styles.ProductInfo>
            <p>{name}</p>
            <p>R$ {price}</p>
        </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
}
