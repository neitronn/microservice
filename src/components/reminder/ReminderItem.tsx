import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Headline, Switch, Text } from '@telegram-apps/telegram-ui';
import Picker from 'react-scrollable-picker';
import style from './reminder.module.css';

interface ReminderItemProps {
    item: {
        name: string;
        title: string;
        value: string;
    };
    optionGroups: {
        hour: { value: string; label: string; }[];
        minute: { value: string; label: string; }[];
    };
    activePickerName: string | null;
    setActivePickerName: (name: string | null) => void;
    isDragging: boolean;
    setIsDragging: (dragging: boolean) => void;
    startY: React.MutableRefObject<number>;
    currentTranslateY: number;
    setCurrentTranslateY: (translateY: number) => void;
    currentTranslateYRef: React.MutableRefObject<number>;
    overlayRef: React.RefObject<HTMLDivElement | null>;
    overlayHeight: React.MutableRefObject<number>;
    handleStart: (e: React.TouchEvent | React.MouseEvent) => void;
    handleMove: (e: TouchEvent | MouseEvent) => void;
    handleEnd: () => void;
}

const ReminderItem: React.FC<ReminderItemProps> = ({
    item,
    optionGroups,
    activePickerName,
    setActivePickerName,
    isDragging,
    setIsDragging,
    startY,
    currentTranslateY,
    setCurrentTranslateY,
    currentTranslateYRef,
    overlayRef,
    overlayHeight,
    handleStart,
    handleMove,
    handleEnd,
}) => {
    const { name, title, value } = item;

    // Local states for each timer item
    const [itemSelectedTime, setItemSelectedTime] = useState(value);
    const [itemValueGroups, setItemValueGroups] = useState(() => ({
        hour: value.split(':')[0],
        minute: value.split(':')[1],
    }));

    const handleItemTimeClick = () => {
        // Toggle the active picker for this specific item
        setActivePickerName(activePickerName === name ? null : name);
        setCurrentTranslateY(0); // Reset translation when opening/closing
    };

    const saveItemDataPicker = useCallback((n: string, v: string | number) => {
        setItemValueGroups(prev => {
            const newState = {
                ...prev,
                [n]: v,
            };
            const newHour = newState.hour;
            const newMinute = newState.minute;
            setItemSelectedTime(`${newHour}:${newMinute}`);
            return newState;
        });
    }, []);

    return (
        <div key={name} className={style.item}>
            <Text weight="3">{title}</Text>
            
            <div className={style.time_display} onClick={handleItemTimeClick}>
                <Text weight="3">{itemSelectedTime}</Text>
            </div>
            {activePickerName === name && (
                <div
                    className={style.time_picker_overlay}
                    ref={overlayRef}
                    onTouchStart={handleStart}
                    onMouseDown={handleStart}
                    style={{
                        transform: `translateY(${currentTranslateY}px)`,
                        transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                    }}
                >
                    <div
                        className={style.drag_handle}
                        onTouchStart={handleStart}
                        onMouseDown={handleStart}
                    />
                    <Picker 
                        optionGroups={optionGroups}
                        valueGroups={itemValueGroups}
                        onChange={saveItemDataPicker}
                    />
                </div>
            )}
        </div>
    );
};

export default ReminderItem; 