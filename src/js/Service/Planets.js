const url = "https://www.swapi.tech/api/planets"
export const getAllPlanets = ()=> {
    return fetch(url)
}