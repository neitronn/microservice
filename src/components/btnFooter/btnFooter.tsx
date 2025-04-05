import { Button, ButtonProps } from "@telegram-apps/telegram-ui";
import style from './btnFooter.module.css';
import { BsArrow90DegLeft } from "react-icons/bs";

export default function BtnFooter({ title = 'Сохранить', back = false, ...props }: { title?: string; back?: false | string; } & ButtonProps): React.ReactNode {
    return (
        <div className={style.wrap}>
            {back && <a href={back} className={style.back}>
                <BsArrow90DegLeft size={24} color="#00000080" />
            </a>}
            <Button
                {...props} 
                className='w-100'
            >
                {title}
            </Button>
        </div>
    );
}