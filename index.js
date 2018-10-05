let express = require('express');
let app = express();
let formidable = require('express-formidable');
let fs = require('fs');

app.use(formidable({uploadDir: './public'}));
app.listen(3000,() => console.log('server started'));

app.post('/', (req, res ) => {
    //console.log(req.files.hinh);
    fs.rename(req.files.hinh.path,req.files.hinh.path + '.jpg', error => {
        res.send('Khong upload duoc!')
    } );
    

});