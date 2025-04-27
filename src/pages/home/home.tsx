import Message from "components/message/message"
import { Headline, Text, Button } from "@telegram-apps/telegram-ui"
import style from './home.module.css'
import { useState } from "react"
import { HomeProps, MessageProps } from "./home.props"
import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate();
    const [serverData, setServerData] = useState<HomeProps[]>([
        {
            type : 'message',
            name : 'mes1',
            data : {
                title : 'Сделайте ваше меню еще лучше!',
                text : 'Чем больше мы знаем о вас, тем точнее будут наши рекомендации. Ответьте на несколько необязательных вопросов, чтобы ваше меню стало по-настоящему индивидуальным.',
                btn : 
                    {
                        link : '/moreMenu',
                        caption : 'еще'
                    }
            }
        }
    ])

   
    const content = serverData.map((item, key) => {
        const {type, name, data} = item;
        switch (type){
            case 'message':
                const {title, text, btn} : MessageProps = data as MessageProps
                return (
                    <Message key={key}>
                        <Headline  weight="2" >{title}</Headline>
                        <Text weight="3">{text}</Text>
                        <br></br>
                        {btn && <Button onClick={() =>navigate(btn['link'])} mode="white" size="s" className={style.btn}>{btn['caption']}</Button>}
                    </Message>
                )
        }
    })

    return (
        <>
            {content}
        </>
    )
}