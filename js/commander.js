const child_process = require('child_process');

exports.command = function(command) {
    switch (command) {
        case 'dstv on/off':
            publishToTopic(0);
            break;
        case 'vol up':
            publishToTopic(1);
            break;
        case 'vol down':
            publishToTopic(2);
            break;
        case 'chan up':
            publishToTopic(3);
            break;
        case 'chan down':
            publishToTopic(4);
            break;
        case 'ok':
            publishToTopic(5);
            break;
        case 'exit':
            publishToTopic(6);
            break;
        case 'info':
            publishToTopic(7);
            break;
        case 'left':
            publishToTopic(8);
            break;
        case 'right':
            publishToTopic(9);
            break;
    }
};

function publishToTopic(msg) {
    child_process.exec(`mosquitto_pub -t 'dmd' -m ${msg}`, (error, stdout, stderr) => {
        if (error) {
            console.log(error);
            return;
        }
    });
}
