import { useState } from 'react';
import './App.css';

import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time/Time';
import Footer from './componentes/Footer';


function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  //lista de times
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#6A5ACD',
      corSecundaria: '#836FFF'
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#87CEFA',
      corSecundaria: '#00BFFF'
    },
    {
      nome: 'Develops',
      corPrimaria: '#008080	',
      corSecundaria: '#7FFFD4	'
    },
    {
      nome: 'UX e Desing',
      corPrimaria: '#228B22',
      corSecundaria: '#32CD32	'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#DAA520',
      corSecundaria: '#B8860B'
    }
  ]


  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {/* Mapeando os times */}
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)
      }
      <Footer />
    </div>
  );
}

export default App;
