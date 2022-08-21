import React, {ChangeEvent, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'

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
            <input value={name} onKeyPress={(e) => {
                onKeyPressEnter(e)
            }} onChange={setNameCallback} className={inputClass}/>
            <span>{error && 'ERROR'}</span>
            <div>
                <button onClick={addUser} disabled={error}>add</button>
            </div>
            <div>Total: {totalUsers}</div>
        </div>
    )
}

export default Greeting
