import React from 'react';
import {Link, useLocation} from 'react-router-dom'

export default function Header (props) {
    const {pathname} = useLocation()
    return (
        <header className="header">
            <a className="header-title" href="main.html">Digital Nomad</a>
            <div className="header-info">веб-разработчик, ui/ux дизайнер</div>
            <nav className="header-nav">
            <ul className="header-nav_items">
                {
                    [
                        {
                            title: "Главная",
                            href: "/"
                        },
                        {  title: "Портфолио",
                            href: "/portfolio"
                        },
                        {
                            title: "Блог",
                            href: "/blog"
                        },
                        {
                            title: "Магазин",
                            href: "/shop"
                        },
                        {
                            title: "Контакты",
                            href: "/contacts"
                        }
                    ].map((item, i)=>(
                        <li key={i} className="header-nav_item">
                            {/*header-nav_item на header-nav_item--active */}
                            <Link
                            className={
                                pathname !== item.href ?
                                "header-nav_item header-nav_item":
                                "header-nav_item на header-nav_item--active"
                            }
                            to={item.href}
                            // onClick={(e) => e.preventDefault()}
                            >{item.title}</Link>
                        </li>))
                }
            </ul>
            </nav>
        </header>
    )
}