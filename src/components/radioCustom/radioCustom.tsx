import { Cell, Radio } from "@telegram-apps/telegram-ui"
import style from "./radioCustom.module.css"
import { RadioCustomProps } from "./radioCustom.props"

export default function RadioCustom({name, data, callback} : RadioCustomProps) : React.ReactNode{
    return (
        <form className="content">
            {
                data.map(item => {
                    const {value, title, description, isChecked} = item
                    return (
                        <Cell
                            key={name + '_' + value}
                            Component="label"
                            after={<Radio name={name} value={value} checked={isChecked} onChange={() => callback(value)} />} // Добавлен onChange
                            description={description}
                            className={style.radio}
                        >
                            {title}
                        </Cell>
                    )
                })
            }
        </form>
    )
}