import React, {useState} from 'react';
import BtnFooter from 'components/btnFooter/btnFooter';
import { Headline, Steps, Caption } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';
import InputCustom from 'components/inputCustom/inputCustom';
import { serverUserInfo, setServerUserInfo } from 'server/server';
import { serverUserInfoProps } from 'server/server.props';


export default function AboutMyself() : React.ReactNode{
    const navigate = useNavigate();
    function enterData(){
        navigate('/datebirth');
    }

   const [data, setData] = useState<serverUserInfoProps['aboutmyself']>(serverUserInfo['aboutmyself'])

    function setValueData (key : 'height' | 'weight' | 'desiredWeight',val : string){
        const value = Number(val)
        if (!value || isNaN(value)) return false
        setData(oldState => {
                const newState = {...oldState, [key] : value}
                setServerUserInfo('aboutmyself', newState)
                return newState
        }) 
    }

   
    return (
        <>
        <div className=' content'>
                <div>
                    <Steps count={6} progress={2} className='mb-20' />
                    <Headline weight="2">Расскажите немного о себе</Headline>
                    <Caption
                        level="1"
                        weight="3"
                        className='label'
                    >
                        Данные необходимы для расчета потребности в калориях
                    </Caption>
                </div>
                <InputCustom callback={(val : string) => setValueData('height', val)} data={{head : 'Ваш рост?', unit : 'СМ', value : data['height'] ? data['height'].toString() : ''}}  />
                <InputCustom callback={(val : string) => setValueData('weight', val)} data={{head : 'Сколько вы весите?', unit : 'КГ', description : 'Вы можете указать приблизительное значение и уточнить его позже.', value : data['weight'] ? data['weight'].toString() : '' }} />
                <InputCustom callback={(val : string) => setValueData('desiredWeight', val)} data={{head : 'Какой ваш желаемый вес?', unit : 'КГ', description : 'Вы всегда сможете изменить эти данные позже.', value : data['desiredWeight'] ? data['desiredWeight'].toString() : ''}} />
        </div>
        <BtnFooter title='Далее' onClick={enterData} back='/target' />
        </>
    )
}