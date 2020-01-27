export class Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{
    slot: number;
    type: {
      name: string;
    };
  }>;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  sprites: {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
  };
}
