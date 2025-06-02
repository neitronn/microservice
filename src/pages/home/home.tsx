import Message from "components/message/message"
import { Headline, Text, Button } from "@telegram-apps/telegram-ui"
import style from './home.module.css'
import { useState } from "react"
import { HomeProps, MessageProps, BlockProps, ListProps, LinkBlocksProps, AvatarProps, ReminderProps, SelectionValuesProps, 
    NumberValuesProps
 } from "./home.props"
import { useNavigate } from "react-router-dom"
import BlockInfo from "components/blockInfo/blockInfo"
import ListElements from "components/listElements/listElements"
import LinkBlocks from "components/linkBlocks/linkBlocks"
import Avatar from "components/avatar/avatar"
import Reminder from "components/reminder/reminder"
import SelectionValues from "components/selectionValues/selectionValues"
import NumberValues from "components/NumberValues/NumberValues"

export default function Home(){
    const navigate = useNavigate();
    const [serverData, setServerData] = useState<HomeProps[]>([
        {
            type : 'message',
            data : {
                title : 'Сделайте ваше меню еще лучше!',
                text : 'Чем больше мы знаем о вас, тем точнее будут наши рекомендации. Ответьте на несколько необязательных вопросов, чтобы ваше меню стало по-настоящему индивидуальным.',
                btn : 
                    {
                        link : '/moreMenu',
                        caption : 'еще'
                    }
            }
        },
        {
            type : 'block',
            data : [
                {
                    typeElem : 'info',
                    value : 1834,
                    text : 'норма'
                },
                {
                    typeElem : 'info2',
                    value : 1208,
                    total : 2000,
                    unit : 'ккал'
                },
                {
                    typeElem : 'info',
                    value : 1834,
                    text : 'норма'
                },
                {
                    typeElem : 'info3',
                    value : 20,
                    text : 'Жиры',
                    total : 82,
                    unit : 'г'
                },
                {
                    typeElem : 'info3',
                    value : 63,
                    text : 'Белки',
                    total : 82,
                    unit : 'г'
                },
                {
                    typeElem : 'info3',
                    text : 'Углеводы',
                    total : 82,
                    unit : 'г'
                },
            ]
        },

        {
            type : 'list',
            title : 'Питание',
            data : [
                {
                    ico : 'coffee',
                    discription : '',
                    value : 0,
                    total: 0,
                    text: 'Завтрак', 
                    unit: '',
                    add: ''
                },
                {
                    ico : 'meat',
                    discription : 'описание',
                    value : 37,
                    total: 152,
                    text: 'Обед', 
                    unit: 'кал',
                    add: 'ds'
                },
            ]
        },

        {
            type : 'link_blocks',
            data : [
                {
                    link : '/voter',
                    text : 'вода',
                    value : 37,
                    total: 152,
                    unit: 'мл',
                },
                {
                    link : '/activity',
                    text : 'активность',
                    value : 0,
                    total: 2000,
                    unit: 'ккал',
                }
            ]
        },

        {
            type : 'avatar',
            data : {
                img : '/avatar/Avatar.png',
                fio : 'Егоров Максим'
            }
        },

        
        {
            type : 'reminder',
            data : {
                title : 'Вода',
                endpoint : '/test2',
                is_checked : false
            }
        },
        {
            type : 'selection_values',
            name : 'result',
            title : 'Обновить цели',
            data : [
                {
                    value : 'lose_weight',
                    title : 'похудеть',
                    is_checked : false
                },
                {
                    value : 'keep_fit',
                    title : 'поддерживать форму',
                    is_checked : true
                },
                {
                    value : 'build_muscle',
                    title : 'Нарастить мышцы',
                    is_checked : false
                },
            ]
        },
        {
            type : 'selection_values',
            name : 'result2',
            title_in_block : 'Цель на неделю',
            data : [
                {
                    value : '1',
                    title : 'Сбросить 0,25 кг за неделю',
                    discription : 'Рекомендуется',
                    is_checked : false
                },
                {
                    value : '2',
                    title : 'Сбросить 0,5 кг за неделю',
                    is_checked : true
                },
                {
                    value : '3',
                    title : 'Сбросить 1 кг за неделю',
                    is_checked : false
                },
            ]
        },
        {
            type : 'number_values',
            data : [
                {
                    name : 'current_weight',
                    title : 'Текущий вес, кг',
                    value : 67.8,
                    step :  0.2
                },
                {
                    name : 'desired_weight',
                    value : 62,
                    title : 'Желаемый вес'
                },
            ]
        },

        {
            type : 'reminder',
            data : {
                titleBlock : 'Настройка напоминаний',
                title : 'Приемы пищи',
                endpoint : '/test',
                is_checked : true,
                elems : [
                    {
                        name : 'breakfast',
                        title : 'Завтрак',
                        value : '0',
                        valueGroups : {
                            hours : {
                                min : 0,
                                max : 24,
                                step : 1,
                                val : 8
                            },
                            minutes : {
                                min : 0,
                                max : 59,
                                step : 15,
                                val : 0
                            }
                        }
                    },
                    {
                        name : 'lunch',
                        title : 'Обед',
                        value : '0',
                        valueGroups : {
                            hours : {
                                min : 0,
                                max : 24,
                                step : 1,
                                val : 12
                            },
                            minutes : {
                                min : 0,
                                max : 59,
                                step : 15,
                                val : 0
                            }
                        }
                    },
                    {
                        name : 'dinner',
                        title : 'Ужин',
                        value : '0',
                        valueGroups : {
                            hours : {
                                min : 0,
                                max : 24,
                                step : 1,
                                val : 18
                            },
                            minutes : {
                                min : 0,
                                max : 59,
                                step : 15,
                                val : 0
                            }
                        }
                    },
                    {
                        name : 'snack',
                        title : 'Перекус',
                        value : '0',
                        valueGroups : {
                            hours : {
                                min : 0,
                                max : 24,
                                step : 1,
                                val : 15
                            },
                            minutes : {
                                min : 0,
                                max : 59,
                                step : 15,
                                val : 30
                            }
                        }
                    },
                ]
            }
        },

        {
            type : 'reminder',
            data : {
                titleBlock : 'Редактировать профиль',
                title : 'Приемы пищи',
                endpoint : '/test2',
                is_checked : true,
                elems : [
                    
                    {
                        name : 'date',
                        value : '0',
                        title : 'Дата',
                        valueGroups : {
                            day : {
                                min : 1,
                                max : 31,
                                step : 1,
                                val : 12
                            },
                            month : {
                                min : 1,
                                max : 12,
                                step : 1,
                                val : 3
                            },
                            year : {
                                min : 1900,
                                max : 2025,
                                step : 1,
                                val : 1990
                            }
                        }
                    },
                    {
                        name : 'height',
                        value : '0',
                        title : 'Рост',
                        valueGroups : {
                            height : {
                                min : 80,
                                max : 300,
                                step : 1,
                                val : 160
                            }
                        }
                    }
                ]
            }
        },
        
    ])

   
    const content = serverData.map((item, key) => {
        const {type, data} = item;
        switch (type){
            case 'message':
                const {title, text, btn} : MessageProps = data as MessageProps
                return (
                    <Message key={key}>
                        <Headline  weight="2" >{title}</Headline>
                        <Text weight="3">{text}</Text>
                        <br></br>
                        {btn && <Button onClick={() =>navigate(btn['link'])} mode="white" size="s" className={style.btn}>{btn['caption']}</Button>}
                    </Message>
                )
            case 'block':
                return (
                    <div key={key} className={style.wrap_blocks_info}>
                        { (item['data'] as BlockProps[]).map((elem, index) => {
                            return (
                                <BlockInfo key={index} {...elem}></BlockInfo>
                            )
                        }) }
                    </div>
                )
            case 'list':
                return <ListElements  key={key} data={data as ListProps[]} title={item.title} />
            case 'link_blocks':
                return <LinkBlocks key={key} data={data as LinkBlocksProps[]} />
            case 'avatar':
                return <Avatar key={key} {...data as AvatarProps} />
            case 'reminder':
                return  <Reminder key={key} {...data as ReminderProps} />
            case 'selection_values':
                return <SelectionValues key={key} title_in_block={item.title_in_block} title={item.title}  name={item.name ?? ''}  data={data as SelectionValuesProps[]} /> 
            case 'number_values':
                return <NumberValues key={key} data={data as NumberValuesProps[]} />
        }
    })

    return (
        <>
            {content}
        </>
    )
}