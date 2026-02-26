export function calculateTotalVotes(candidates) {
    return candidates.reduce((total, c) => total + c.votes, 0);
}

export function calculatePercentages(candidates) {
    const total = calculateTotalVotes(candidates);

    return candidates.map(c => {
        const percentage = total === 0 ? 0 : (c.votes / total) * 100;
        return {
            name: c.name,
            votes: c.votes,
            percentage: percentage.toFixed(2)
        };
    });
}

export function determineWinner(candidates) {
    const total = calculateTotalVotes(candidates);

    const sorted = [...candidates].sort((a, b) => b.votes - a.votes);

    if (sorted.length < 2) return sorted[0];

    if (sorted[0].votes === sorted[1].votes) {
        return { type: "tie", message: "Empate detetado!" };
    }

    if ((sorted[0].votes / total) <= 0.5) {
        return { type: "secondRound", message: "Necessária segunda volta!" };
    }

    return { type: "winner", message: `Vencedor: ${sorted[0].name}` };
}

export function getTopTwo(candidates) {
    return [...candidates]
        .sort((a, b) => b.votes - a.votes)
        .slice(0, 2);
}