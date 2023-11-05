const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('callassist.db');

// creates a new table for users
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, phone TEXT, email TEXT)`);
});

db.close();

// returns a dictionary of a specific user's info
async function get_user_info(username){
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM users WHERE username = '${username}'`, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows[0]);
            }
        });
    })
}

// gets a specific user's password based on username
async function get_user_password(username){
    return new Promise((resolve, reject) => {
        db.all(`SELECT password FROM users WHERE username = '${username}'`, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows[0]);
            }
        });
    })
}

// gets a specific user's phone number based on username
async function get_user_phone(username){
    return new Promise((resolve, reject) => {
        db.all(`SELECT phone FROM users WHERE username = '${username}'`, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows[0]);
            }
        });
    })
}

// gets a specific user's email address based on username
async function get_user_email(username){
    return new Promise((resolve, reject) => {
        db.all(`SELECT email FROM users WHERE username = '${username}'`, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows[0]);
            }
        });
    })
}

export default sqlite3;