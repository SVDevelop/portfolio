import React, {useState, useEffect} from 'react'
import Input from './Input';
import { useData } from "../../DataContext";

export default function Form () {
    const {data, setValues} = useData()
    const [value, setValue] = useState({...data}) //{name: "", email: "", content: ""}
    const {name, email, content} = value

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(data)
    }
    // const changeValues = data => setValues({...data})
    // useEffect(() => changeValues({...data}),[value])
    // useEffect(() => setValues({...value}),[value])
    // useEffect(()=> console.log({...data}),[value])
    return (
        <form className="contacts__form">
            <h2 className="section-title">Напишите мне</h2>
            <div className="input-form">
                <label htmlFor="form-title">
                    <Input 
                        placeholder="Ваше имя"
                        name="name"
                        onChange={(e) => setValue({name: e.target.value})}
                        value={name}
                    />
                </label>
            </div>
            <div className="input-form">
                <label htmlFor="form-title">
                    <Input 
                        placeholder="Email"
                        name="Email"
                        onChange={(e) => setValue({email: e.target.value})}
                        value={email}
                    />
                </label>
            </div>
            <textarea 
                className="textarea" 
                name="Text email" 
                placeholder="Введите текст"
                onChange={(e) => setValue({content: e.target.value})}
                value={content} 
            />
            <div className="file-input-block">
                <div className="file-input__text">
                    <div className="file-input__text-head">Прикрепить файл:</div>
                    <div className="file-input__text-desc">jpg, png, pdf, вес до 2 Мб</div>
                </div>
                <label className="file-input__label" htmlFor="file-input">
                    <button className="file-button">Выбрать файл</button>
                    <input className="file-input" type="file" id="file-input" />
                </label>
            </div>
            <button 
                className="primary-button"
                onClick={submitHandler}
            >Отправить 
            </button>
        </form>
    )
}