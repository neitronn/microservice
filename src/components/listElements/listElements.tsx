import { ListProps } from "pages/home/home.props"
import style from './listElements.module.css'
import { Headline, Subheadline } from "@telegram-apps/telegram-ui"
import apple from '../../icons/apple.svg'
import coffee from '../../icons/coffee.svg'
import meat from '../../icons/meat.svg'
import salat from '../../icons/salat.svg'
import plus from '../../icons/plus.svg'

export default function ListElements({data, title = ''} : {data : ListProps[], title?: string}){
    return (
        <div className={style.block}>
            {title != '' ? <Headline weight="2">{title}</Headline> : ''}
            {
                data.map((elem, index) => {
                    const {ico, discription, value, total, text, unit, add} = elem;
                    let ico_html = <></>;
                    switch (ico){
                        case 'apple':
                            ico_html = <img src={apple} alt="apple" />
                            break;
                        case 'coffee':
                            ico_html = <img src={coffee} alt="coffee" />
                            break;
                        case 'meat':
                            ico_html = <img src={meat} alt="meat" />
                            break;
                        case 'salat':
                            ico_html = <img src={salat} alt="salat" />
                            break;
                    }
                    return (
                        <div key={index} className={style.item}>
                            <div className={style.img}>
                                {ico_html}
                            </div>
                            <div className={style.conent}>
                                {text != '' ? <Headline className={style.title} weight="2">{text}</Headline> : ''}
                                {discription != '' ? <Subheadline className={style.text} level="1" weight="3">{discription}</Subheadline> : ''}
                                {value !== undefined ? <Subheadline className={style.text} level="1" weight="3"><b>{value}</b>/{total} {unit}</Subheadline> : ''}
                            </div>
                            <div>
                                {add !== undefined && add !== '' ? <img src={plus} alt="plus" /> : ''}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}