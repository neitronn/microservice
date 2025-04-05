import React from 'react';
import BtnFooter from 'components/btnFooter/btnFooter';
import { Headline, Steps, Caption } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';
import RadioCustom from 'components/radioCustom/radioCustom';

export default function LifeStyle() : React.ReactNode{
    const navigate = useNavigate();
    function enterData(){
        navigate('/readyStart');
    }

    const data = [
        {
            value : '1', 
            title : 'Не очень подвижный', 
            isChecked : true,
            description : 'Большую часть дня провожу сидя (работник офиса и т.п.)'
        },
        {
            value : '2', 
            title : 'Малоподвижный', 
            description : 'Большую часть дня провожу на ногах (продавец и т.п.)'
        },
        {
            value : '3', 
            title : 'Подвижный', 
            description : 'Физические нагрузки большую часть дня (курьер и т.п.)'
        },
        {
            value : '4', 
            title : 'Очень подвижный', 
            description : 'Тяжелые физические нагрузки большую часть дня (грузчик и т.д.)'
        }
    ]
   

    return (
        <>
        <div className=' content'>
            <div>
                <Steps count={6} progress={5} className='mb-20' />
                <Headline weight="2">Какой образ жизни вы ведете?</Headline>
                <Caption
                    level="1"
                    weight="3"
                    className='label'
                >
                    Без учета тренировок
                </Caption>
            </div>

            <RadioCustom data={data} name='targetWeek' />
        </div>
        <BtnFooter title='Далее' onClick={enterData} back='/targetWeek' />
        </>
    )
}