// Interfaces
interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

// Functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}

// Example usage (optional)
const math: MajorCredits = { credits: 3, brand: "MajorCredits" };
const physics: MajorCredits = { credits: 4, brand: "MajorCredits" };

const totalMajor = sumMajorCredits(math, physics);
console.log(totalMajor); // { credits: 7, brand: 'MajorCredits' }

const art: MinorCredits = { credits: 2, brand: "MinorCredits" };
const music: MinorCredits = { credits: 3, brand: "MinorCredits" };

const totalMinor = sumMinorCredits(art, music);
console.log(totalMinor); // { credits: 5, brand: 'MinorCredits' }
