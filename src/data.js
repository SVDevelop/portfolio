export const articles = [
            {
                link: '/',
                img: '/img/cards/card-post/01.jpg',
                title: 'Парусный спорт. 10 правил для начинающего'
            },
            {
                link: '/',
                img: '/img/cards/card-post/02.jpg',
                title: 'Как я встретил старого друга в NY и чем это закончилось'
            },
            {
                link: '/',
                img: '/img/cards/card-post/03.jpg',
                title: 'Мое рабочее место и аксессуары в 2020 году'
            },
            {
                link: '/',
                img: '/img/cards/card-post/04.jpg',
                title: 'Весна в моем городе'
            },
            {
                link: '/',
                img: '/img/cards/card-post/05.jpg',
                title: '10 инструментов для продуктивности за ноутбуком'
            },
            {
                link: '/',
                img: '/img/cards/card-post/06.jpg',
                title: 'Мои топ 10 треков с радио за 2019 год'
            },
            {
                link: '/',
                img: '/img/cards/card-post/07.jpg',
                title: 'Аксессуары которые я всегда беру с собой'
            },
            {
                link: '/',
                img: '/img/cards/card-post/08.jpg',
                title: 'Фотосессия. Сентябрь 2019'
            },{
                link: '/',
                img: '/img/cards/card-post/09.jpg',
                title: 'Обзор коворкингов в МСК'
            },{
                link: '/',
                img: '/img/cards/card-post/10.jpg',
                title: 'Как устроена подземка в NY. Плюсы и минусы'
            },
            {
                link: '/',
                img: '/img/cards/card-post/12.jpg',
                title: 'Купил дрон. Впечатления и фотосессия'
            }
        ]
        
export const showPage = (arr, pagenum, count=3) => arr.slice(count*pagenum - count, count*pagenum )
    // console.log(Math.ceil(articles.length / 3)); всего страниц (4)

