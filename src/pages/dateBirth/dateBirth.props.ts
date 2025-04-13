export interface DateBirthProps{
    valueGroups : {day: string, month: string, year: string}
    optionGroups : {day : {value : string, label: string}[], month : {value : string, label: string}[], year : {value : string, label: string}[]}
}