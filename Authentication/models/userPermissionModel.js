

const mongoose = require('mongoose');

const userPermissionSchema = new mongoose.Schema({
   user_id:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User'
   },
   permissions:[
    {
        permission_name:String,
        permission_value:[Number]  //0->create, 1->read, 2->edit  3->delete
    }
   ]
})

module.exports = mongoose.model('Permission',userPermissionSchema);




// await Permission.create({
//   user_id: userId,
//   permissions: [
//     { permission_name: 'article', permission_value: [1,2] },
//     { permission_name: 'users', permission_value: [1] },
//     { permission_name: 'orders', permission_value: [2] },
//     { permission_name: 'payments', permission_value: [2] }
//   ]
// });

// {
//   "_id": "66abc...",
//   "user_id": "user1_id_here",
//   "permissions": [
//     {
//       "permission_name": "article",
//       "permission_value": [1, 2]
//     },
//     {
//       "permission_name": "users",
//       "permission_value": [1]
//     },
//     {
//       "permission_name": "orders",
//       "permission_value": [2]
//     },
//     {
//       "permission_name": "payments",
//       "permission_value": [2]
//     }
//   ]
// }
