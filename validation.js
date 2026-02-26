export function hasVoted(voter, votersList) {
    return votersList.includes(voter);
}

export function candidateExists(name, candidates) {
    return candidates.some(c => c.name === name);
}

export function isValidString(value) {
    return typeof value === "string" && value.trim() !== "";
}