const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			People: [],
			Planets: [],
			Vehicles: []
		},
		actions: {
			getAllPeople:() => {
				const setAllPoeple = getStore()
				.then(response => { response.json()})
				.then(json => {setStore ({people:json.result})})
				.catch((error  => {
					console.log(error);
				})),
			}
		}
	}
	};

export default getState;
