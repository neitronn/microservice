import style from './NumberValues.module.css'
import { NumberValuesProps } from 'pages/home/home.props'
import { useState } from 'react'
import { Headline } from '@telegram-apps/telegram-ui';
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

export default function NumberValues({data} :  {data :NumberValuesProps[]}){
    const [elems, setElems] = useState<NumberValuesProps[]>(data);

    function onInputChange(name :string, valueInput : number){
        if (valueInput > 999) valueInput = 999;
        valueInput = Number(valueInput.toFixed(2));
        setElems(prevElems =>
            prevElems.map(item =>
                item.name === name
                    ? { ...item, value: valueInput }
                    : item
            )
        );
    } 

    return (
        <div className={style.block}>
            {elems.map((item: NumberValuesProps, index: number) => {
                const {name, title, step = 1, value} = item;

                return (
                    <div key={index} className={style.item}>
                        <Headline className={style.title} weight="2">{title}</Headline>
                        <div className={style.input}>
                            <button onClick={() => onInputChange(name, Number(value) + step)} className={`${style.btn} ${style.plus}`}><BsPlusLg /></button>
                            <button onClick={() => onInputChange(name, Number(value) - step)} className={`${style.btn} ${style.minus}`}><BiMinus /></button>
                            <input  name={name} type='number' value={value}  onChange={(e) => onInputChange(name, Number(e.target.value))} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}