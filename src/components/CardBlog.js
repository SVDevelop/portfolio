import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function CardBlog ({wrapper, isAll, articles}) {
    
    const quantity = (arr, flag) => flag ? arr : arr.slice(-3) 
    
    return (
        <div className={wrapper}>
            {
                quantity(articles, isAll).map((article, i) => (
                    <div key={i} className="card-post">
                        <Link className="card-post__img" to={article.link}>
                            <img src={article.img} alt="02.jpg" />
                        </Link>
                        <Link className="card-post__text" to={article.link}>{article.title}</Link>
                    </div>
                ))
            }
        </div>
    )
}