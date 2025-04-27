import { Steps, Headline, Caption } from "@telegram-apps/telegram-ui"
import RadioCustom from "components/radioCustom/radioCustom"
import BtnFooter from "components/btnFooter/btnFooter"
import React, {useState} from "react"
import InputCustom from "components/inputCustom/inputCustom"
import { QuestionaryProps, inputProps, switchProps } from "./questionary.props"
import { RadioCustomProps } from "components/radioCustom/radioCustom.props"
import Picker from 'react-scrollable-picker'
import { DateBirthProps } from "pages/dateBirth/dateBirth.props"
import style from './questionary.module.css'
import { Switch } from "@telegram-apps/telegram-ui"
import Consent from "components/consent/consent"

export default function Questionary(){

    interface UserAnswers {
        [key: string]: boolean | string | number | {[key: string] : string | number}; // Определение типа для userAnswers
    }

    const [userAnswers, setUserAnswers] = useState<UserAnswers>({}); 

    const monthData = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    const [serverData, setServerData] = useState<QuestionaryProps>({
        totalQuestions : 6, //Всего вопросов
        currentQuestion : 1, //Номер текущего вопроса
        title : 'Выберите вашу цель', //заголовок
        description : 'Выбор цели поможет нам рассчитать вашу потребность в калориях', //? описание
        questions : [  //вопросы
            {
                type : 'radio', //тип элемента каким будет отоброжаться
                name : 'targer', //ключь для передачи на бэкенд
                data : [ // данные в зависимости от type
                    {
                        value : 1, 
                        title : 'Сбросить 0,25 кг за неделю', 
                        isChecked : true,
                        description : 'Рекомендуется' // ?
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
            },
            {
                type : 'input', 
                name : 'weight', 
                data : {
                    head : 'ваш вес?',
                    unit : 'кг',
                    description : 'Вы можете указать приблизительное значение и уточнить его позже.' // ?
                }
            },
            {
                type : 'picker', 
                name : 'datebirth', 
                data : {
                    valueGroups : {
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
                    }
                }
            },
            {
                type : 'switch', 
                name : 'consent', 
                data : {
                    isChecked : false,
                    elem : 'consent', //пока только 'consent' если нет то выведится то что в title
                    title : 'fdgdfgdf'
                }
            },
            {
                type : 'img', 
                name : 'finish'
            }
        ]
    })

    function enterData(){
        console.log(userAnswers)
    }

    function saveUserAnswers(key : string, val : string | number | boolean){
        setUserAnswers(oldState => {
            const newState = {...oldState, [key] : val}
            return newState
         }) 
    }

    function saveDataPicker(name : string, val : string | number, key : string){
        setUserAnswers(oldState => {
            const newState = {
                ...oldState,
                [key]: {
                    ...(typeof oldState[key] === 'object' && oldState[key] !== null ? oldState[key] : {}),
                    [name]: val // Убедитесь, что вы добавляете значение для ключа name
                }
            };
            return newState;
        });
    }


    const {totalQuestions, currentQuestion, title, description, questions} = serverData;

    const elemForm = questions.map((item, index) => {
        const {type, data, name} = item
        const uniqueKey = `${name}-${type}-${index}`;
        switch (type){
            case 'radio':
                if (userAnswers[name] && Array.isArray(data)){
                    data.forEach(item => {
                        item['isChecked'] = false
                        if (item['value'] == userAnswers[name]) item['isChecked'] = true
                    })
                 
                }
                return <RadioCustom key={uniqueKey} data={data as RadioCustomProps['data']} name={name} callback={(value) => saveUserAnswers(name, value)} />
            case 'input':
                const {head, unit, description=''} : inputProps = data as inputProps
                return <InputCustom  key={uniqueKey}  callback={(val : string) => saveUserAnswers(name, val)} data={{head : head, unit : unit, description : description, value : userAnswers[name] ? userAnswers[name].toString() : ''}}  />
            case 'picker':
                const {valueGroups, optionGroups} = data as DateBirthProps
                const newValueGroups = {
                    ...valueGroups,
                    ...(typeof userAnswers[name] === 'object' && userAnswers[name] !== null ? userAnswers[name] : {})
                }
                return <Picker key={uniqueKey}
                    optionGroups={optionGroups}
                    valueGroups={newValueGroups}
                    onChange={(n : string,v : string | number) => saveDataPicker(n,v, name)}
                />
            case 'switch':
                const {isChecked, elem, title} : switchProps = data as switchProps
                let elem_title = <Headline weight="2">{title}</Headline>;
                switch (elem){
                    case 'consent':
                        elem_title = <Consent />
                        break;
                }
                const c = !!(userAnswers[name] ?? isChecked)
                return (
                    <div className={style.switch} key={uniqueKey}>
                        <Switch onChange={() => saveUserAnswers(name, !c)} checked={c} />
                        {elem_title}
                    </div>
                )
            default : 
                return <></>
        }
        
    })

    return (
        <>
        <div className=' content'>
            <div>
            <Steps count={totalQuestions} progress={currentQuestion} className='mb-20' />
                <Headline weight="2">{title}</Headline>
                <Caption
                    level="1"
                    weight="3"
                    className='label'
                >
                    {description}
                </Caption>
            </div>
            
           {elemForm}

        </div>
        <BtnFooter title='Далее' onClick={enterData} back='/' />
        </>
    )
}