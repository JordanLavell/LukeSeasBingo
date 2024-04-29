import { BingoValue } from "../types";

// A sample list of possible bingo square contents
const bingoContents = [
  "Find a treasure chest",
  "Win a ship battle",
  "Visit an outpost",
  "Complete a voyage",
  "Defeat a skeleton captain",
  "Escape from the Kraken",
  "Play a shanty with crew",
  "Cook a perfect meal",
  "Catch a rare fish",
  "Find a message in a bottle",
  "Find a treasure chest",
  "Win a ship battle",
  "Visit an outpost",
  "Complete a voyage",
  "Defeat a skeleton captain",
  "Escape from the Kraken",
  "Play a shanty with crew",
  "Cook a perfect meal",
  "Catch a rare fish",
  "Find a message in a bottle",
  "Escape from the Kraken",
  "Play a shanty with crew",
  "Cook a perfect meal",
  "Catch a rare fish",
  "Find a message in a bottle",
  // ... add more content options relevant to Sea of Thieves
];

// Function to shuffle an array
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to generate an array of BingoValue objects with random content
export const generateBingoValues = (): BingoValue[] => {
  // Shuffle the bingoContents array
  const shuffledContents = shuffleArray(bingoContents);

  // Slice the first 25 elements after shuffling to get random content
  const selectedContents = shuffledContents.slice(0, 25);

  // Map over the selectedContents to create BingoValue objects
  const bingoValues: BingoValue[] = selectedContents.map((content) => ({
    content: content,
    marked: false, // Initially, none of the squares are marked
  }));

  return bingoValues;
};
