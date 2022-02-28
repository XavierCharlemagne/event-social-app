"use strict";
const db = require("./db");

const add_user = db.prepare('INSERT INTO users WHERE NOT EXISTS ;')
const add_event = db.prepare('INSERT INTO *DB NAME* WHERE NOT EXISTS;')

