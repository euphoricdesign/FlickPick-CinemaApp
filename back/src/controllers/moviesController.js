const movieService = require("../services/movieService")

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const data = await movieService.getAllMovies()
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    }
}