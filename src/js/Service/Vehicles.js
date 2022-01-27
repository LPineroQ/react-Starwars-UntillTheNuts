const url = "https://www.swapi.tech/api/vehicles"
export const getAllVehicles = ()=> {
    return fetch(url)
}