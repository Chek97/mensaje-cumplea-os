import React from 'react';
import classNames from 'classnames/bind';
import birthdayPhoto from '../assets/feliz-cumpleanos-to-you-background_8163-116-modified.png';

export const Message = ({styles}) => {

    const cx = classNames.bind(styles);

    const message = cx(['animate', 'delay2']);
    const text = cx(['animate', 'delay5']);
    const textImage = cx(['animate', 'delay1']);

  return (
    <div className={` message-container ${message} animate__fadeInUp`}>
        <div className={`text-image-container ${textImage} animate__zoomIn` }>
            <img src={birthdayPhoto} alt="" width={150} height={150} />
        </div>
        <p className={`text-message ${text} animate__fadeInUp`}>
            En este dia tan especial te deseo un muy feliz cumpleaños, se que no es lo mismo un lunes pero es lo que hay jejeje. <br /><br />
            Pero ya en serio, este mensaje esta hecho para dedicarte un pequeño pero muy especial recordatorio de que eres una 
            persona muy especial, divertida, bella, soñadora, cariñosa, graciosa, y muchas otras cosas que no alcanzaria la pantalla para
            mostrate. <br /><br />  Quien hizo este mensaje ha visto todas esas cosas en ti y solo le vasto verte una vez para verlo. asi que espero y sigas 
            dibujando una bella sonrisa en ese rostro tan bello y que ayudes a iluminar la vida de muchas personas hoy y todos los dias que vengan
            <br />
            <br />
            <p>"Si alguna vez llegas a tener un mal dia, vuelve a ver este mensaje y recuerda todas las virtudes que tienes."</p>
            <br />
            <br />
            <strong>ATT: Cristian Checa</strong>
        </p>
    </div>
  )
}
