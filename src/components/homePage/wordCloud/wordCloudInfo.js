export const options = {
  fontFamily: 'Lora',
  fontSizes: [10, 30],
  fontStyles: 'normal',
  fontWeight: '600',
  padding: 1,
  rotations: 1,
  rotationAngles: [0, 90],
  scale: 'liner',
  spiral: 'archimedean',
  transitionDuration: 1000,
};

export const callbacks = {
  getWordTooltip: (word) => `${word.text}`,
};

export function randomNumber(){
  return  Math.round(Math.random() * 25 + 26);
}
