const { default: axios } = require("axios");

const apiDisney = axios({
    baseURL:' https://api.disneyapi.dev' // site DisneyApi
})

export default apiDisney
