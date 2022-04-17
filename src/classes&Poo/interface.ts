interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}
const Gta: Game = {
  title: 'grand thef auto',
  description: 'lorem ipsum dolor sit amenor',
  genre: 'open world, action',
  platform: ['pc', 'ps4'],
  getSimilars: (title: string) => {
    console.log(`Similars game to ${title}: Uncharted, etc..`);
  },
};

if (Gta.getSimilars) {
  Gta.getSimilars(Gta.title);
}

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const San: DLC = {
  originalGame: Gta,
  newContent: ['online', 'more guns'],
  title: '',
  description: '',
  genre: '',
};

console.log(San);

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}
