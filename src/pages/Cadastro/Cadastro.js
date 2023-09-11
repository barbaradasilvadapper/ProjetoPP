
import CardCadastro from "../../components/CardCadastro/CardCadastro.js"
import { Fundo, ImagemCard, } from "./styled"
import LogoCinza from "../../assets/logocinza.png"



function Cadastro(){
    return(
        <>
            <Fundo>
                <ImagemCard src={LogoCinza} alt="OFF SET Carbon"/>
                <CardCadastro/>
            </Fundo>
        </>
    )
}


export default Cadastro