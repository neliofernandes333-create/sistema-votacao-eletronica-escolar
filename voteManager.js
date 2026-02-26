import { incrementVote } from "./candidate.js";
import { hasVoted, candidateExists } from "./validation.js";

export function registerVote(voter, candidateName, candidates, votersList) {
    if (hasVoted(voter, votersList)) {
        return { success: false, message: "Eleitor já votou!" };
    }

    if (!candidateExists(candidateName, candidates)) {
        return { success: false, message: "Candidato não existe!" };
    }

    const candidate = candidates.find(c => c.name === candidateName);
    incrementVote(candidate);
    votersList.push(voter);

    return { success: true, message: "Voto registado com sucesso!" };
}