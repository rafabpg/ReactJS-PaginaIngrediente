import { ListItem, ListTitle, ListUL } from "./styles";

const ingredientes = [
    "2 xicaras de farinha trigo",
    "2 colheres de açucar",
    "2 colheres(chá) de fermento em pó",
    "1/2 colher(chá) de sal",
    "2 colheres amido de milho",
    "3 ovos batidos",
    "4 colheres de manteiga sem sal derretida",
    "1 e 3/4 de xicara(chá) de leite",
    "1 colher(sopa) de essência de baunilha"
]

function IngredientsList(){
    return(
        <>
            <ListTitle>Ingredientes</ListTitle>
            <ListUL>
                {ingredientes.map(item=>
                   <ListItem> {item}</ListItem>
                )}
            </ListUL>
        </>
    );
}
export default IngredientsList;