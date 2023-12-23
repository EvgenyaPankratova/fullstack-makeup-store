import styles from "./ProductItem.module.css";
import { useContext } from "react";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";

const ProductItem = observer(({current_product}) => {

    const {product} = useContext(Context);

    return (
    <div className={styles.productitem}>


<div className={styles.card}>

  <div className={styles.card_top}>
  
     
      <img
      className={styles.card_image}
        src="https://a5d14dbc-1d15-4922-a8f8-9646507cb223.selcdn.net/assets/images/products/586/item/blush-rose2.jpg?v=1"
        alt="Apple IPhone 14 PRO Max Gold"
      />
    
  
    <div className="card_label">-10%</div>
  </div>

  <div className={styles.card_bottom}>

    <div className={styles.card_price_block}>
      <div className={styles.card_price}>{current_product.price}</div>
      <div className={styles.card_rating}>{current_product.rating}<img className={styles.card_rating_star} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Orange_star.svg/1200px-Orange_star.svg.png"></img></div>
    </div>

    <div className={styles.card_type}>
    Румяна</div>

    <div className={styles.card_brand}>
    Essence</div>

    <div className={styles.card_title}>
    {current_product.name}</div>

    <button className={styles.card_add}>В корзину</button>
  </div>
</div>
        
        
    </div>
    )
})

export default ProductItem;