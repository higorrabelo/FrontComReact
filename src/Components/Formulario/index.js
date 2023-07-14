import Botao from '../Botao'
import CampoTexto from '../CampoTexto';
import './Formulario.css'

function Formulario() {
    return (
      <div className="forms">
        <CampoTexto name="Campo Texto" placeholder="Digite seu Nome" label="Nome"/>
        <CampoTexto name="Campo Texto" placeholder="Digite Email" label="Email"/>
        <CampoTexto name="Campo Texto" placeholder="Digite sua Senha" label="Senha"/>
        <CampoTexto name="Campo Texto" placeholder="Digite seu Endereço" label="Endereço"/>
        <Botao name="Avançar" />
      </div>
    );
  }
  
  export default Formulario;
  