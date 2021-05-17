import React from 'react';
import CardProject from './CardProject'
import CardBlog from './CardBlog'
import {Link} from 'react-router-dom'

export default function Main ({articles}) {
    return (
        <main className="page-main">
            <div className="section-about-me">
                <div className="container">
                    <div className="section-about-me__row">
                        <div className="section-about-me__img-wrapper"><img className="section-about-me__img" src="/img/section-about-me.jpg" alt="Обо мне" /></div>
                        <div className="section-about-me__right-column">
                            <h4 className="section-about-me__title">обо мне</h4>
                            <div className="section-about-me__text">
                            <p>Занимаюсь разработкой современных сайтов и приложений. Мне нравится делать интересные и современные проекты. Этот сайт я сделал в рамках обучения в школе онлайн обучения WebCademy. Чуть позже я обновлю в нём свой контент. А пока посмотрите, как тут всё классно!</p>
                            </div>
                            <h4 className="section-about-me__title">чем могу быть полезен</h4>
                            <ul className="section-about-me__list">
                                {
                                    ["Верстка сайтов", "Frontend", "UI/UX дизайн"]
                                        .map((item, i) => (<li key={i}>{item}</li>))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <section className="page-main__section-status">
                    <section className="status">
                        <Link className="status-row" to="/"><span className="status-row-status">Свободен для новых проектов</span><span className="status-row-text">Рассматриваю предложения по верстке и frontend разработке. Подробности</span><span className="status-row-svg"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9H15" stroke="#1647ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.5 4.5L15 9L10.5 13.5" stroke="#1647ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                        </Link>
                    </section>
                </section>
                <section>
                    <div className="page-main__section-title">
                    <h2 className="section-title">Новые проекты в <Link className="section-title__link" to="/portfolio">портфолио</Link></h2>
                    </div>
                    <CardProject isAll={false}/>
                </section>
                <section>
                    <div className="page-main__section-title">
                    <h2 className="section-title">Новые записи в <Link className="section-title__link" to="/blog">блоге</Link></h2>
                    </div>
                    <CardBlog
                        wrapper={"page-main__section-blog"}
                        isAll={false}
                        articles={articles}
                    />
                </section>
            </div>
        </main>
    )
}