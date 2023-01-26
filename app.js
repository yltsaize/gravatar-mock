const avatar = require("generate-avatar");
const express = require('express');
const app = express();
const port = process.env.PORT && parseInt(process.env.PORT) || 3000;

app.get('/avatar/s/:email/', (req, res) => {
    let image = avatar.generateFromString(req.params.email);
    let filename = req.params.email.split("@")[0] + '.svg';
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.send(image).end();
});

app.listen(port, () => {
    console.log(`gravatar-mock listening on port ${port}`);
});
