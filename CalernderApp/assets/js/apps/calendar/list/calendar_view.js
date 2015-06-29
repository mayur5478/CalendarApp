define(["app","scheduler","jquery-ui","syphon"],
    function(CalendarApp) {
      CalendarApp.module("Calendar.List.View", function (View, CalendarApp, Backbone, Marionette, $, _) {
        View.Layout = Marionette.LayoutView.extend({
           initialize:function(){
                console.log("Inside Calendar");
          },
          render:function(){
            console.log("Render");
              var viewContext = this;
              $('#calendar').fullCalendar({
                  defaultView: 'agendaWeek',
                  scrollTime:'00.00',
                  isRTL:false,
                  selectable:true,
                  selectOverlap:false,
                  editable:true,
                  height:600,
                  select:function(start,end,event,view){
                        console.log(start+" "+end+" "+event+" "+view);
                      var calendarContext = this;
                      $('#userDialog').dialog({
                          title:"Add New Event",
                          modal:true,
                          buttons:[{
                              text:"Save",
                              click:function(){
                                  var data = Backbone.Syphon.serialize(this);
                                  event.title= data.Details;
                                  event.start = start;
                                  event.end = end;
                                  event.phone = data.Phone;
                                  event.username = data.UserName;
                                  calendarContext.calendar.renderEvent(event,true);
                                  viewContext.closeDialog();
                              }
                                },
                              {
                                  text:"Cancel",
                                  click:viewContext.closeDialog
                              }],
                              close:viewContext.closeDialog
                      });

                  },

                  eventClick:function(event,jsEvent,view){
                      var calendarContext = view;
                      var selector = $('#userDialog');
                        selector.find('#userName')[0].value= event.username;
                        selector.find('#contactNumber')[0].value = event.phone;
                        selector.find('#details')[0].value = event.title;
                        selector.dialog({
                            title:"Edit Event",
                            modal:true,
                            buttons:[{
                                text:"Edit",
                                click:function(){
                                    var data = Backbone.Syphon.serialize(this);
                                   // viewContext.model.save(data);
                                    event.title= data.Details;
                                    event.phone = data.Phone;
                                    event.username = data.UserName;
                                    calendarContext.calendar.updateEvent(event,true);
                                    viewContext.closeDialog(); }
                            },
                                {
                                    text:"Delete",
                                    click:function(){
                                        calendarContext.calendar.removeEvents(event._id);
                                        viewContext.closeDialog();
                                    }

                                },
                                {
                                    text:"Cancel",
                                    click:viewContext.closeDialog
                                }],
                            close:viewContext.closeDialog
                        });
                  }

              });
          },
            closeDialog:function(){
                var selector = $('#userDialog');
                selector.dialog('destroy');
                selector.trigger('reset');
            }

        });



      });
        return CalendarApp.Calendar.List.View.Layout;
    });