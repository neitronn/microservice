import { Cell, Radio } from "@telegram-apps/telegram-ui"
import style from "./radioCustom.module.css"
import { RadioCustomProps } from "./radioCustom.props"

export default function RadioCustom({name, data} : RadioCustomProps) : React.ReactNode{
    return (
        <form className="content">
            {
                data.map((item, key) => {
                    const {value, title, description, isChecked} = item
                    return (
                        <Cell
                            key={name + '_' + key}
                            Component="label"
                            after={<Radio name={name} value={value} checked={isChecked}/>}
                            description={description}
                            multiline
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