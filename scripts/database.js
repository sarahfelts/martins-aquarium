/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3,
            species:"Puffer Fish",
            origin: "Bangladesh"
        },
        {
            name: "Petra",
            food: "pellets",
            size: 1,
            species: "Tetra",
            origin: "Brazil"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}