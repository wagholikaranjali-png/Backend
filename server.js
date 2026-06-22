const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend Working 🚀");
});

app.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "API Working"
    });
});

app.post("/webhook", (req, res) => {
    console.log(req.body);

    res.status(200).json({
        received: true
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
