import React from 'react';

export default function Pagination (props) {
    // console.log(props.articles.length);

    return (
        <section className="pagination">
            <div className="pagination-wrap-item">
                <a className="pagination-button" href="/">назад</a>
            </div>
            <div className="pagination-wrap-item pagination-wrap-item--active">
                <a className="pagination-button" href="/">1</a>
            </div>
            <div className="pagination-wrap-item">
                <a className="pagination-button" href="/">2</a>
            </div>
            <div className="pagination-wrap-item">
                <a className="pagination-button" href="/">3</a>
            </div>
            <div className="pagination-wrap-item">
                <a className="pagination-button" href="/">вперед</a>
            </div>
        </section>        
    )
}