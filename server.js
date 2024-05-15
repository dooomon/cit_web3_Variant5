const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

// 12x12の掛け算表データを返すAPI
app.get('/api/multiplication-table', (req, res) => {
    const table = [];
    for (let i = 1; i <= 12; i++) {
        const row = [];
        for (let j = 1; j <= 12; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    res.json(table);
});

// ルートパスにアクセスがあった場合の処理
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

