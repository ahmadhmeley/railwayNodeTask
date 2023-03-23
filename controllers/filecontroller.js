const fc = {
    uploadFile: (req, res) => {

        if (req.files) {
            console.log(req.files);
            var file = req.files.file;
            var filename = file.name;
            file.mv("./public/" + filename, (err) => {
                if (err) {
                    res.send(err);
                    console.log(err);
                } else {
                    res.send('Done!')
                }
            });
        } else {
            res.send('no file to upload !!!')
            console.log('no file to upload !!!')
        }
    },
    downloadFile: (req, res) => {
        const filename = req.params.filename;
        const file = `${__dirname}/../public/${filename}`;
        res.download(file);
        console.log('done downloading file');
    }
}
module.exports = {
    fc
}