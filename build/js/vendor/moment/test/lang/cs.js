var moment=require("../../moment");exports["lang:cs"]={setUp:function(e){moment.lang("cs"),e()},tearDown:function(e){moment.lang("en"),e()},parse:function(e){function n(t,n,r){e.equal(moment(t,n).month(),r,t+" should be month "+(r+1))}e.expect(96);var t="leden led_únor úno_březen bře_duben dub_květen kvě_červen čvn_červenec čvc_srpen srp_září zář_říjen říj_listopad lis_prosinec pro".split("_");for(var r=0;r<12;r++)t[r]=t[r].split(" "),n(t[r][0],"MMM",r),n(t[r][1],"MMM",r),n(t[r][0],"MMMM",r),n(t[r][1],"MMMM",r),n(t[r][0].toLocaleLowerCase(),"MMMM",r),n(t[r][1].toLocaleLowerCase(),"MMMM",r),n(t[r][0].toLocaleUpperCase(),"MMMM",r),n(t[r][1].toLocaleUpperCase(),"MMMM",r);e.done()},format:function(e){e.expect(22);var t=[["dddd, MMMM Do YYYY, h:mm:ss","neděle, únor 14. 2010, 3:25:50"],["ddd, h","ne, 3"],["M Mo MM MMMM MMM","2 2. 02 únor úno"],["YYYY YY","2010 10"],["D Do DD","14 14. 14"],["d do dddd ddd dd","0 0. neděle ne ne"],["DDD DDDo DDDD","45 45. 045"],["w wo ww","6 6. 06"],["h hh","3 03"],["H HH","15 15"],["m mm","25 25"],["s ss","50 50"],["a A","pm PM"],["DDDo [den v roce]","45. den v roce"],["L","14.02.2010"],["LL","14. únor 2010"],["LLL","14. únor 2010 15:25"],["LLLL","neděle 14. únor 2010 15:25"],["l","14.2.2010"],["ll","14. úno 2010"],["lll","14. úno 2010 15:25"],["llll","ne 14. úno 2010 15:25"]],n=moment(new Date(2010,1,14,15,25,50,125)),r;for(r=0;r<t.length;r++)e.equal(n.format(t[r][0]),t[r][1],t[r][0]+" ---> "+t[r][1]);e.done()},"format ordinal":function(e){e.expect(31),e.equal(moment([2011,0,1]).format("DDDo"),"1.","1."),e.equal(moment([2011,0,2]).format("DDDo"),"2.","2."),e.equal(moment([2011,0,3]).format("DDDo"),"3.","3."),e.equal(moment([2011,0,4]).format("DDDo"),"4.","4."),e.equal(moment([2011,0,5]).format("DDDo"),"5.","5."),e.equal(moment([2011,0,6]).format("DDDo"),"6.","6."),e.equal(moment([2011,0,7]).format("DDDo"),"7.","7."),e.equal(moment([2011,0,8]).format("DDDo"),"8.","8."),e.equal(moment([2011,0,9]).format("DDDo"),"9.","9."),e.equal(moment([2011,0,10]).format("DDDo"),"10.","10."),e.equal(moment([2011,0,11]).format("DDDo"),"11.","11."),e.equal(moment([2011,0,12]).format("DDDo"),"12.","12."),e.equal(moment([2011,0,13]).format("DDDo"),"13.","13."),e.equal(moment([2011,0,14]).format("DDDo"),"14.","14."),e.equal(moment([2011,0,15]).format("DDDo"),"15.","15."),e.equal(moment([2011,0,16]).format("DDDo"),"16.","16."),e.equal(moment([2011,0,17]).format("DDDo"),"17.","17."),e.equal(moment([2011,0,18]).format("DDDo"),"18.","18."),e.equal(moment([2011,0,19]).format("DDDo"),"19.","19."),e.equal(moment([2011,0,20]).format("DDDo"),"20.","20."),e.equal(moment([2011,0,21]).format("DDDo"),"21.","21."),e.equal(moment([2011,0,22]).format("DDDo"),"22.","22."),e.equal(moment([2011,0,23]).format("DDDo"),"23.","23."),e.equal(moment([2011,0,24]).format("DDDo"),"24.","24."),e.equal(moment([2011,0,25]).format("DDDo"),"25.","25."),e.equal(moment([2011,0,26]).format("DDDo"),"26.","26."),e.equal(moment([2011,0,27]).format("DDDo"),"27.","27."),e.equal(moment([2011,0,28]).format("DDDo"),"28.","28."),e.equal(moment([2011,0,29]).format("DDDo"),"29.","29."),e.equal(moment([2011,0,30]).format("DDDo"),"30.","30."),e.equal(moment([2011,0,31]).format("DDDo"),"31.","31."),e.done()},"format month":function(e){e.expect(12);var t="leden led_únor úno_březen bře_duben dub_květen kvě_červen čvn_červenec čvc_srpen srp_září zář_říjen říj_listopad lis_prosinec pro".split("_"),n;for(n=0;n<t.length;n++)e.equal(moment([2011,n,1]).format("MMMM MMM"),t[n],t[n]);e.done()},"format week":function(e){e.expect(7);var t="neděle ne ne_pondělí po po_úterý út út_středa st st_čtvrtek čt čt_pátek pá pá_sobota so so".split("_"),n;for(n=0;n<t.length;n++)e.equal(moment([2011,0,2+n]).format("dddd ddd dd"),t[n],t[n]);e.done()},from:function(e){e.expect(30);var t=moment([2007,1,28]);e.equal(t.from(moment([2007,1,28]).add({s:44}),!0),"pár vteřin","44 seconds = a few seconds"),e.equal(t.from(moment([2007,1,28]).add({s:45}),!0),"minuta","45 seconds = a minute"),e.equal(t.from(moment([2007,1,28]).add({s:89}),!0),"minuta","89 seconds = a minute"),e.equal(t.from(moment([2007,1,28]).add({s:90}),!0),"2 minuty","90 seconds = 2 minutes"),e.equal(t.from(moment([2007,1,28]).add({m:44}),!0),"44 minut","44 minutes = 44 minutes"),e.equal(t.from(moment([2007,1,28]).add({m:45}),!0),"hodina","45 minutes = an hour"),e.equal(t.from(moment([2007,1,28]).add({m:89}),!0),"hodina","89 minutes = an hour"),e.equal(t.from(moment([2007,1,28]).add({m:90}),!0),"2 hodiny","90 minutes = 2 hours"),e.equal(t.from(moment([2007,1,28]).add({h:5}),!0),"5 hodin","5 hours = 5 hours"),e.equal(t.from(moment([2007,1,28]).add({h:21}),!0),"21 hodin","21 hours = 21 hours"),e.equal(t.from(moment([2007,1,28]).add({h:22}),!0),"den","22 hours = a day"),e.equal(t.from(moment([2007,1,28]).add({h:35}),!0),"den","35 hours = a day"),e.equal(t.from(moment([2007,1,28]).add({h:36}),!0),"2 dny","36 hours = 2 days"),e.equal(t.from(moment([2007,1,28]).add({d:1}),!0),"den","1 day = a day"),e.equal(t.from(moment([2007,1,28]).add({d:5}),!0),"5 dní","5 days = 5 days"),e.equal(t.from(moment([2007,1,28]).add({d:25}),!0),"25 dní","25 days = 25 days"),e.equal(t.from(moment([2007,1,28]).add({d:26}),!0),"měsíc","26 days = a month"),e.equal(t.from(moment([2007,1,28]).add({d:30}),!0),"měsíc","30 days = a month"),e.equal(t.from(moment([2007,1,28]).add({d:45}),!0),"měsíc","45 days = a month"),e.equal(t.from(moment([2007,1,28]).add({d:46}),!0),"2 měsíce","46 days = 2 months"),e.equal(t.from(moment([2007,1,28]).add({d:74}),!0),"2 měsíce","75 days = 2 months"),e.equal(t.from(moment([2007,1,28]).add({d:76}),!0),"3 měsíce","76 days = 3 months"),e.equal(t.from(moment([2007,1,28]).add({M:1}),!0),"měsíc","1 month = a month"),e.equal(t.from(moment([2007,1,28]).add({M:5}),!0),"5 měsíců","5 months = 5 months"),e.equal(t.from(moment([2007,1,28]).add({d:344}),!0),"11 měsíců","344 days = 11 months"),e.equal(t.from(moment([2007,1,28]).add({d:345}),!0),"rok","345 days = a year"),e.equal(t.from(moment([2007,1,28]).add({d:547}),!0),"rok","547 days = a year"),e.equal(t.from(moment([2007,1,28]).add({d:548}),!0),"2 roky","548 days = 2 years"),e.equal(t.from(moment([2007,1,28]).add({y:1}),!0),"rok","1 year = a year"),e.equal(t.from(moment([2007,1,28]).add({y:5}),!0),"5 let","5 years = 5 years"),e.done()},suffix:function(e){e.expect(2),e.equal(moment(3e4).from(0),"za pár vteřin","prefix"),e.equal(moment(0).from(3e4),"před pár vteřinami","suffix"),e.done()},"now from now":function(e){e.expect(1),e.equal(moment().fromNow(),"před pár vteřinami","now from now should display as in the past"),e.done()},"fromNow (future)":function(e){e.expect(16),e.equal(moment().add({s:30}).fromNow(),"za pár vteřin","in a few seconds"),e.equal(moment().add({m:1}).fromNow(),"za minutu","in a minute"),e.equal(moment().add({m:3}).fromNow(),"za 3 minuty","in 3 minutes"),e.equal(moment().add({m:10}).fromNow(),"za 10 minut","in 10 minutes"),e.equal(moment().add({h:1}).fromNow(),"za hodinu","in an hour"),e.equal(moment().add({h:3}).fromNow(),"za 3 hodiny","in 3 hours"),e.equal(moment().add({h:10}).fromNow(),"za 10 hodin","in 10 hours"),e.equal(moment().add({d:1}).fromNow(),"za den","in a day"),e.equal(moment().add({d:3}).fromNow(),"za 3 dny","in 3 days"),e.equal(moment().add({d:10}).fromNow(),"za 10 dní","in 10 days"),e.equal(moment().add({M:1}).fromNow(),"za měsíc","in a month"),e.equal(moment().add({M:3}).fromNow(),"za 3 měsíce","in 3 months"),e.equal(moment().add({M:10}).fromNow(),"za 10 měsíců","in 10 months"),e.equal(moment().add({y:1}).fromNow(),"za rok","in a year"),e.equal(moment().add({y:3}).fromNow(),"za 3 roky","in 3 years"),e.equal(moment().add({y:10}).fromNow(),"za 10 let","in 10 years"),e.done()},"fromNow (past)":function(e){e.expect(16),e.equal(moment().subtract({s:30}).fromNow(),"před pár vteřinami","a few seconds ago"),e.equal(moment().subtract({m:1}).fromNow(),"před minutou","a minute ago"),e.equal(moment().subtract({m:3}).fromNow(),"před 3 minutami","3 minutes ago"),e.equal(moment().subtract({m:10}).fromNow(),"před 10 minutami","10 minutes ago"),e.equal(moment().subtract({h:1}).fromNow(),"před hodinou","an hour ago"),e.equal(moment().subtract({h:3}).fromNow(),"před 3 hodinami","3 hours ago"),e.equal(moment().subtract({h:10}).fromNow(),"před 10 hodinami","10 hours ago"),e.equal(moment().subtract({d:1}).fromNow(),"před dnem","a day ago"),e.equal(moment().subtract({d:3}).fromNow(),"před 3 dny","3 days ago"),e.equal(moment().subtract({d:10}).fromNow(),"před 10 dny","10 days ago"),e.equal(moment().subtract({M:1}).fromNow(),"před měsícem","a month ago"),e.equal(moment().subtract({M:3}).fromNow(),"před 3 měsíci","3 months ago"),e.equal(moment().subtract({M:10}).fromNow(),"před 10 měsíci","10 months ago"),e.equal(moment().subtract({y:1}).fromNow(),"před rokem","a year ago"),e.equal(moment().subtract({y:3}).fromNow(),"před 3 lety","3 years ago"),e.equal(moment().subtract({y:10}).fromNow(),"před 10 lety","10 years ago"),e.done()},"calendar day":function(e){e.expect(6);var t=moment().hours(2).minutes(0).seconds(0);e.equal(moment(t).calendar(),"dnes v 2:00","today at the same time"),e.equal(moment(t).add({m:25}).calendar(),"dnes v 2:25","Now plus 25 min"),e.equal(moment(t).add({h:1}).calendar(),"dnes v 3:00","Now plus 1 hour"),e.equal(moment(t).add({d:1}).calendar(),"zítra v 2:00","tomorrow at the same time"),e.equal(moment(t).subtract({h:1}).calendar(),"dnes v 1:00","Now minus 1 hour"),e.equal(moment(t).subtract({d:1}).calendar(),"včera v 2:00","yesterday at the same time"),e.done()},"calendar next week":function(e){e.expect(15);for(var t=2;t<7;t++){var n=moment().add({d:t}),r="";switch(n.day()){case 0:r="v neděli";break;case 1:r="v pondělí";break;case 2:r="v úterý";break;case 3:r="ve středu";break;case 4:r="ve čtvrtek";break;case 5:r="v pátek";break;case 6:r="v sobotu"}e.equal(n.calendar(),n.format("["+r+"] [v] LT"),"Today + "+t+" days current time"),n.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(n.calendar(),n.format("["+r+"] [v] LT"),"Today + "+t+" days beginning of day"),n.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(n.calendar(),n.format("["+r+"] [v] LT"),"Today + "+t+" days end of day")}e.done()},"calendar last week":function(e){e.expect(15);for(var t=2;t<7;t++){var n=moment().subtract({d:t}),r="";switch(n.day()){case 0:r="minulou neděli";break;case 1:r="minulé pondělí";break;case 2:r="minulé úterý";break;case 3:r="minulou středu";break;case 4:r="minulý čtvrtek";break;case 5:r="minulý pátek";break;case 6:r="minulou sobotu"}e.equal(n.calendar(),n.format("["+r+"] [v] LT"),"Today - "+t+" days current time"),n.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(n.calendar(),n.format("["+r+"] [v] LT"),"Today - "+t+" days beginning of day"),n.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(n.calendar(),n.format("["+r+"] [v] LT"),"Today - "+t+" days end of day")}e.done()},"calendar all else":function(e){e.expect(4);var t=moment().subtract({w:1}),n=moment().add({w:1});e.equal(t.calendar(),t.format("L"),"1 week ago"),e.equal(n.calendar(),n.format("L"),"in 1 week"),t=moment().subtract({w:2}),n=moment().add({w:2}),e.equal(t.calendar(),t.format("L"),"2 weeks ago"),e.equal(n.calendar(),n.format("L"),"in 2 weeks"),e.done()},"humanize duration":function(e){e.expect(4),e.equal(moment.duration(1,"minutes").humanize(),"minuta","a minute (future)"),e.equal(moment.duration(1,"minutes").humanize(!0),"za minutu","in a minute"),e.equal(moment.duration(-1,"minutes").humanize(),"minuta","a minute (past)"),e.equal(moment.duration(-1,"minutes").humanize(!0),"před minutou","a minute ago"),e.done()},"weeks year starting sunday":function(e){e.expect(5),e.equal(moment([2012,0,1]).week(),52,"Jan  1 2012 should be week 52"),e.equal(moment([2012,0,2]).week(),1,"Jan  2 2012 should be week 1"),e.equal(moment([2012,0,8]).week(),1,"Jan  8 2012 should be week 1"),e.equal(moment([2012,0,9]).week(),2,"Jan  9 2012 should be week 2"),e.equal(moment([2012,0,15]).week(),2,"Jan 15 2012 should be week 2"),e.done()},"weeks year starting monday":function(e){e.expect(5),e.equal(moment([2007,0,1]).week(),1,"Jan  1 2007 should be week 1"),e.equal(moment([2007,0,7]).week(),1,"Jan  7 2007 should be week 1"),e.equal(moment([2007,0,8]).week(),2,"Jan  8 2007 should be week 2"),e.equal(moment([2007,0,14]).week(),2,"Jan 14 2007 should be week 2"),e.equal(moment([2007,0,15]).week(),3,"Jan 15 2007 should be week 3"),e.done()},"weeks year starting tuesday":function(e){e.expect(6),e.equal(moment([2007,11,31]).week(),1,"Dec 31 2007 should be week 1"),e.equal(moment([2008,0,1]).week(),1,"Jan  1 2008 should be week 1"),e.equal(moment([2008,0,6]).week(),1,"Jan  6 2008 should be week 1"),e.equal(moment([2008,0,7]).week(),2,"Jan  7 2008 should be week 2"),e.equal(moment([2008,0,13]).week(),2,"Jan 13 2008 should be week 2"),e.equal(moment([2008,0,14]).week(),3,"Jan 14 2008 should be week 3"),e.done()},"weeks year starting wednesday":function(e){e.expect(6),e.equal(moment([2002,11,30]).week(),1,"Dec 30 2002 should be week 1"),e.equal(moment([2003,0,1]).week(),1,"Jan  1 2003 should be week 1"),e.equal(moment([2003,0,5]).week(),1,"Jan  5 2003 should be week 1"),e.equal(moment([2003,0,6]).week(),2,"Jan  6 2003 should be week 2"),e.equal(moment([2003,0,12]).week(),2,"Jan 12 2003 should be week 2"),e.equal(moment([2003,0,13]).week(),3,"Jan 13 2003 should be week 3"),e.done()},"weeks year starting thursday":function(e){e.expect(6),e.equal(moment([2008,11,29]).week(),1,"Dec 29 2008 should be week 1"),e.equal(moment([2009,0,1]).week(),1,"Jan  1 2009 should be week 1"),e.equal(moment([2009,0,4]).week(),1,"Jan  4 2009 should be week 1"),e.equal(moment([2009,0,5]).week(),2,"Jan  5 2009 should be week 2"),e.equal(moment([2009,0,11]).week(),2,"Jan 11 2009 should be week 2"),e.equal(moment([2009,0,13]).week(),3,"Jan 12 2009 should be week 3"),e.done()},"weeks year starting friday":function(e){e.expect(6),e.equal(moment([2009,11,28]).week(),53,"Dec 28 2009 should be week 53"),e.equal(moment([2010,0,1]).week(),53,"Jan  1 2010 should be week 53"),e.equal(moment([2010,0,3]).week(),53,"Jan  3 2010 should be week 53"),e.equal(moment([2010,0,4]).week(),1,"Jan  4 2010 should be week 1"),e.equal(moment([2010,0,10]).week(),1,"Jan 10 2010 should be week 1"),e.equal(moment([2010,0,11]).week(),2,"Jan 11 2010 should be week 2"),e.done()},"weeks year starting saturday":function(e){e.expect(6),e.equal(moment([2010,11,27]).week(),52,"Dec 27 2010 should be week 52"),e.equal(moment([2011,0,1]).week(),52,"Jan  1 2011 should be week 52"),e.equal(moment([2011,0,2]).week(),52,"Jan  2 2011 should be week 52"),e.equal(moment([2011,0,3]).week(),1,"Jan  3 2011 should be week 1"),e.equal(moment([2011,0,9]).week(),1,"Jan  9 2011 should be week 1"),e.equal(moment([2011,0,10]).week(),2,"Jan 10 2011 should be week 2"),e.done()},"weeks year starting sunday formatted":function(e){e.expect(5),e.equal(moment([2012,0,1]).format("w ww wo"),"52 52 52.","Jan  1 2012 should be week 52"),e.equal(moment([2012,0,2]).format("w ww wo"),"1 01 1.","Jan  2 2012 should be week 1"),e.equal(moment([2012,0,8]).format("w ww wo"),"1 01 1.","Jan  8 2012 should be week 1"),e.equal(moment([2012,0,9]).format("w ww wo"),"2 02 2.","Jan  9 2012 should be week 2"),e.equal(moment([2012,0,15]).format("w ww wo"),"2 02 2.","Jan 15 2012 should be week 2"),e.done()}};