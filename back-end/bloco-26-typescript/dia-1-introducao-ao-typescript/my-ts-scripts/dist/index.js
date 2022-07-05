"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const months_1 = __importDefault(require("./months"));
const seasons_1 = __importDefault(require("./seasons"));
const monthsNames = Object.keys(months_1.default);
console.log(months_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Choose a month");
const seasonsNorth = {
    [seasons_1.default.autumn]: [months_1.default.September, months_1.default.October, months_1.default.November, months_1.default.December],
    [seasons_1.default.winter]: [months_1.default.December, months_1.default.January, months_1.default.February, months_1.default.March],
    [seasons_1.default.spring]: [months_1.default.March, months_1.default.April, months_1.default.May, months_1.default.June],
    [seasons_1.default.summer]: [months_1.default.June, months_1.default.July, months_1.default.August, months_1.default.September],
};
const seasonsSouth = {
    [seasons_1.default.autumn]: seasonsNorth[seasons_1.default.spring],
    [seasons_1.default.winter]: seasonsNorth[seasons_1.default.summer],
    [seasons_1.default.spring]: seasonsNorth[seasons_1.default.autumn],
    [seasons_1.default.summer]: seasonsNorth[seasons_1.default.winter],
};
const hemispheres = {
    "North": seasonsNorth,
    "South": seasonsSouth,
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Choose a hemisphere");
const month = Object.keys(months_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
const hemisphereSeasons = Object.keys(hemispheres)[choiceHemisphere];
Object.entries(hemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    if (months.includes(month))
        console.log(seasons);
});
