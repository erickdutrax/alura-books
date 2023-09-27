import styled from 'styled-components';

const Opcao = styled.li`
    font-size: 16px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const Opcoes = styled.ul`
    display: flex;
`

const textOpcoes = ['Categorias', 'Favoritos', 'Minha Estante'];

function OpcoesHeader() {
    return (
        <Opcoes>
            { textOpcoes.map((texto, index) => (
              <Opcao key={index}><p>{texto}</p></Opcao>
          ))}
        </Opcoes>
    )
}

export default OpcoesHeader