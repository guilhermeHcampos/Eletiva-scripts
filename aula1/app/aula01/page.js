import {listenForDynamicRequest} from "next/dist/client/components/router-reducer/ppr-navigations";

export default function aula01(){
    const subtitulo = "Estou aprendendo NEXT.Js"
    let numero = 4
    const multiplicacao = <h3>{numero} X {numero} = {numero * numero}</h3>
    return(
        <>
            <h1>Aula 01</h1>
            <h2>Teste</h2>
            <p>{subtitulo}</p>
            {multiplicacao}
            <p>{entre(7, 5, 10)}</p>
            <ul>
                {gerarLista()}
            </ul>
        </>
    )
}

function entre(valor, min, max){
    if (valor > min && valor < max) {
        return <h4>Sim</h4>
    } else {
        return <h4>Não</h4>
    }

}

function gerarLista(quantidade = 10) {
    const listaAleatorio = [];
    for (let i = 0; i <= quantidade; i++) {
        const numero = aleatorio();
        listaAleatorio.push(<li key={i}>{numero}</li>);
    }
    return listaAleatorio;

function aleatorio(){
    return Math.floor(Math.random() * 101);
    }

}