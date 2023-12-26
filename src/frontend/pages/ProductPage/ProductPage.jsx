import styles from "./ProductPage.module.css";
import star from "../../img/star.png";
import heart from "../../img/heart.svg";

const ProductPage = () => {

    const product = {id: 1, name: "blush ultra", price: 500, rating: 5, img: 'https://static.beautytocare.com/media/catalog/product/s/e/sensilis-velvet-blush-01-romantic-prune-10g.jpg'}
    const description = [{id: 1, title: 'Цвет', description: 'Чёрный' },
    {id: 1, title: 'Объём/вес', description: '225 г' }

]

    return (
    <div className={styles.product_page}>
        <h2 className={styles.product_page_title}>{product.name}</h2>

        <hr></hr>

        <div className={styles.product_page_main}>
            <div className={styles.product_page_img_block}>
                <img src={product.img} alt={product.name}/> 
            </div>

            <div className={styles.product_page_description_block}>
                <div className={styles.product_page_rating}>
                    <img src={star} alt='star'/>
                    <img src={star} alt='star'/>
                    <img src={star} alt='star'/>
                    <img src={star} alt='star'/>
                    <img src={star} alt='star'/>

                    {product.rating}

                    </div>
                <div className={styles.product_page_description}>
                   
                    <ul>
                        <li>Тип продукта<span>Румяна</span></li>
                        <li>Бренд<span>Essence</span></li>
                        {description.map((info) => {
                            return <li>{info.title}<span>{info.description}</span></li>
                        })}
                    </ul>
                    
                </div>
            </div>

            <div className={styles.product_page_price_block}>
                <div className={styles.product_page_price_block_price}>{product.price}₽</div>
                
                <div className={styles.product_page_price_block_basket}>
                    <div><button className={styles.product_page_price_block_basket_button}>В корзину</button></div>
                    <div className={styles.product_page_price_block_favorites}><img className={styles.product_page_price_block_favorites_img} src={heart} alt="heart"/><a>В избранное</a></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProductPage;