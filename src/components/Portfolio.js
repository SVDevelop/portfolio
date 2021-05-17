import React from 'react';
import CardProject from './CardProject'
import Pagination from './Pagination'

export default function Portfolio () {
    return (
        <main>
            <div className="container">
                <div className="page-portfolio">
                    <div className="page-portfolio__title">
                        <h2 className="section-title">Портфолио</h2>
                    </div>
                    <div className="page-portfolio__cards">
                        <CardProject isAll={true}/>
                    </div>
                    <Pagination />
                </div>
            </div>
        </main>
    )
}