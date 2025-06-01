import style from './reminder.module.css'
import { ReminderProps } from 'pages/home/home.props'
import { Headline, Switch, Text } from '@telegram-apps/telegram-ui'
import { useState, useRef, useEffect, useCallback } from 'react'
import Picker from 'react-scrollable-picker'
import ReminderItem from './ReminderItem'

export default function Reminder({titleBlock = '', title, is_checked, endpoint, elems} : ReminderProps){

    const [val, setVal] = useState(is_checked);
    const [activePickerName, setActivePickerName] = useState<string | null>(null); // State to track which picker is active

    // New states for drag functionality
    const [isDragging, setIsDragging] = useState(false);
    const startY = useRef(0);
    const [currentTranslateY, setCurrentTranslateY] = useState(0);
    const currentTranslateYRef = useRef(0); // Ref to store the latest value of currentTranslateY
    const overlayRef = useRef<HTMLDivElement>(null); // Ref for the overlay div
    const overlayHeight = useRef(0); // To store the height of the overlay

    // Effect to keep currentTranslateYRef updated with the latest currentTranslateY state
    useEffect(() => {
        currentTranslateYRef.current = currentTranslateY;
    }, [currentTranslateY]);

    // Effect to get the overlay height when it becomes visible
    useEffect(() => {
        if (activePickerName && overlayRef.current) {
            overlayHeight.current = overlayRef.current.offsetHeight;
            console.log('Overlay height set:', overlayHeight.current);
        }
    }, [activePickerName]);

    const generateTimeOptions = () => {
        const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
        const minutes = ['00', '15', '30', '45'];

        const hourOptions = hours.map(h => ({ value: h, label: h }));
        const minuteOptions = minutes.map(m => ({ value: m, label: m }));

        return {
            hour: hourOptions,
            minute: minuteOptions,
        };
    };

    const optionGroups = generateTimeOptions();

    function switchChange(){
        setVal(!val);
    }

    // Touch/Mouse event handlers - These are now global for the entire Reminder component, as they manipulate overlay state
    const handleStart = useCallback((e: React.TouchEvent | React.MouseEvent) => {
        // Only start dragging if an active picker is open
        if (!activePickerName) return;
        setIsDragging(true);
        startY.current = 'touches' in e ? e.touches[0].clientY : e.clientY;
    }, [activePickerName]); 

    const handleMove = useCallback((e: TouchEvent | MouseEvent) => {
        if (!isDragging) return;

        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        let deltaY = clientY - startY.current;

        if (deltaY < 0) {
            deltaY = 0;
        } else if (deltaY > overlayHeight.current) {
            deltaY = overlayHeight.current; // Cap at overlay's full height
        }
        
        setCurrentTranslateY(deltaY);
        currentTranslateYRef.current = deltaY; // Directly update the ref
    }, [isDragging, startY, overlayHeight]);

    const handleEnd = useCallback(() => {
        setIsDragging(false);
        const threshold = overlayHeight.current * 0.3; 
        const finalTranslateY = currentTranslateYRef.current; 

        console.log('handleEnd - finalTranslateY:', finalTranslateY);
        console.log('handleEnd - threshold:', threshold);
        console.log('handleEnd - overlayHeight.current:', overlayHeight.current);

        if (finalTranslateY > threshold) {
            setActivePickerName(null); // Hide the picker by setting activePickerName to null
        }
        setCurrentTranslateY(0); // Snap back to original position if not hidden
    }, [overlayHeight]);

    // Add global event listeners for `mousemove` and `mouseup` to handle cases where the mouse leaves the overlay while dragging
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMove);
            document.addEventListener('mouseup', handleEnd);
            document.addEventListener('touchmove', handleMove);
            document.addEventListener('touchend', handleEnd);
        } else {
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseup', handleEnd);
            document.removeEventListener('touchmove', handleMove);
            document.removeEventListener('touchend', handleEnd);
        }
        return () => {
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseup', handleEnd);
            document.removeEventListener('touchmove', handleMove);
            document.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging, handleMove, handleEnd]); 

    return (
        <div className={style.wrap}>
            {titleBlock != '' ? <Headline weight="2">{titleBlock}</Headline> : ''}
            <div className={`${style.block} ${val ? '' : style.not_active}`}>
                <div className={style.main_item}>
                    <Headline weight="2">{title}</Headline>
                    <Switch onChange={switchChange} checked={val} />
                </div>
                {elems?.map((item, index) => (
                    <ReminderItem
                        key={item.name} // Use item.name as key for uniqueness
                        item={item}
                        optionGroups={optionGroups}
                        activePickerName={activePickerName}
                        setActivePickerName={setActivePickerName}
                        isDragging={isDragging}
                        setIsDragging={setIsDragging}
                        startY={startY}
                        currentTranslateY={currentTranslateY}
                        setCurrentTranslateY={setCurrentTranslateY}
                        currentTranslateYRef={currentTranslateYRef}
                        overlayRef={overlayRef}
                        overlayHeight={overlayHeight}
                        handleStart={handleStart}
                        handleMove={handleMove}
                        handleEnd={handleEnd}
                    />
                ))}
            </div>
        </div>
    )
}