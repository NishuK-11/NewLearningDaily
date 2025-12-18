const { check } = require('express-validator');

exports.permissionAddValidator = [
  check('permission_name', 'permission Name is required').not().isEmpty()
];
