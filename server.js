//Express
const express = require('express');
const app = express();

//Cors
const cors = require('cors');
app.use(cors());

//Body Parser
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));

// Postgres
const { Pool, Client } = require('pg');
const con = "postgres://postgres:Sujee123@localhost:5432/itpdm2020";

//get all questions
app.get('/q', function (req, res) {

    const client = new Client({
        connectionString: con
    });

    client.connect()

    var rows;

    client.query('SELECT * FROM file_question ORDER BY question_id', async (err, queryRes) => {

        if (err)
            res.send(err);
        else {
            rows =  queryRes.rows
            await client.end()
            res.send(rows);
        }

    });
});

//get personality type
app.get('/p/:p_type', function (req, res) {

    const client = new Client({
        connectionString: con
    });

    client.connect()
    const pType = req.params.p_type;

    var rows;

    client.query(`SELECT * FROM file_personality WHERE personality_type_code = '${pType}'`, async (err, queryRes) => {

        if (err)
            res.send(err);
        else {
            rows =  queryRes.rows
            await client.end()
            res.send(rows);
        }

    });
});

//app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}...`));