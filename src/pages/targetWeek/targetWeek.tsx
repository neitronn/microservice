import React from 'react';
import BtnFooter from 'components/btnFooter/btnFooter';
import { Headline, Steps } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';
import RadioCustom from 'components/radioCustom/radioCustom';

export default function TargetWeek() : React.ReactNode{
    const navigate = useNavigate();
    function enterData(){
        navigate('/lifeStyle');
    }

    const data = [
        {
            value : '1', 
            title : 'Сбросить 0,25 кг за неделю', 
            isChecked : true,
            description : 'Рекомендуется'
        },
        {
            value : '2', 
            title : 'Сбросить 0,5 кг за неделю', 
        },
        {
            value : '3', 
            title : 'Сбросить 0,75 кг за неделю', 
        },
        {
            value : '4', 
            title : 'Сбросить 1 кг за неделю', 
        }
    ]
   

    return (
        <>
        <div className=' content'>
            <div>
                <Steps count={6} progress={4} className='mb-20' />
                <Headline weight="2">Какая у вас цель на неделю?</Headline>
            </div>

            <RadioCustom data={data} name='targetWeek' />
        </div>
        <BtnFooter title='Далее' onClick={enterData} back='/datebirth' />
        </>
    )
}