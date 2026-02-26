import readline from "readline";
import { createCandidate, resetVotes } from "./candidate.js";
import { registerVote } from "./voteManager.js";
import { calculatePercentages, determineWinner, getTopTwo } from "./results.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const candidates = [
    createCandidate("Andre"),
    createCandidate("Helena"),
    createCandidate("Marcelo")
];

let voters = [];

function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

async function votingRound(activeCandidates) {
    console.log("\n=== VOTAÇÃO ===");

    while (true) {
        const voter = await ask("Nome do eleitor (ou 'fim' para terminar): ");

        if (voter.toLowerCase() === "fim") break;

        console.log("Candidatos disponíveis:");
        activeCandidates.forEach(c => console.log(`- ${c.name}`));

        const candidateName = await ask("Em quem deseja votar? ");

        const result = registerVote(voter, candidateName, activeCandidates, voters);
        console.log(result.message);
    }
}

async function main() {
    await votingRound(candidates);

    console.log("\n=== RESULTADOS ===");
    console.table(calculatePercentages(candidates));

    const result = determineWinner(candidates);
    console.log(result.message);

    if (result.type === "secondRound") {
        const topTwo = getTopTwo(candidates);

        console.log("\n=== SEGUNDA VOLTA ===");

        topTwo.forEach(resetVotes);
        voters = [];

        await votingRound(topTwo);

        console.log("\n=== RESULTADOS FINAIS ===");
        console.table(calculatePercentages(topTwo));

        const finalResult = determineWinner(topTwo);
        console.log(finalResult.message);
    }

    rl.close();
}

main();