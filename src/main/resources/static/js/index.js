String.prototype.cleanup = function() {
    return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
}

$( window ).ready(function() {
    connect();
});

function connect() {
    var socket = new SockJS('/websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/topic/pushNotification', function (notification) {
            var park = JSON.parse(notification.body);

            var currentdate = new Date();
            var datetime = currentdate.getDate() + "."
                + (currentdate.getMonth()+1)  + "."
                + currentdate.getFullYear() + " "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();


            $('#lastUpdate').html("Last Change: "+park.name+" on "+datetime);
            displayPark(park);
        });
    });
}

function displayPark(park) {
    var el = $('#'+park.name.cleanup());
    if (el.length) {
        el.find('.bayCount').html(park.bayCount);
        el.find('.free').html(park.free);
        el.find('.occupied').html(park.occupied);
        el.fadeTo(400, 0.1).fadeTo(400, 1.0).fadeTo(400, 0.1).fadeTo(400, 1.0);
    } else {
        $('#carparks-body').append("<div class=\"divTableRow\" id=\""+park.name.cleanup()+"\"> "+
                "<div class=\"divTableCell name\">"+park.name+"</div>" +
                "<div class=\"divTableCell baycount\">"+park.bayCount+"</div>" +
                "<div class=\"divTableCell free\">"+park.free+"</div>" +
                "<div class=\"divTableCell occupied\">"+park.occupied+"</div>" +
        "</div>");
    }
}
