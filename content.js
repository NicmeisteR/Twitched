
let navbar = document.getElementsByClassName("top-nav__menu")[0];
let viewers = document.getElementsByClassName("channel-info-bar__viewers-wrapper")[0];
let streamer = window.location.href.substring(22);
$(navbar).css("background-color: #9147ff!important");
$(".top-nav__menu").removeClass(".tw-c-background-base");
console.log(navbar);
console.log(streamer.substring(22));
console.log(`https://api.twitch.tv/kraken/channels/${streamer}`);

console.log("test");

var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://api.twitch.tv/kraken/channels/${streamer}`,
    "method": "GET",
    "headers": {
        "client-id": "jzkbprff40iqj646a697cyrvl0zt2m6",
        "authorization": "OAuth op2lxc0ulyunsar8vmtdggj9m3jybx"
    }
    }

    $.ajax(settings).done(function (response) {
    console.log(response);
    let followers = `<div class="channel-info-bar__followers-wrapper tw-c-text-followers tw-inline-flex"><div class="tw-inline-flex tw-relative tw-tooltip-wrapper"><div data-a-target="channel-followers-count" class="tw-align-items-center tw-inline-flex tw-stat"><div class="tw-align-items-center tw-inline-flex tw-stat__icon"><div class="tw-align-items-center tw-full-width tw-icon tw-icon--fill tw-inline-flex"><div class="tw-aspect tw-aspect--align-top"><div class="tw-aspect__spacer" style="padding-bottom: 100%;"></div><svg class="tw-icon__svg" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path fill-rule="evenodd" d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z" clip-rule="evenodd"></path></g></svg></div></div></div><div data-a-target="tw-stat-value" class="tw-mg-l-05 tw-stat__value">${response.followers}</div></div><div class="tw-tooltip tw-tooltip--align-center tw-tooltip--down" data-a-target="tw-tooltip-label" role="tooltip" id="dacdc3e8a36332ed5d0c26181c99e9e0">Followers</div></div></div>`;

    $(viewers).append(followers);
});




// https://www.twitch.tv/batchford

// var jqxhr = $.get(`https://api.twitch.tv/kraken/channels/${streamer}`, function () {
//     alert("success");
// })
// .done(function () {
//     alert("second success");
// })
// .fail(function () {
//     alert("error");
// })
// .always(function () {
//     alert("finished");
// });
