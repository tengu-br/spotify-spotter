const axios = require('axios').default;
const qs = require('querystring')

var client_id = process.env.SPOTIFY_CLIENT_API_KEY;
var client_secret = process.env.SPOTIFY_SECRET_API_KEY;

exports.getIndex = async (req, res, next) => {
  
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: client_id,
      password: client_secret,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );

    const genresResponse = await axios.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + response.data.access_token
      }
    })

    res.send(genresResponse.data.genres)
  } catch (error) {
    console.log(error);
    res.send(error)
  }
}