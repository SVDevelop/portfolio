import React from 'react';
import CardBlog from './CardBlog';
import Pagination from './Pagination';

export default function Blog ({showPage, articles}) {

    return (
        <main>
            <div className="container">
                <section className="page-blog">
                    <div className="page-blog__title">
                        <h2 className="section-title">Блог</h2>
                    </div>
                    <CardBlog wrapper={"page-blog__cards"} isAll={true} articles={articles}/>
                    <div className="page-blog__pagination">
                        <Pagination />
                    </div>
                </section>
            </div>
        </main>
    )
}