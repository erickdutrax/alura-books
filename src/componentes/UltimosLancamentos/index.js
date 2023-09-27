import styled from 'styled-components'
import livro from '../../imagens/livro.png'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png'

export const livros = [
    {nome: 'Liderança em Design', src: livro, id: 1},
    {nome: 'Cangaceiro JavaScript', src: livro, id: 3},
    {nome: 'Apache Kafka e Spring Boot', src: livro, id: 4}
]

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const ImgLivro = styled.img `

`
function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor={"#EB9B00"}
                tamanhoFonte={"36px"}
            >Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <ImgLivro src={livro.src} alt='' />
                ) ) }
            </NovosLivrosContainer>

            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos
