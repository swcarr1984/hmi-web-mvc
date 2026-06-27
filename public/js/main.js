// Fetch device data from backend (simulated for now)
async function loadDevices() {
    const response = await fetch('/api/devices'); // future endpoint
}

// For now, simulate device blocks
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("device-grid");

    for (let i = 1; i <= 12; i++) {
        const status = Math.random() > 0.5 ? "OK" : "FAULT";
        const div = document.createElement("div");

        div.className = `device-block ${status === "OK" ? "ok" : "fault"}`;
        div.innerHTML = `
            <h3>Device ${i}</h3>
            <p>Status: ${status}</p>
            <p>Value: ${Math.floor(Math.random() * 100)}</p>
        `;

        grid.appendChild(div);
    }
});
