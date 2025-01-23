function generateRandomShortId(url) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortId = '';
    for (let i = 0; i < 5; i++) {
        // Use a random index to pick a character from the pool
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortId += characters[randomIndex];
    }
    return shortId;
}
const shortId = generateRandomShortId();
//  console.log(Random Short ID: ${shortId});

module.exports = generateRandomShortId;