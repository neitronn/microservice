import { BlockProps } from "pages/home/home.props"
import style from './blockProps.module.css'
import { CircularProgress, Progress } from "@telegram-apps/telegram-ui"

export default function BlockInfo({typeElem, value = 0, total =1, text, unit} : BlockProps){
    switch (typeElem) {
        case 'info':
            return (
                <div className={style.block}>
                    <p>{value}</p>
                    <p>{text}</p>
                </div>
            )
        case 'info2':
            return (
                <div className={`${style.block} ${style.baggel}`}>
                    <p>{value}</p>
                    <CircularProgress 
                        progress={value/total*100}
                        size="large"
                    />
                </div>
            )
        case 'info3':
            return (
                <div className={`${style.block} ${style.align_left}`}>
                    <p>{text}</p>
                    <Progress value={20} className={style.progress} />
                    <p><b>{value}</b>/{total} {unit}</p>
                </div>
            )
        default:
            return null; 
    }
}