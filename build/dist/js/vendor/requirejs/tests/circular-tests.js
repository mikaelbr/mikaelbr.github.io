require({baseUrl:"./"},["require","two","funcTwo","funcThree"],function(e,t,n,r){var i=t.doSomething(),s=new n("TWO");doh.register("circular",[function(e){e.is("small",i.size),e.is("redtwo",i.color)}]),doh.run(),doh.register("circularFunc",[function(e){e.is("TWO",s.name),e.is("ONE-NESTED",s.oneName()),e.is("THREE-THREE_SUFFIX",r("THREE"))}]),doh.run()});