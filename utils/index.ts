
export const fetchCars = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a50c716cc6msha9d9435e9b1500cp1517e5jsndd184ebaff8f',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', options)

    const result = await response.json()

    return result
}


