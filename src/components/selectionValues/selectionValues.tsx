import style from './selectionValues.module.css'
import { SelectionValuesProps } from 'pages/home/home.props'
import { Headline, Subheadline, Cell, Radio } from '@telegram-apps/telegram-ui';
import { useState, useEffect } from 'react';

interface SelectionValuesComponentProps {
    data: SelectionValuesProps[];
    name: string;
    title ?: string;
    title_in_block ?: string;
}

export default function SelectionValues({data, name, title = '', title_in_block = ''} : SelectionValuesComponentProps){
    const [currentSelection, setCurrentSelection] = useState<SelectionValuesProps[]>(data);

    useEffect(() => {
        setCurrentSelection(data);
    }, [data]);

    function onSelectionChange(selectedValue : string){
        const updatedSelection = currentSelection.map(item => ({
            ...item,
            is_checked: item.value === selectedValue
        }));
        setCurrentSelection(updatedSelection);
    }

    return (
        <div className={style.wrap}>
            {title != '' ? <Headline weight="2">{title}</Headline> : ''}
            <div className={style.block}> 
                {title_in_block != '' ? <Headline weight="2">{title_in_block}</Headline> : ''}
                {currentSelection.map((item, index) =>{
                    const {value, title, discription='', is_checked} = item;
                    return (
                        <div key={index} className={style.item}>
                            <div>
                                <Headline className={style.title} weight="3">{title}</Headline>
                                {discription != '' ? <Subheadline className={style.text} level="1" weight="3">{discription}</Subheadline> : ''}
                            </div>
                            <Cell
                                before={<Radio name={name} value={value} checked={is_checked} onChange={() => onSelectionChange(value)} />}
                            ></Cell>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}