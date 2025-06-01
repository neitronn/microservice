import style from './linkBlocks.module.css'
import { LinkBlocksProps } from 'pages/home/home.props';
import { Headline, Subheadline } from '@telegram-apps/telegram-ui';
import arrow_right from '../../icons/arrow_right.svg'

export default function LinkBlocks({ data }: { data: LinkBlocksProps[] }){
    return (
        <div className={style.blocks}>
            {
                data.map((item, index) =>{
                    const {link, text, value, total, unit, discription} = item;
                    return (
                    <div key={index} className={style.block}>
                        <div className={style.content}>
                            {text != '' ? <Headline className={style.title} weight="2">{text}</Headline> : ''}
                            {discription != '' ? <Subheadline className={style.text} level="1" weight="3">{discription}</Subheadline> : ''}
                            {value !== undefined ? <Subheadline className={style.text} level="1" weight="3"><b>{value}</b>/{total} {unit}</Subheadline> : ''}
                        </div>
                        <div className={style.ico}>
                            <img src={arrow_right} alt="arrow_right" />
                        </div>
                    </div>
                    )
                })
            }
        </div>
    );
}