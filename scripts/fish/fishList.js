import { getFish } from "../database.js";

export const fishList = (fishes) => {
    let fishHTML = ''
    for (const fish of fishes) {
        fishHTML += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`;
    }
    return fishHTML
};

export const mostHolyFish = (fishes) => {
    const holyFish = []

    for (const fish of fishes) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish
};

export const soldierFish = (fishes) => {
    const soldiers = []

    for (const fish of fishes) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
};

export const nonHolyFish = (fishes) => {
    const regularFish = []

    for (const fish of fishes) {
        if (!(fish.length % 3 === 0) && !(fish.length % 5 === 0)) {
            regularFish.push(fish)
        }
    }
    return regularFish
};