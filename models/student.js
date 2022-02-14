const {Schema,model} = require("mongoose")

const StudentSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        std_id:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        courses:{
            type:String,
            enum:['Java FUll-stack',"Mernstack","Python Full-stack"]
        }

},
 {timestamps:true}
)

module.exports = model("student",StudentSchema)