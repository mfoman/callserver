module.exports = (req, res) => {
    const respons = JSON.stringify({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
    })

    console.log(respons)

    res.json(respons)
}
