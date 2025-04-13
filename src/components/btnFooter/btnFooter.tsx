import { Button, ButtonProps } from "@telegram-apps/telegram-ui";
import style from './btnFooter.module.css';
import { BsArrow90DegLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function BtnFooter({ title = 'Сохранить', back = false, ...props }: { title?: string; back?: false | string; } & ButtonProps): React.ReactNode {
    const navigate = useNavigate();
    function functionBack(){
        back && navigate(back);
    }
    
    return (
        <div className={style.wrap}>
            {back && <Button onClick={functionBack} className={style.back}>
                <BsArrow90DegLeft size={24} color="#00000080" />
            </Button>}
            <Button
                {...props} 
                className='w-100'
            >
                {title}
            </Button>
        </div>
    );
}