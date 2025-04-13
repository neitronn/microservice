import style from './inputCustom.module.css'
import { InputCustomProps } from './inputCustom.props'
import { Input, Text, Caption } from '@telegram-apps/telegram-ui'


export default function InputCustom({data, callback} : InputCustomProps) : React.ReactNode{
    const {head, placeholder = '', unit, description= false, value } = data;
    return (
        <div>
            <Text weight="3" className={style.text}>{head}</Text>
            <div className={style.elem}>
                <Input value={value} className={style.input} placeholder={placeholder} onChange={(e) => callback(e.target.value)} />
                <span className={style.unit}>
                    {unit}
                </span>
                
            </div>
            {
            description && 
            <Caption
                level="1"
                weight="3"
                className={style.caption}
            >
                {description}
            </Caption>
            }
            
            
        </div>
    )
}