import { Slider,Text } from "@telegram-apps/telegram-ui"
import style from "./sliderCustom.module.css"
import { useState } from "react"

interface SliderCustomProps {
    title : string,
    min? : number,
    max? : number,
    step? : number,
    val? : number,
    eiText? : string,
    callbac : (value : number) => void
}

export default function SliderCustom({title = '', min = 1, max = 10, step = 1, val = 1, callbac, eiText = '' } : SliderCustomProps) {
    const [currentValue, setCurrentValue] = useState<number>(val)

   function setValue(v: number){
    setCurrentValue(v);
    callbac(v);
   }

    return (
        <div>
            <div className={style.text}>
                <Text weight="1">{title}</Text>
                <Text weight="2">{currentValue} {eiText}</Text>
            </div>
            <Slider 
            className={style.slider}
              onChange={setValue} 
              min={min}
              max={max}
              step={step}
              value={currentValue}
              />
        </div>
    )
}