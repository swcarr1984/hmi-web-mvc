## MVC based HMI/GUI Web Interface for Device Display

Future: To be developed into High-Performance HMI (HPHMI) for EDIM project.

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
