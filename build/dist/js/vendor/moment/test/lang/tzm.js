var moment=require("../../moment");exports["lang:tzm"]={parse:function(e){function t(t,n,r){e.equal(moment(t,n).month(),r,t+" should be month "+(r+1))}e.expect(96),moment.lang("tzm");var n="ⵉⵏⵏⴰⵢⵔ ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ ⴷⵓⵊⵏⴱⵉⵔ".split("_"),r;for(r=0;r<12;r++)n[r]=n[r].split(" "),t(n[r][0],"MMM",r),t(n[r][1],"MMM",r),t(n[r][0],"MMMM",r),t(n[r][1],"MMMM",r),t(n[r][0].toLocaleLowerCase(),"MMMM",r),t(n[r][1].toLocaleLowerCase(),"MMMM",r),t(n[r][0].toLocaleUpperCase(),"MMMM",r),t(n[r][1].toLocaleUpperCase(),"MMMM",r);e.done()},format:function(e){e.expect(22),moment.lang("tzm");var t=[["dddd, MMMM Do YYYY, h:mm:ss a","ⴰⵙⴰⵎⴰⵙ, ⴱⵕⴰⵢⵕ 14 2010, 3:25:50 pm"],["ddd, hA","ⴰⵙⴰⵎⴰⵙ, 3PM"],["M Mo MM MMMM MMM","2 2 02 ⴱⵕⴰⵢⵕ ⴱⵕⴰⵢⵕ"],["YYYY YY","2010 10"],["D Do DD","14 14 14"],["d do dddd ddd dd","0 0 ⴰⵙⴰⵎⴰⵙ ⴰⵙⴰⵎⴰⵙ ⴰⵙⴰⵎⴰⵙ"],["DDD DDDo DDDD","45 45 045"],["w wo ww","8 8 08"],["h hh","3 03"],["H HH","15 15"],["m mm","25 25"],["s ss","50 50"],["a A","pm PM"],["t\\he DDDo \\d\\ay of t\\he ye\\ar","the 45 day of the year"],["L","14/02/2010"],["LL","14 ⴱⵕⴰⵢⵕ 2010"],["LLL","14 ⴱⵕⴰⵢⵕ 2010 15:25"],["LLLL","ⴰⵙⴰⵎⴰⵙ 14 ⴱⵕⴰⵢⵕ 2010 15:25"],["l","14/2/2010"],["ll","14 ⴱⵕⴰⵢⵕ 2010"],["lll","14 ⴱⵕⴰⵢⵕ 2010 15:25"],["llll","ⴰⵙⴰⵎⴰⵙ 14 ⴱⵕⴰⵢⵕ 2010 15:25"]],n=moment(new Date(2010,1,14,15,25,50,125)),r;for(r=0;r<t.length;r++)e.equal(n.format(t[r][0]),t[r][1],t[r][0]+" ---> "+t[r][1]);e.done()},"format ordinal":function(e){e.expect(31),moment.lang("tzm"),e.equal(moment([2011,0,1]).format("DDDo"),"1","1"),e.equal(moment([2011,0,2]).format("DDDo"),"2","2"),e.equal(moment([2011,0,3]).format("DDDo"),"3","3"),e.equal(moment([2011,0,4]).format("DDDo"),"4","4"),e.equal(moment([2011,0,5]).format("DDDo"),"5","5"),e.equal(moment([2011,0,6]).format("DDDo"),"6","6"),e.equal(moment([2011,0,7]).format("DDDo"),"7","7"),e.equal(moment([2011,0,8]).format("DDDo"),"8","8"),e.equal(moment([2011,0,9]).format("DDDo"),"9","9"),e.equal(moment([2011,0,10]).format("DDDo"),"10","10"),e.equal(moment([2011,0,11]).format("DDDo"),"11","11"),e.equal(moment([2011,0,12]).format("DDDo"),"12","12"),e.equal(moment([2011,0,13]).format("DDDo"),"13","13"),e.equal(moment([2011,0,14]).format("DDDo"),"14","14"),e.equal(moment([2011,0,15]).format("DDDo"),"15","15"),e.equal(moment([2011,0,16]).format("DDDo"),"16","16"),e.equal(moment([2011,0,17]).format("DDDo"),"17","17"),e.equal(moment([2011,0,18]).format("DDDo"),"18","18"),e.equal(moment([2011,0,19]).format("DDDo"),"19","19"),e.equal(moment([2011,0,20]).format("DDDo"),"20","20"),e.equal(moment([2011,0,21]).format("DDDo"),"21","21"),e.equal(moment([2011,0,22]).format("DDDo"),"22","22"),e.equal(moment([2011,0,23]).format("DDDo"),"23","23"),e.equal(moment([2011,0,24]).format("DDDo"),"24","24"),e.equal(moment([2011,0,25]).format("DDDo"),"25","25"),e.equal(moment([2011,0,26]).format("DDDo"),"26","26"),e.equal(moment([2011,0,27]).format("DDDo"),"27","27"),e.equal(moment([2011,0,28]).format("DDDo"),"28","28"),e.equal(moment([2011,0,29]).format("DDDo"),"29","29"),e.equal(moment([2011,0,30]).format("DDDo"),"30","30"),e.equal(moment([2011,0,31]).format("DDDo"),"31","31"),e.done()},"format month":function(e){e.expect(12),moment.lang("tzm");var t="ⵉⵏⵏⴰⵢⵔ ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ ⴷⵓⵊⵏⴱⵉⵔ".split("_"),n;for(n=0;n<t.length;n++)e.equal(moment([2011,n,1]).format("MMMM MMM"),t[n],t[n]);e.done()},"format week":function(e){e.expect(7),moment.lang("tzm");var t="ⴰⵙⴰⵎⴰⵙ ⴰⵙⴰⵎⴰⵙ ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ ⴰⵢⵏⴰⵙ ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ ⴰⵙⵉⵏⴰⵙ ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ ⴰⴽⵔⴰⵙ ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ ⴰⴽⵡⴰⵙ ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ ⴰⵙⵉⵎⵡⴰⵙ ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ ⴰⵙⵉⴹⵢⴰⵙ ⴰⵙⵉⴹⵢⴰⵙ".split("_"),n;for(n=0;n<t.length;n++)e.equal(moment([2011,0,2+n]).format("dddd ddd dd"),t[n],t[n]);e.done()},from:function(e){e.expect(30),moment.lang("tzm");var t=moment([2007,1,28]);e.equal(t.from(moment([2007,1,28]).add({s:44}),!0),"ⵉⵎⵉⴽ","44 seconds = a few seconds"),e.equal(t.from(moment([2007,1,28]).add({s:45}),!0),"ⵎⵉⵏⵓⴺ","45 seconds = a minute"),e.equal(t.from(moment([2007,1,28]).add({s:89}),!0),"ⵎⵉⵏⵓⴺ","89 seconds = a minute"),e.equal(t.from(moment([2007,1,28]).add({s:90}),!0),"2 ⵎⵉⵏⵓⴺ","90 seconds = 2 minutes"),e.equal(t.from(moment([2007,1,28]).add({m:44}),!0),"44 ⵎⵉⵏⵓⴺ","44 minutes = 44 minutes"),e.equal(t.from(moment([2007,1,28]).add({m:45}),!0),"ⵙⴰⵄⴰ","45 minutes = an hour"),e.equal(t.from(moment([2007,1,28]).add({m:89}),!0),"ⵙⴰⵄⴰ","89 minutes = an hour"),e.equal(t.from(moment([2007,1,28]).add({m:90}),!0),"2 ⵜⴰⵙⵙⴰⵄⵉⵏ","90 minutes = 2 hours"),e.equal(t.from(moment([2007,1,28]).add({h:5}),!0),"5 ⵜⴰⵙⵙⴰⵄⵉⵏ","5 hours = 5 hours"),e.equal(t.from(moment([2007,1,28]).add({h:21}),!0),"21 ⵜⴰⵙⵙⴰⵄⵉⵏ","21 hours = 21 hours"),e.equal(t.from(moment([2007,1,28]).add({h:22}),!0),"ⴰⵙⵙ","22 hours = a day"),e.equal(t.from(moment([2007,1,28]).add({h:35}),!0),"ⴰⵙⵙ","35 hours = a day"),e.equal(t.from(moment([2007,1,28]).add({h:36}),!0),"2 oⵙⵙⴰⵏ","36 hours = 2 days"),e.equal(t.from(moment([2007,1,28]).add({d:1}),!0),"ⴰⵙⵙ","1 day = a day"),e.equal(t.from(moment([2007,1,28]).add({d:5}),!0),"5 oⵙⵙⴰⵏ","5 days = 5 days"),e.equal(t.from(moment([2007,1,28]).add({d:25}),!0),"25 oⵙⵙⴰⵏ","25 days = 25 days"),e.equal(t.from(moment([2007,1,28]).add({d:26}),!0),"ⴰⵢoⵓⵔ","26 days = a month"),e.equal(t.from(moment([2007,1,28]).add({d:30}),!0),"ⴰⵢoⵓⵔ","30 days = a month"),e.equal(t.from(moment([2007,1,28]).add({d:45}),!0),"ⴰⵢoⵓⵔ","45 days = a month"),e.equal(t.from(moment([2007,1,28]).add({d:46}),!0),"2 ⵉⵢⵢⵉⵔⵏ","46 days = 2 months"),e.equal(t.from(moment([2007,1,28]).add({d:74}),!0),"2 ⵉⵢⵢⵉⵔⵏ","75 days = 2 months"),e.equal(t.from(moment([2007,1,28]).add({d:76}),!0),"3 ⵉⵢⵢⵉⵔⵏ","76 days = 3 months"),e.equal(t.from(moment([2007,1,28]).add({M:1}),!0),"ⴰⵢoⵓⵔ","1 month = a month"),e.equal(t.from(moment([2007,1,28]).add({M:5}),!0),"5 ⵉⵢⵢⵉⵔⵏ","5 months = 5 months"),e.equal(t.from(moment([2007,1,28]).add({d:344}),!0),"11 ⵉⵢⵢⵉⵔⵏ","344 days = 11 months"),e.equal(t.from(moment([2007,1,28]).add({d:345}),!0),"ⴰⵙⴳⴰⵙ","345 days = a year"),e.equal(t.from(moment([2007,1,28]).add({d:547}),!0),"ⴰⵙⴳⴰⵙ","547 days = a year"),e.equal(t.from(moment([2007,1,28]).add({d:548}),!0),"2 ⵉⵙⴳⴰⵙⵏ","548 days = 2 years"),e.equal(t.from(moment([2007,1,28]).add({y:1}),!0),"ⴰⵙⴳⴰⵙ","1 year = a year"),e.equal(t.from(moment([2007,1,28]).add({y:5}),!0),"5 ⵉⵙⴳⴰⵙⵏ","5 years = 5 years"),e.done()},suffix:function(e){e.expect(2),moment.lang("tzm"),e.equal(moment(3e4).from(0),"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ ⵉⵎⵉⴽ","prefix"),e.equal(moment(0).from(3e4),"ⵢⴰⵏ ⵉⵎⵉⴽ","suffix"),e.done()},"now from now":function(e){e.expect(1),moment.lang("tzm"),e.equal(moment().fromNow(),"ⵢⴰⵏ ⵉⵎⵉⴽ","now from now should display as in the past"),e.done()},fromNow:function(e){e.expect(2),moment.lang("tzm"),e.equal(moment().add({s:30}).fromNow(),"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ ⵉⵎⵉⴽ","in a few seconds"),e.equal(moment().add({d:5}).fromNow(),"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ 5 oⵙⵙⴰⵏ","in 5 days"),e.done()},"calendar day":function(e){e.expect(6),moment.lang("tzm");var t=moment().hours(2).minutes(0).seconds(0);e.equal(moment(t).calendar(),"ⴰⵙⴷⵅ ⴴ 02:00","today at the same time"),e.equal(moment(t).add({m:25}).calendar(),"ⴰⵙⴷⵅ ⴴ 02:25","Now plus 25 min"),e.equal(moment(t).add({h:1}).calendar(),"ⴰⵙⴷⵅ ⴴ 03:00","Now plus 1 hour"),e.equal(moment(t).add({d:1}).calendar(),"ⴰⵙⴽⴰ ⴴ 02:00","tomorrow at the same time"),e.equal(moment(t).subtract({h:1}).calendar(),"ⴰⵙⴷⵅ ⴴ 01:00","Now minus 1 hour"),e.equal(moment(t).subtract({d:1}).calendar(),"ⴰⵚⴰⵏⵜ ⴴ 02:00","yesterday at the same time"),e.done()},"calendar next week":function(e){e.expect(15),moment.lang("tzm");var t,n;for(t=2;t<7;t++)n=moment().add({d:t}),e.equal(n.calendar(),n.format("dddd [ⴴ] LT"),"Today + "+t+" days current time"),n.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(n.calendar(),n.format("dddd [ⴴ] LT"),"Today + "+t+" days beginning of day"),n.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(n.calendar(),n.format("dddd [ⴴ] LT"),"Today + "+t+" days end of day");e.done()},"calendar last week":function(e){e.expect(15),moment.lang("tzm");for(i=2;i<7;i++)m=moment().subtract({d:i}),e.equal(m.calendar(),m.format("dddd [ⴴ] LT"),"Today - "+i+" days current time"),m.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(m.calendar(),m.format("dddd [ⴴ] LT"),"Today - "+i+" days beginning of day"),m.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(m.calendar(),m.format("dddd [ⴴ] LT"),"Today - "+i+" days end of day");e.done()},"calendar all else":function(e){e.expect(4),moment.lang("tzm");var t=moment().subtract({w:1}),n=moment().add({w:1});e.equal(t.calendar(),t.format("L"),"1 week ago"),e.equal(n.calendar(),n.format("L"),"in 1 week"),t=moment().subtract({w:2}),n=moment().add({w:2}),e.equal(t.calendar(),t.format("L"),"2 weeks ago"),e.equal(n.calendar(),n.format("L"),"in 2 weeks"),e.done()},"weeks year starting sunday":function(e){e.expect(5),e.equal(moment([2011,11,31]).week(),1,"Dec 31 2011 should be week 1"),e.equal(moment([2012,0,6]).week(),1,"Jan  6 2012 should be week 1"),e.equal(moment([2012,0,7]).week(),2,"Jan  7 2012 should be week 2"),e.equal(moment([2012,0,13]).week(),2,"Jan 13 2012 should be week 2"),e.equal(moment([2012,0,14]).week(),3,"Jan 14 2012 should be week 3"),e.done()},"weeks year starting monday":function(e){e.expect(5),e.equal(moment([2006,11,30]).week(),1,"Dec 30 2006 should be week 1"),e.equal(moment([2007,0,5]).week(),1,"Jan  5 2007 should be week 1"),e.equal(moment([2007,0,6]).week(),2,"Jan  6 2007 should be week 2"),e.equal(moment([2007,0,12]).week(),2,"Jan 12 2007 should be week 2"),e.equal(moment([2007,0,13]).week(),3,"Jan 13 2007 should be week 3"),e.done()},"weeks year starting tuesday":function(e){e.expect(6),e.equal(moment([2007,11,29]).week(),1,"Dec 29 2007 should be week 1"),e.equal(moment([2008,0,1]).week(),1,"Jan  1 2008 should be week 1"),e.equal(moment([2008,0,4]).week(),1,"Jan  4 2008 should be week 1"),e.equal(moment([2008,0,5]).week(),2,"Jan  5 2008 should be week 2"),e.equal(moment([2008,0,11]).week(),2,"Jan 11 2008 should be week 2"),e.equal(moment([2008,0,12]).week(),3,"Jan 12 2008 should be week 3"),e.done()},"weeks year starting wednesday":function(e){e.expect(6),e.equal(moment([2002,11,28]).week(),1,"Dec 28 2002 should be week 1"),e.equal(moment([2003,0,1]).week(),1,"Jan  1 2003 should be week 1"),e.equal(moment([2003,0,3]).week(),1,"Jan  3 2003 should be week 1"),e.equal(moment([2003,0,4]).week(),2,"Jan  4 2003 should be week 2"),e.equal(moment([2003,0,10]).week(),2,"Jan 10 2003 should be week 2"),e.equal(moment([2003,0,11]).week(),3,"Jan 11 2003 should be week 3"),e.done()},"weeks year starting thursday":function(e){e.expect(6),e.equal(moment([2008,11,27]).week(),1,"Dec 27 2008 should be week 1"),e.equal(moment([2009,0,1]).week(),1,"Jan  1 2009 should be week 1"),e.equal(moment([2009,0,2]).week(),1,"Jan  2 2009 should be week 1"),e.equal(moment([2009,0,3]).week(),2,"Jan  3 2009 should be week 2"),e.equal(moment([2009,0,9]).week(),2,"Jan  9 2009 should be week 2"),e.equal(moment([2009,0,10]).week(),3,"Jan 10 2009 should be week 3"),e.done()},"weeks year starting friday":function(e){e.expect(5),e.equal(moment([2009,11,26]).week(),1,"Dec 26 2009 should be week 1"),e.equal(moment([2010,0,1]).week(),1,"Jan  1 2010 should be week 1"),e.equal(moment([2010,0,2]).week(),2,"Jan  2 2010 should be week 2"),e.equal(moment([2010,0,8]).week(),2,"Jan  8 2010 should be week 2"),e.equal(moment([2010,0,9]).week(),3,"Jan  9 2010 should be week 3"),e.done()},"weeks year starting saturday":function(e){e.expect(5),e.equal(moment([2011,0,1]).week(),1,"Jan  1 2011 should be week 1"),e.equal(moment([2011,0,7]).week(),1,"Jan  7 2011 should be week 1"),e.equal(moment([2011,0,8]).week(),2,"Jan  8 2011 should be week 2"),e.equal(moment([2011,0,14]).week(),2,"Jan 14 2011 should be week 2"),e.equal(moment([2011,0,15]).week(),3,"Jan 15 2011 should be week 3"),e.done()},"weeks year starting sunday formatted":function(e){e.expect(5),e.equal(moment([2011,11,31]).format("w ww wo"),"1 01 1","Dec 31 2011 should be week 1"),e.equal(moment([2012,0,6]).format("w ww wo"),"1 01 1","Jan  6 2012 should be week 1"),e.equal(moment([2012,0,7]).format("w ww wo"),"2 02 2","Jan  7 2012 should be week 2"),e.equal(moment([2012,0,13]).format("w ww wo"),"2 02 2","Jan 13 2012 should be week 2"),e.equal(moment([2012,0,14]).format("w ww wo"),"3 03 3","Jan 14 2012 should be week 3"),e.done()}};