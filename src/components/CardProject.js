import React from 'react';
import { Link, useLocation } from 'react-router-dom'

export default function CardProject ({isAll}) {
    const {pathname} = useLocation()
    const project = [
        {
            subtitle: "HTML, CSS, wordpress",
            link: "",
            img: "/img/cards/project-card/01.jpg",
            title: "Архитектурное бюро John Doe и партнеры. Сайт под ключ"
        },
        {
            subtitle: "HTML, CSS, JS, React",
            link: "",
            img: "/img/cards/project-card/02.jpg",
            title: "Сайт о спасении черепах и морской фауны. Верстка и frontend"
        },
        {
            subtitle: "Figma, HTML, CSS, PHP",
            link: "",
            img: "/img/cards/project-card/03.jpg",
            title: "Квадрокоптер Phantom от Dji company. Сайт под ключ"
        },
        {
            subtitle: "HTML, CSS, wordpress",
            link: "",
            img: "/img/cards/project-card/04.jpg",
            title: "Верстка сайта для газеты “Вечерний Лондон”"
        },
        {
            subtitle: "HTML, CSS, Javascript, jQuery",
            link: "project-quantum.html",
            img: "/img/cards/project-card/05.png",
            title: "Верстка и frontend для интернет магазина Quantum"
        }
    ]

    const quantity = (arr, flag) => flag ? arr : arr.slice(-3)
    return (
        <div className="page-main__section-portfolio">
            {
                quantity(project, isAll).map((item, i) => (
                    <div key={i} className="card-project">
                        <div className="card-project__subtitle">{item.subtitle}</div>
                            <Link className="card-project__img" to={pathname}>
                                <img src={item.img} alt={`project-card-img-${i}`} />
                            </Link>
                        <div className="card-project__title">
                            <div className="card-project__title-item">
                                <Link to={pathname}>{item.title}</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
