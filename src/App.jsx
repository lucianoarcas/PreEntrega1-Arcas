import './App.css';
import ProductCard from './componentes/ProductCard/ProductCard';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Encontrá las mejores OFERTAS!!"/>
      <ProductCard/>
    </>
  );
}

export default App;
