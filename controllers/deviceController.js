const DeviceModel = require('../models/deviceModel');

exports.renderDashboard = (req, res) => {
    const devices = DeviceModel.getDevices();

    // Render manually since we are using static HTML
    res.sendFile('views/index.html', { root: process.cwd() });
};
