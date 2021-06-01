const express = require('express');
const db = require('./query.js');
const port = 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ name: 'Hello json' });
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
