import style from './avatar.module.css'
import { AvatarProps } from 'pages/home/home.props' 
import { Subheadline } from '@telegram-apps/telegram-ui'

export default function Avatar({img, fio} : AvatarProps){
    return(
        <div className={style.conteiner}>
            <div className={style.ava}>
                <img
                    width={90}
                    height={90}
                    src={img}
                    alt="Avatar"
                />
            </div>
            <Subheadline level="1" weight="2" >
                {fio}
            </Subheadline>
                    
        </div>
    )

}