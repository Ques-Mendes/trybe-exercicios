import readline from "readline-sync";
import months from "./months";
import seasons from "./seasons";

const monthsNames = Object.keys(months);
console.log(months);

const choiceMonth = readline.keyInSelect(monthsNames, "Choose a month");

const seasonsNorth = {
  [seasons.autumn]: [months.September, months.October, months.November, months.December],
  [seasons.winter]: [months.December, months.January, months.February, months.March],
  [seasons.spring]: [months.March, months.April, months.May, months.June],
  [seasons.summer]: [months.June, months.July, months.August, months.September],
}
const seasonsSouth = {
  [seasons.autumn]: seasonsNorth[seasons.spring],
  [seasons.winter]: seasonsNorth[seasons.summer],
  [seasons.spring]: seasonsNorth[seasons.autumn],
  [seasons.summer]: seasonsNorth[seasons.winter],
}

const hemispheres = {
  "North": seasonsNorth,
  "South": seasonsSouth,
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Choose a hemisphere");

const month = Object.keys(months)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

const hemisphereSeasons = Object.keys(hemispheres)[choiceHemisphere];
Object.entries(hemisphereSeasons).map((entry) => {
  const seasons = entry[0];
  const months = entry[1];

  if (months.includes(month))console.log(seasons);  
});
  