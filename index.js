import EscolhaCategoria from "readline-sync"

//Apresentação Categoria
import PercorreCategoria from "./Funcoes_Services/ApresentaCategoria.js";

//Escolha da Categoria 
import RetornaCategoria from "./Funcoes_Services/Dados_Escolhidos.js";

//Dados De Palavras e Categorias 
import Dados_Categorias_E_Palavras from "./Dados_De_Palavras/Dados_De_palavrasF.js";

//Retorna Palavra Oculta Sorteada
import {PalavraOculta,PalavraCompleta} from "./Funcoes_Services/Palavra_Oculta.js";

//Validar Caractere
import {PedirUsuarioDigitar,ValidarCaractere,CaracteresExistentes} from "./Funcoes_Services/validarCaractere.js";

import {PalavraOcultaUnderlines, AtualizarPalavra} from "./Funcoes_Services/Retorna_Letra_Oculta.js";


console.log(`\n${"".padStart(10,"-")}|-|Jogo da Forca|-|${"".padEnd(10,"-")}`);

let GameForca = `\n
  |--------|
  |        |     
  |        º
  |      --|--
-------   / \\

`;

const Dados_Palavras = Dados_Categorias_E_Palavras;

const ApresentaCategoria = PercorreCategoria();

const DadoAleatorio = Dados_Palavras.sort(() => Math.random() - 0.5);

console.log(GameForca);
console.log(ApresentaCategoria);

const DadosP  = RetornaCategoria(EscolhaCategoria,DadoAleatorio);

let Venceu_Nivel_Facil = `
   ___  ___  
  /   \\/   \\
  \\ Venceu!/    
   \\ Você /
    \\    /
     \\__/
     
`; 

let Venceu_Nivel_Regular = `
    /-------\\
   /         \\
  / (*)   (*) \\
 /      ?      \\
 \\   _     _   /
  \\  \\\\___//  /
   \\  \\___/  /
    \\-------/ 
`
let Venceu_Nivel_Dificil = `
    __________
   /          \\
  /____________\\
 /______________\\
 \\              /
  \\            /
   \\          /
    \\        /
     \\      / 
      \\    /
       \\  /
        \\/
`;

let RetornaPalavraOculta
let RetornaPalavraCompleta

if(DadosP !== undefined)
{
RetornaPalavraOculta    = PalavraOculta(DadosP[0]);
RetornaPalavraCompleta  = PalavraCompleta(DadosP[0]);
}

let andamento = "Continue";

let RevelaLetra = PalavraOcultaUnderlines(RetornaPalavraOculta,RetornaPalavraCompleta);//Retorna uma Letraoculta se a palavra completa ser diferente de undefined


if(RetornaPalavraCompleta !== undefined)
{
//Apresentação da Palavra
console.log(RevelaLetra.join(''));
}

let Letra = RevelaLetra;

let ponto 
let Escolha

if(DadosP !== undefined)
{
ponto   = DadosP[1];
Escolha = DadosP[2];
console.log("\n"+"Você tem " + ponto + " chances")
}

while(andamento === "Continue")
{

if(RetornaPalavraCompleta !== undefined)
{

//Usuário responde caractere
let CaractereUser = EscolhaCategoria.question("\n"+"Digite um caractere ");

const VerificarDigito = PedirUsuarioDigitar(CaractereUser,RetornaPalavraCompleta);

if(ValidarCaractere(RetornaPalavraCompleta,VerificarDigito))
{

AtualizarPalavra(CaractereUser,RetornaPalavraCompleta,Letra);

let ApresentaLetras = CaracteresExistentes(Letra);

console.log(ApresentaLetras);
if(ApresentaLetras === RetornaPalavraCompleta){

if(Escolha === "facil" || Escolha === "Facil")
{
console.log(Venceu_Nivel_Facil);
break;
}
else if(Escolha === "regular" || Escolha === "Regular")
{
console.log("Uau você venceu no nível Regular Parabéns! ");
console.log(Venceu_Nivel_Regular);
break;
}
else if(Escolha === "dificil"  || Escolha === "Dificil")
{
console.log("\n"+"Puxa! Você mostrou que é um mestre do jogo da forca Parabéns!");
console.log(Venceu_Nivel_Dificil);
}

break;
}

}
else 
{
ponto--

if(ponto > 0)
{
console.log("\n"+"Você ainda tem "  + ponto + " chances");
}

if(ponto === 0)
{

//Resposta Caso o usuário perca todas as chances
if(Escolha === "facil" || Escolha === "Facil")
{
console.log("\n"+"".padStart(20, "-"), "Você Perdeu", "".padEnd(20, "-"));
break;
}
else if(Escolha === "regular"  || Escolha === "Regular")
{
console.log("\n"+ "".padStart(20,"-") + "Você perdeu! O Nível regular não é para você" + "".padEnd(20,"-"));
break;
}
else if(Escolha === "dificil" || Escolha === "Dificil")
{
console.log("\n" + "".padStart(20,"-") +"Você Perdeu! O Nível difícil não é para amadores" + "".padEnd(20,"-"));
break;
}
}

}

}
else 
{
break;
}

}







 