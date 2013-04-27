var moment=require("../../moment");exports["lang:nb"]={setUp:function(e){moment.lang("nb"),e()},tearDown:function(e){moment.lang("en"),e()},parse:function(e){function r(t,n,r){e.equal(moment(t,n).month(),r,t+" should be month "+(r+1))}e.expect(96);var t="januar jan_februar feb_mars mar_april apr_mai mai_juni jun_juli jul_august aug_september sep_oktober okt_november nov_desember des".split("_"),n;for(n=0;n<12;n++)t[n]=t[n].split(" "),r(t[n][0],"MMM",n),r(t[n][1],"MMM",n),r(t[n][0],"MMMM",n),r(t[n][1],"MMMM",n),r(t[n][0].toLocaleLowerCase(),"MMMM",n),r(t[n][1].toLocaleLowerCase(),"MMMM",n),r(t[n][0].toLocaleUpperCase(),"MMMM",n),r(t[n][1].toLocaleUpperCase(),"MMMM",n);e.done()},format:function(e){e.expect(22);var t=[["dddd, MMMM Do YYYY, h:mm:ss a","søndag, februar 14. 2010, 3:25:50 pm"],["ddd, hA","søn, 3PM"],["M Mo MM MMMM MMM","2 2. 02 februar feb"],["YYYY YY","2010 10"],["D Do DD","14 14. 14"],["d do dddd ddd dd","0 0. søndag søn sø"],["DDD DDDo DDDD","45 45. 045"],["w wo ww","6 6. 06"],["h hh","3 03"],["H HH","15 15"],["m mm","25 25"],["s ss","50 50"],["a A","pm PM"],["t\\he DDDo \\d\\ay of t\\he ye\\ar","the 45. day of the year"],["L","2010-02-14"],["LL","14 februar 2010"],["LLL","14 februar 2010 15:25"],["LLLL","søndag 14 februar 2010 15:25"],["l","2010-2-14"],["ll","14 feb 2010"],["lll","14 feb 2010 15:25"],["llll","søn 14 feb 2010 15:25"]],n=moment(new Date(2010,1,14,15,25,50,125)),r;for(r=0;r<t.length;r++)e.equal(n.format(t[r][0]),t[r][1],t[r][0]+" ---> "+t[r][1]);e.done()},"format ordinal":function(e){e.expect(31),e.equal(moment([2011,0,1]).format("DDDo"),"1.","1."),e.equal(moment([2011,0,2]).format("DDDo"),"2.","2."),e.equal(moment([2011,0,3]).format("DDDo"),"3.","3."),e.equal(moment([2011,0,4]).format("DDDo"),"4.","4."),e.equal(moment([2011,0,5]).format("DDDo"),"5.","5."),e.equal(moment([2011,0,6]).format("DDDo"),"6.","6."),e.equal(moment([2011,0,7]).format("DDDo"),"7.","7."),e.equal(moment([2011,0,8]).format("DDDo"),"8.","8."),e.equal(moment([2011,0,9]).format("DDDo"),"9.","9."),e.equal(moment([2011,0,10]).format("DDDo"),"10.","10."),e.equal(moment([2011,0,11]).format("DDDo"),"11.","11."),e.equal(moment([2011,0,12]).format("DDDo"),"12.","12."),e.equal(moment([2011,0,13]).format("DDDo"),"13.","13."),e.equal(moment([2011,0,14]).format("DDDo"),"14.","14."),e.equal(moment([2011,0,15]).format("DDDo"),"15.","15."),e.equal(moment([2011,0,16]).format("DDDo"),"16.","16."),e.equal(moment([2011,0,17]).format("DDDo"),"17.","17."),e.equal(moment([2011,0,18]).format("DDDo"),"18.","18."),e.equal(moment([2011,0,19]).format("DDDo"),"19.","19."),e.equal(moment([2011,0,20]).format("DDDo"),"20.","20."),e.equal(moment([2011,0,21]).format("DDDo"),"21.","21."),e.equal(moment([2011,0,22]).format("DDDo"),"22.","22."),e.equal(moment([2011,0,23]).format("DDDo"),"23.","23."),e.equal(moment([2011,0,24]).format("DDDo"),"24.","24."),e.equal(moment([2011,0,25]).format("DDDo"),"25.","25."),e.equal(moment([2011,0,26]).format("DDDo"),"26.","26."),e.equal(moment([2011,0,27]).format("DDDo"),"27.","27."),e.equal(moment([2011,0,28]).format("DDDo"),"28.","28."),e.equal(moment([2011,0,29]).format("DDDo"),"29.","29."),e.equal(moment([2011,0,30]).format("DDDo"),"30.","30."),e.equal(moment([2011,0,31]).format("DDDo"),"31.","31."),e.done()},"format month":function(e){e.expect(12);var t="januar jan_februar feb_mars mar_april apr_mai mai_juni jun_juli jul_august aug_september sep_oktober okt_november nov_desember des".split("_"),n;for(n=0;n<t.length;n++)e.equal(moment([2011,n,1]).format("MMMM MMM"),t[n],t[n]);e.done()},"format week":function(e){e.expect(7);var t="søndag søn sø_mandag man ma_tirsdag tir ti_onsdag ons on_torsdag tor to_fredag fre fr_lørdag lør lø".split("_"),n;for(n=0;n<t.length;n++)e.equal(moment([2011,0,2+n]).format("dddd ddd dd"),t[n],t[n]);e.done()},from:function(e){e.expect(30);var t=moment([2007,1,28]);e.equal(t.from(moment([2007,1,28]).add({s:44}),!0),"noen sekunder","44 sekunder = a few seconds"),e.equal(t.from(moment([2007,1,28]).add({s:45}),!0),"ett minutt","45 seconds = a minute"),e.equal(t.from(moment([2007,1,28]).add({s:89}),!0),"ett minutt","89 seconds = a minute"),e.equal(t.from(moment([2007,1,28]).add({s:90}),!0),"2 minutter","90 seconds = 2 minutes"),e.equal(t.from(moment([2007,1,28]).add({m:44}),!0),"44 minutter","44 minutes = 44 minutes"),e.equal(t.from(moment([2007,1,28]).add({m:45}),!0),"en time","45 minutes = an hour"),e.equal(t.from(moment([2007,1,28]).add({m:89}),!0),"en time","89 minutes = an hour"),e.equal(t.from(moment([2007,1,28]).add({m:90}),!0),"2 timer","90 minutes = 2 hours"),e.equal(t.from(moment([2007,1,28]).add({h:5}),!0),"5 timer","5 hours = 5 hours"),e.equal(t.from(moment([2007,1,28]).add({h:21}),!0),"21 timer","21 hours = 21 hours"),e.equal(t.from(moment([2007,1,28]).add({h:22}),!0),"en dag","22 hours = a day"),e.equal(t.from(moment([2007,1,28]).add({h:35}),!0),"en dag","35 hours = a day"),e.equal(t.from(moment([2007,1,28]).add({h:36}),!0),"2 dager","36 hours = 2 days"),e.equal(t.from(moment([2007,1,28]).add({d:1}),!0),"en dag","1 day = a day"),e.equal(t.from(moment([2007,1,28]).add({d:5}),!0),"5 dager","5 days = 5 days"),e.equal(t.from(moment([2007,1,28]).add({d:25}),!0),"25 dager","25 days = 25 days"),e.equal(t.from(moment([2007,1,28]).add({d:26}),!0),"en måned","26 days = a month"),e.equal(t.from(moment([2007,1,28]).add({d:30}),!0),"en måned","30 days = a month"),e.equal(t.from(moment([2007,1,28]).add({d:45}),!0),"en måned","45 days = a month"),e.equal(t.from(moment([2007,1,28]).add({d:46}),!0),"2 måneder","46 days = 2 months"),e.equal(t.from(moment([2007,1,28]).add({d:74}),!0),"2 måneder","75 days = 2 months"),e.equal(t.from(moment([2007,1,28]).add({d:76}),!0),"3 måneder","76 days = 3 months"),e.equal(t.from(moment([2007,1,28]).add({M:1}),!0),"en måned","1 month = a month"),e.equal(t.from(moment([2007,1,28]).add({M:5}),!0),"5 måneder","5 months = 5 months"),e.equal(t.from(moment([2007,1,28]).add({d:344}),!0),"11 måneder","344 days = 11 months"),e.equal(t.from(moment([2007,1,28]).add({d:345}),!0),"ett år","345 days = a year"),e.equal(t.from(moment([2007,1,28]).add({d:547}),!0),"ett år","547 days = a year"),e.equal(t.from(moment([2007,1,28]).add({d:548}),!0),"2 år","548 days = 2 years"),e.equal(t.from(moment([2007,1,28]).add({y:1}),!0),"ett år","1 year = a year"),e.equal(t.from(moment([2007,1,28]).add({y:5}),!0),"5 år","5 years = 5 years"),e.done()},suffix:function(e){e.expect(2),e.equal(moment(3e4).from(0),"om noen sekunder","prefix"),e.equal(moment(0).from(3e4),"for noen sekunder siden","suffix"),e.done()},"now from now":function(e){e.expect(1),e.equal(moment().fromNow(),"for noen sekunder siden","now from now should display as in the past"),e.done()},fromNow:function(e){e.expect(2),e.equal(moment().add({s:30}).fromNow(),"om noen sekunder","in a few seconds"),e.equal(moment().add({d:5}).fromNow(),"om 5 dager","in 5 days"),e.done()},"calendar day":function(e){e.expect(6);var t=moment().hours(2).minutes(0).seconds(0);e.equal(moment(t).calendar(),"I dag klokken 02:00","today at the same time"),e.equal(moment(t).add({m:25}).calendar(),"I dag klokken 02:25","Now plus 25 min"),e.equal(moment(t).add({h:1}).calendar(),"I dag klokken 03:00","Now plus 1 hour"),e.equal(moment(t).add({d:1}).calendar(),"I morgen klokken 02:00","tomorrow at the same time"),e.equal(moment(t).subtract({h:1}).calendar(),"I dag klokken 01:00","Now minus 1 hour"),e.equal(moment(t).subtract({d:1}).calendar(),"I går klokken 02:00","yesterday at the same time"),e.done()},"calendar next week":function(e){e.expect(15);var t,n;for(t=2;t<7;t++)n=moment().add({d:t}),e.equal(n.calendar(),n.format("dddd [klokken] LT"),"Today + "+t+" days current time"),n.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(n.calendar(),n.format("dddd [klokken] LT"),"Today + "+t+" days beginning of day"),n.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(n.calendar(),n.format("dddd [klokken] LT"),"Today + "+t+" days end of day");e.done()},"calendar last week":function(e){e.expect(15);var t,n;for(t=2;t<7;t++)n=moment().subtract({d:t}),e.equal(n.calendar(),n.format("[Forrige] dddd [klokken] LT"),"Today - "+t+" days current time"),n.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(n.calendar(),n.format("[Forrige] dddd [klokken] LT"),"Today - "+t+" days beginning of day"),n.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(n.calendar(),n.format("[Forrige] dddd [klokken] LT"),"Today - "+t+" days end of day");e.done()},"calendar all else":function(e){e.expect(4);var t=moment().subtract({w:1}),n=moment().add({w:1});e.equal(t.calendar(),t.format("L"),"1 week ago"),e.equal(n.calendar(),n.format("L"),"in 1 week"),t=moment().subtract({w:2}),n=moment().add({w:2}),e.equal(t.calendar(),t.format("L"),"2 weeks ago"),e.equal(n.calendar(),n.format("L"),"in 2 weeks"),e.done()},"weeks year starting sunday":function(e){e.expect(5),e.equal(moment([2012,0,1]).week(),52,"Jan  1 2012 should be week 52"),e.equal(moment([2012,0,2]).week(),1,"Jan  2 2012 should be week 1"),e.equal(moment([2012,0,8]).week(),1,"Jan  8 2012 should be week 1"),e.equal(moment([2012,0,9]).week(),2,"Jan  9 2012 should be week 2"),e.equal(moment([2012,0,15]).week(),2,"Jan 15 2012 should be week 2"),e.done()},"weeks year starting monday":function(e){e.expect(5),e.equal(moment([2007,0,1]).week(),1,"Jan  1 2007 should be week 1"),e.equal(moment([2007,0,7]).week(),1,"Jan  7 2007 should be week 1"),e.equal(moment([2007,0,8]).week(),2,"Jan  8 2007 should be week 2"),e.equal(moment([2007,0,14]).week(),2,"Jan 14 2007 should be week 2"),e.equal(moment([2007,0,15]).week(),3,"Jan 15 2007 should be week 3"),e.done()},"weeks year starting tuesday":function(e){e.expect(6),e.equal(moment([2007,11,31]).week(),1,"Dec 31 2007 should be week 1"),e.equal(moment([2008,0,1]).week(),1,"Jan  1 2008 should be week 1"),e.equal(moment([2008,0,6]).week(),1,"Jan  6 2008 should be week 1"),e.equal(moment([2008,0,7]).week(),2,"Jan  7 2008 should be week 2"),e.equal(moment([2008,0,13]).week(),2,"Jan 13 2008 should be week 2"),e.equal(moment([2008,0,14]).week(),3,"Jan 14 2008 should be week 3"),e.done()},"weeks year starting wednesday":function(e){e.expect(6),e.equal(moment([2002,11,30]).week(),1,"Dec 30 2002 should be week 1"),e.equal(moment([2003,0,1]).week(),1,"Jan  1 2003 should be week 1"),e.equal(moment([2003,0,5]).week(),1,"Jan  5 2003 should be week 1"),e.equal(moment([2003,0,6]).week(),2,"Jan  6 2003 should be week 2"),e.equal(moment([2003,0,12]).week(),2,"Jan 12 2003 should be week 2"),e.equal(moment([2003,0,13]).week(),3,"Jan 13 2003 should be week 3"),e.done()},"weeks year starting thursday":function(e){e.expect(6),e.equal(moment([2008,11,29]).week(),1,"Dec 29 2008 should be week 1"),e.equal(moment([2009,0,1]).week(),1,"Jan  1 2009 should be week 1"),e.equal(moment([2009,0,4]).week(),1,"Jan  4 2009 should be week 1"),e.equal(moment([2009,0,5]).week(),2,"Jan  5 2009 should be week 2"),e.equal(moment([2009,0,11]).week(),2,"Jan 11 2009 should be week 2"),e.equal(moment([2009,0,13]).week(),3,"Jan 12 2009 should be week 3"),e.done()},"weeks year starting friday":function(e){e.expect(6),e.equal(moment([2009,11,28]).week(),53,"Dec 28 2009 should be week 53"),e.equal(moment([2010,0,1]).week(),53,"Jan  1 2010 should be week 53"),e.equal(moment([2010,0,3]).week(),53,"Jan  3 2010 should be week 53"),e.equal(moment([2010,0,4]).week(),1,"Jan  4 2010 should be week 1"),e.equal(moment([2010,0,10]).week(),1,"Jan 10 2010 should be week 1"),e.equal(moment([2010,0,11]).week(),2,"Jan 11 2010 should be week 2"),e.done()},"weeks year starting saturday":function(e){e.expect(6),e.equal(moment([2010,11,27]).week(),52,"Dec 27 2010 should be week 52"),e.equal(moment([2011,0,1]).week(),52,"Jan  1 2011 should be week 52"),e.equal(moment([2011,0,2]).week(),52,"Jan  2 2011 should be week 52"),e.equal(moment([2011,0,3]).week(),1,"Jan  3 2011 should be week 1"),e.equal(moment([2011,0,9]).week(),1,"Jan  9 2011 should be week 1"),e.equal(moment([2011,0,10]).week(),2,"Jan 10 2011 should be week 2"),e.done()},"weeks year starting sunday formatted":function(e){e.expect(5),e.equal(moment([2012,0,1]).format("w ww wo"),"52 52 52.","Jan  1 2012 should be week 52"),e.equal(moment([2012,0,2]).format("w ww wo"),"1 01 1.","Jan  2 2012 should be week 1"),e.equal(moment([2012,0,8]).format("w ww wo"),"1 01 1.","Jan  8 2012 should be week 1"),e.equal(moment([2012,0,9]).format("w ww wo"),"2 02 2.","Jan  9 2012 should be week 2"),e.equal(moment([2012,0,15]).format("w ww wo"),"2 02 2.","Jan 15 2012 should be week 2"),e.done()}};