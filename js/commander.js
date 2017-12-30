const child_process = require('child_process');

exports.command = function(command) {
    switch (command) {
        case 'dstv on':
            publishToTopic(0);
            break;
        case 'dstv off':
            publishToTopic(1);
            break;
        case 'vol up':
            publishToTopic(2);
            break;
        case 'vol down':
            publishToTopic(3);
            break;
        case 'chan up':
            publishToTopic(4);
            break;
        case 'chan down':
            publishToTopic(5);
            break;
        case 'lights on':
            publishToTopic(6);
            break;
        case 'lights off':
            publishToTopic(7);
            break;
        case 'info':
            publishToTopic(8);
            break;
        case 'left':
            publishToTopic(9);
            break;
        case 'right':
            publishToTopic(10);
            break;
        case 'exit':
            publishToTopic(11);
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
