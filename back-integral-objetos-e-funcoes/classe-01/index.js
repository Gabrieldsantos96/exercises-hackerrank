const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let questoesCorretas = 0;

    for (let questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            questoesCorretas++;
        }
    }

    let valorQuestao = prova.valor / prova.questoes.length;
    let notaProva = valorQuestao * questoesCorretas;

    if (questoesCorretas === 0) {
        console.log(`${prova.aluno} não acertou nenhuma questão de ${prova.questoes.length} e obteve a nota ${notaProva}`);
    } else if (questoesCorretas === 1) {
        console.log(`${prova.aluno} acertou somente uma questão de ${prova.questoes.length} e obteve a nota ${notaProva}`);
    } else {
        console.log(`${prova.aluno} acertou ${questoesCorretas} questões de ${prova.questoes.length} e obteve a nota ${notaProva}`);
    }

}

corrigirProva(prova);