const url = "https://www.swapi.tech/api/people"
export const getAllPeople = ()=> {
    return fetch(url)
}
export const getSinglePerson = (id)=> {
    return fetch(`${url}/${id}`)
}

