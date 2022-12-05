function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('../assets/cardsImages', false, /\.(png|jpe?g|svg)$/));



export const cardData = [
    {
        id: 1,
        name: "The Demon", 
        image: images["peep-1.png"],
        checked: false, 
        
    }, 
    {
        id: 2,
        name: "The Desinterest", 
        image: images["peep-2.png"],
        checked: false, 
        
    },
    {
        id: 3,
        name: "The Unexpected", 
        image: images["peep-3.png"],
        checked: false, 
        
    },
    {
        id: 4,
        name: "The Advice", 
        image: images["peep-4.png"],
        checked: false, 
        
    },
    {
        id: 5,
        name: "The Smile", 
        image: images["peep-5.png"],
        checked: false,  
        
    },
    {
        id: 6,
        name: "The Pride", 
        image: images["peep-6.png"],
        checked: false,  
        
    },
    {
        id: 7,
        name: "The Zen", 
        image: images["peep-7.png"],
        checked: false,  
        
    },
    {
        id: 8,
        name: "The Compassionate", 
        image: images["peep-8.png"],
        checked: false,  
        
    },
    {
        id: 9,
        name: "The Moustache",
        image: images["peep-9.png"],
        checked: false, 
        
    },
    {
        id: 10,
        name: "The Impressed",
        image: images["peep-10.png"],
        checked: false,  
        
    },
    {
        id: 11,
        name: "The Nice One",
        image: images["peep-11.png"],
        checked: false,  
        
    },
    {
        id: 12,
        name: "The Pirate",
        image: images["peep-12.png"],
        checked: false,  
        
    },
    {
        id: 13,
        name: "The Nice Short One",
        image: images["peep-13.png"],
        checked: false,  
        
    },
    {
        id: 14,
        name: "The Well Groomed",
        image: images["peep-14.png"],
        checked: false, 
        
    },
    {
        id: 15,
        name: "The Cool Moustache",
        image: images["peep-15.png"],
        checked: false,  
        
    },
    {
        id: 16,
        name: "The Hidden Intentions",
        image: images["peep-16.png"],
        checked: false,  
        
    },
    {
        id: 17,
        name: "The Nice Hat",
        image: images["peep-17.png"],
        checked: false,  
        
    },
    {
        id: 18,
        name: "The Love",
        image: images["peep-18.png"],
        checked: false, 
        
    },
    {
        id: 19,
        name: "The Boss Ross",
        image: images["peep-19.png"],
        checked: false, 
        
    },
    {
        id: 20,
        name: "The Demoniac Housekeeper",
        image: images["peep-20.png"],
        checked: false, 
        
    }

]