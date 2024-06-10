function calculateScore(numbers) {
    let score = 0;
    for (const number of numbers) {
        if (number === 5) {
            score += 5;
        } else if (number % 2 === 0) {
            score += 1;
        } else if (number % 2 !== 0 && number !== 5) {
            score += 3;
        }
    }
    return score;
}

module.exports = calculateScore;