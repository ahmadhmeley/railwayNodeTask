const pool = require("../db");


const gg = {
    "adduser": async (req, res) => {
        const { username ,password , full_name , user_type_id , id_section , note, gender} = req.body;
     
        await pool.query("select add_user($1,$2,$3,$4,$5,$6,$7)", [username , password ,full_name , user_type_id,id_section , note,gender], (error, result) => {
            if (error){
              
                res.status(404).send(error);
            }
            else{
                res.send(result.rows);
                 console.log(result.rows);
            }
        });
    }, "add_project": async (req, res) => {
        const { token } = req.headers;
        const { project_named ,id_state , expected_start , expected_end , real_start , real_end} = req.body;
     
        await pool.query("select add_project($1,$2,$3,$4,$5,$6,$7)", [project_named ,id_state , expected_start , expected_end , real_start , real_end, token], (error, result) => {
            if (error){
              
                res.status(404).send(error);
            }
            else{
                res.send(result.rows);
                 console.log(result.rows);
            }
        });
    }, "add_task": async (req, res) => {
       // const { token } = req.headers;
        const { id_state ,id_project , real_start , real_end,completion_rate,note, expected_start , expected_end ,task_name , token} = req.body;
     
        await pool.query("select add_task($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)", [id_state ,id_project , real_start , real_end,completion_rate,note, expected_start , expected_end,task_name,token], (error, result) => {
            if (error){
               
                res.status(404).send(error);
                console.log(res);
            }
            else{
                res.send(result.rows);
                 console.log(result.rows);
            }
        });
    },

    "add_taskAndroid": async (req, res) => {

        const { id_state ,id_project , real_start , real_end,completion_rate,note, expected_start , expected_end ,task_name , token} = req.body;
     
        await pool.query("select add_task($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)", [id_state ,id_project , real_start , real_end,completion_rate,note, expected_start , expected_end,task_name,token], (error, result) => {
            if (error){
               
                res.status(404).send(error);
               
            }
            else{
                res.send(result.rows);
               console.log(result.rows);
            }
        });
    },
    "add_user_for_task": async (req, res) => {
        const { token } = req.headers;
        const { id_user ,id_task} = req.body;
     
        await pool.query("select add_user_for_task($1,$2,$3)", [id_user ,id_task , token], (error, result) => {
            if (error){
                res.status(404).send(error);
            }
            else{
                res.send(result.rows);
                 console.log(result.rows);
            }
        });
    }
}


module.exports = {gg}