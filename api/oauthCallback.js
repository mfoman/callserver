const nedb = require('nedb')
const ax = require('axios')
const callbackUrl = 'https://callserver.mfoman.vercel.app/api/oauthCallback'

module.exports = (req, res) => {
    const respons = JSON.stringify({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
    })

    console.log(respons)

    res.json(respons)

    if (!!req.query.code) {
        authGrant(req.query.code)
    } else {
        saveTokens(req.body)
    }
}

async function saveTokens(tokens) {
    console.log(tokens)
}

async function authGrant(code) {
    ax.post('https://api.onpay.io/oauth2/access_token', {
        grant_type: 'authorization_code',
        code,
        redirect_uri: callbackUrl,
        client_id: 'Test',
    })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
}
