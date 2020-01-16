// const axios = require('axios');
const allMixins = {
    methods: {
        retrieveToken(name) {
            return localStorage.getItem(name)
        }
    }
}
export default allMixins