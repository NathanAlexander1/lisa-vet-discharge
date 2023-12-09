const URL_PREFIX = 'http://localhost:3001'

// LIVE SERVER
// const URL_PREFIX = "https://wastenot-kitchen-app.herokuapp.com";

const API = {
  //get random dog
  getRandomDog: () => {
    return fetch(`${URL_PREFIX}/api/dogbreeds/randomdogbreed`).then((res) => res.json());
  },
}

export default API;