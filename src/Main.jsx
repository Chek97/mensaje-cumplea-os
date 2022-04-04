import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Message } from './components/Message';

export const Main = () => {

    const [show, setShow] = useState(false);

    const styles = {
        animate: 'animate__animated',
        delay1: 'animate__delay-1s', 
        delay2: 'animate__delay-2s', 
        delay3: 'animate__delay-3s', 
        delay4: 'animate__delay-4s', 
        delay5: 'animate__delay-5s', 
    }

    const cx = classNames.bind(styles);
    const title = cx(['animate', 'delay1']);
    const subtitle1 = cx(['animate', 'delay2']);
    const button = cx(['animate', 'delay3']);
    const main = cx(['animate']);

    const handleShow = () => setShow(true);

    return (
    <div className='container'>
        <div className={`main-text ${show && main + ' animate__fadeOut'}`}>
            <h1 className={`title ${title} animate__fadeIn`}>Hola Stephanie, como estas?</h1>
            <p className={`subtitle1 ${subtitle1} animate__bounceInLeft`}>Cristian quiere que presiones el boton para que veas la sorpresa</p>
            <div className='button-container'>
                <button className={`button ${button} animate__backInUp`} onClick={handleShow}>Oprime</button>
            </div>
        </div>
        { show && <Message styles={styles} /> }
    </div>
  )
}
