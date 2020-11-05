export function verbToSimple(verbs) {
    let convertedWords = [];
    verbs.forEach((verb) => {
        let basicForm = convertBasicForm(verb);
        let firstSingular = convertFirstSingular(verb);
        let secondSingular = convertSecondSingular(verb);
        let thirdSingular = convertThirdSingular(verb);
        let firstPlural = convertFirstPlural(verb);
        let secondPlural = convertSecondPlural(verb);
        let thirdPlural = convertThirdPlural(verb);

        convertedWords.push(
            basicForm,
            firstSingular,
            secondSingular,
            thirdSingular,
            firstPlural,
            secondPlural,
            thirdPlural);
    })
    return convertedWords;
}

function convertBasicForm(verb) {
    return {
        french: verb.french,
        swedish: 'att ' + verb.swedish
    };
}

function convertFirstSingular(verb) {
    return {
        french: 'je ' + verb.frFirstSingular,
        swedish: 'jag ' + verb.swPresent
    };
}

function convertSecondSingular(verb) {
    return {
        french: 'tu ' + verb.frSecondSingular,
        swedish: 'du ' + verb.swPresent
    };
}

function convertThirdSingular(verb) {
    return {
        french: 'elle ' + verb.frThirdSingular,
        swedish: 'hon ' + verb.swPresent
    };
}
function convertFirstPlural(verb) {
    return {
        french: 'nous ' + verb.frFirstPlural,
        swedish: 'vi ' + verb.swPresent
    };
}
function convertSecondPlural(verb) {
    return {
        french: 'vous ' + verb.frSecondPlural,
        swedish: 'ni ' + verb.swPresent
    };
}
function convertThirdPlural(verb) {
    return {
        french: 'ils ' + verb.frThirdPlural,
        swedish: 'de ' + verb.swPresent
    };
}