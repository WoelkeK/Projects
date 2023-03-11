

export interface BussinesDetails{
    id: number
    name: string;
    imageSrc: string;
    info: [string, string];
    rating: string;
    price: {
        value: number;
        currency: string;
    };
}

export const mockApiResponse: BussinesDetails[] = [
    {       id: 1,
            imageSrc:"https://placeimg.com/640/480/any",
            name:"Super biznes",
            info:['kup tu', 'nie tam'],
            rating:"4.4",
            price:{value: 12.44, currency: "PLN"},
  },
  {       id: 2,
          imageSrc:"https://placeimg.com/640/480/any",
          name:"Żabka",
          info:['kup tu', 'taniej nie będzie'],
          rating:"4.4",
          price:{value: 111.14, currency: "PLN"},
  },
  {       id: 3,
          imageSrc:"https://placeimg.com/640/480/any",
          name:"Bierdornka",
          info:['kup tu', 'dostaniesz rabat'],
          rating:"4.1",
          price:{value: 78.21, currency: "PLN"},
  }
  ]