define(["app"], function(CalendarApp){
  CalendarApp.module("Calendar", function(Calendar,CalendarApp, Backbone, Marionette, $, _){

    Calendar.Router = Marionette.AppRouter.extend({
      appRoutes: {
        "calendar": "showCalendar"
      }
    });

    var API = {
      showCalendar: function(){
        require(["apps/calendar/list/calendar_controller"],function(calendarController){
                calendarController.showCalendar();
        });

       }
    };



    CalendarApp.on("showCalendar", function(){
           API.showCalendar();
    });


    Calendar.on("start", function(){
      new Calendar.Router({
        controller: API
      });
    });
  });

  return CalendarApp.Calendar;
});
