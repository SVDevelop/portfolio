import React from 'react';
import { Link } from 'react-router-dom';

export default function ShopCards () {
    const cards = [
        {productLink: "air-13.html", img: "01.jpg", productTitle: "Apple iMac 27 Вторая линия названия", price: "95 000" },
        {productLink: "air-13.html", img: "02.jpg", productTitle: "Apple MacBook Air 13", price: "110 000" },
        {productLink: "air-13.html", img: "03.jpg", productTitle: "Apple Mac Pro", price: "190 000" },
        {productLink: "air-13.html", img: "04.jpg", productTitle: "Apple Mac Pro", price: "150 000" },
        {productLink: "air-13.html", img: "05.jpg", productTitle: "Apple iPhone X 256 ГБ «серый...", price: "49 000" }
    ]
    return (
        <div className="shop-cards">
            {cards.map((card, i) => (
                <Link key={i} className="card-product" to={card.productLink}>
                    <div className="card-product__img"><img src={`/img/cards/card-product/${card.img}`} alt="" /></div>
                    <div className="card-product__title">{card.productTitle}</div>
                    <div className="card-product-row">
                        <div className="card-product__price"> <span>{card.price} руб.</span></div>
                        <div className="card-product__button">
                            <div className="watch-button">Смотреть</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}