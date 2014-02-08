function start() {
    console.log('start handler was called');
}

function upload() {
    console.log('upload handler was called');
}

exports.start = start;
exports.upload = upload;

