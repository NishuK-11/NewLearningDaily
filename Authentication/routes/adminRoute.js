// {
//     "permission_name":"",
//     "default":""
// }

const express = require('express');
const router = express.Router(); // ✅ yaha router banaya
const { permissionAddValidator, permissionDeleteValidator, permissionUpdateValidator, storeRoleValidator} = require('../helpers/adminValidator');
const { addPermission, getPermissions, deletePermission, updatePermission } = require('../controllers/admin/permissionController');
const auth = require("../middlewares/authMiddleware");
const { onlyAdminAccess } = require('../middlewares/adminMiddleware');
const { storeRoles, getRoles } = require('../controllers/roleController');
//permission routes
router.post('/add-permission',auth,onlyAdminAccess, permissionAddValidator,addPermission);
router.get('/get-permissions', auth,onlyAdminAccess,getPermissions);
router.post('/delete-permission',auth,onlyAdminAccess, permissionDeleteValidator,deletePermission);
router.post('/update-permission',auth, onlyAdminAccess,permissionUpdateValidator,updatePermission);

//roles route
router.post('/store-role',auth,onlyAdminAccess, storeRoleValidator, storeRoles);
router.get('/get-roles',auth,onlyAdminAccess,getRoles)

module.exports = router; // ✅ router export
