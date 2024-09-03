import  Dados_Categorias_Palavras_Dificeis  from "../Dados_De_Palavras/Dados_De_PalavrasD.js";

function RetornaCategoria(User,Categorias){
const UserResponding = User.question("Escolha uma categoria Letras maiúsculas no inicio : ");
let Pontos
let contador = 0 ;
for(const i of Categorias){
contador += 1

if(UserResponding === i.Categoria){
const UserDifficult = User.question(`
Escolha o nível de dificuldade
pode digitar em letras minúsculas também
as Palavras sempre devem ter Letra maiúsculas no começo

--Facil
--Regular 
--Dificil

`);

//Facil
if(UserDifficult === "facil" || UserDifficult === "Facil")
{
Pontos = 5
console.log(`
Palavra Relacionada a : ${i.Categoria}
Nível     : ${UserDifficult}
Dica      : ${i.Dicas}
`);
return [`${i.Palavra}`,`${Pontos}`,`${UserDifficult}`];
}
//Regular
else if (UserDifficult === "regular" || UserDifficult  === "Regular")
{
Pontos = 3
console.log(`
Palavra Relacionada a ${i.Categoria}
Nível     : ${UserDifficult}
`);
return [`${i.Palavra}`,`${Pontos}`, `${UserDifficult}`];
}
//Difícil
else if(UserDifficult === "dificil"|| UserDifficult === "Dificil")
{
const Dificuldade_Dificil_Aleatorio = Dados_Categorias_Palavras_Dificeis.sort(() => Math.random() - 0.5);

for(const Dificil of Dificuldade_Dificil_Aleatorio){
if(UserResponding === Dificil.Categoria){
Pontos = 1

console.log(`
Palavra Relacionada a ${Dificil.Categoria}
Nível     : ${UserDifficult}
`);
return [`${Dificil.Palavra}`,`${Pontos}`, `${UserDifficult}`];
} 
} 

}
else 
{
console.log("Digite uma dificuldade válida" + "\n" + "Por favor execute novamente");
break;
}

break;
}
else if(contador === 50) 
{
console.log("\n" + "Categoria Inexistente e/ou inválida"); 
break;
}
}

}
 
export default RetornaCategoria;