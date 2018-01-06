var url = '/api/payload';

$('#power').click(function() {
    $.post(url, {
        data: 'dstv on/off'
    }, function(err, res) {

    });
});

$('#volume-up').click(function() {
    $.post(url, {
        data: 'vol up'
    }, function(err, res) {

    });
});

$('#volume-down').click(function() {
    $.post(url, {
        data: 'vol down'
    }, function(err, res) {

    });
});

$('#channel-up').click(function() {
    $.post(url, {
        data: 'chan up'
    }, function(err, res) {

    });
});

$('#channel-down').click(function() {
    $.post(url, {
        data: 'chan down'
    }, function(err, res) {

    });
});

$('#ok').click(function() {
    $.post(url, {
        data: 'ok'
    }, function(err, res) {

    });
});

$('#info').click(function() {
    var value = $('#info').val();
    $.post(url, {
        data: 'info'
    }, function(err, res) {

    });
});

$('#exit').click(function() {
    var value = $('#exit').val();
    $.post(url, {
        data: 'exit'
    }, function(err, res) {

    });
});

$('#left').click(function() {
    $.post(url, {
        data: 'left'
    }, function(err, res) {

    });
});

$('#right').click(function() {
    $.post(url, {
        data: 'right'
    }, function(err, res) {

    });
});

    $("#up").click(function() {
        $.post(url, {
            data: 'up'
        }, function(err, res) {

        });
    });

    $("#down").click(function(e) {
        $.post(url, {
            data: 'down'
        }, function(err, res) {

        });
    });
