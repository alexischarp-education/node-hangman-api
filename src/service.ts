import frData from './assets/french-formated.json';
import enData from './assets/english-formated.json';
import { Locale } from './types';

export const getWord = (locale: Locale): string => {
  if (locale === 'fr-FR') {
    const randomIndex = Math.floor(Math.random() * (frData.length + 1));
    return frData[randomIndex];
  }
  if (locale === 'en-GB') {
    const randomIndex = Math.floor(Math.random() * (enData.length + 1));
    return enData[randomIndex];
  }
  return "This locale isn't available";
};
