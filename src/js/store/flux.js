const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      vehicles: [],
      favorites: [],
      character: {},
    },
    actions: {
      getCharacters: async () => {
        try {
          const response = await fetch("https://swapi.tech/api/people");
          const data = await response.json();

          // Enhance characters with image URLs
          const charactersWithImages = data.results.map((char, index) => ({
            ...char,
            // Using starwars-visualguide as image source
            image: `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`
          }));

          setStore({ characters: charactersWithImages });
        } catch (error) {
          console.error(error);
        }
      },

      getSingleCharacters: async (id) => {
        try {
          const response = await fetch(`https://swapi.tech/api/people/${id}`);
          const data = await response.json();

          // Add image URL to single character
          const characterWithImage = {
            ...data,
            image: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
          };

          setStore({ character: characterWithImage });
        } catch (error) {
          console.error(error);
        }
      },

      getPlanets: async () => {
        try {
          const response = await fetch("https://swapi.tech/api/planets");
          const data = await response.json();

          // Enhance planets with image URLs
          const planetsWithImages = data.results.map((planet, index) => ({
            ...planet,
            // Using starwars-visualguide as image source
            image: `https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`
          }));

          setStore({ planets: planetsWithImages });
        } catch (error) {
          console.error(error);
        }
      },

      getVehicles: async () => {
        try {
          const response = await fetch("https://swapi.tech/api/vehicles");
          const data = await response.json();

          // Enhance vehicles with image URLs
          const vehiclesWithImages = data.results.map((vehicle, index) => ({
            ...vehicle,
            // Using starwars-visualguide as image source
            image: `https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`
          }));

          setStore({ vehicles: vehiclesWithImages });
        } catch (error) {
          console.error("Error fetching vehicles:", error);
        }
      },

      addFavorite: (item) => {
        const store = getStore();
        // Use id and type for uniqueness
        if (!store.favorites.some(fav => fav.id === item.id && fav.type === item.type)) {
          setStore({ favorites: [...store.favorites, item] });
        }
      },

      removeFavorite: (item) => {
        const store = getStore();
        setStore({
          favorites: store.favorites.filter(
            fav => !(fav.id === item.id && fav.type === item.type)
          )
        });
      },
    }
  };
};

export default getState;