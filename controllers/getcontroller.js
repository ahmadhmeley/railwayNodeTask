const pool = require("../db");


const gc = {
    "login": async (req, res) => {
        const { username ,password} = req.body;
        console.log(username);
        await pool.query("select * from login($1,$2)", [username , password], (error, result) => {
            if (error){
                console.log(username);
                res.status(404).send(error);
            }
            else{
                res.send(result.rows);
                // console.log(result.rows);
            }
        });
    },  "getList": async (req, res) => {
        const name = req.params.name;
        await pool.query("select * from get_table($1)", [name]).then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    },  "getprojects": async (req, res) => {
        await pool.query("select * from get_projects()").then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    } , "getUsers": async (req, res) => {
        await pool.query("select * from get_users()").then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    },
    "get_managment_tasks": async (req, res) => {
        const id = req.params.name;
        await pool.query("select * from get_managment_tasks($1)", [id]).then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    }, "get_managment_tasksadmin": async (req, res) => {
        await pool.query("select * from get_managment_tasksadmin()").then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    }, "get_managment_tasksuser": async (req, res) => {
        const { from , to} = req.body;
        await pool.query("select * from get_managment_tasksuser($1,$2)" , [from ,to]).then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    },
    "get_usersAndSections": async (req, res) => {
        await pool.query("select * from get_usersandsections()").then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    },
    "get_taskadmin": async (req, res) => {
        await pool.query("select * from get_taskadmin()").then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    },
    "getTaskandUser": async (req, res) => {
        await pool.query("select * from getTaskandUser()").then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    },

    "get_usersidandnameonly": async (req, res) => {
        await pool.query("select * from get_usersidandnameonly()").then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    },
    "getUpdateVersion": async (req, res) => {
        await pool.query("select * from getUpdateVersion()").then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    },"getUpdateVersionApk": async (req, res) => {
        await pool.query("select * from getupdateversionapk()").then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    }
    
    
    ,"vvvvvvvvvvvvvvvvvv": async (req, res) => {
      

        const { idd } = req.body;
        await pool.query("select * from gettasksbyuserandroid($1)" ,[idd]).then(result => {
            res.send(result.rows);
            console.log(res.body);
        }).catch(error => {
            console.log(res.body);
            res.status(404).send(error);
        });
    },
    "get_tasksbyidprojectandroid": async (req, res) => {
        const id = req.params.id;
        const  id_user = req.params.id_user;
        await pool.query("select * from get_tasksbyidprojectandroid($1,$2)", [id , id_user]).then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.status(404).send(error);
        });
    }
}


module.exports = {gc}