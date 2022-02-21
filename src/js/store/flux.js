const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: []
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
			}
		}
	}
	};

export default getState;
