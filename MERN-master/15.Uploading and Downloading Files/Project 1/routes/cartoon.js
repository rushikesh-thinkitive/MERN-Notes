const cartoonController = require('../controllers/cartoonController');
const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.get('/getfileform', cartoonController.getCartoonForm);

router.post('/upload', upload.single('cartoonImage'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    return res.send("<h1>File Uploaded Successfully</h1>");
});

module.exports = router;
