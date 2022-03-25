const express = require('express')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default: fetch}) => fetch(...args))

// All Colors
// localhost:3000/color
router.get('/', (req, res)=> {
    const URL = 'https://api.sampleapis.com/csscolornames/colors'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/colors', {
                title: 'All Colors',
                name: 'Colors List',
                data
            })
        })
})

module.exports = router