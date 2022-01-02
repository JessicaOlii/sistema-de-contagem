let numeroDeAlunos = 10

let contador = 0;

while (contador <= numeroDeAlunos) {
    if(contador === 0) {
        console.log("O número atual é ZERO")
    } else if (contador % 2 == 1){
        console.log("O numero" + contador + " és IMPAR")
    } else {
        console.log("O numero" + contador +" é Par")
    }
    contador++; 
} 


let listaDeAlunos = ["Marcelo", "Cleber", "Werley", "Adriano"]

listaDeAlunos.forEach(aluno => {
    console.log(aluno)
});
