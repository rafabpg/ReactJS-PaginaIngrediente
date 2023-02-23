import FinalLook from "../../components/FinalLook";
import InfoAdicional from "../../components/InfoAdicional";
import IngredientsList from "../../components/Lista";
import MetodoPreparo from "../../components/MetodoPreparo";
import { GlobalStyle } from "../../global";
import { Container } from "./styles";




function IngredientsPage(){
    return (
        <>
        <Container>
            <FinalLook/>
            <IngredientsList />
            <MetodoPreparo/>
            <InfoAdicional/>
        </Container>
        </>
    );
}
export default IngredientsPage;