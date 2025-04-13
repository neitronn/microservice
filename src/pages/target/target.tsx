import React, {useEffect, useState} from 'react';
import BtnFooter from 'components/btnFooter/btnFooter';
import { Headline, Caption, Steps } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';
import RadioCustom from 'components/radioCustom/radioCustom';
import { RadioCustomProps } from 'components/radioCustom/radioCustom.props';
import { setServerUserInfo, serverUserInfo } from 'server/server';

export default function Target() : React.ReactNode{
    const navigate = useNavigate();
    function enterData(){
        navigate('/aboutMyself');
    }

    const [data, setData] = useState<RadioCustomProps['data']>(
        [
            {
                value : 1, 
                title : 'Похудеть',
                isChecked : false
            },
            {
                value : 2, 
                title : 'Поддержать форму', 
                isChecked : false
            },
            {
                value : 3, 
                title : 'Нарастить мышцы', 
                isChecked : false
            }
        ]
    )

    useEffect(() => {
        const defaultVal : number = serverUserInfo['target'] ? serverUserInfo['target'] : 1;
        setValueData(defaultVal)
    }, [])

    function setValueData (val : number){
        setServerUserInfo('target', val)
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
            
            <RadioCustom data={data} name='target' callback={setValueData}/>

        </div>
        <BtnFooter title='Далее' onClick={enterData} back='/' />
        </>
    )
}