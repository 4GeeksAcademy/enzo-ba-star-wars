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
			// Use getActions to call a function within a fuction

			getCharacters: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/people")
					console.log(response)
					const data = await response.json()
					console.log(data.results)
					setStore({ characters: data.results })
				} catch (error) {
					console.error(error)
				}
			},
			getSingleCharacters: async (id) => {
				try {
					const response = await fetch("https://swapi.dev/api/people/" + id)
					const data = await response.json()
					console.log(data)
					setStore({ character: data })
				} catch (error) {
					console.error(error)
				}
			},

			getPlanets: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/planets")
					console.log(response)

					if (!response.ok) {
						throw new Error("HTTP Error!!");
					}
					const data = await response.json()
					console.log(data.results)
					setStore({ planets: data.results })
				} catch (error) {
					console.error(error)
				}
			},

			getVehicles: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/vehicles");

					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}

					const data = await response.json();
					console.log("Vehicles:", data.results);

					setStore({ vehicles: data.results }); // Ensure setStore is accessible
				} catch (error) {
					console.error("Error fetching vehicles:", error);
				}
			},


			addFavorite: (item) => {
				const store = getStore();
				if (!store.favorites.includes(item)) {
					setStore({ favorites: [...store.favorites, item] });
				}
			},

			removeFavorite: (item) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(fav => fav !== item) });
			},


		}
	};
};

export default getState;
