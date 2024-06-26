import express from "express";

import * as db from "./src/config/db/initialData.js";
import userRoutes from "./src/modules/routes/UserRoutes.js";

const app = express();
const env = process.env;
const PORT = env.PORT || 8081;

db.createInitialData();

app.use(express.json());

app.use(userRoutes);

app.get("/api/status", (req, res) => {
    return res.status(200).json( {
        service: "Auth-api",
        status: "up",
        httpStatus: 200,
    });
});


app.listen(PORT, () => {
    console.info("Server started at port", PORT);
});
