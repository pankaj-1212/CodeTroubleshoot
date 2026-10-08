const config = require("./config");
const { openDatabase } = require("./database/init");
const app = require("./app");

const db = openDatabase(config.dbPath);

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
