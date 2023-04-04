import backgroundSound from './assets/background.mp3';
import photo from './assets/photo.png';
import 'animate.css';

function App() {

  return (
    <div className="container__main">
      <audio src={backgroundSound} autoPlay loop></audio>
      <header>
        <h1 className='animate__animated animate__fadeIn'>FELIZ CUMPLEAÑOS</h1>
      </header>
      <div className='container__image animate__animated animate__fadeIn animate__delay-2s'>
        <img src={photo} alt="imagen de perfil" className='container__image--photo' />
      </div>
      <div className='container__text1  animate__animated animate__fadeIn animate__delay-5s'>
        <p className='text1 animate__animated animate__flipInX'>Hola Stephanie, </p>
        <br />
        <p className='text2 animate__animated animate__lightSpeedInRight animate__delay-5s'>
          Hoy te escribi estas palabras con el motivo de que pases un dia lleno de felicidad y gozo, hoy
          es TU DIA ESPECIAL en el que quiero hacerte sentir especial deseando lo mejor para ti y por eso hoy quiero que este mensaje te haga sonreir al menos una vez:
        </p>
        <br />
        <p className='text3 animate__animated animate__lightSpeedInLeft animate__delay-5s'>
          "Hoy es un dia en el que deseo que te hayas olvidado de tus problemas y del estres del dia a dia porque situaciones adversas desafortunadamente
          siempre ocurriran, pero hoy no es momento de pensar en ello, hoy es momento de pensar en lo positivo y en lo bueno que te ha pasado,
          por eso quiero que este dia lo hayas pasado lleno de sonrisas y felicidad y si no es suficiente solo cierra los ojos y recuerda todas las cosas
          bonitas que te han hecho feliz
          <small className='small-text'> (ojala en uno de esos recuerdos este yo jejeje). </small>
          Como te mencione al medio dia, hay dias que no es facil querer compartir y no poder hacerlo, hoy queria desearte feliz cumpleaños personalmente
          como se debe jejej, pero desafortunadamente por ciertas situaciones que estoy pasando no me fue posible, pero igual te hice esta pagina con el fin de hacer
          que este cumpleaños lo sientas especial como te lo mereces. Hoy quiero decirte que eres una persona maravillosa y admirable, la mas admirable que conozco porque has demostrado que tienes una
          tenacidad increible que muchas personas no tienen, y si a eso le sumamos tus otras cualidades como tu CALIDEZ, tu DULZURA, tu POSITIVISMO
          tenemos como resultado una persona increible y eso es lo que quiero que recuerdes hoy, que eres una mujer muy fuerte y que has logrado muchas
          cosas con tu esfuerzo y sin depender de nadie mas que de ti misma.
        </p>
        <br />
        <p className='text4 animate__animated animate__rotateIn animate__delay-5s'>
          Entonces quiero que hoy te llenes de mucha felicidad al lado de quienes estan cerca de ti, que te sientas afortunada y orgullosa de todo lo
          que hasta ahora has logrado y todo lo que te falta por lograr y que tengo fe en que lo haras. por el momento solo quiero que este mensaje
          te haga sentir apreciada y si alguna vez te sientes muy cansada o con falta de motivacion siempre puedes volver a ver estas palabras
          y recordar que todo lo que estas haciendo es admirable.
          <br />
          <br />
          Sin mas espero que termines un dia espectacular, que no te olvides nunca dejar de sonreir y recuerda siempre: "
          <br />
          <h2 className='final-text'>!!!TU SONRISA PUEDE ALEGRAR HASTA EL PEOR DE LOS DIAS!!!</h2>
        </p>
      </div>
    </div>
  )
}

export default App
