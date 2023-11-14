
import CardLogin from "../../components/CardLogin/CardLogin"
import { Fundo, ImagemCard, } from "./styled"
import LogoCinza from "../../assets/logocinza.png"


function Login(){
    return(
        <>
            <Fundo>

                <ImagemCard src={LogoCinza} alt="OFF SET Carbon"/>

                <CardLogin/>
            </Fundo>
        </>
    )            
}


export default Login