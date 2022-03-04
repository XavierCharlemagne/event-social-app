"use strict";
const db = require("./db");
const crypto = require("crypto");
const argon2 = require("argon2");

async function addUser(userID, userPassword){
    const userID = crypto.randomUUID();
    const hash = argon2.hash(userPassword);
    console.log("The hash is: ");
    console.log(hash);
};

addUser("Ellis", "younggeezy");
