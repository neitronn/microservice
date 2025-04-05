import React from 'react';
import BtnFooter from 'components/btnFooter/btnFooter';
import { Headline, Steps, Caption } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';


export default function DateBirth() : React.ReactNode{
    const navigate = useNavigate();
    function enterData(){
        navigate('/targetWeek');
    }

   

    return (
        <>
        <div className=' content'>
            <div>
                <Steps count={6} progress={3} className='mb-20' />
                <Headline weight="2">Укажите вашу дату рождения</Headline>
                <Caption
                    level="1"
                    weight="3"
                    className='label'
                >
                    Ваш возраст влияет на потребности организма — от уровня энергии до рекомендаций по здоровью. Указав дату рождения, вы помогаете нам сделать советы максимально подходящими именно для вас
                </Caption>
            </div>

            
 
                



        </div>
        <BtnFooter title='Далее' onClick={enterData} back='/aboutmyself' />
        </>
    )
}