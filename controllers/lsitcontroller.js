const pool = require("../db");


const f = {
      "getList": async (req, res) => {
        const name = req.params.name;
        await pool.query("select * from get_table($1)", [name]).then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    }, "delete_function": async (req, res) => {
        const { table_name ,id } = req.body;
        await pool.query("select * from delete_function($1,$2)", [table_name,id]).then(result => {
            res.status(200).
            send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    },"add_table": async (req, res) => {
        const { table_name ,name } = req.body;
        await pool.query("select * from add_table($1,$2)", [table_name,name]).then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    }
    ,"update_table": async (req, res) => {
        const {table_name , id ,name } = req.body;
        await pool.query("select * from update_table($1,$2,$3)", [table_name ,id,name]).then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
   
}
}


module.exports = {f}