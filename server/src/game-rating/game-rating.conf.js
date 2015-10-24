export const finalScoreRatingCategories = [
    {
        condition: (scoreDiff) => scoreDiff <= 3,
        rating: 10
    },
    {
        condition: (scoreDiff) => (scoreDiff > 3 && scoreDiff <=9),
        rating: 5
    },
    {
        condition: (scoreDiff) => (scoreDiff > 9 && scoreDiff <= 15),
        rating: 0
    },
    {
        condition: (scoreDiff) => (scoreDiff > 15 && scoreDiff <= 21),
        rating: -5
    },
    {
        condition: (scoreDiff) => scoreDiff > 21,
        rating: -10
    }
];

export const periodScoresRatingCategories = [
    {
        condition: (period, scoreDiff) => (period === 1 && scoreDiff <= 6),
        rating: 5
    },
    {
        condition: (period, scoreDiff) => (period === 1 && scoreDiff > 15),
        rating: -5
    },
    {
        condition: (period, scoreDiff) => (period === 2 && scoreDiff <= 6),
        rating: 5
    },
    {
        condition: (period, scoreDiff) => (period === 2 && scoreDiff > 15),
        rating: -5
    },
    {
        condition: (period, scoreDiff) => (period === 3 && scoreDiff < 6),
        rating: 5
    },
    {
        condition: (period, scoreDiff) => (period === 3 && scoreDiff > 15),
        rating: -5
    }
];

export const overtimeRating = {
    rating: 10
};