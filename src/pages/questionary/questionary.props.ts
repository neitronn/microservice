import { RadioCustomProps } from "components/radioCustom/radioCustom.props"

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

export interface DateBirthProps{
    valueGroups : {day: string, month: string, year: string}
    optionGroups : {day : {value : string, label: string}[], month : {value : string, label: string}[], year : {value : string, label: string}[]}
}