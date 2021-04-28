const router = require('express').Router();
const { URL, dir, length, SECRET } = require('../config');
const { Random } = require('../assets/js/util.js');
let string = "";

router.get('/', (req, res) => {
    res.send('index');
});

router.post('/upload', async (req, res) => {
    if(req.body.SECRET) {
        if(req.body.SECRET == SECRET) {
            const file = req.files.file;
            const extension = require('path').extname(file.name);
            const newName = Random(length) + extension;
            const allowExtensions = /png|jpeg|jpg|gif/;
            if(allowExtensions.test(extension)) {
                await require('util').promisify(file.mv)(`./src/${dir}/${newName}`);
                string = `${URL}/${newName}`;
            } else {
                string = 'Error: Imvalid format, only files with png, jpeg, jpg or gif extension.';
            }
        } else {
            string = 'Error: The secret key is invalid.';
        }
    } else {
        string = 'Error: No file data was received.';
    }
    res.send(string);
});

module.exports = router;