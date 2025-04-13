import React, { useState } from 'react';
import BtnFooter from 'components/btnFooter/btnFooter';
import { Headline, Steps, Caption } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';
import Picker from 'react-scrollable-picker'
import { DateBirthProps } from './dateBirth.props';
import { setServerUserInfo } from 'server/server';

export default function DateBirth() : React.ReactNode{
    const navigate = useNavigate();
    function enterData(){
        const dataStr = valueGroups['day'] + '.' + valueGroups['month'] + '.' + valueGroups['year'];
        setServerUserInfo('datebirth', dataStr)
        navigate('/targetWeek');
    }

    const monthData = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    const [data, setData] = useState<DateBirthProps>({valueGroups : {
        day: '10',
        month: '6',
        year: '2000'
    },
    optionGroups : {
        day: Array.from({ length: 31 }, (_, index) => index + 1).map(item => {
            return {value: item.toString(), label: item.toString() }
        })
        ,
        month: Array.from({ length: 12 }, (_, index) => index + 1).map(item => {
            return {value: item.toString(), label: monthData[item - 1] }
        }),
        year: Array.from({ length: 121 }, (_, index) => index + 1900).map(item => {
            return {value: item.toString(), label: item.toString() }
        }),
    }})

    function handleChange (name : string, value : string){
        setData(oldState => {
            const {valueGroups, optionGroups} = oldState
            return {
                optionGroups,
                valueGroups : {
                    ...valueGroups,
                    [name] : value
                }
            }
        });
    }
   
    const {optionGroups, valueGroups} = data;

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

            
 
            <Picker
                optionGroups={optionGroups}
                valueGroups={valueGroups}
                onChange={handleChange}
            />  



        </div>
        <BtnFooter title='Далее' onClick={enterData} back='/aboutmyself' />
        </>
    )
}