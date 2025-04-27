export interface HomeProps{
    type : string,
    name : string,
    data : MessageProps
}

export interface MessageProps{
    title?: string,
    text?: string,
    btn?: {
        link: string,
        caption : string
    }
    
}