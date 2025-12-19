// {
//     "permission_name":"",
//     "default":""
// }

const express = require('express');
const router = express.Router(); // ✅ yaha router banaya
const { permissionAddValidator, permissionDeleteValidator, permissionUpdateValidator} = require('../helpers/adminValidator');
const { addPermission, getPermissions, deletePermission, updatePermission } = require('../controllers/admin/permissionController');
const auth = require("../middlewares/authMiddleware");
const { onlyAdminAccess } = require('../middlewares/adminMiddleware');
//permission routes
router.post('/add-permission',auth, permissionAddValidator,addPermission);
router.get('/get-permissions', auth,onlyAdminAccess,getPermissions);
router.post('/delete-permission',auth, permissionDeleteValidator,deletePermission);
router.post('/update-permission',auth, permissionUpdateValidator,updatePermission);



module.exports = router; // ✅ router export
