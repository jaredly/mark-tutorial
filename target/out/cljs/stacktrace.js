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
var vec__10201 = cljs.core.reduce.call(null,((function (xs){
return (function (p__10203,p__10204){
var vec__10205 = p__10203;
var pre = cljs.core.nth.call(null,vec__10205,(0),null);
var post = cljs.core.nth.call(null,vec__10205,(1),null);
var vec__10206 = p__10204;
var x = cljs.core.nth.call(null,vec__10206,(0),null);
var i = cljs.core.nth.call(null,vec__10206,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__10201,(0),null);
var vec__10202 = cljs.core.nth.call(null,vec__10201,(1),null);
var line = cljs.core.nth.call(null,vec__10202,(0),null);
var column = cljs.core.nth.call(null,vec__10202,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10207 = file;
var G__10207__$1 = ((cljs.stacktrace.starts_with_QMARK_.call(null,file,"("))?clojure.string.replace.call(null,G__10207,"(",""):G__10207);
return G__10207__$1;
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__10208 = line;
var G__10208__$1 = ((cljs.stacktrace.ends_with_QMARK_.call(null,line,")"))?clojure.string.replace.call(null,G__10208,")",""):G__10208);
return G__10208__$1;
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__10209 = column;
var G__10209__$1 = ((cljs.stacktrace.ends_with_QMARK_.call(null,column,")"))?clojure.string.replace.call(null,G__10209,")",""):G__10209);
return G__10209__$1;
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__10210,file,p__10211){
var map__10216 = p__10210;
var map__10216__$1 = ((((!((map__10216 == null)))?((((map__10216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10216):map__10216);
var repl_env = map__10216__$1;
var host = cljs.core.get.call(null,map__10216__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__10216__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__10216__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__10217 = p__10211;
var map__10217__$1 = ((((!((map__10217 == null)))?((((map__10217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10217):map__10217);
var opts = map__10217__$1;
var asset_path = cljs.core.get.call(null,map__10217__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
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
var vec__10222 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__10222,(0),null);
var flc = cljs.core.nth.call(null,vec__10222,(1),null);
var vec__10223 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__10223,(0),null);
var line = cljs.core.nth.call(null,vec__10223,(1),null);
var column = cljs.core.nth.call(null,vec__10223,(2),null);
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
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__10226_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__10226_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__10225_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__10225_SHARP_,"    at eval"));
}),cljs.core.drop_while.call(null,(function (p1__10224_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__10224_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__10229 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__10229,(0),null);
var flc = cljs.core.nth.call(null,vec__10229,(1),null);
var vec__10230 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__10230,(0),null);
var line = cljs.core.nth.call(null,vec__10230,(1),null);
var column = cljs.core.nth.call(null,vec__10230,(2),null);
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
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__10233_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__10233_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__10232_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__10232_SHARP_,"eval code"));
}),cljs.core.drop_while.call(null,(function (p1__10231_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__10231_SHARP_,"Error");
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
var vec__10236 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__10236,(0),null);
var flc = cljs.core.nth.call(null,vec__10236,(1),null);
var vec__10237 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__10237,(0),null);
var line = cljs.core.nth.call(null,vec__10237,(1),null);
var column = cljs.core.nth.call(null,vec__10237,(2),null);
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
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__10240_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__10240_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__10239_SHARP_){
return cljs.core._EQ_.call(null,p1__10239_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__10238_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__10238_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__10241){
var map__10242 = p__10241;
var map__10242__$1 = ((((!((map__10242 == null)))?((((map__10242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10242):map__10242);
var opts = map__10242__$1;
var output_dir = cljs.core.get.call(null,map__10242__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__10242,map__10242__$1,opts,output_dir){
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
var vec__10250 = clojure.string.split.call(null,frame_str,/:/);
var file_side = cljs.core.nth.call(null,vec__10250,(0),null);
var line_fn_side = cljs.core.nth.call(null,vec__10250,(1),null);
var file = clojure.string.replace.call(null,file_side,/\s+at\s+/,"");
var vec__10251 = clojure.string.split.call(null,line_fn_side,/\s+/);
var line = cljs.core.nth.call(null,vec__10251,(0),null);
var function$ = cljs.core.nth.call(null,vec__10251,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),(cljs.core.truth_(function$)?clojure.string.replace.call(null,clojure.string.replace.call(null,function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__4235__auto__ = line;
if(cljs.core.truth_(and__4235__auto__)){
return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,line));
} else {
return and__4235__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__10242,map__10242__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__10252){
var map__10253 = p__10252;
var map__10253__$1 = ((((!((map__10253 == null)))?((((map__10253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10253):map__10253);
var opts = map__10253__$1;
var output_dir = cljs.core.get.call(null,map__10253__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__10253,map__10253__$1,opts,output_dir){
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
var vec__10261 = clojure.string.split.call(null,frame_str__$1,/\s+/);
var function$ = cljs.core.nth.call(null,vec__10261,(0),null);
var file_and_line = cljs.core.nth.call(null,vec__10261,(1),null);
var vec__10262 = clojure.string.split.call(null,file_and_line,/:/);
var file_part = cljs.core.nth.call(null,vec__10262,(0),null);
var line_part = cljs.core.nth.call(null,vec__10262,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__4235__auto__ = line_part;
if(cljs.core.truth_(and__4235__auto__)){
return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,line_part));
} else {
return and__4235__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line_part.substring((0),(cljs.core.count.call(null,line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__10253,map__10253__$1,opts,output_dir))
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
return (function (p1__10263_SHARP_){
return (p1__10263_SHARP_ <= (column__$1 - (1)));
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
return (function (p1__10264_SHARP_,p2__10265_SHARP_){
return p1__10264_SHARP_.call(null,p2__10265_SHARP_);
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
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__10266,sms,opts){
var map__10270 = p__10266;
var map__10270__$1 = ((((!((map__10270 == null)))?((((map__10270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10270):map__10270);
var function$ = cljs.core.get.call(null,map__10270__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__10270__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__10270__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__10270__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__10272 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10272,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10272,(1),null);
var call = cljs.core.nth.call(null,vec__10272,(2),null);
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
var args10275 = [];
var len__5286__auto___10278 = arguments.length;
var i__5287__auto___10279 = (0);
while(true){
if((i__5287__auto___10279 < len__5286__auto___10278)){
args10275.push((arguments[i__5287__auto___10279]));

var G__10280 = (i__5287__auto___10279 + (1));
i__5287__auto___10279 = G__10280;
continue;
} else {
}
break;
}

var G__10277 = args10275.length;
switch (G__10277) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10275.length)].join('')));

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
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__10273_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__10273_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,((function (mapped_frames){
return (function (p1__10274_SHARP_){
return cljs.core.dissoc.call(null,p1__10274_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
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
var args10282 = [];
var len__5286__auto___10295 = arguments.length;
var i__5287__auto___10296 = (0);
while(true){
if((i__5287__auto___10296 < len__5286__auto___10295)){
args10282.push((arguments[i__5287__auto___10296]));

var G__10297 = (i__5287__auto___10296 + (1));
i__5287__auto___10296 = G__10297;
continue;
} else {
}
break;
}

var G__10284 = args10282.length;
switch (G__10284) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10282.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__5202__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10285_10299 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10286_10300 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10285_10299,_STAR_print_fn_STAR_10286_10300,sb__5202__auto__){
return (function (x__5203__auto__){
return sb__5202__auto__.append(x__5203__auto__);
});})(_STAR_print_newline_STAR_10285_10299,_STAR_print_fn_STAR_10286_10300,sb__5202__auto__))
;

try{var seq__10287_10301 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__10288_10302 = null;
var count__10289_10303 = (0);
var i__10290_10304 = (0);
while(true){
if((i__10290_10304 < count__10289_10303)){
var map__10291_10305 = cljs.core._nth.call(null,chunk__10288_10302,i__10290_10304);
var map__10291_10306__$1 = ((((!((map__10291_10305 == null)))?((((map__10291_10305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10291_10305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10291_10305):map__10291_10305);
var function_10307 = cljs.core.get.call(null,map__10291_10306__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_10308 = cljs.core.get.call(null,map__10291_10306__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_10309 = cljs.core.get.call(null,map__10291_10306__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_10310 = cljs.core.get.call(null,map__10291_10306__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_10307)?[cljs.core.str(function_10307),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_10308),cljs.core.str((cljs.core.truth_(line_10309)?[cljs.core.str(":"),cljs.core.str(line_10309)].join(''):null)),cljs.core.str((cljs.core.truth_(column_10310)?[cljs.core.str(":"),cljs.core.str(column_10310)].join(''):null)),cljs.core.str(")")].join(''));

var G__10311 = seq__10287_10301;
var G__10312 = chunk__10288_10302;
var G__10313 = count__10289_10303;
var G__10314 = (i__10290_10304 + (1));
seq__10287_10301 = G__10311;
chunk__10288_10302 = G__10312;
count__10289_10303 = G__10313;
i__10290_10304 = G__10314;
continue;
} else {
var temp__4425__auto___10315 = cljs.core.seq.call(null,seq__10287_10301);
if(temp__4425__auto___10315){
var seq__10287_10316__$1 = temp__4425__auto___10315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10287_10316__$1)){
var c__5031__auto___10317 = cljs.core.chunk_first.call(null,seq__10287_10316__$1);
var G__10318 = cljs.core.chunk_rest.call(null,seq__10287_10316__$1);
var G__10319 = c__5031__auto___10317;
var G__10320 = cljs.core.count.call(null,c__5031__auto___10317);
var G__10321 = (0);
seq__10287_10301 = G__10318;
chunk__10288_10302 = G__10319;
count__10289_10303 = G__10320;
i__10290_10304 = G__10321;
continue;
} else {
var map__10293_10322 = cljs.core.first.call(null,seq__10287_10316__$1);
var map__10293_10323__$1 = ((((!((map__10293_10322 == null)))?((((map__10293_10322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10293_10322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10293_10322):map__10293_10322);
var function_10324 = cljs.core.get.call(null,map__10293_10323__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_10325 = cljs.core.get.call(null,map__10293_10323__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_10326 = cljs.core.get.call(null,map__10293_10323__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_10327 = cljs.core.get.call(null,map__10293_10323__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_10324)?[cljs.core.str(function_10324),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_10325),cljs.core.str((cljs.core.truth_(line_10326)?[cljs.core.str(":"),cljs.core.str(line_10326)].join(''):null)),cljs.core.str((cljs.core.truth_(column_10327)?[cljs.core.str(":"),cljs.core.str(column_10327)].join(''):null)),cljs.core.str(")")].join(''));

var G__10328 = cljs.core.next.call(null,seq__10287_10316__$1);
var G__10329 = null;
var G__10330 = (0);
var G__10331 = (0);
seq__10287_10301 = G__10328;
chunk__10288_10302 = G__10329;
count__10289_10303 = G__10330;
i__10290_10304 = G__10331;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10286_10300;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10285_10299;
}
return [cljs.core.str(sb__5202__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=stacktrace.js.map