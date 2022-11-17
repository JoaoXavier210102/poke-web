import Header from './components/Header';
import Card from './components/Card';
import ContainerCard from './components/ContainerCard';
import Pagination from './components/Pagination';
import Modal from './components/Modal';
import "./global.scss";

//contexts
import { useOpenModal } from "./providers/openModal";
import { usePokemons } from "./providers/pokemons";

function App() {

  const { open } = useOpenModal();
  const { pokemons } = usePokemons();

  return (
    <>
      <div className={`app ${open ? "showModal" : ""}`}>
        <Header />
        <ContainerCard>
          {pokemons.map((id: number) => (
            id <= 151 && <Card key={id} id={id} />
          ))}
        </ContainerCard>
        {pokemons.length !== 1 && <Pagination />}
      </div>
      < Modal />
    </>
  );
}

export default App;
