const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			getCharacters : async () => {
				try {
				const response = await fetch("https://swapi.dev/api/people")
				console.log(response)
				const data = await response.json()
				console.log(data.results)
				setStore({characters:data.results})
				} catch (error) {
					console.error(error)
				}
			},

			getPlanets : async () => {
				try {
					const response = await fetch("https://swapi.dev/api/planets")
					console.log(response)
					const data = await response.json()
					console.log(data.results)
					setStore({planets : data.results})
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
			

			addFavorites : async () => {
				try {
					const response = await fetch ("")
					console.log(response)
					const data = await response.json()
					console.log()
				} catch (error) {
					console.log(error)
				}
			}
			
		}
	};
};

export default getState;
