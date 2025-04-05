import React, { JSX } from 'react';
import styles  from './body.module.css';

interface BodyProps {
    children?: React.ReactNode;
}

export default function Body({children} : BodyProps): JSX.Element {
    return (
        <div className={styles.main}>{children}</div>
    )
}