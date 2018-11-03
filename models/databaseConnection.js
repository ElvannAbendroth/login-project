var sql = require('mysql');

/*
server adress: 35.237.104.129
Username: Webapp
Password: process.env.MYSQL_PASSWORD
Database: CreateWaves */

class DatabaseConnection{

    constructor(){
        this.serverIP = '35.237.104.129';
        this.username = 'Webapp'
        this.password = 'niinkuinnuoperhosetkin';
        this.database = 'CreateWaves';
        //attributes could just go directly in the connection as parameters.
        this.connection = sql.createConnection({host: this.serverIP, user: this.username, password: this.password, database: this.database})

    }

    query(table, columns, successCallback, errorCallback){
        this.connection.query('SELECT '+ columns +' from ' + table,
        (error, result) => {
            if (error){
                errorCallback(error);
            }
            else{
                successCallback(result);
            }
        });

    }

}

module.exports = DatabaseConnection;