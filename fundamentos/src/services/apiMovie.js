const { default: axios } = require("axios");

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        language: "pt-BR"
    },
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmVhOWI2ZDliODA3M2Q2ZmVlZDg0ZWMzNjNjYTVkMyIsIm5iZiI6MTcyNTkwNTgzMC41MDQyNzgsInN1YiI6IjY2ZDlhMTEyNDAxM2VlYTRlYTkyODMzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EPVl3CkYr7tY_VOxM6KTWF2orTJEq-4ybQKP8HBrTVQ ' + process.env.API_KEY
    }
})  

export default apiMovie