import { MetodoTitle,MetodoItem,MetodoOL } from "./style";


const metodos = [
    "Peneire em um recipiente a farinha de trigo, o açúcar, o amido, o fermento e o sal.",
    "Em outro recipiente misture os ovos batidos com o leite, a manteiga derretida e a essência de baunilha.",
    "Despeje sobre a mistura de farinha e rapidamente incorpore os ingredientes.",
    "Aqueça o aparelho para Waffles. Coloque uma concha rasa de massa e espalhe até cobrir o molde do aparelho, feche a tampa e deixe assar até a massa ficar bem dourada.",
    "Retire com espátulas de silicone. Sirva com mel, frutas ou geleia."
]

function MetodoPreparo(){
    return(
        <>
            <MetodoTitle>Metodo de Preparo</MetodoTitle>
            <MetodoOL>
                {metodos.map(item=>
                   <MetodoItem> {item}</MetodoItem>
                )}
            </MetodoOL>
        </>
        
    );
}
export default MetodoPreparo;