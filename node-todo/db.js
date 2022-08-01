const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config()

const connection = () => {
    return {
        init: function () {
          return  mysql.createConnection({
                host: 'localhost',
                user: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                database: 'my_db'
            })
        },
        db_open: function (con) {
            con.connect(function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('database connected');
                }
            })
        }
    }
}

module.exports = connection;
