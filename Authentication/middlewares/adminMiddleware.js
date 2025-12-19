const onlyAdminAccess = async (req, res, next) => {
  try {
    // role check
    if (req.user.role !== 1) {
      return res.status(403).json({
        success: false,
        msg: "You don't have permission to access this route!"
      });
    }

    next(); // ✅ VERY IMPORTANT

  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: 'Something went wrong!'
    });
  }
};

module.exports = {
  onlyAdminAccess
};
