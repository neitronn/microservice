import React, {useState} from "react"
import style from './message.module.css'
import { MessageProps } from './message.props'
import { IconButton } from '@telegram-apps/telegram-ui'
import { BsXLg } from "react-icons/bs";

export default function Message({children} : MessageProps){
    const [hide, setHide] = useState(false)
    if (hide) return <></>
    return (
        <div className={style.modal}>
            <div>
                {children}
            </div>
            <IconButton mode="gray" size="s" className={style.customButton} onClick={() => setHide(true)}>
                    <BsXLg  />
            </IconButton>
        </div>
    )
    
}