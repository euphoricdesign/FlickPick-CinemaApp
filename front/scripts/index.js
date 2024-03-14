const renderCards = require('./renderCards')
const axios = require('axios')

const fetchingData = async() => {
    try {
        const data = await axios.get('http://localhost:5000/movies')
        renderCards(data.data)
    } catch (error) {
       console.log(error)
       throw new Error('La petición no tuvo exito')
    }
}

fetchingData()



