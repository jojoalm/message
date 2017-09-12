/* global Strophe */

//
//
var Arthur = {
 connection: null
};
$(document).ready(function () {
 $('#login_dialog').dialog({
 autoOpen: true,
 draggable: false,
 modal: true,
 title: 'Connect to XMPP',
 buttons: {
 "Connect": function () {
 $(document).trigger('connect', {
 jid: $('#jid').val(),
 password: $('#password').val()
 });
 $('#password').val('');
 $(this).dialog('close');
 }
 }
 });
 });
$(document).bind('connect', function (ev, data) {
 var conn = new Strophe.Connection(
 'https://jabber.hot-chilli.net:5281/http-bind');
 conn.connect(data.jid, data.password, function (status) {
 if (status === Strophe.Status.CONNECTED) {
 $(document).trigger('connected');
 } else if (status === Strophe.Status.DISCONNECTED) {
 $(document).trigger('disconnected');
 }
 });
 Arthur.connection = conn;
});
$(document).bind('connected', function () {
 // nothing here yet
});
$(document).bind('disconnected', function () {
 // nothing here yet
});