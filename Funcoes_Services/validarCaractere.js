
//Pedir para o usuário digitar um caractere
function PedirUsuarioDigitar(caractereDigitado,letter){
if(letter !== undefined)
{
const digitNow   = caractereDigitado;
const RegExp     = /[A-Z]/gi;
digitNow.length === 1 && digitNow.match(RegExp) ? true : false;
return digitNow;
}
} 

//Validar se o caractere existe na palavra
function ValidarCaractere(PalavraSorteada,digitaLetra){
//Palavra completa sorteada
//Digita letra é o que o usuário digitou
if(PalavraSorteada.includes(digitaLetra)){
return true;
}
else 
{
return false;
}
}

///Compara se letra do usuário é igual as letras existentes na palavra 
function CaracteresExistentes(Letras_Sorteadas){
return Letras_Sorteadas.join(''); 
}

export {PedirUsuarioDigitar,ValidarCaractere,CaracteresExistentes};