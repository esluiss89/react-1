import '/Users/mono/Desktop/react-1/src/App.css';
import Card from '/Users/mono/Desktop/react-1/src/Components/Card';
import Titulo from '/Users/mono/Desktop/react-1/src/Components/Header';
import Footer from '/Users/mono/Desktop/react-1/src/Components/Footer';

function App() {
  return (
    <div>
      <Titulo Titulo="Galeria de imágenes con React"/>
      <Card source={require('./assets/img/naruto.jpeg')} nombre="Naruto Niño" descripcion="Naruto de Pequeño."/>
      <Card source={require('./assets/img/naruto_2.jpeg')} nombre="Naruto Adolecente" descripcion="Naruto ya mas adolecente."/>
      <Card source={require('./assets/img/naruto_3.jpeg')} nombre="Naruto Hokage" descripcion="Naruto ya siendo el hokage de la aldea."/>
      <Footer/>
    </div>
  );
}

export default App;
