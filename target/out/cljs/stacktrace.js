// Compiled by ClojureScript 1.7.58 {}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 * arguments:
 * 
 * repl-env - the repl environment, an optional map with :host and :port keys
 * if the stacktrace includes url, not file references
 * st       - the original stacktrace string to parse
 * err      - an error map. :ua-product key defines the type of stacktrace parser
 * to use, for example :chrome
 * opts     - additional options. :output-dir maybe given in this argument if
 * :host and :port do not apply, for example, a file path
 * 
 * The canonical stacktrace representation can easily be mapped to a
 * ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__5141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),((function (method_table__5141__auto__,prefer_table__5142__auto__,method_cache__5143__auto__,cached_hierarchy__5144__auto__,hierarchy__5145__auto__){
return (function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__5141__auto__,prefer_table__5142__auto__,method_cache__5143__auto__,cached_hierarchy__5144__auto__,hierarchy__5145__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5145__auto__,method_table__5141__auto__,prefer_table__5142__auto__,method_cache__5143__auto__,cached_hierarchy__5144__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__4247__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return "out";
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.call(null,flc,/:/);
var vec__8917 = cljs.core.reduce.call(null,((function (xs){
return (function (p__8919,p__8920){
var vec__8921 = p__8919;
var pre = cljs.core.nth.call(null,vec__8921,(0),null);
var post = cljs.core.nth.call(null,vec__8921,(1),null);
var vec__8922 = p__8920;
var x = cljs.core.nth.call(null,vec__8922,(0),null);
var i = cljs.core.nth.call(null,vec__8922,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__8917,(0),null);
var vec__8918 = cljs.core.nth.call(null,vec__8917,(1),null);
var line = cljs.core.nth.call(null,vec__8918,(0),null);
var column = cljs.core.nth.call(null,vec__8918,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__8923 = file;
var G__8923__$1 = ((cljs.stacktrace.starts_with_QMARK_.call(null,file,"("))?clojure.string.replace.call(null,G__8923,"(",""):G__8923);
return G__8923__$1;
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__8924 = line;
var G__8924__$1 = ((cljs.stacktrace.ends_with_QMARK_.call(null,line,")"))?clojure.string.replace.call(null,G__8924,")",""):G__8924);
return G__8924__$1;
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__8925 = column;
var G__8925__$1 = ((cljs.stacktrace.ends_with_QMARK_.call(null,column,")"))?clojure.string.replace.call(null,G__8925,")",""):G__8925);
return G__8925__$1;
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__8926,file,p__8927){
var map__8932 = p__8926;
var map__8932__$1 = ((((!((map__8932 == null)))?((((map__8932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8932):map__8932);
var repl_env = map__8932__$1;
var host = cljs.core.get.call(null,map__8932__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__8932__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__8932__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__8933 = p__8927;
var map__8933__$1 = ((((!((map__8933 == null)))?((((map__8933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8933):map__8933);
var opts = map__8933__$1;
var asset_path = cljs.core.get.call(null,map__8933__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("http://"),cljs.core.str(host),cljs.core.str(":"),cljs.core.str((function (){var or__4247__auto__ = host_port;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return port;
}
})()),cljs.core.str("/")].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("^"),cljs.core.str((function (){var or__4247__auto__ = (function (){var and__4235__auto__ = asset_path;
if(cljs.core.truth_(and__4235__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__4235__auto__;
}
})();
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.stacktrace.output_directory.call(null,opts);
}
})()),cljs.core.str("/")].join('')),"");
} else {
var temp__4423__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var asset_root = temp__4423__auto__;
return clojure.string.replace.call(null,file,asset_root,"");
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Could not relativize URL "),cljs.core.str(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.call(null,clojure.string.replace.call(null,st_el,/\s+at\s+/,""),/\s+/);
var vec__8938 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__8938,(0),null);
var flc = cljs.core.nth.call(null,vec__8938,(1),null);
var vec__8939 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__8939,(0),null);
var line = cljs.core.nth.call(null,vec__8939,(1),null);
var column = cljs.core.nth.call(null,vec__8939,(2),null);
if(cljs.core.truth_((function (){var and__4235__auto__ = file;
if(cljs.core.truth_(and__4235__auto__)){
var and__4235__auto____$1 = function$;
if(cljs.core.truth_(and__4235__auto____$1)){
var and__4235__auto____$2 = line;
if(cljs.core.truth_(and__4235__auto____$2)){
return column;
} else {
return and__4235__auto____$2;
}
} else {
return and__4235__auto____$1;
}
} else {
return and__4235__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,function$))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__8942_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__8942_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__8941_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__8941_SHARP_,"    at eval"));
}),cljs.core.drop_while.call(null,(function (p1__8940_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__8940_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__8945 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__8945,(0),null);
var flc = cljs.core.nth.call(null,vec__8945,(1),null);
var vec__8946 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__8946,(0),null);
var line = cljs.core.nth.call(null,vec__8946,(1),null);
var column = cljs.core.nth.call(null,vec__8946,(2),null);
if(cljs.core.truth_((function (){var and__4235__auto__ = file;
if(cljs.core.truth_(and__4235__auto__)){
var and__4235__auto____$1 = function$;
if(cljs.core.truth_(and__4235__auto____$1)){
var and__4235__auto____$2 = line;
if(cljs.core.truth_(and__4235__auto____$2)){
return column;
} else {
return and__4235__auto____$2;
}
} else {
return and__4235__auto____$1;
}
} else {
return and__4235__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,function$))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__8949_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__8949_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__8948_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__8948_SHARP_,"eval code"));
}),cljs.core.drop_while.call(null,(function (p1__8947_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__8947_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,f__$1))?null:((cljs.core.not_EQ_.call(null,f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
var f__$3 = clojure.string.replace.call(null,clojure.string.replace.call(null,f__$2,/</,""),(new RegExp("\\/")),"");
return f__$3;
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__8952 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__8952,(0),null);
var flc = cljs.core.nth.call(null,vec__8952,(1),null);
var vec__8953 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__8953,(0),null);
var line = cljs.core.nth.call(null,vec__8953,(1),null);
var column = cljs.core.nth.call(null,vec__8953,(2),null);
if(cljs.core.truth_((function (){var and__4235__auto__ = file;
if(cljs.core.truth_(and__4235__auto__)){
var and__4235__auto____$1 = function$;
if(cljs.core.truth_(and__4235__auto____$1)){
var and__4235__auto____$2 = line;
if(cljs.core.truth_(and__4235__auto____$2)){
return column;
} else {
return and__4235__auto____$2;
}
} else {
return and__4235__auto____$1;
}
} else {
return and__4235__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,function$))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__8956_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__8956_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__8955_SHARP_){
return cljs.core._EQ_.call(null,p1__8955_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__8954_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__8954_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__8957){
var map__8958 = p__8957;
var map__8958__$1 = ((((!((map__8958 == null)))?((((map__8958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8958):map__8958);
var opts = map__8958__$1;
var output_dir = cljs.core.get.call(null,map__8958__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__8958,map__8958__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if(cljs.core.truth_((function (){var or__4247__auto__ = clojure.string.blank_QMARK_.call(null,frame_str);
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return ((-1) === frame_str.indexOf("\tat"));
}
})())){
return null;
} else {
var vec__8966 = clojure.string.split.call(null,frame_str,/:/);
var file_side = cljs.core.nth.call(null,vec__8966,(0),null);
var line_fn_side = cljs.core.nth.call(null,vec__8966,(1),null);
var file = clojure.string.replace.call(null,file_side,/\s+at\s+/,"");
var vec__8967 = clojure.string.split.call(null,line_fn_side,/\s+/);
var line = cljs.core.nth.call(null,vec__8967,(0),null);
var function$ = cljs.core.nth.call(null,vec__8967,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),(cljs.core.truth_(function$)?clojure.string.replace.call(null,clojure.string.replace.call(null,function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__4235__auto__ = line;
if(cljs.core.truth_(and__4235__auto__)){
return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,line));
} else {
return and__4235__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__8958,map__8958__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__8968){
var map__8969 = p__8968;
var map__8969__$1 = ((((!((map__8969 == null)))?((((map__8969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8969):map__8969);
var opts = map__8969__$1;
var output_dir = cljs.core.get.call(null,map__8969__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__8969,map__8969__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if(cljs.core.truth_((function (){var or__4247__auto__ = clojure.string.blank_QMARK_.call(null,frame_str);
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return ((-1) === frame_str.indexOf("\tat"));
}
})())){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
var vec__8977 = clojure.string.split.call(null,frame_str__$1,/\s+/);
var function$ = cljs.core.nth.call(null,vec__8977,(0),null);
var file_and_line = cljs.core.nth.call(null,vec__8977,(1),null);
var vec__8978 = clojure.string.split.call(null,file_and_line,/:/);
var file_part = cljs.core.nth.call(null,vec__8978,(0),null);
var line_part = cljs.core.nth.call(null,vec__8978,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__4235__auto__ = line_part;
if(cljs.core.truth_(and__4235__auto__)){
return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,line_part));
} else {
return and__4235__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line_part.substring((0),(cljs.core.count.call(null,line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__8969,map__8969__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.call(null,sms,cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.stacktrace.remove_ext.call(null,file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last.call(null,(function (){var or__4247__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,((function (source_map){
return (function (p1__8979_SHARP_){
return (p1__8979_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (source_map){
return (function (p1__8980_SHARP_,p2__8981_SHARP_){
return p1__8980_SHARP_.call(null,p2__8981_SHARP_);
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__4423__auto__ = cljs.core.get.call(null,source_map,(line - (1)));
if(cljs.core.truth_(temp__4423__auto__)){
var columns = temp__4423__auto__;
return adjust.call(null,cljs.core.map.call(null,get_best_column.call(null,columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 * ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__8982,sms,opts){
var map__8986 = p__8982;
var map__8986__$1 = ((((!((map__8986 == null)))?((((map__8986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8986):map__8986);
var function$ = cljs.core.get.call(null,map__8986__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__8986__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__8986__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__8986__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__8988 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8988,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8988,(1),null);
var call = cljs.core.nth.call(null,vec__8988,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_.call(null,file,".js"))?[cljs.core.str(cljs.core.subs.call(null,file,(0),(cljs.core.count.call(null,file) - (3)))),cljs.core.str(".cljs")].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?[cljs.core.str("NO_SOURCE_FILE"),cljs.core.str((cljs.core.truth_(file)?[cljs.core.str(" "),cljs.core.str(file)].join(''):null))].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 * [{:file <string>
 * :function <string>
 * :line <integer>
 * :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(){
var args8991 = [];
var len__5286__auto___8994 = arguments.length;
var i__5287__auto___8995 = (0);
while(true){
if((i__5287__auto___8995 < len__5286__auto___8994)){
args8991.push((arguments[i__5287__auto___8995]));

var G__8996 = (i__5287__auto___8995 + (1));
i__5287__auto___8995 = G__8996;
continue;
} else {
}
break;
}

var G__8993 = args8991.length;
switch (G__8993) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8991.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.call(null,(function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.call(null,munged_fn_name,clojure.string.replace.call(null,cljs.core.munge.call(null,unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),function$,call);
});
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__8989_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__8989_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,((function (mapped_frames){
return (function (p1__8990_SHARP_){
return cljs.core.dissoc.call(null,p1__8990_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
});})(mapped_frames))
,mapped_frames),cljs.core.concat.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;
/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 * of library names to decoded source maps, print the ClojureScript stacktrace .
 * See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(){
var args8998 = [];
var len__5286__auto___9011 = arguments.length;
var i__5287__auto___9012 = (0);
while(true){
if((i__5287__auto___9012 < len__5286__auto___9011)){
args8998.push((arguments[i__5287__auto___9012]));

var G__9013 = (i__5287__auto___9012 + (1));
i__5287__auto___9012 = G__9013;
continue;
} else {
}
break;
}

var G__9000 = args8998.length;
switch (G__9000) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8998.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__5202__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_9001_9015 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_9002_9016 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_9001_9015,_STAR_print_fn_STAR_9002_9016,sb__5202__auto__){
return (function (x__5203__auto__){
return sb__5202__auto__.append(x__5203__auto__);
});})(_STAR_print_newline_STAR_9001_9015,_STAR_print_fn_STAR_9002_9016,sb__5202__auto__))
;

try{var seq__9003_9017 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__9004_9018 = null;
var count__9005_9019 = (0);
var i__9006_9020 = (0);
while(true){
if((i__9006_9020 < count__9005_9019)){
var map__9007_9021 = cljs.core._nth.call(null,chunk__9004_9018,i__9006_9020);
var map__9007_9022__$1 = ((((!((map__9007_9021 == null)))?((((map__9007_9021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9007_9021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9007_9021):map__9007_9021);
var function_9023 = cljs.core.get.call(null,map__9007_9022__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_9024 = cljs.core.get.call(null,map__9007_9022__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_9025 = cljs.core.get.call(null,map__9007_9022__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_9026 = cljs.core.get.call(null,map__9007_9022__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_9023)?[cljs.core.str(function_9023),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_9024),cljs.core.str((cljs.core.truth_(line_9025)?[cljs.core.str(":"),cljs.core.str(line_9025)].join(''):null)),cljs.core.str((cljs.core.truth_(column_9026)?[cljs.core.str(":"),cljs.core.str(column_9026)].join(''):null)),cljs.core.str(")")].join(''));

var G__9027 = seq__9003_9017;
var G__9028 = chunk__9004_9018;
var G__9029 = count__9005_9019;
var G__9030 = (i__9006_9020 + (1));
seq__9003_9017 = G__9027;
chunk__9004_9018 = G__9028;
count__9005_9019 = G__9029;
i__9006_9020 = G__9030;
continue;
} else {
var temp__4425__auto___9031 = cljs.core.seq.call(null,seq__9003_9017);
if(temp__4425__auto___9031){
var seq__9003_9032__$1 = temp__4425__auto___9031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9003_9032__$1)){
var c__5031__auto___9033 = cljs.core.chunk_first.call(null,seq__9003_9032__$1);
var G__9034 = cljs.core.chunk_rest.call(null,seq__9003_9032__$1);
var G__9035 = c__5031__auto___9033;
var G__9036 = cljs.core.count.call(null,c__5031__auto___9033);
var G__9037 = (0);
seq__9003_9017 = G__9034;
chunk__9004_9018 = G__9035;
count__9005_9019 = G__9036;
i__9006_9020 = G__9037;
continue;
} else {
var map__9009_9038 = cljs.core.first.call(null,seq__9003_9032__$1);
var map__9009_9039__$1 = ((((!((map__9009_9038 == null)))?((((map__9009_9038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9009_9038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9009_9038):map__9009_9038);
var function_9040 = cljs.core.get.call(null,map__9009_9039__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_9041 = cljs.core.get.call(null,map__9009_9039__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_9042 = cljs.core.get.call(null,map__9009_9039__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_9043 = cljs.core.get.call(null,map__9009_9039__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_9040)?[cljs.core.str(function_9040),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_9041),cljs.core.str((cljs.core.truth_(line_9042)?[cljs.core.str(":"),cljs.core.str(line_9042)].join(''):null)),cljs.core.str((cljs.core.truth_(column_9043)?[cljs.core.str(":"),cljs.core.str(column_9043)].join(''):null)),cljs.core.str(")")].join(''));

var G__9044 = cljs.core.next.call(null,seq__9003_9032__$1);
var G__9045 = null;
var G__9046 = (0);
var G__9047 = (0);
seq__9003_9017 = G__9044;
chunk__9004_9018 = G__9045;
count__9005_9019 = G__9046;
i__9006_9020 = G__9047;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9002_9016;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_9001_9015;
}
return [cljs.core.str(sb__5202__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=stacktrace.js.map