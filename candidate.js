export function createCandidate(name) {
    return {
        name,
        votes: 0
    };
}

export function incrementVote(candidate) {
    candidate.votes++;
}

export function resetVotes(candidate) {
    candidate.votes = 0;
}