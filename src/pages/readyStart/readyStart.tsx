import React from 'react';
import BtnFooter from 'components/btnFooter/btnFooter';
import { useNavigate } from 'react-router-dom';
import { Steps, Headline, Switch} from '@telegram-apps/telegram-ui';
import style from './readyStart.module.css'

export default function ReadyStart() : React.ReactNode {
    const navigate = useNavigate();
    function enterData(){
        navigate('/begin');
    }

    return (
    <>
        <div className='d-center content'>
            <Steps count={6} progress={6} className='mb-20' />
            <Headline weight="2">Готовы начать?</Headline>
            <img
                width={360}
                height={360}
                src="/img/finish.png"
                alt="finish"
            />
            <div className={style.switch}>
                <Switch />
                <Headline weight="2">Я согласен с <a href='/termsUse'>Условиями использования</a> и <a href='/privacyPolicy'>Политика конфиденциальности</a></Headline>
            </div>
          
        </div>
        <BtnFooter title='Начать' onClick={enterData} back='/lifeStyle'/>
    </>
    )
}