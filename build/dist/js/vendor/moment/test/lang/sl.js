var moment=require("../../moment");exports["lang:sl"]={setUp:function(e){moment.lang("sl"),e()},tearDown:function(e){moment.lang("en"),e()},parse:function(e){function t(t,n,r){e.equal(moment(t,n).month(),r,t+" should be month "+(r+1))}e.expect(96);var n="januar jan._februar feb._marec mar._april apr._maj maj_junij jun._julij jul._avgust avg._september sep._oktober okt._november nov._december dec.".split("_"),r;for(r=0;r<12;r++)n[r]=n[r].split(" "),t(n[r][0],"MMM",r),t(n[r][1],"MMM",r),t(n[r][0],"MMMM",r),t(n[r][1],"MMMM",r),t(n[r][0].toLocaleLowerCase(),"MMMM",r),t(n[r][1].toLocaleLowerCase(),"MMMM",r),t(n[r][0].toLocaleUpperCase(),"MMMM",r),t(n[r][1].toLocaleUpperCase(),"MMMM",r);e.done()},format:function(e){e.expect(22);var t=[["dddd, Do MMMM YYYY, h:mm:ss a","nedelja, 14. februar 2010, 3:25:50 pm"],["ddd, hA","ned., 3PM"],["M Mo MM MMMM MMM","2 2. 02 februar feb."],["YYYY YY","2010 10"],["D Do DD","14 14. 14"],["d do dddd ddd dd","0 0. nedelja ned. ne"],["DDD DDDo DDDD","45 45. 045"],["w wo ww","7 7. 07"],["h hh","3 03"],["H HH","15 15"],["m mm","25 25"],["s ss","50 50"],["a A","pm PM"],["t\\he DDDo \\d\\ay of t\\he ye\\ar","the 45. day of the year"],["L","14. 02. 2010"],["LL","14. februar 2010"],["LLL","14. februar 2010 15:25"],["LLLL","nedelja, 14. februar 2010 15:25"],["l","14. 2. 2010"],["ll","14. feb. 2010"],["lll","14. feb. 2010 15:25"],["llll","ned., 14. feb. 2010 15:25"]],n=moment(new Date(2010,1,14,15,25,50,125)),r;for(r=0;r<t.length;r++)e.equal(n.format(t[r][0]),t[r][1],t[r][0]+" ---> "+t[r][1]);e.done()},"format ordinal":function(e){e.expect(31),e.equal(moment([2011,0,1]).format("DDDo"),"1.","1."),e.equal(moment([2011,0,2]).format("DDDo"),"2.","2."),e.equal(moment([2011,0,3]).format("DDDo"),"3.","3."),e.equal(moment([2011,0,4]).format("DDDo"),"4.","4."),e.equal(moment([2011,0,5]).format("DDDo"),"5.","5."),e.equal(moment([2011,0,6]).format("DDDo"),"6.","6."),e.equal(moment([2011,0,7]).format("DDDo"),"7.","7."),e.equal(moment([2011,0,8]).format("DDDo"),"8.","8."),e.equal(moment([2011,0,9]).format("DDDo"),"9.","9."),e.equal(moment([2011,0,10]).format("DDDo"),"10.","10."),e.equal(moment([2011,0,11]).format("DDDo"),"11.","11."),e.equal(moment([2011,0,12]).format("DDDo"),"12.","12."),e.equal(moment([2011,0,13]).format("DDDo"),"13.","13."),e.equal(moment([2011,0,14]).format("DDDo"),"14.","14."),e.equal(moment([2011,0,15]).format("DDDo"),"15.","15."),e.equal(moment([2011,0,16]).format("DDDo"),"16.","16."),e.equal(moment([2011,0,17]).format("DDDo"),"17.","17."),e.equal(moment([2011,0,18]).format("DDDo"),"18.","18."),e.equal(moment([2011,0,19]).format("DDDo"),"19.","19."),e.equal(moment([2011,0,20]).format("DDDo"),"20.","20."),e.equal(moment([2011,0,21]).format("DDDo"),"21.","21."),e.equal(moment([2011,0,22]).format("DDDo"),"22.","22."),e.equal(moment([2011,0,23]).format("DDDo"),"23.","23."),e.equal(moment([2011,0,24]).format("DDDo"),"24.","24."),e.equal(moment([2011,0,25]).format("DDDo"),"25.","25."),e.equal(moment([2011,0,26]).format("DDDo"),"26.","26."),e.equal(moment([2011,0,27]).format("DDDo"),"27.","27."),e.equal(moment([2011,0,28]).format("DDDo"),"28.","28."),e.equal(moment([2011,0,29]).format("DDDo"),"29.","29."),e.equal(moment([2011,0,30]).format("DDDo"),"30.","30."),e.equal(moment([2011,0,31]).format("DDDo"),"31.","31."),e.done()},"format month":function(e){e.expect(12);var t="januar jan._februar feb._marec mar._april apr._maj maj._junij jun._julij jul._avgust avg._september sep._oktober okt._november nov._december dec.".split("_"),n;for(n=0;n<t.length;n++)e.equal(moment([2011,n,1]).format("MMMM MMM"),t[n],t[n]);e.done()},"format week":function(e){e.expect(7);var t="nedelja ned. ne_ponedeljek pon. po_torek tor. to_sreda sre. sr_četrtek čet. če_petek pet. pe_sobota sob. so".split("_"),n;for(n=0;n<t.length;n++)e.equal(moment([2011,0,2+n]).format("dddd ddd dd"),t[n],t[n]);e.done()},from:function(e){e.expect(30);var t=moment([2007,1,28]);e.equal(t.from(moment([2007,1,28]).add({s:44}),!0),"nekaj sekund","44 seconds = a few seconds"),e.equal(t.from(moment([2007,1,28]).add({s:45}),!0),"ena minuta","45 seconds = a minute"),e.equal(t.from(moment([2007,1,28]).add({s:89}),!0),"ena minuta","89 seconds = a minute"),e.equal(t.from(moment([2007,1,28]).add({s:90}),!0),"2 minuti","90 seconds = 2 minutes"),e.equal(t.from(moment([2007,1,28]).add({m:44}),!0),"44 minut","44 minutes = 44 minutes"),e.equal(t.from(moment([2007,1,28]).add({m:45}),!0),"ena ura","45 minutes = an hour"),e.equal(t.from(moment([2007,1,28]).add({m:89}),!0),"ena ura","89 minutes = an hour"),e.equal(t.from(moment([2007,1,28]).add({m:90}),!0),"2 uri","90 minutes = 2 hours"),e.equal(t.from(moment([2007,1,28]).add({h:5}),!0),"5 ur","5 hours = 5 hours"),e.equal(t.from(moment([2007,1,28]).add({h:21}),!0),"21 ur","21 hours = 21 hours"),e.equal(t.from(moment([2007,1,28]).add({h:22}),!0),"en dan","22 hours = a day"),e.equal(t.from(moment([2007,1,28]).add({h:35}),!0),"en dan","35 hours = a day"),e.equal(t.from(moment([2007,1,28]).add({h:36}),!0),"2 dni","36 hours = 2 days"),e.equal(t.from(moment([2007,1,28]).add({d:1}),!0),"en dan","1 day = a day"),e.equal(t.from(moment([2007,1,28]).add({d:5}),!0),"5 dni","5 days = 5 days"),e.equal(t.from(moment([2007,1,28]).add({d:25}),!0),"25 dni","25 days = 25 days"),e.equal(t.from(moment([2007,1,28]).add({d:26}),!0),"en mesec","26 days = a month"),e.equal(t.from(moment([2007,1,28]).add({d:30}),!0),"en mesec","30 days = a month"),e.equal(t.from(moment([2007,1,28]).add({d:45}),!0),"en mesec","45 days = a month"),e.equal(t.from(moment([2007,1,28]).add({d:46}),!0),"2 meseca","46 days = 2 months"),e.equal(t.from(moment([2007,1,28]).add({d:74}),!0),"2 meseca","75 days = 2 months"),e.equal(t.from(moment([2007,1,28]).add({d:76}),!0),"3 mesece","76 days = 3 months"),e.equal(t.from(moment([2007,1,28]).add({M:1}),!0),"en mesec","1 month = a month"),e.equal(t.from(moment([2007,1,28]).add({M:5}),!0),"5 mesecev","5 months = 5 months"),e.equal(t.from(moment([2007,1,28]).add({d:344}),!0),"11 mesecev","344 days = 11 months"),e.equal(t.from(moment([2007,1,28]).add({d:345}),!0),"eno leto","345 days = a year"),e.equal(t.from(moment([2007,1,28]).add({d:547}),!0),"eno leto","547 days = a year"),e.equal(t.from(moment([2007,1,28]).add({d:548}),!0),"2 leti","548 days = 2 years"),e.equal(t.from(moment([2007,1,28]).add({y:1}),!0),"eno leto","1 year = a year"),e.equal(t.from(moment([2007,1,28]).add({y:5}),!0),"5 let","5 years = 5 years"),e.done()},suffix:function(e){e.expect(2),e.equal(moment(3e4).from(0),"čez nekaj sekund","prefix"),e.equal(moment(0).from(3e4),"nekaj sekund nazaj","suffix"),e.done()},"now from now":function(e){e.expect(1),e.equal(moment().fromNow(),"nekaj sekund nazaj","now from now should display as in the past"),e.done()},fromNow:function(e){e.expect(2),e.equal(moment().add({s:30}).fromNow(),"čez nekaj sekund","in a few seconds"),e.equal(moment().add({d:5}).fromNow(),"čez 5 dni","in 5 days"),e.done()},"calendar day":function(e){e.expect(6);var t=moment().hours(2).minutes(0).seconds(0);e.equal(moment(t).calendar(),"danes ob 2:00","today at the same time"),e.equal(moment(t).add({m:25}).calendar(),"danes ob 2:25","Now plus 25 min"),e.equal(moment(t).add({h:1}).calendar(),"danes ob 3:00","Now plus 1 hour"),e.equal(moment(t).add({d:1}).calendar(),"jutri ob 2:00","tomorrow at the same time"),e.equal(moment(t).subtract({h:1}).calendar(),"danes ob 1:00","Now minus 1 hour"),e.equal(moment(t).subtract({d:1}).calendar(),"včeraj ob 2:00","yesterday at the same time"),e.done()},"calendar next week":function(e){function t(e){switch(e.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}}e.expect(15);var n,r;for(n=2;n<7;n++)r=moment().add({d:n}),e.equal(r.calendar(),r.format(t(r)),"Today + "+n+" days current time"),r.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(r.calendar(),r.format(t(r)),"Today + "+n+" days beginning of day"),r.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(r.calendar(),r.format(t(r)),"Today + "+n+" days end of day");e.done()},"calendar last week":function(e){function t(e){switch(e.day()){case 0:case 3:case 6:return"[prejšnja] dddd [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}}e.expect(15);var n,r;for(n=2;n<7;n++)r=moment().subtract({d:n}),e.equal(r.calendar(),r.format(t(r)),"Today - "+n+" days current time"),r.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(r.calendar(),r.format(t(r)),"Today - "+n+" days beginning of day"),r.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(r.calendar(),r.format(t(r)),"Today - "+n+" days end of day");e.done()},"calendar all else":function(e){e.expect(4);var t=moment().subtract({w:1}),n=moment().add({w:1});e.equal(t.calendar(),t.format("L"),"1 week ago"),e.equal(n.calendar(),n.format("L"),"in 1 week"),t=moment().subtract({w:2}),n=moment().add({w:2}),e.equal(t.calendar(),t.format("L"),"2 weeks ago"),e.equal(n.calendar(),n.format("L"),"in 2 weeks"),e.done()},"weeks year starting sunday":function(e){e.expect(5),e.equal(moment([2011,11,26]).week(),1,"Dec 26 2011 should be week 1"),e.equal(moment([2012,0,1]).week(),1,"Jan  1 2012 should be week 1"),e.equal(moment([2012,0,2]).week(),2,"Jan  2 2012 should be week 2"),e.equal(moment([2012,0,8]).week(),2,"Jan  8 2012 should be week 2"),e.equal(moment([2012,0,9]).week(),3,"Jan  9 2012 should be week 3"),e.done()},"weeks year starting monday":function(e){e.expect(5),e.equal(moment([2007,0,1]).week(),1,"Jan  1 2007 should be week 1"),e.equal(moment([2007,0,7]).week(),1,"Jan  7 2007 should be week 1"),e.equal(moment([2007,0,8]).week(),2,"Jan  8 2007 should be week 2"),e.equal(moment([2007,0,14]).week(),2,"Jan 14 2007 should be week 2"),e.equal(moment([2007,0,15]).week(),3,"Jan 15 2007 should be week 3"),e.done()},"weeks year starting tuesday":function(e){e.expect(6),e.equal(moment([2007,11,31]).week(),1,"Dec 31 2007 should be week 1"),e.equal(moment([2008,0,1]).week(),1,"Jan  1 2008 should be week 1"),e.equal(moment([2008,0,6]).week(),1,"Jan  6 2008 should be week 1"),e.equal(moment([2008,0,7]).week(),2,"Jan  7 2008 should be week 2"),e.equal(moment([2008,0,13]).week(),2,"Jan 13 2008 should be week 2"),e.equal(moment([2008,0,14]).week(),3,"Jan 14 2008 should be week 3"),e.done()},"weeks year starting wednesday":function(e){e.expect(6),e.equal(moment([2002,11,30]).week(),1,"Dec 30 2002 should be week 1"),e.equal(moment([2003,0,1]).week(),1,"Jan  1 2003 should be week 1"),e.equal(moment([2003,0,5]).week(),1,"Jan  5 2003 should be week 1"),e.equal(moment([2003,0,6]).week(),2,"Jan  6 2003 should be week 2"),e.equal(moment([2003,0,12]).week(),2,"Jan 12 2003 should be week 2"),e.equal(moment([2003,0,13]).week(),3,"Jan 13 2003 should be week 3"),e.done()},"weeks year starting thursday":function(e){e.expect(6),e.equal(moment([2008,11,29]).week(),1,"Dec 29 2008 should be week 1"),e.equal(moment([2009,0,1]).week(),1,"Jan  1 2009 should be week 1"),e.equal(moment([2009,0,4]).week(),1,"Jan  4 2009 should be week 1"),e.equal(moment([2009,0,5]).week(),2,"Jan  5 2009 should be week 2"),e.equal(moment([2009,0,11]).week(),2,"Jan 11 2009 should be week 2"),e.equal(moment([2009,0,12]).week(),3,"Jan 12 2009 should be week 3"),e.done()},"weeks year starting friday":function(e){e.expect(6),e.equal(moment([2009,11,28]).week(),1,"Dec 28 2009 should be week 1"),e.equal(moment([2010,0,1]).week(),1,"Jan  1 2010 should be week 1"),e.equal(moment([2010,0,3]).week(),1,"Jan  3 2010 should be week 1"),e.equal(moment([2010,0,4]).week(),2,"Jan  4 2010 should be week 2"),e.equal(moment([2010,0,10]).week(),2,"Jan 10 2010 should be week 2"),e.equal(moment([2010,0,11]).week(),3,"Jan 11 2010 should be week 3"),e.done()},"weeks year starting saturday":function(e){e.expect(6),e.equal(moment([2010,11,27]).week(),1,"Dec 27 2010 should be week 1"),e.equal(moment([2011,0,1]).week(),1,"Jan  1 2011 should be week 1"),e.equal(moment([2011,0,2]).week(),1,"Jan  2 2011 should be week 1"),e.equal(moment([2011,0,3]).week(),2,"Jan  3 2011 should be week 2"),e.equal(moment([2011,0,9]).week(),2,"Jan  9 2011 should be week 2"),e.equal(moment([2011,0,10]).week(),3,"Jan 10 2011 should be week 3"),e.done()},"weeks year starting sunday formatted":function(e){e.expect(5),e.equal(moment([2011,11,26]).format("w ww wo"),"1 01 1.","Dec 26 2011 should be week 1"),e.equal(moment([2012,0,1]).format("w ww wo"),"1 01 1.","Jan  1 2012 should be week 1"),e.equal(moment([2012,0,2]).format("w ww wo"),"2 02 2.","Jan  2 2012 should be week 2"),e.equal(moment([2012,0,8]).format("w ww wo"),"2 02 2.","Jan  8 2012 should be week 2"),e.equal(moment([2012,0,9]).format("w ww wo"),"3 03 3.","Jan  9 2012 should be week 3"),e.done()}};