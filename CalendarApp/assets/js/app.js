define(["marionette"], function(Marionette){
  var CalendarApp = new Marionette.Application();

/*
  CalendarApp.on("before:start", function() {
    var RegionContainer = Marionette.LayoutView.extend({
      el: "#app-container",

      regions: {
        header: "#header-region",
        main: "#main-region",
        dialog: "#dialog-region"
      }
    });
    CalendarApp.regions = new RegionContainer();
  });
*/

  CalendarApp.on("start", function(){
      require(["apps/calendar/calendars_app"], function () {
        CalendarApp.trigger("showCalendar");
    });
   });

  return CalendarApp;
});