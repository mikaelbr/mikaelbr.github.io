require({baseUrl:requirejs.isBrowser?"./":"./circular"},["require","plugin!a"],function(e,t){doh.register("circularPlugin",[function(e){e.is("a",t.name),e.is("b",t.b.name),e.is("c",t.b.c.name)}]),doh.run()});