import { RadioCustomProps } from "components/radioCustom/radioCustom.props"
import { DateBirthProps } from "pages/dateBirth/dateBirth.props"

export interface QuestionaryProps{
    totalQuestions : number,
    currentQuestion : number,
    title : string,
    description?: string
    questions : {
        type : 'radio' | 'input' | 'picker' | 'switch' | 'img',
        name : string,
        data ?: RadioCustomProps['data'] | inputProps | DateBirthProps | switchProps
    }[]
}

export interface inputProps{
    head : string,
    unit : string
    description?: string
}

export interface switchProps{
    isChecked : boolean,
    elem ?: 'consent',
    title ?: string,
}