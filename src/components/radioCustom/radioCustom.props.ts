export interface RadioCustomProps{
    name : string,
    data : {value : number, title : string, description? : string, isChecked : boolean}[],
    callback : (val : number) => void 
}