// {
//     "permission_name":"",
//     "default":""
// }

const express = require('express');
const router = express.Router(); // ✅ yaha router banaya
const { permissionAddValidator} = require('../helpers/adminValidator');
const { addPermission } = require('../controllers/admin/permissionController');
const auth = require("../middlewares/authMiddleware");

router.post('/add-permission',auth, permissionAddValidator,addPermission);

module.exports = router; // ✅ router export
