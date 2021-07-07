const url =  'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios  = require('axios')

const chineses = f => f.pais === 'China';
const mulheres = f => f.genero  === 'F';
const menorSalario = (funcionario, funcionrioAtual) => {
    return funcionario.salario < funcionrioAtual.salario ? funcionario : funcionrioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const funcionario = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(funcionario)
})