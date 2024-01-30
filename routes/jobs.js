const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');


router.get('/test', (req, res) => {
    res.send('Test route');
});

//add job vis post

router.post('/add', (req, res) => {
    let { title, salary, description, company, email, new_jobs } = req.body;

    //insert
    Job.create({
        title,
        salary,
        description,
        company,
        email,
        new_jobs
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});

module.exports = router