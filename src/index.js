const { Application } = require("./application");

const PORT = 5000;
const application = new Application({ port: PORT });

application.start();