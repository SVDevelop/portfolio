import React from 'react';
import Pagination from './Pagination'
import ShopCards from './ShopCards'

export default function Shop () {
    return (
        <main>
            <div className="container">
                <section className="shop">
                    <div className="text-center">
                        <h2 className="section-title">Магазин</h2>
                    </div>
                    <ShopCards />
                    <Pagination />
                </section>
            </div>
        </main>
    )
}