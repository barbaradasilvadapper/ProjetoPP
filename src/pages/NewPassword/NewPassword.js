
import NewPassCard from "../../components/NewPassCard/NewPassCard.js"
import { Fundo, ImagemCard, } from "./styled"
import LogoCinza from "../../assets/logocinza.png"


function NewPassword(){
    return(
        <>
            <Fundo>
                <ImagemCard src={LogoCinza} alt="OFF SET Carbon"/>
                <NewPassCard/>
            </Fundo>
        </>
    )
}


export default NewPassword