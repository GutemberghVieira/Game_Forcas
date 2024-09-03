
function PalavraCompleta(Escolhida){// Retorna palavra completa
return Escolhida;
}

function PalavraOculta(Letra){//Retorna Palavra Oculta
if(Letra !== undefined){
const PrimeiraLetra_Palavra = Letra[0];
const CaractereRepetitivo   = "_".repeat(Letra.length -1);
const Juntar = PrimeiraLetra_Palavra + CaractereRepetitivo;
return Juntar;
}
} 
 
export {PalavraOculta,PalavraCompleta}