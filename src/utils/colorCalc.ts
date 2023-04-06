import { ColorGreen, ColorRed, ColorYellow } from './color';

export const colorCalc = (data: any, num1: any, num2: any) => {
  let number1 = Number(num1);
  let number2 = Number(num2);

  if (data > number1) {
    return ColorRed;
  } else if (data > number2) {
    return ColorYellow;
  } else {
    return ColorGreen;
  }
};
