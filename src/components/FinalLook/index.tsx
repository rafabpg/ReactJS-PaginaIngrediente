import waffle from '../../assets/food.jpg'
import { FigureFood , FinalLookContainer, ImageFood, TitleFood } from './styles';

function FinalLook(){
    return(
            <FinalLookContainer>
                <TitleFood>Waffle Clássico</TitleFood>
                <FigureFood>
                    <ImageFood src={waffle}  alt="Imagem de Waffle" />
                    <figcaption>Receita de Waffle Classico</figcaption>
                </FigureFood>
            </FinalLookContainer>
    );
}
export default FinalLook;