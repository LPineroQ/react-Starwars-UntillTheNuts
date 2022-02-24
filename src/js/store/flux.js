const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			setPeople:(peoples) => {
				const store = getStore()
				setStore({...store, people:peoples})
			},
			setPlanet:(planets) => {
				const store = getStore()
				setStore({...store, planets:planets})
			},
			setVehicle:(vehicles) => {
				const store = getStore()
				setStore({...store, vehicles:vehicles})
			},
			addFavorites:(name)=>{
				const store = getStore()
				const newFavorites = [...store.favorites,name]
				setStore({...store, favorites:newFavorites})
			}
		}
	}
	};

export default getState;
