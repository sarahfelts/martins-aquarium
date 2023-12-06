const database = {
    fish: [
        {
            image: "http://upload.wikimedia.org/wikipedia/commons/d/df/Spotted_Pufferfish_Arothron_meleagris_02.JPG",
            name: "Bart",
            food: "crustaceans",
            length: 3,
            species:"Pufferfish",
            location: "Bangladesh"
        },
        {
            image: "http://ourmarinespecies.com/wp-content/uploads/2019/03/cardinal_tetras_1.jpg",
            name: "Petra",
            food: "pellets",
            length: 1,
            species: "Tetra",
            location: "Brazil"
        },
        {
            image:"https://http2.mlstatic.com/blue-tang-paracanthurus-hepatus-pequeno-D_NQ_NP_458421-MLB20781518792_062016-F.jpg",
            name: "Bluey",
            food:"plankton",
            length: 5,
            species:"Blue Tang",
            location: "Australia",
        },
        {
            image:"https://smartaquariumguide.com/wp-content/uploads/2022/04/atlantic-pygmy-octopus.jpg",
            name:"Ringo",
            food: "crustaceans",
            length:"6",
            species: "Atlantic Pygmy Octopus",
            location: "Costa Rica",
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}