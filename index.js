function logTwoValues(value1, value2) {
    console.log(`The two value are ${value1} and ${value2}`);
};
function introductionWithLanguage(name , language = "Ember.js"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
};
function introduction(name = "Aki") {
    return `Hi, my name is ${name}.`;
};
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
};