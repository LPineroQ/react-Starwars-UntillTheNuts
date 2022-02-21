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
			setPlanets:(planets) => {
				const store = getStore()
				setStore({...store, planets:planets})
			},
			getAllVehicles:() => {
				const store = getStore()
				.then(response => { response.json()})
				.then(data => {setStore ({vehicles:data.result})})
			}
		}
	}
	};

export default getState;
