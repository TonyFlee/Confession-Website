const Confession = require('../models/Confession');

exports.createConfession = async (req, res) => {
    const { title, message } = req.body;
    try {
        const confession = await Confession.create({ user: req.user.id, title, message });
        res.status(201).json(confession);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllConfessions = async (req, res) => {
    try {
        const confessions = await Confession.find().populate('user', 'username');
        res.json(confessions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
