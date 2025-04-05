import React from 'react';
import BtnFooter from 'components/btnFooter/btnFooter';
import { Headline, Caption, Steps } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';
import RadioCustom from 'components/radioCustom/radioCustom';

export default function Target() : React.ReactNode{
    const navigate = useNavigate();
    function enterData(){
        navigate('/aboutMyself');
    }

    const data = [
        {
            value : 'slim', 
            title : 'Похудеть', 
            isChecked : true
        },
        {
            value : 'support', 
            title : 'Поддержать форму', 
        },
        {
            value : 'build', 
            title : 'Нарастить мышцы', 
        }
    ]

    return (
        <>
        <div className=' content'>
            <div>
            <Steps count={6} progress={1} className='mb-20' />
                <Headline weight="2">Выберите вашу цель</Headline>
                <Caption
                    level="1"
                    weight="3"
                    className='label'
                >
                    Выбор цели поможет нам рассчитать вашу потребность в калориях
                </Caption>
            </div>
            
            <RadioCustom data={data} name='target' />

        </div>
        <BtnFooter title='Далее' onClick={enterData} back='/' />
        </>
    )
}