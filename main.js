const app = require("./app");

const start = (port) => {
    try {
        app.listen(port, () => {
            console.log(`getir-assingment-kb listenin on port: ${port}`);
        });
    } catch (err) {
        console.error(err);
        process.exit();
    }
};

start(process.env.PORT || 5000);