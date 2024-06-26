const imagerCreate = require('../models/imagerModel.js');

const createImager = (async(req, res) => {
    const { username, useremail, password } = req.body;

    try {
        const existImager = await imagerCreate.findOne({ useremail });

        if (existImager) {
            console.log(Error)
            return res.status(400).json({ message: 'Email already exists.' });
        }
        const newImager = new imagerCreate({
            username,
            useremail,
            password
        });
        await newImager.save();

        res.status(201).json({ message: 'Imager created successfully', user: newImager });

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Imager creation failed', error });
    }
});

module.exports = {createImager};