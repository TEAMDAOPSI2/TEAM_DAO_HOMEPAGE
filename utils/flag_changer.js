export const flag_changer = (string) => {
    const flags = ['🇵🇭', '🇮🇩', '🇲🇾', '🇸🇬', '🇹🇭']
    // if string contains flags wrap in <span> and return string + wrapped flag
    for (let i = 0; i < flags.length; i++) {
        if (string.includes(flags[i])) {
            return string.replace(flags[i], ` <span class="flag">${flags[i]}</span> `)
        }
    }
    return string
}