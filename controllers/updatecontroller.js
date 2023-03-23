const pool = require("../db");


const gb = {
    "update_useractive": async (req, res) => {
        const { idUsername ,isActive } = req.body;
     
        await pool.query("select update_useractive($1,$2)", [idUsername, isActive], (error, result) => {
            if (error){
              
                res.status(404).send(error);
            }
            else{
                res.send(result.rows);
                //  console.log(result.rows);
            }
        });
    },
    "update_user": async (req, res) => {
        const {id, username ,password , full_name , user_type_id , id_section, isActive , note, gender} = req.body;
     
        await pool.query("select update_user($1,$2,$3,$4,$5,$6,$7,$8,$9)", [id ,username , password ,full_name , user_type_id,id_section ,isActive, note,gender], (error, result) => {
            if (error){
              
                res.status(404).send(error);
            }
            else{
                res.send(result.rows);
                //  console.log(result.rows);
            }
        });
    },"update_project": async (req, res) => {
        const { token } = req.headers;
        const { id,project_named ,id_state , expected_start , expected_end , real_start , real_end} = req.body;
     
        await pool.query("select update_project($1,$2,$3,$4,$5,$6,$7,$8)", [ id ,project_named ,id_state , expected_start , expected_end , real_start , real_end, token], (error, result) => {
            if (error){
              
                res.status(404).send(error);
            }
            else{
                res.send(result.rows);
                 console.log(result.rows);
            }
        });
    },
    "update_task": async (req, res) => {
       
        const {id, id_state ,id_project , real_start , real_end,completion_rate,note, expected_start , expected_end ,task_name , token} = req.body;
     
        await pool.query("select update_task($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)", [ id ,id_state ,id_project , real_start , real_end,completion_rate,note, expected_start , expected_end,task_name,token], (error, result) => {
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


module.exports = {gb}