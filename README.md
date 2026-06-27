## MVC based HMI/GUI Web Interface for Device Display

Future: To be developed into High-Performance HMI (HPHMI) for EDIM project.

This Repository focuses on structured graphical interfaces for:
- Real‑time visualization of process variables
- Device and subsystem status panels
- Operator command interfaces
- Configurable widgets and layout components
- REST/WebSocket data pipelines for live updates

This project is designed as a systems friendly codebase: 
- clear module boundaries
- predictable naming
- an architecture that can scale from simple webpages to full industrial HMI panels.

Future expansions will include:
- reusable UI components
- protocol adapters
- templates for common industrial workflows


NPM MVC Project Structure – Uses Express Web Server

```text
hmi-web-mvc/
│
├── controllers/
│   └── deviceController.js
│
├── models/
│   └── deviceModel.js
│
├── views/
│   ├── layout.html
│   ├── index.html
│   └── components/
│       └── deviceBlock.html
│
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
│
├── app.js
└── package.json
