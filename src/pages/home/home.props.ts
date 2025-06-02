export interface HomeProps{
    type : 'message' | 'block' | 'list' | 'link_blocks' | 'avatar' | 'reminder' | 'selection_values' | 'number_values',
    name? : string,
    title? : string,
    title_in_block ?: string,
    data : MessageProps | BlockProps[] | ListProps[] | LinkBlocksProps[] | AvatarProps | ReminderProps | SelectionValuesProps[] | NumberValuesProps[]
}

export interface NumberValuesProps{
    name : string,
    title : string,
    value : number,
    step ?:  number
}

export interface SelectionValuesProps{
    value : string;
    title : string;
    discription ?: string; 
    is_checked ?: boolean;
}

export interface ReminderProps{
    titleBlock ?: string,
    title : string,
    endpoint : string,
    is_checked : boolean,
    elems ?: ReminderElemProps[]
}

export interface ReminderElemProps{
    name : string,
    title : string,
    valueGroups : {
        [key: string]: {
            min: number,
            max: number,
            step: number,
            val: number
        }
    },
    value : string
}

export interface AvatarProps{
    img : string,
    fio : string
}

export interface LinkBlocksProps{
    link : string,
    text : string,
    value ?: number,
    total ?: number,
    unit ?: string,
    discription ?: string
}

export interface ListProps{
    ico ?: 'apple' | 'coffee' | 'meat' | 'salat',
    discription ?: string,
    value? : number,
    total?: number,
    text?: string,
    unit?: string,
    add?: string
}
export interface MessageProps{
    title?: string,
    text?: string,
    btn?: {
        link: string,
        caption : string
    }
}

export interface BlockProps{
    typeElem : 'info' | 'info2' | 'info3',
    value? : number,
    total?: number,
    text?: string,
    unit?: string 
}