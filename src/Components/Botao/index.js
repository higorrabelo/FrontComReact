import './Botao.css';


function Botao(props) {
    return (
      <div className="botao">
        {props.name}
      </div>
    );
  }
  
  export default Botao;
  