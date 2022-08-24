import React, {ChangeEvent, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error ? s.error : ''
    const onKeyPressEnter = (e: any) => {  // чет не победю
        e.key === 'Enter' && addUser()
    }
    return (
        <div className={s.greeting}>
            <SuperInputText
                value={name}
                onKeyPress={(e) => {onKeyPressEnter(e)}}
                onChange={setNameCallback}
                className={inputClass}
                error={error ? 'Error' : ''}
            />
            <div>
                <SuperButton onClick={addUser} disabled={error}>add</SuperButton>
            </div>
            <div>Total: {totalUsers}</div>
        </div>
    )
}

export default Greeting
