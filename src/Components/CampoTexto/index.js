import './CampoTexto.css';

function Input(props){
    return (
        <div>
            <label>{props.label}</label>
            <input name="texto" type={props.label==='Senha'?'password':'text'} placeholder={props.placeholder} />
        </div>
    ); 
}

export default Input