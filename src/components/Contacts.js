import React, {useState, useRef} from 'react';
import Form from './form/Form';

export default function Contacts () {
    const [value, setValue] = useState({name: '', email: ''})
    return (
        <main>
            <section className="about-me">
                <div className="container">
                    <div className="about-me-row">
                        <div className="about-me-resume">
                            <h3 className="about-me-resume__title">обо мне</h3>
                            <div className="about-me-resume__text">
                                <p>Занимаюсь разработкой современных сайтов и приложений. Мне нравится делать интересные и современные проекты. Этот сайт я сделал в рамках обучения в школе онлайн обучения WebCademy. Чуть позже я обновлю в нём свой контент. А пока посмотрите, как тут всё классно! </p>
                            </div>
                        </div>
                        <div className="about-me-direction">
                            <h3 className="about-me-direction__title">направления, которыми я занимаюсь</h3>
                            <div className="about-me-direction__list">
                                <ul>
                                    <li>Верстка сайтов </li>
                                    <li>Frontend</li>
                                    <li>UI/UX дизайн</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contacts">
                <div className="container">
                    <div className="contacts__row">
                        <div className="contacts__social">
                            <h2 className="section-title">Контакты</h2>
                            <div className="contacts__social-item">
                                <h4>Email: <a href="/">hi@digitalnomad.pro</a></h4>
                            </div>
                            <div className="contacts__social-item">
                                <h4>Мобильный: <a href="/">+7 (905) 555-77-88</a></h4>
                            </div>
                            <div className="contacts__social-item">
                                <h4>Адрес: <span>Москва, Пресненская набережная, д. 6, стр. 2</span></h4>
                            </div>
                        </div>
                        <Form />
                    </div>
                </div>
            </section>
        </main>
    )
}