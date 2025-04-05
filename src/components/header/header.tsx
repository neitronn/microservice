import React from 'react';
import { IconButton, Headline } from '@telegram-apps/telegram-ui';
import { AiOutlineClose } from "react-icons/ai";
import styles from "./header.module.css"
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Header({name = ''} : {name : string}){
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <IconButton mode="outline" size="s">
                    <AiOutlineClose />
                </IconButton>

                <Headline weight="2">{name}</Headline>
            </div>

            <IconButton mode="outline" size="s">
                <BsThreeDotsVertical />
            </IconButton>
        </div>
    )
    
}