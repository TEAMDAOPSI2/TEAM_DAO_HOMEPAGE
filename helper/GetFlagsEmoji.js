function getFlagEmoji(countryCode) {
    const codePoints = String(countryCode)
        .toUpperCase()
        .split('')
        .map(char =>  127397 + char.charCodeAt());
    const flag = String.fromCodePoint(...codePoints);
    if (flag !== '🇳🇺🇱🇱') {
        return flag;
    }
    return '🌍';
}

export default getFlagEmoji;