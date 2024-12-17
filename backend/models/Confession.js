const mongoose = require('mongoose');

const confessionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Confession', confessionSchema);
