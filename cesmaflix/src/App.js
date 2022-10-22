import './App.css';
import Button from "./components/Button/Button";
import SelectField from "./components/SelectField/SelectField";
import Header from "./components/header";
import InputText from "./components/InputText";
import {Container} from "reactstrap";
import {Row} from "reactstrap";
import {Col} from "reactstrap";
import {useState} from "react";


function App() {

    var options = [
            "Terror",
            "Comédia",
            "Ação"
    ]

    const [nome, setNome] = useState('');
    const [filmes, setFilmes] = useState([]);
    
    const salvar = (e) => {
      e.preventDefault();
      setFilmes([...filmes, {nome}]);
      console.log(filmes);
    }


  return (

    <div className="App">
        <Header/>
      <Container className="mt-5">
        <Row>
          <Col md={12}>
              <form onSubmit={salvar}>
                  <InputText placeholder = "Digite o nome do filme" valor={nome} onInput={setNome}/>
                  <SelectField options={options}/>
                  <Button>Salvar</Button>
              </form>


          </Col>
        </Row>

          <Row md={4}>
              <Col>
                  {filmes.map(filme => <li>{filme.nome}</li>)}
              </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
