export interface InputCustomProps {
    data : {head : string, placeholder? : string, unit : string, description? : string | false, value : string}, 
    callback : (val : string) => void
}