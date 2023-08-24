const mysql = require("mysql")

const conn = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'naveen',
    database: 'photo'
});

conn.connect((error) => {
    if(error) throw error;
    console.log("connected !")
})

module.exports = conn
