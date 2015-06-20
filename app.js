// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true,
  domCache: true
});

var mySearchbar = myApp.searchbar('.searchbar', {
    searchList: '.list-block-search',
    searchIn: '.item-title'
});

var calendarFrom = myApp.calendar({
    input: '#calendar-from'
});

var calendarFrom = myApp.calendar({
    input: '#calendar-to'
});

$$(".item-inner").on("click", function () {
  $$(".searchbar-input input").val($$(this).find(".item-title").text());
});

$$(window).on("click", function () {
  $$(".list-block-search").hide();
});
