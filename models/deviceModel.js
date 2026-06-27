// Simulated device model
// In a real system this would pull from:
// - PLC via ADS/Modbus
// - Edge runtime
// - Another program via REST/WebSocket
// - Shared memory or IPC

class DeviceModel {
    static getDevices() {
        // 12 simple device inputs
        const devices = [];

        for (let i = 1; i <= 12; i++) {
            devices.push({
                id: i,
                name: `Device ${i}`,
                status: Math.random() > 0.5 ? "OK" : "FAULT",
                value: Math.floor(Math.random() * 100)
            });
        }

        return devices;
    }
}

module.exports = DeviceModel;
