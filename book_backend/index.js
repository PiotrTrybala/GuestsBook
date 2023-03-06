const express = require('express');
const app = express();
const crypto = require('crypto');

const fs = require('fs');

const port = process.env.PORT || 4000;
const router = express.Router();

const session_storage = new Map();

router.get('/guests/all', (req, res) => {
    const raw_data = fs.readFileSync('guests.json');
    res.json(JSON.parse(raw_data));
});

router.get('/guests/:id', (req, res) => {

    const raw_data = fs.readFileSync('guests.json');

    let users = JSON.parse(raw_data);

    let user = users.filter(obj => obj.id == req.params.id);
    res.json(user);
});

router.post('/guests/add', (req, res) => {

    const body = req.body;

    const first = body.first_name;
    const last = body.last_name;
    const desc = body.description;

    console.log(first, last, desc);

    let raw_data = fs.readFileSync('guests.json');
    let users = JSON.parse(raw_data);

    users.push({
        "id": users.length + 1,
        "first_name": first,
        "last_name": last,
        "description": desc
    });
    console.log(JSON.stringify(users));
    fs.writeFile('guests.json', JSON.stringify(users), (err) => {
        console.log(err);
    });

    res.sendStatus(201);
});

router.post('/guests/filter', (req, res) => {

    const first_name_filter = req.body.first_name;
    const last_name_filter = req.body.last_name;
    const id_filter = req.body.id;

    let raw_data = fs.readFileSync('guests.json');
    let users = JSON.parse(raw_data);

    if (id_filter !== undefined)
        users = users.filter(user => user.id == id_filter);

    if (last_name_filter !== undefined)
        users = users.filter(user => user.last_name == last_name_filter);

    if (first_name_filter !== undefined)
        users = users.filter(user => user.first_name == first_name_filter);

    res.json(users);
});

router.delete("/guests/:id", (req, res) => {

    let raw_data = fs.readFileSync('guests.json');
    let users = JSON.parse(raw_data);

    let user = users.filter(user => user.id != req.params.id);

    fs.writeFile('guests.json', JSON.stringify(user), (err) => {
        console.log(err);
    });

    res.json(user);
});

router.get('/sessionToken', (req, res) => {
    let token = crypto.createHash('sha256').update(crypto.randomBytes(16)).digest('hex');
    res.json({
        "token": token
    });
});

router.post('/authorize', (req, res) => {
    let token = req.body.token;
    let session_entry = session_storage.get(token);

    console.log(session_entry);

    if (session_entry === undefined) {
        res.sendStatus(403);
        return;
    }

    if (session_entry !== "active") {
        res.sendStatus(403);
        return;
    }

    res.status(200).json({
        "response": "ok"
    })
});

router.post('/signIn', (req, res) => {

    let sess_token = req.body.token;
    let username = req.body.username;
    let password = req.body.password;

    let raw_data = fs.readFileSync('admin_users.json');

    let admins = JSON.parse(raw_data);

    let admin = admins.filter(u => u.username == username && u.password == password);

    if (!admin) {
        res.sendStatus(403);
        return;
    }

    session_storage.set(sess_token, "active");

    console.log("sess_stor: ", session_storage)

    res.json(202);
});

router.post('/signOut', (req, res) => {

    let session_token = req.body.token;

    session_storage.delete(session_token);

    res.sendStatus(200);
});

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})