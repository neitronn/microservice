import React from 'react';
import BtnFooter from 'components/btnFooter/btnFooter';
import { useNavigate } from 'react-router-dom';

export default function Begin() : React.ReactNode {
    const navigate = useNavigate();
    function enterData(){
        navigate('/readyStart');
    }

    return (
    <>
        <div className='d-center content'>
            
        начало
        </div>
        <BtnFooter title='Ок' onClick={enterData} />
    </>
    )
}