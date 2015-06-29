requirejs.config({
    baseUrl: "assets/js",
    paths: {
        backbone: "vendor/backbone",
        "backbone.picky": "vendor/backbone.picky",
        "backbone.syphon": "vendor/backbone.syphon",
        jquery: "vendor/jquery",
        "jquery-ui": "vendor/jquery-ui-1.10.3",
        json2: "vendor/json2",
        localstorage: "vendor/backbone.localstorage",
        marionette: "vendor/backbone.marionette",
        spin: "vendor/spin",
        "spin.jquery": "vendor/spin.jquery",
        text: "vendor/text",
        tpl: "vendor/underscore-tpl",
        underscore: "vendor/underscore",
        fullCalendar:"vendor/fullcalendar",
        moment:"vendor/moment.min",
        scheduler:"vendor/scheduler.min",
        syphon:"vendor/backbone.syphon",
        localstorage:"vendor/backbone.localstorage"
    },

    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["jquery", "underscore", "json2"],
            exports: "Backbone"
        },
        "backbone.picky": ["backbone"],
        "backbone.syphon": ["backbone"],
        marionette: {
            deps: ["backbone"],
            exports: "Marionette"
        },
        "jquery-ui": ["jquery"],
        localstorage: ["backbone"],
        "spin.jquery": ["spin", "jquery"],
        tpl: ["text"],
        scheduler:{
            deps:["moment","jquery","fullCalendar"],
            exports:"FullCalendar"
        }
    }
});

require(["app"],function(CalendarApp){
         CalendarApp.start();
});