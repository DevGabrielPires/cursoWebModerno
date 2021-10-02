function soBoaNoticia(nota) {
  if(nota >= 7) {
    console.log(`aprovado com ${nota}`);
  }
}

soBoaNoticia(8.1);
soBoaNoticia(6.7);

function seForVerdadeEuFalo(valor) {
  if(valor) {
    console.log(`É veasasasasardade.... ${valor}`);
  }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo('[]');
seForVerdadeEuFalo('[1,2]');
seForVerdadeEuFalo('{}');
