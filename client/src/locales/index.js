import fromPairs from 'lodash/fromPairs';

import en from './en/embed';
import de from './de/embed';
import pl from './pl/embed';
import ru from './ru/embed';
import fr from './fr/embed';

const localePairs = [
  ['en', en],
  ['de', de],
  ['ru', ru],
  ['pl', pl],
  ['fr', fr],
];

export const languages = localePairs.map((locale) => locale[0]);

export const embedLocales = fromPairs(localePairs);
