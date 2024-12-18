export interface Author {
  id: number;
  name: string;
  username: string;
  email: string;
  avatar_url: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    stateAbbr: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const AuthorDataRaw: Author[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "SincereLeanne@hildegard.org",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      stateAbbr: "MA",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    avatar_url: "avatars/person_ponytail_swirl.png?raw=true",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona LLC",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell (you)",
    username: "Antonette",
    email: "ervin.howell@anastasia.net",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      stateAbbr: "MO",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    avatar_url: "avatars/person_beard.png?raw=true",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist Inc",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    avatar_url: "avatars/person_glasses.png?raw=true",
    username: "Samantha",
    email: "ClementineNathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      stateAbbr: "NY",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson LLC",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    avatar_url: "avatars/person_colored.png?raw=true",
    username: "Karianne",
    email: "Patricia.Lebsack@kale.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      stateAbbr: "ID",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.org",
    company: {
      name: "Robel-Corkery LLC",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    avatar_url: "avatars/person_hair_down_headband.png?raw=true",
    username: "Kamren",
    email: "Chelsey.Dietrich@demarco_info.com",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      stateAbbr: "MN",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco_info.com",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    avatar_url: "avatars/person_pixie_cut_light_brown.png?raw=true",
    username: "Leopoldo_Corkery",
    email: "Dennis.Schulist@ola.org",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      stateAbbr: "ME",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman LLC",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    avatar_url: "avatars/person_spikey_pompadour.png?raw=true",
    username: "Elwyn.Skiles",
    email: "Kurtis.Weissnat@JohnElvisGroup.com",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      stateAbbr: "CA",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "JohnElvisGroup.com",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolf",
    avatar_url: "avatars/person_short_gray.png?raw=true",
    username: "Maxime_Nienow",
    email: "NickRunolf@JacAbernathyGroup.com",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      stateAbbr: "PA",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "JacAbernathyGroup.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    avatar_url: "avatars/person_ponytail.png?raw=true",
    username: "Delphine",
    email: "Glenna.Reichert@conrad.com",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      stateAbbr: "CO",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons LLC",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    avatar_url: "avatars/person_pixie_cut_red.png?raw=true",
    username: "Moriah.Stanton",
    email: "Clementina.DuBuque@ambrose.net",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      stateAbbr: "GA",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

export const AuthorData: Record<number, Author> = AuthorDataRaw.reduce(
  (acc, val) => {
    acc[val.id] = val; // Use author id as key, map to author object
    return acc;
  },
  {} as Record<number, Author> 
);

export const AvatarFallbackUrl =
  "https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/avatars/person_anonymous.png?raw=true";
