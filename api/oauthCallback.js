const nedb = require('nedb')
const ax = require('axios')

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
    console.log(code)

    await ax.post('https://api.onpay.io/oauth2/access_token', {
        grant_type: 'authorization_code',
        code,
        redirect_uri: '/api/oauthCallback',
        client_id: 'Test',
    })
}
