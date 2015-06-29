define(["app","apps/calendar/list/calendar_view"],function(CalendarApp,view){
    CalendarApp.module("Calendar.Normal", function(Normal, CalendarApp, Backbone, Marionette, $, _){
        Normal.Controller = {
            showCalendar: function(){
                console.log("Inside Show Calendar Controller");
                var calendarView = new view();
                calendarView.render();
            }
        };


    });
    return CalendarApp.Calendar.Normal.Controller;
});
