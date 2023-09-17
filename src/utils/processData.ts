import IGamesObj from "../interfaces/IGamesObj";

interface ICategorizedData {
  genre: string;
  games: IGamesObj[];
}

export default function processData(data: IGamesObj[]): ICategorizedData[] {
  const categorizedData: ICategorizedData[] = [];

  data.forEach((item) => {
    const { genre } = item;

    if (Array.isArray(genre)) {
      genre.forEach((g) => {
        const existingCategory = categorizedData.find((category) => category.genre === g);

        if (existingCategory) {
          existingCategory.games.push(item);
        } else {
          const newCategory: ICategorizedData = {
            genre: g,
            games: [item]
          };
          categorizedData.push(newCategory);
        }
      });
    }
  });


  return categorizedData;
}





