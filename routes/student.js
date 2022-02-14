const {Router} = require("express")
const {getStudent, Createstudent, getAllStudents, UpdateStudent, deleteStudent} = require("../controllers/student")
const router = Router()
router.route("").post(Createstudent).get(getAllStudents)
router.route("/:id").get(getStudent).put(UpdateStudent).delete(deleteStudent)

module.exports=router