const express = require('express');

const router = express.Router();

const lsitcontroller = require("./controllers/lsitcontroller").f;
const getcontroller = require("./controllers/getcontroller").gc;
const addcontroller = require("./controllers/addcontroller").gg;
const updatecontroller = require("./controllers/updatecontroller").gb;
const fileController = require("./controllers/filecontroller").fc;


router.get("/getList/:name", lsitcontroller.getList);
router.post("/login", getcontroller.login);
router.get("/getprojects", getcontroller.getprojects);
router.get("/getUpdateProject", getcontroller.getUpdateVersion);
router.get("/getUpdateProjectApk", getcontroller.getUpdateVersionApk);
router.get("/getUsers", getcontroller.getUsers);
router.get("/getUserAndSections", getcontroller.get_usersAndSections);
router.get("/gettaskAdmin", getcontroller.get_taskadmin);
router.get("/getmanagmenttasksadmin", getcontroller.get_managment_tasksadmin);
router.get("/getAllTaskandUser", getcontroller.getTaskandUser);
router.get("/getAllUserIdAndName", getcontroller.get_usersidandnameonly);
router.post("/getmanagmenttasksuser", getcontroller.get_managment_tasksuser);
router.get("/get_managment_tasks/:id", getcontroller.get_managment_tasks);
router.post("/getffff/:idd", getcontroller.vvvvvvvvvvvvvvvvvv);
router.get("/get_managment_tasksAndroidByID/:id/:id_user", getcontroller.get_tasksbyidprojectandroid);


router.post("/uploadFile", fileController.uploadFile);
router.get("/downloadFile/:filename", fileController.downloadFile);

router.post("/adduser" , addcontroller.adduser);
router.post("/addproject" , addcontroller.add_project);
router.post("/addtask" , addcontroller.add_task);
router.post("/addtaskAndroid" , addcontroller.add_taskAndroid);
router.post("/adduserfortask" , addcontroller.add_user_for_task);

router.put("/updateUserActive" , updatecontroller.update_useractive);
router.put("/updateUser" , updatecontroller.update_user);
router.put("/updateproject" , updatecontroller.update_project);
router.put("/updatetask" , updatecontroller.update_task);


router.post("/deleteFunction" , lsitcontroller.delete_function);
router.post("/addtable" , lsitcontroller.add_table);
router.put("/updatetable" , lsitcontroller.update_table);

module.exports = router;