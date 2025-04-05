import React from 'react';
import BtnFooter from 'components/btnFooter/btnFooter';
import { Headline, Steps, Caption } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';
import InputCustom from 'components/inputCustom/inputCustom';

export default function AboutMyself() : React.ReactNode{
    const navigate = useNavigate();
    function enterData(){
        navigate('/datebirth');
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
                <InputCustom data={{head : 'Ваш рост?', unit : 'СМ' }} />
                <InputCustom data={{head : 'Сколько вы весите?', unit : 'КГ', description : 'Вы можете указать приблизительное значение и уточнить его позже.' }} />
                <InputCustom data={{head : 'Какой ваш желаемый вес?', unit : 'КГ', description : 'Вы всегда сможете изменить эти данные позже.'}} />
        </div>
        <BtnFooter title='Далее' onClick={enterData} back='/target' />
        </>
    )
}