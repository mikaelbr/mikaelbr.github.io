var fs=require("fs"),uglifyjs=require("uglify-js");module.exports=function(e){function t(e){var t="",n,r;for(n=0;n<e.length;++n)r=e[n],r.type==="comment1"?t+="//"+r.value+"\n":t+="/*"+r.value+"*/";return t}function n(e){return e=e.replace(/require\([\'\"]\.\.\/moment[\'\"]\)/g,"moment"),r+e+i}var r=["(function(){","    function onload (moment) {",""].join("\n"),i=["","    }",'    if (typeof define === "function" && define.amd) {','        define(["moment"], onload);',"    }",'    if (typeof window !== "undefined" && window.moment) {',"        onload(window.moment);","    }","})()",""].join("\n");e.registerMultiTask("minlang","Minify lang files with UglifyJS.",function(){var r=e.file.expandFiles(this.file.src),i,s,o,u;s=e.helper("concat",r,{separator:this.data.separator}),u=uglifyjs.parser.tokenizer(s),i=t(u().comments_before),i+=e.helper("uglify",n(s),e.config("uglify")),e.file.write(this.file.dest,i);if(this.errorCount)return!1;e.log.writeln('File "'+this.file.dest+'" created.'),e.helper("min_max_info",i,s)})};