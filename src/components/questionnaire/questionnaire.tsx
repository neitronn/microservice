import React, {useState} from 'react';
import { Headline,SegmentedControl, List, Select, Multiselect, Text, Switch, Button } from '@telegram-apps/telegram-ui';
import { SegmentedControlItem } from '@telegram-apps/telegram-ui/dist/components/Navigation/SegmentedControl/components/SegmentedControlItem/SegmentedControlItem';
import SliderCustom from 'components/formComponent/sliderCustom/sliderCustom';
import { MultiselectOption } from '@telegram-apps/telegram-ui/dist/components/Form/Multiselect/types';

export default function Questionnaire() : React.ReactNode{
    function test(v:number){
        console.log(v)
    }
    const [selectedOptions, setSelectedOptions] =  useState<MultiselectOption[]>([]);

    return (
        <>
            <Headline weight="1">Заполните Вашу анкету</Headline>

            <SegmentedControl>
                <SegmentedControlItem
                    onClick={function noRefCheck(){}}
                    selected
                >
                    Мужщина
                </SegmentedControlItem>
                <SegmentedControlItem
                    onClick={function noRefCheck(){}}
                >
                    Женщина
                </SegmentedControlItem>
            </SegmentedControl>

            <SliderCustom 
                title="Год рождения"
                min={1900}
                max={2025}
                val={2000}
                callbac={test}
            />

            <SliderCustom 
                title="Рост"
                min={50}
                val={170}
                max={300}
                eiText='см'
                callbac={test}
            />

            <SliderCustom 
                title="Вес"
                min={20}
                val={70}
                max={200}
                eiText='кг'
                callbac={test}
            />

        <List className='listBox'>
        <Select header="Уровень активности" >
            <option>Сидячий образ жизни</option>
            <option>Низкая активность</option>
            <option>Умеренная активность</option>
            <option>Интенсивная активность</option>
        </Select>
        </List>

        <List className='listBox mt-10'>
        <Select header="Цель" >
            <option>Похудеть</option>
            <option>Нарастить мышцы</option>
            <option>Правильное питание</option>
        </Select>
        </List>

        <div className='listBox'>
            <Multiselect 
            options={[
                { value: '1', label: 'Аллергия на орехи ' },
                { value: '2', label: 'Непер...' },
            ]}
            value={selectedOptions} 
            onChange={val => setSelectedOptions(val)}
            placeholder="Ограничения и аллергии"
            />
    </div>

    <div className='section_offer'>
            <a href='/'><Text>Заполнить данные для индивидуального меню</Text></a>
            <Switch checked={false} />
    </div>

    <Button
        mode="filled"
        size="m"
        >
        Сохранить
        </Button>
         
    </>
    )
}