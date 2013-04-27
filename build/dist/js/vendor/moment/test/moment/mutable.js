var moment=require("../../moment");exports.mutable={"manipulation methods":function(e){var t={year:function(e){return e.year(2011)},month:function(e){return e.month(1)},date:function(e){return e.date(9)},hours:function(e){return e.hours(7)},minutes:function(e){return e.minutes(33)},seconds:function(e){return e.seconds(44)},milliseconds:function(e){return e.milliseconds(55)},day:function(e){return e.day(2)},startOf:function(e){return e.startOf("week")},endOf:function(e){return e.endOf("week")},add:function(e){return e.add("days",1)},subtract:function(e){return e.subtract("years",2)},local:function(e){return e.local()},utc:function(e){return e.utc()}};e.expect(14);for(method in t)if(t.hasOwnProperty(method)){var n=moment(),r=t[method](n);e.equal(n,r,method+"() should be mutable")}e.done()},"non mutable methods":function(e){var t={clone:function(e){return e.clone()}};e.expect(1);for(method in t)if(t.hasOwnProperty(method)){var n=new Date,r=t[method](moment(n)).toDate();e.notEqual(n,r,method+"() should not be mutable")}e.done()}};