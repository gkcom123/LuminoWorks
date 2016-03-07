/**
 * Created by gunjan.kumar on 28/11/15.
 */
var mysql      = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : 'gunjan',
    database    : 'lworks'
});
exports.pool = pool;
