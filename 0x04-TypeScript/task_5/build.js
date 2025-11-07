"use strict";
// Functions
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits",
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits",
    };
}
// Example usage (optional)
var math = { credits: 3, brand: "MajorCredits" };
var physics = { credits: 4, brand: "MajorCredits" };
var totalMajor = sumMajorCredits(math, physics);
console.log(totalMajor); // { credits: 7, brand: 'MajorCredits' }
var art = { credits: 2, brand: "MinorCredits" };
var music = { credits: 3, brand: "MinorCredits" };
var totalMinor = sumMinorCredits(art, music);
console.log(totalMinor); // { credits: 5, brand: 'MinorCredits' }
