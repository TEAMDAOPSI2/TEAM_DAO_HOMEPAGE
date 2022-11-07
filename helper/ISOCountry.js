import countries from "@data/ISOCountry.json";

function ISOCountry(countryName) {
    // {"name":"Afghanistan","alpha-2":"AF","country-code":"004"}
    const country = countries.find((country) => country.name === countryName);
    return country ? country["alpha-2"] : null;
}

export default ISOCountry;