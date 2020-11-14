import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error; // need to fix with (?:)


    return (
        <div className={s.mainBlock}>
            <input value={name}
                   onChange={setNameCallback}
                   className={error ? inputClass : ""}
                   placeholder="Введите имя"
            />
            <span className={s.errorText}>{error}</span>
            <div> Количество людей: {totalUsers}</div>
            <button onClick={addUser} className={s.button}>
                Добавить
            </button>
        </div>
    );
}

export default Greeting;
