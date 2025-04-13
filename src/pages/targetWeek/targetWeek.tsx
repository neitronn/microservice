import React, {useState, useEffect} from 'react';
import BtnFooter from 'components/btnFooter/btnFooter';
import { Headline, Steps } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';
import RadioCustom from 'components/radioCustom/radioCustom';
import { RadioCustomProps } from 'components/radioCustom/radioCustom.props';
import { serverUserInfo, setServerUserInfo } from 'server/server';

export default function TargetWeek() : React.ReactNode{
    const navigate = useNavigate();
    function enterData(){
        navigate('/lifeStyle');
    }

    const [data, setData] = useState<RadioCustomProps['data']>(
        [
            {
                value : 1, 
                title : 'Сбросить 0,25 кг за неделю', 
                isChecked : true,
                description : 'Рекомендуется'
            },
            {
                value : 2, 
                title : 'Сбросить 0,5 кг за неделю', 
                isChecked : false
            },
            {
                value : 3, 
                title : 'Сбросить 0,75 кг за неделю', 
                isChecked : false
            },
            {
                value : 4, 
                title : 'Сбросить 1 кг за неделю', 
                isChecked : false
            }
        ]
    )

    useEffect(() => {
        const defaultVal : number = serverUserInfo['targetWeek'] ? serverUserInfo['targetWeek'] : 1;
        setValueData(defaultVal)
    }, [])

    function setValueData (val : number){
        setServerUserInfo('targetWeek', val)
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
                <Steps count={6} progress={4} className='mb-20' />
                <Headline weight="2">Какая у вас цель на неделю?</Headline>
            </div>

            <RadioCustom data={data} name='targetWeek' callback={setValueData} />
        </div>
        <BtnFooter title='Далее' onClick={enterData} back='/datebirth' />
        </>
    )
}