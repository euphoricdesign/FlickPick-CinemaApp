module.exports = {
    getAllMovies: async () => {
        try {
            const response = await fetch('https://students-api.up.railway.app/movies');
            
            // Verificar si la solicitud fue exitosa
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue correcta');
            }
            
            // Parsear el JSON en la respuesta
            const data = await response.json();
            
            return data;
        } catch (error) {
            // Manejar cualquier error
            console.error('Hubo un problema con la operación fetch:', error);
            throw error;
        }
    }
}