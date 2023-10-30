function calculaRankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas; //calcule o saldo de vitórias.
    let nivel = ""; //variável para armazenar o nível do jogador.

    // use condicional if para classificar o jogador baseado no saldo de vitórias.
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }

    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// solicitar ao usuário para digitar o número de vitórias e derrotas.
let vitorias = Number(prompt("Digite o número de vitórias: "));
let derrotas = Number(prompt("Digite o número de derrotas: "));

// chamando a função e armazenando a mensagem na variável resultado.
let resultado = calculaRankeadas(vitorias, derrotas);

// imprimindo o resultado
console.log(resultado);