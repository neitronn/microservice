import React from 'react';
import { Headline } from '@telegram-apps/telegram-ui';
import style from './welcom.module.css'
import cn from 'classnames';
import BtnFooter from 'components/btnFooter/btnFooter';
import { useNavigate } from 'react-router-dom';

export default function Welcom() : React.ReactNode {
    const navigate = useNavigate();
    function enterData(){
        navigate('/questionary');
    }

    return (
    <>
        <div className='d-center content'>
            <img
                width={360}
                height={360}
                src="/img/welcom.png"
                alt="Welcome"
            />
            <Headline weight="2" className={cn('text-center', style.title)}>Сделай шаг — и получи меню, созданное для тебя. С нами ты сможешь его придерживаться!</Headline>
        </div>
        <BtnFooter title='Начать' onClick={enterData}/>
    </>
    )
}