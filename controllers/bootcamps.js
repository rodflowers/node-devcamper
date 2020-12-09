// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @acces   Public
exports.getBootcamps = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: "Show all bootcamps" });  
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @acces   Public
exports.getBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: "Show single bootcamp" });  
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/:id
// @acces   Private
exports.createBootcamps = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: "Create bootcamp" });  
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @acces   Private
exports.updateBootcamps = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: "Update bootcamp" });  
}

// @desc    Update bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @acces   Private
exports.deleteBootcamps = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: "Delete bootcamp" });  
}