const config = require("./config");
const { openDatabase } = require("./database/init");
const App = require("./app");

const db = openDatabase(config.dbPath);

App.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
