function getFlagEmoji(countryCode) {
    const codePoints = String(countryCode)
        .toUpperCase()
        .split('')
        .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

export default getFlagEmoji;