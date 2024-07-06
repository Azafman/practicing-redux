import {products} from '../../data/Products'
import {ProductItem} from '../product-item/ProductItem'
import * as Styles from './style'

export const Products = () => {
  return (
    <Styles.Container>
      {products.map(product => (
          <ProductItem {...product}/>
      ))}
    </Styles.Container>
  )
}
