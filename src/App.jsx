import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {     

  return (
    <>
        <Header titulo='Adopta un Perrito' />

        <div className='container'>
            <Cards nombre='Buker' info='Morder es su pasatiempo favorito. ¡Buker solo necesita comprension y amor de tu parte!' img='./src/assets/img/buker.jpg' color='success' txt='Pug' />

            <Cards nombre='Melvin' info='Curioso, observador y siempre pendiente. ¡Melvin sera un compañero que te hara sentir unico!' img='./src/assets/img/melvin.jpg' color='primary' txt='Border Collie' />

            <Cards nombre='Cream' info='Lleno de energia y siempre listo para jugar. ¡Dale a Cream el hogar amoroso que se merece!' img='./src/assets/img/cream.jpg' color='danger' txt='Golden Retriever' />

            <Cards nombre='Pinto' info='Este es un hermoso perro, tranquilo y equilibrado. ¡Pinto Tu compañero ideal para compartir!' img='./src/assets/img/pinto.jpg' color='warning' txt='Terrier' />
        </div>
                
        <Footer pie='Explora nuestra galeria de adopcion de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en buscan de un hogar amoroso. Cada imagen captura su esencia unica. Adopta un perro y brindale una segunda oportunidad. Encuentra a tu compañero peludo para siempre' />      
    </>
  );
};

export default App;
