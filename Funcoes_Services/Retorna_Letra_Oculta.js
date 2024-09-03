
function AtualizarPalavra(caractere,PalavraAtual, armazenaPalavraOculta){
const Escolha = caractere;//Usuário digita seu caractere
let Armazenou = armazenaPalavraOculta;
// Condição para ver se a letra do usuário existe na palavra
if(Escolha.length === 1)// Verifica se é somente um caractere
{
for(let i = 0; i < PalavraAtual.length; i++){//Loop para ver se existe o caractere que o usuário digitou
 
if(Escolha === PalavraAtual[i])
{
Armazenou[i] = Escolha;
}
}
}
}

function PalavraOcultaUnderlines(PalavraOculta,PalavraAtual)
{
if(PalavraAtual !== undefined)// se  for diferente de undefined
{
const armazenaPalavraOculta = PalavraOculta.split('');//Transforma em um array de caracteres

return armazenaPalavraOculta;
}
}


export {PalavraOcultaUnderlines,AtualizarPalavra};