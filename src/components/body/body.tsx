import React, { JSX } from 'react';
import styles  from './body.module.css';

interface BodyProps {
    style?: 'basic',
    children?: React.ReactNode;
}

export default function Body({style, children} : BodyProps): JSX.Element {
    return (
        <div className={`${styles.main} ${style === 'basic' ? styles.basic : ''}`}>{children}</div>
    )
}