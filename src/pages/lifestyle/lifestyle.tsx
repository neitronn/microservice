import React, {useState, useEffect} from 'react';
import BtnFooter from 'components/btnFooter/btnFooter';
import { Headline, Steps, Caption } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';
import RadioCustom from 'components/radioCustom/radioCustom';
import { RadioCustomProps } from 'components/radioCustom/radioCustom.props';
import { serverUserInfo, setServerUserInfo } from 'server/server';

export default function LifeStyle() : React.ReactNode{
    const navigate = useNavigate();
    function enterData(){
        navigate('/readyStart');
    }

    const [data, setData] = useState<RadioCustomProps['data']>(
        [
            {
                value : 1, 
                title : 'Не очень подвижный', 
                isChecked : false,
                description : 'Большую часть дня провожу сидя (работник офиса и т.п.)'
            },
            {
                value : 2, 
                title : 'Малоподвижный', 
                description : 'Большую часть дня провожу на ногах (продавец и т.п.)',
                isChecked : false
            },
            {
                value : 3, 
                title : 'Подвижный', 
                description : 'Физические нагрузки большую часть дня (курьер и т.п.)',
                isChecked : false
            },
            {
                value : 4, 
                title : 'Очень подвижный', 
                description : 'Тяжелые физические нагрузки большую часть дня (грузчик и т.д.)',
                isChecked : false
            }
        ]
    )

    useEffect(() => {
        const defaultVal : number = serverUserInfo['lifeStyle'] ? serverUserInfo['lifeStyle'] : 1;
        setValueData(defaultVal)
    }, [])

    function setValueData (val : number){
        setServerUserInfo('lifeStyle', val)
        setData(oldState => {
            const newState = oldState.map(item => {
                item['isChecked'] = item['value'] === val
                return item
            })
            return newState
        })
    }

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

            <RadioCustom data={data} name='lifeStyle' callback={setValueData} />
        </div>
        <BtnFooter title='Далее' onClick={enterData} back='/targetWeek' />
        </>
    )
}