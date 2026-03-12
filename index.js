const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

router.get('/error', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'error.html'));
});

router.get('/presentation', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'presentation.html'));
});

router.get('/presentation/download', (req, res) => {
    res.redirect('https://assets.kaistudio.pp.ua/dedark');
});

app.use('/', router);
app.use(express.static(path.join(__dirname, 'view')));
app.use(express.static(path.join(__dirname, 'src')));
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'view', 'error.html'));
});

app.listen(port, () => {
    console.log(`Site is online at http://localhost:${port}`);
    console.log(`Presentation: http://localhost:${port}/presentation`);
});