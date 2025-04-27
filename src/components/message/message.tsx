import style from './message.module.css'

export default function Message({children} : {children?: React.ReactNode}){
    return (
        <div>
            {children}
        </div>
    )
    
}