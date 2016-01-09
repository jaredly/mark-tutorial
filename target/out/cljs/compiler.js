// Compiled by ClojureScript 1.7.58 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_dependents_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__15867 = s;
var map__15867__$1 = ((((!((map__15867 == null)))?((((map__15867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15867):map__15867);
var name = cljs.core.get.call(null,map__15867__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15867__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__15870 = info;
var map__15871 = G__15870;
var map__15871__$1 = ((((!((map__15871 == null)))?((((map__15871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15871):map__15871);
var shadow = cljs.core.get.call(null,map__15871__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__15870__$1 = G__15870;
while(true){
var d__$2 = d__$1;
var map__15873 = G__15870__$1;
var map__15873__$1 = ((((!((map__15873 == null)))?((((map__15873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15873):map__15873);
var shadow__$1 = cljs.core.get.call(null,map__15873__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__15875 = (d__$2 + (1));
var G__15876 = shadow__$1;
d__$1 = G__15875;
G__15870__$1 = G__15876;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__15877){
var map__15882 = p__15877;
var map__15882__$1 = ((((!((map__15882 == null)))?((((map__15882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15882):map__15882);
var name_var = map__15882__$1;
var name = cljs.core.get.call(null,map__15882__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15882__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__15884 = info;
var map__15884__$1 = ((((!((map__15884 == null)))?((((map__15884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15884):map__15884);
var ns = cljs.core.get.call(null,map__15884__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__15884__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(){
var args15886 = [];
var len__5286__auto___15889 = arguments.length;
var i__5287__auto___15890 = (0);
while(true){
if((i__5287__auto___15890 < len__5286__auto___15889)){
args15886.push((arguments[i__5287__auto___15890]));

var G__15891 = (i__5287__auto___15890 + (1));
i__5287__auto___15890 = G__15891;
continue;
} else {
}
break;
}

var G__15888 = args15886.length;
switch (G__15888) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15886.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.core._hash.call(null,name);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__15894 = cp;
switch (G__15894) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__15900_15904 = cljs.core.seq.call(null,s);
var chunk__15901_15905 = null;
var count__15902_15906 = (0);
var i__15903_15907 = (0);
while(true){
if((i__15903_15907 < count__15902_15906)){
var c_15908 = cljs.core._nth.call(null,chunk__15901_15905,i__15903_15907);
sb.append(cljs.compiler.escape_char.call(null,c_15908));

var G__15909 = seq__15900_15904;
var G__15910 = chunk__15901_15905;
var G__15911 = count__15902_15906;
var G__15912 = (i__15903_15907 + (1));
seq__15900_15904 = G__15909;
chunk__15901_15905 = G__15910;
count__15902_15906 = G__15911;
i__15903_15907 = G__15912;
continue;
} else {
var temp__4425__auto___15913 = cljs.core.seq.call(null,seq__15900_15904);
if(temp__4425__auto___15913){
var seq__15900_15914__$1 = temp__4425__auto___15913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15900_15914__$1)){
var c__5031__auto___15915 = cljs.core.chunk_first.call(null,seq__15900_15914__$1);
var G__15916 = cljs.core.chunk_rest.call(null,seq__15900_15914__$1);
var G__15917 = c__5031__auto___15915;
var G__15918 = cljs.core.count.call(null,c__5031__auto___15915);
var G__15919 = (0);
seq__15900_15904 = G__15916;
chunk__15901_15905 = G__15917;
count__15902_15906 = G__15918;
i__15903_15907 = G__15919;
continue;
} else {
var c_15920 = cljs.core.first.call(null,seq__15900_15914__$1);
sb.append(cljs.compiler.escape_char.call(null,c_15920));

var G__15921 = cljs.core.next.call(null,seq__15900_15914__$1);
var G__15922 = null;
var G__15923 = (0);
var G__15924 = (0);
seq__15900_15904 = G__15921;
chunk__15901_15905 = G__15922;
count__15902_15906 = G__15923;
i__15903_15907 = G__15924;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__5141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5145__auto__,method_table__5141__auto__,prefer_table__5142__auto__,method_cache__5143__auto__,cached_hierarchy__5144__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__6765__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__6765__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__15930_15935 = ast;
var map__15930_15936__$1 = ((((!((map__15930_15935 == null)))?((((map__15930_15935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15930_15935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15930_15935):map__15930_15935);
var env_15937 = cljs.core.get.call(null,map__15930_15936__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_15937))){
var map__15932_15938 = env_15937;
var map__15932_15939__$1 = ((((!((map__15932_15938 == null)))?((((map__15932_15938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15932_15938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15932_15938):map__15932_15938);
var line_15940 = cljs.core.get.call(null,map__15932_15939__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_15941 = cljs.core.get.call(null,map__15932_15939__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__15932_15938,map__15932_15939__$1,line_15940,column_15941,map__15930_15935,map__15930_15936__$1,env_15937,val__6765__auto__){
return (function (m){
var minfo = (function (){var G__15934 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__15934__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__15934,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__15934);
return G__15934__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_15940 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__15932_15938,map__15932_15939__$1,line_15940,column_15941,map__15930_15935,map__15930_15936__$1,env_15937,val__6765__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_15941)?(column_15941 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__15932_15938,map__15932_15939__$1,line_15940,column_15941,map__15930_15935,map__15930_15936__$1,env_15937,val__6765__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__15932_15938,map__15932_15939__$1,line_15940,column_15941,map__15930_15935,map__15930_15936__$1,env_15937,val__6765__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__15932_15938,map__15932_15939__$1,line_15940,column_15941,map__15930_15935,map__15930_15936__$1,env_15937,val__6765__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__15932_15938,map__15932_15939__$1,line_15940,column_15941,map__15930_15935,map__15930_15936__$1,env_15937,val__6765__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__6765__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(){
var args__5293__auto__ = [];
var len__5286__auto___15948 = arguments.length;
var i__5287__auto___15949 = (0);
while(true){
if((i__5287__auto___15949 < len__5286__auto___15948)){
args__5293__auto__.push((arguments[i__5287__auto___15949]));

var G__15950 = (i__5287__auto___15949 + (1));
i__5287__auto___15949 = G__15950;
continue;
} else {
}
break;
}

var argseq__5294__auto__ = ((((0) < args__5293__auto__.length))?(new cljs.core.IndexedSeq(args__5293__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__5294__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__15944_15951 = cljs.core.seq.call(null,xs);
var chunk__15945_15952 = null;
var count__15946_15953 = (0);
var i__15947_15954 = (0);
while(true){
if((i__15947_15954 < count__15946_15953)){
var x_15955 = cljs.core._nth.call(null,chunk__15945_15952,i__15947_15954);
if((x_15955 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_15955)){
cljs.compiler.emit.call(null,x_15955);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_15955)){
cljs.core.apply.call(null,cljs.compiler.emits,x_15955);
} else {
if(goog.isFunction(x_15955)){
x_15955.call(null);
} else {
var s_15956 = cljs.core.print_str.call(null,x_15955);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__15944_15951,chunk__15945_15952,count__15946_15953,i__15947_15954,s_15956,x_15955){
return (function (p1__15942_SHARP_){
return (p1__15942_SHARP_ + cljs.core.count.call(null,s_15956));
});})(seq__15944_15951,chunk__15945_15952,count__15946_15953,i__15947_15954,s_15956,x_15955))
);
}

cljs.core.print.call(null,s_15956);

}
}
}
}

var G__15957 = seq__15944_15951;
var G__15958 = chunk__15945_15952;
var G__15959 = count__15946_15953;
var G__15960 = (i__15947_15954 + (1));
seq__15944_15951 = G__15957;
chunk__15945_15952 = G__15958;
count__15946_15953 = G__15959;
i__15947_15954 = G__15960;
continue;
} else {
var temp__4425__auto___15961 = cljs.core.seq.call(null,seq__15944_15951);
if(temp__4425__auto___15961){
var seq__15944_15962__$1 = temp__4425__auto___15961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15944_15962__$1)){
var c__5031__auto___15963 = cljs.core.chunk_first.call(null,seq__15944_15962__$1);
var G__15964 = cljs.core.chunk_rest.call(null,seq__15944_15962__$1);
var G__15965 = c__5031__auto___15963;
var G__15966 = cljs.core.count.call(null,c__5031__auto___15963);
var G__15967 = (0);
seq__15944_15951 = G__15964;
chunk__15945_15952 = G__15965;
count__15946_15953 = G__15966;
i__15947_15954 = G__15967;
continue;
} else {
var x_15968 = cljs.core.first.call(null,seq__15944_15962__$1);
if((x_15968 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_15968)){
cljs.compiler.emit.call(null,x_15968);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_15968)){
cljs.core.apply.call(null,cljs.compiler.emits,x_15968);
} else {
if(goog.isFunction(x_15968)){
x_15968.call(null);
} else {
var s_15969 = cljs.core.print_str.call(null,x_15968);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__15944_15951,chunk__15945_15952,count__15946_15953,i__15947_15954,s_15969,x_15968,seq__15944_15962__$1,temp__4425__auto___15961){
return (function (p1__15942_SHARP_){
return (p1__15942_SHARP_ + cljs.core.count.call(null,s_15969));
});})(seq__15944_15951,chunk__15945_15952,count__15946_15953,i__15947_15954,s_15969,x_15968,seq__15944_15962__$1,temp__4425__auto___15961))
);
}

cljs.core.print.call(null,s_15969);

}
}
}
}

var G__15970 = cljs.core.next.call(null,seq__15944_15962__$1);
var G__15971 = null;
var G__15972 = (0);
var G__15973 = (0);
seq__15944_15951 = G__15970;
chunk__15945_15952 = G__15971;
count__15946_15953 = G__15972;
i__15947_15954 = G__15973;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq15943){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15943));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(){
var args__5293__auto__ = [];
var len__5286__auto___15978 = arguments.length;
var i__5287__auto___15979 = (0);
while(true){
if((i__5287__auto___15979 < len__5286__auto___15978)){
args__5293__auto__.push((arguments[i__5287__auto___15979]));

var G__15980 = (i__5287__auto___15979 + (1));
i__5287__auto___15979 = G__15980;
continue;
} else {
}
break;
}

var argseq__5294__auto__ = ((((0) < args__5293__auto__.length))?(new cljs.core.IndexedSeq(args__5293__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__5294__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__15975){
var map__15976 = p__15975;
var map__15976__$1 = ((((!((map__15976 == null)))?((((map__15976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15976):map__15976);
var m = map__15976__$1;
var gen_line = cljs.core.get.call(null,map__15976__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq15974){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15974));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5202__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15983_15985 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15984_15986 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15983_15985,_STAR_print_fn_STAR_15984_15986,sb__5202__auto__){
return (function (x__5203__auto__){
return sb__5202__auto__.append(x__5203__auto__);
});})(_STAR_print_newline_STAR_15983_15985,_STAR_print_fn_STAR_15984_15986,sb__5202__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15984_15986;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15983_15985;
}
return [cljs.core.str(sb__5202__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__5141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5145__auto__,method_table__5141__auto__,prefer_table__5142__auto__,method_cache__5143__auto__,cached_hierarchy__5144__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,x);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__15987 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__15987,(0),null);
var flags = cljs.core.nth.call(null,vec__15987,(1),null);
var pattern = cljs.core.nth.call(null,vec__15987,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid.toString(),"\")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__15989){
var map__15990 = p__15989;
var map__15990__$1 = ((((!((map__15990 == null)))?((((map__15990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15990):map__15990);
var arg = map__15990__$1;
var info = cljs.core.get.call(null,map__15990__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__15990__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__15990__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__4247__auto__ = js_module_name;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__15992 = info__$1;
var G__15992__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__15992):G__15992);
return G__15992__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__15993){
var map__15994 = p__15993;
var map__15994__$1 = ((((!((map__15994 == null)))?((((map__15994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15994):map__15994);
var arg = map__15994__$1;
var env = cljs.core.get.call(null,map__15994__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__15994__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__15994__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__15994__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__15996 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__15996__$1 = ((((!((map__15996 == null)))?((((map__15996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15996):map__15996);
var name = cljs.core.get.call(null,map__15996__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__15998){
var map__15999 = p__15998;
var map__15999__$1 = ((((!((map__15999 == null)))?((((map__15999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15999):map__15999);
var expr = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__16001_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__16001_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__16002){
var map__16003 = p__16002;
var map__16003__$1 = ((((!((map__16003 == null)))?((((map__16003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16003):map__16003);
var env = cljs.core.get.call(null,map__16003__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__16003__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__16003__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__16005){
var map__16006 = p__16005;
var map__16006__$1 = ((((!((map__16006 == null)))?((((map__16006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16006):map__16006);
var items = cljs.core.get.call(null,map__16006__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__16006__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__16008){
var map__16009 = p__16008;
var map__16009__$1 = ((((!((map__16009 == null)))?((((map__16009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16009):map__16009);
var items = cljs.core.get.call(null,map__16009__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__16009__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_16011 = cljs.core.count.call(null,items);
if((cnt_16011 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_16011,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__16012_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__16012_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__16013){
var map__16014 = p__16013;
var map__16014__$1 = ((((!((map__16014 == null)))?((((map__16014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16014):map__16014);
var items = cljs.core.get.call(null,map__16014__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__16014__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__16016){
var map__16017 = p__16016;
var map__16017__$1 = ((((!((map__16017 == null)))?((((map__16017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16017):map__16017);
var items = cljs.core.get.call(null,map__16017__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__16017__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__16017__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___16027 = cljs.core.seq.call(null,items);
if(temp__4425__auto___16027){
var items_16028__$1 = temp__4425__auto___16027;
var vec__16019_16029 = items_16028__$1;
var vec__16020_16030 = cljs.core.nth.call(null,vec__16019_16029,(0),null);
var k_16031 = cljs.core.nth.call(null,vec__16020_16030,(0),null);
var v_16032 = cljs.core.nth.call(null,vec__16020_16030,(1),null);
var r_16033 = cljs.core.nthnext.call(null,vec__16019_16029,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_16031),"\": ",v_16032);

var seq__16021_16034 = cljs.core.seq.call(null,r_16033);
var chunk__16022_16035 = null;
var count__16023_16036 = (0);
var i__16024_16037 = (0);
while(true){
if((i__16024_16037 < count__16023_16036)){
var vec__16025_16038 = cljs.core._nth.call(null,chunk__16022_16035,i__16024_16037);
var k_16039__$1 = cljs.core.nth.call(null,vec__16025_16038,(0),null);
var v_16040__$1 = cljs.core.nth.call(null,vec__16025_16038,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_16039__$1),"\": ",v_16040__$1);

var G__16041 = seq__16021_16034;
var G__16042 = chunk__16022_16035;
var G__16043 = count__16023_16036;
var G__16044 = (i__16024_16037 + (1));
seq__16021_16034 = G__16041;
chunk__16022_16035 = G__16042;
count__16023_16036 = G__16043;
i__16024_16037 = G__16044;
continue;
} else {
var temp__4425__auto___16045__$1 = cljs.core.seq.call(null,seq__16021_16034);
if(temp__4425__auto___16045__$1){
var seq__16021_16046__$1 = temp__4425__auto___16045__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16021_16046__$1)){
var c__5031__auto___16047 = cljs.core.chunk_first.call(null,seq__16021_16046__$1);
var G__16048 = cljs.core.chunk_rest.call(null,seq__16021_16046__$1);
var G__16049 = c__5031__auto___16047;
var G__16050 = cljs.core.count.call(null,c__5031__auto___16047);
var G__16051 = (0);
seq__16021_16034 = G__16048;
chunk__16022_16035 = G__16049;
count__16023_16036 = G__16050;
i__16024_16037 = G__16051;
continue;
} else {
var vec__16026_16052 = cljs.core.first.call(null,seq__16021_16046__$1);
var k_16053__$1 = cljs.core.nth.call(null,vec__16026_16052,(0),null);
var v_16054__$1 = cljs.core.nth.call(null,vec__16026_16052,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_16053__$1),"\": ",v_16054__$1);

var G__16055 = cljs.core.next.call(null,seq__16021_16046__$1);
var G__16056 = null;
var G__16057 = (0);
var G__16058 = (0);
seq__16021_16034 = G__16055;
chunk__16022_16035 = G__16056;
count__16023_16036 = G__16057;
i__16024_16037 = G__16058;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__16059){
var map__16060 = p__16059;
var map__16060__$1 = ((((!((map__16060 == null)))?((((map__16060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16060):map__16060);
var form = cljs.core.get.call(null,map__16060__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__16060__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__16062){
var map__16065 = p__16062;
var map__16065__$1 = ((((!((map__16065 == null)))?((((map__16065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16065):map__16065);
var op = cljs.core.get.call(null,map__16065__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__16065__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__4235__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__4235__auto__){
var and__4235__auto____$1 = form;
if(cljs.core.truth_(and__4235__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__4235__auto____$1;
}
} else {
return and__4235__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__16067){
var map__16070 = p__16067;
var map__16070__$1 = ((((!((map__16070 == null)))?((((map__16070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16070):map__16070);
var op = cljs.core.get.call(null,map__16070__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__16070__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4247__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__16072){
var map__16073 = p__16072;
var map__16073__$1 = ((((!((map__16073 == null)))?((((map__16073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16073):map__16073);
var test = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4247__auto__ = unchecked;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__16075){
var map__16076 = p__16075;
var map__16076__$1 = ((((!((map__16076 == null)))?((((map__16076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16076):map__16076);
var v = cljs.core.get.call(null,map__16076__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__16076__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__16076__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__16076__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__16076__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__16078_16092 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__16079_16093 = null;
var count__16080_16094 = (0);
var i__16081_16095 = (0);
while(true){
if((i__16081_16095 < count__16080_16094)){
var vec__16082_16096 = cljs.core._nth.call(null,chunk__16079_16093,i__16081_16095);
var ts_16097 = cljs.core.nth.call(null,vec__16082_16096,(0),null);
var then_16098 = cljs.core.nth.call(null,vec__16082_16096,(1),null);
var seq__16083_16099 = cljs.core.seq.call(null,ts_16097);
var chunk__16084_16100 = null;
var count__16085_16101 = (0);
var i__16086_16102 = (0);
while(true){
if((i__16086_16102 < count__16085_16101)){
var test_16103 = cljs.core._nth.call(null,chunk__16084_16100,i__16086_16102);
cljs.compiler.emitln.call(null,"case ",test_16103,":");

var G__16104 = seq__16083_16099;
var G__16105 = chunk__16084_16100;
var G__16106 = count__16085_16101;
var G__16107 = (i__16086_16102 + (1));
seq__16083_16099 = G__16104;
chunk__16084_16100 = G__16105;
count__16085_16101 = G__16106;
i__16086_16102 = G__16107;
continue;
} else {
var temp__4425__auto___16108 = cljs.core.seq.call(null,seq__16083_16099);
if(temp__4425__auto___16108){
var seq__16083_16109__$1 = temp__4425__auto___16108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16083_16109__$1)){
var c__5031__auto___16110 = cljs.core.chunk_first.call(null,seq__16083_16109__$1);
var G__16111 = cljs.core.chunk_rest.call(null,seq__16083_16109__$1);
var G__16112 = c__5031__auto___16110;
var G__16113 = cljs.core.count.call(null,c__5031__auto___16110);
var G__16114 = (0);
seq__16083_16099 = G__16111;
chunk__16084_16100 = G__16112;
count__16085_16101 = G__16113;
i__16086_16102 = G__16114;
continue;
} else {
var test_16115 = cljs.core.first.call(null,seq__16083_16109__$1);
cljs.compiler.emitln.call(null,"case ",test_16115,":");

var G__16116 = cljs.core.next.call(null,seq__16083_16109__$1);
var G__16117 = null;
var G__16118 = (0);
var G__16119 = (0);
seq__16083_16099 = G__16116;
chunk__16084_16100 = G__16117;
count__16085_16101 = G__16118;
i__16086_16102 = G__16119;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_16098);
} else {
cljs.compiler.emitln.call(null,then_16098);
}

cljs.compiler.emitln.call(null,"break;");

var G__16120 = seq__16078_16092;
var G__16121 = chunk__16079_16093;
var G__16122 = count__16080_16094;
var G__16123 = (i__16081_16095 + (1));
seq__16078_16092 = G__16120;
chunk__16079_16093 = G__16121;
count__16080_16094 = G__16122;
i__16081_16095 = G__16123;
continue;
} else {
var temp__4425__auto___16124 = cljs.core.seq.call(null,seq__16078_16092);
if(temp__4425__auto___16124){
var seq__16078_16125__$1 = temp__4425__auto___16124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16078_16125__$1)){
var c__5031__auto___16126 = cljs.core.chunk_first.call(null,seq__16078_16125__$1);
var G__16127 = cljs.core.chunk_rest.call(null,seq__16078_16125__$1);
var G__16128 = c__5031__auto___16126;
var G__16129 = cljs.core.count.call(null,c__5031__auto___16126);
var G__16130 = (0);
seq__16078_16092 = G__16127;
chunk__16079_16093 = G__16128;
count__16080_16094 = G__16129;
i__16081_16095 = G__16130;
continue;
} else {
var vec__16087_16131 = cljs.core.first.call(null,seq__16078_16125__$1);
var ts_16132 = cljs.core.nth.call(null,vec__16087_16131,(0),null);
var then_16133 = cljs.core.nth.call(null,vec__16087_16131,(1),null);
var seq__16088_16134 = cljs.core.seq.call(null,ts_16132);
var chunk__16089_16135 = null;
var count__16090_16136 = (0);
var i__16091_16137 = (0);
while(true){
if((i__16091_16137 < count__16090_16136)){
var test_16138 = cljs.core._nth.call(null,chunk__16089_16135,i__16091_16137);
cljs.compiler.emitln.call(null,"case ",test_16138,":");

var G__16139 = seq__16088_16134;
var G__16140 = chunk__16089_16135;
var G__16141 = count__16090_16136;
var G__16142 = (i__16091_16137 + (1));
seq__16088_16134 = G__16139;
chunk__16089_16135 = G__16140;
count__16090_16136 = G__16141;
i__16091_16137 = G__16142;
continue;
} else {
var temp__4425__auto___16143__$1 = cljs.core.seq.call(null,seq__16088_16134);
if(temp__4425__auto___16143__$1){
var seq__16088_16144__$1 = temp__4425__auto___16143__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16088_16144__$1)){
var c__5031__auto___16145 = cljs.core.chunk_first.call(null,seq__16088_16144__$1);
var G__16146 = cljs.core.chunk_rest.call(null,seq__16088_16144__$1);
var G__16147 = c__5031__auto___16145;
var G__16148 = cljs.core.count.call(null,c__5031__auto___16145);
var G__16149 = (0);
seq__16088_16134 = G__16146;
chunk__16089_16135 = G__16147;
count__16090_16136 = G__16148;
i__16091_16137 = G__16149;
continue;
} else {
var test_16150 = cljs.core.first.call(null,seq__16088_16144__$1);
cljs.compiler.emitln.call(null,"case ",test_16150,":");

var G__16151 = cljs.core.next.call(null,seq__16088_16144__$1);
var G__16152 = null;
var G__16153 = (0);
var G__16154 = (0);
seq__16088_16134 = G__16151;
chunk__16089_16135 = G__16152;
count__16090_16136 = G__16153;
i__16091_16137 = G__16154;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_16133);
} else {
cljs.compiler.emitln.call(null,then_16133);
}

cljs.compiler.emitln.call(null,"break;");

var G__16155 = cljs.core.next.call(null,seq__16078_16125__$1);
var G__16156 = null;
var G__16157 = (0);
var G__16158 = (0);
seq__16078_16092 = G__16155;
chunk__16079_16093 = G__16156;
count__16080_16094 = G__16157;
i__16081_16095 = G__16158;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__16159){
var map__16160 = p__16159;
var map__16160__$1 = ((((!((map__16160 == null)))?((((map__16160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16160):map__16160);
var throw$ = cljs.core.get.call(null,map__16160__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__16160__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$emit_comment_$_print_comment_lines(e){
var seq__16194 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,e));
var chunk__16195 = null;
var count__16196 = (0);
var i__16197 = (0);
while(true){
if((i__16197 < count__16196)){
var next_line = cljs.core._nth.call(null,chunk__16195,i__16197);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.trim.call(null,next_line),"*/","* /"));

var G__16202 = seq__16194;
var G__16203 = chunk__16195;
var G__16204 = count__16196;
var G__16205 = (i__16197 + (1));
seq__16194 = G__16202;
chunk__16195 = G__16203;
count__16196 = G__16204;
i__16197 = G__16205;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16194);
if(temp__4425__auto__){
var seq__16194__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16194__$1)){
var c__5031__auto__ = cljs.core.chunk_first.call(null,seq__16194__$1);
var G__16206 = cljs.core.chunk_rest.call(null,seq__16194__$1);
var G__16207 = c__5031__auto__;
var G__16208 = cljs.core.count.call(null,c__5031__auto__);
var G__16209 = (0);
seq__16194 = G__16206;
chunk__16195 = G__16207;
count__16196 = G__16208;
i__16197 = G__16209;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__16194__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.trim.call(null,next_line),"*/","* /"));

var G__16210 = cljs.core.next.call(null,seq__16194__$1);
var G__16211 = null;
var G__16212 = (0);
var G__16213 = (0);
seq__16194 = G__16210;
chunk__16195 = G__16211;
count__16196 = G__16212;
i__16197 = G__16213;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__16198_16214 = cljs.core.seq.call(null,docs__$2);
var chunk__16199_16215 = null;
var count__16200_16216 = (0);
var i__16201_16217 = (0);
while(true){
if((i__16201_16217 < count__16200_16216)){
var e_16218 = cljs.core._nth.call(null,chunk__16199_16215,i__16201_16217);
if(cljs.core.truth_(e_16218)){
print_comment_lines.call(null,e_16218);
} else {
}

var G__16219 = seq__16198_16214;
var G__16220 = chunk__16199_16215;
var G__16221 = count__16200_16216;
var G__16222 = (i__16201_16217 + (1));
seq__16198_16214 = G__16219;
chunk__16199_16215 = G__16220;
count__16200_16216 = G__16221;
i__16201_16217 = G__16222;
continue;
} else {
var temp__4425__auto___16223 = cljs.core.seq.call(null,seq__16198_16214);
if(temp__4425__auto___16223){
var seq__16198_16224__$1 = temp__4425__auto___16223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16198_16224__$1)){
var c__5031__auto___16225 = cljs.core.chunk_first.call(null,seq__16198_16224__$1);
var G__16226 = cljs.core.chunk_rest.call(null,seq__16198_16224__$1);
var G__16227 = c__5031__auto___16225;
var G__16228 = cljs.core.count.call(null,c__5031__auto___16225);
var G__16229 = (0);
seq__16198_16214 = G__16226;
chunk__16199_16215 = G__16227;
count__16200_16216 = G__16228;
i__16201_16217 = G__16229;
continue;
} else {
var e_16230 = cljs.core.first.call(null,seq__16198_16224__$1);
if(cljs.core.truth_(e_16230)){
print_comment_lines.call(null,e_16230);
} else {
}

var G__16231 = cljs.core.next.call(null,seq__16198_16224__$1);
var G__16232 = null;
var G__16233 = (0);
var G__16234 = (0);
seq__16198_16214 = G__16231;
chunk__16199_16215 = G__16232;
count__16200_16216 = G__16233;
i__16201_16217 = G__16234;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4235__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__16236_SHARP_){
return goog.string.startsWith(p1__16236_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4235__auto__)){
var and__4235__auto____$1 = opts;
if(cljs.core.truth_(and__4235__auto____$1)){
var and__4235__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4235__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__4235__auto____$2;
}
} else {
return and__4235__auto____$1;
}
} else {
return and__4235__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__16237){
var map__16238 = p__16237;
var map__16238__$1 = ((((!((map__16238 == null)))?((((map__16238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16238):map__16238);
var name = cljs.core.get.call(null,map__16238__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__16238__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__16238__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__16238__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__16238__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__16238__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__16238__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__16238__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__16238__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
var mname = cljs.compiler.munge.call(null,name);
if(cljs.core.truth_(init)){
cljs.compiler.emit_comment.call(null,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

cljs.compiler.emits.call(null," = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4235__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4235__auto__)){
return test;
} else {
return and__4235__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__16240){
var map__16257 = p__16240;
var map__16257__$1 = ((((!((map__16257 == null)))?((((map__16257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16257):map__16257);
var name = cljs.core.get.call(null,map__16257__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__16257__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__16257__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__16259_16273 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__16260_16274 = null;
var count__16261_16275 = (0);
var i__16262_16276 = (0);
while(true){
if((i__16262_16276 < count__16261_16275)){
var vec__16263_16277 = cljs.core._nth.call(null,chunk__16260_16274,i__16262_16276);
var i_16278 = cljs.core.nth.call(null,vec__16263_16277,(0),null);
var param_16279 = cljs.core.nth.call(null,vec__16263_16277,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_16279);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__16280 = seq__16259_16273;
var G__16281 = chunk__16260_16274;
var G__16282 = count__16261_16275;
var G__16283 = (i__16262_16276 + (1));
seq__16259_16273 = G__16280;
chunk__16260_16274 = G__16281;
count__16261_16275 = G__16282;
i__16262_16276 = G__16283;
continue;
} else {
var temp__4425__auto___16284 = cljs.core.seq.call(null,seq__16259_16273);
if(temp__4425__auto___16284){
var seq__16259_16285__$1 = temp__4425__auto___16284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16259_16285__$1)){
var c__5031__auto___16286 = cljs.core.chunk_first.call(null,seq__16259_16285__$1);
var G__16287 = cljs.core.chunk_rest.call(null,seq__16259_16285__$1);
var G__16288 = c__5031__auto___16286;
var G__16289 = cljs.core.count.call(null,c__5031__auto___16286);
var G__16290 = (0);
seq__16259_16273 = G__16287;
chunk__16260_16274 = G__16288;
count__16261_16275 = G__16289;
i__16262_16276 = G__16290;
continue;
} else {
var vec__16264_16291 = cljs.core.first.call(null,seq__16259_16285__$1);
var i_16292 = cljs.core.nth.call(null,vec__16264_16291,(0),null);
var param_16293 = cljs.core.nth.call(null,vec__16264_16291,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_16293);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__16294 = cljs.core.next.call(null,seq__16259_16285__$1);
var G__16295 = null;
var G__16296 = (0);
var G__16297 = (0);
seq__16259_16273 = G__16294;
chunk__16260_16274 = G__16295;
count__16261_16275 = G__16296;
i__16262_16276 = G__16297;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__16265_16298 = cljs.core.seq.call(null,params);
var chunk__16266_16299 = null;
var count__16267_16300 = (0);
var i__16268_16301 = (0);
while(true){
if((i__16268_16301 < count__16267_16300)){
var param_16302 = cljs.core._nth.call(null,chunk__16266_16299,i__16268_16301);
cljs.compiler.emit.call(null,param_16302);

if(cljs.core._EQ_.call(null,param_16302,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16303 = seq__16265_16298;
var G__16304 = chunk__16266_16299;
var G__16305 = count__16267_16300;
var G__16306 = (i__16268_16301 + (1));
seq__16265_16298 = G__16303;
chunk__16266_16299 = G__16304;
count__16267_16300 = G__16305;
i__16268_16301 = G__16306;
continue;
} else {
var temp__4425__auto___16307 = cljs.core.seq.call(null,seq__16265_16298);
if(temp__4425__auto___16307){
var seq__16265_16308__$1 = temp__4425__auto___16307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16265_16308__$1)){
var c__5031__auto___16309 = cljs.core.chunk_first.call(null,seq__16265_16308__$1);
var G__16310 = cljs.core.chunk_rest.call(null,seq__16265_16308__$1);
var G__16311 = c__5031__auto___16309;
var G__16312 = cljs.core.count.call(null,c__5031__auto___16309);
var G__16313 = (0);
seq__16265_16298 = G__16310;
chunk__16266_16299 = G__16311;
count__16267_16300 = G__16312;
i__16268_16301 = G__16313;
continue;
} else {
var param_16314 = cljs.core.first.call(null,seq__16265_16308__$1);
cljs.compiler.emit.call(null,param_16314);

if(cljs.core._EQ_.call(null,param_16314,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16315 = cljs.core.next.call(null,seq__16265_16308__$1);
var G__16316 = null;
var G__16317 = (0);
var G__16318 = (0);
seq__16265_16298 = G__16315;
chunk__16266_16299 = G__16316;
count__16267_16300 = G__16317;
i__16268_16301 = G__16318;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__16269_16319 = cljs.core.seq.call(null,params);
var chunk__16270_16320 = null;
var count__16271_16321 = (0);
var i__16272_16322 = (0);
while(true){
if((i__16272_16322 < count__16271_16321)){
var param_16323 = cljs.core._nth.call(null,chunk__16270_16320,i__16272_16322);
cljs.compiler.emit.call(null,param_16323);

if(cljs.core._EQ_.call(null,param_16323,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16324 = seq__16269_16319;
var G__16325 = chunk__16270_16320;
var G__16326 = count__16271_16321;
var G__16327 = (i__16272_16322 + (1));
seq__16269_16319 = G__16324;
chunk__16270_16320 = G__16325;
count__16271_16321 = G__16326;
i__16272_16322 = G__16327;
continue;
} else {
var temp__4425__auto___16328 = cljs.core.seq.call(null,seq__16269_16319);
if(temp__4425__auto___16328){
var seq__16269_16329__$1 = temp__4425__auto___16328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16269_16329__$1)){
var c__5031__auto___16330 = cljs.core.chunk_first.call(null,seq__16269_16329__$1);
var G__16331 = cljs.core.chunk_rest.call(null,seq__16269_16329__$1);
var G__16332 = c__5031__auto___16330;
var G__16333 = cljs.core.count.call(null,c__5031__auto___16330);
var G__16334 = (0);
seq__16269_16319 = G__16331;
chunk__16270_16320 = G__16332;
count__16271_16321 = G__16333;
i__16272_16322 = G__16334;
continue;
} else {
var param_16335 = cljs.core.first.call(null,seq__16269_16329__$1);
cljs.compiler.emit.call(null,param_16335);

if(cljs.core._EQ_.call(null,param_16335,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16336 = cljs.core.next.call(null,seq__16269_16329__$1);
var G__16337 = null;
var G__16338 = (0);
var G__16339 = (0);
seq__16269_16319 = G__16336;
chunk__16270_16320 = G__16337;
count__16271_16321 = G__16338;
i__16272_16322 = G__16339;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__16344 = cljs.core.seq.call(null,params);
var chunk__16345 = null;
var count__16346 = (0);
var i__16347 = (0);
while(true){
if((i__16347 < count__16346)){
var param = cljs.core._nth.call(null,chunk__16345,i__16347);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16348 = seq__16344;
var G__16349 = chunk__16345;
var G__16350 = count__16346;
var G__16351 = (i__16347 + (1));
seq__16344 = G__16348;
chunk__16345 = G__16349;
count__16346 = G__16350;
i__16347 = G__16351;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16344);
if(temp__4425__auto__){
var seq__16344__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16344__$1)){
var c__5031__auto__ = cljs.core.chunk_first.call(null,seq__16344__$1);
var G__16352 = cljs.core.chunk_rest.call(null,seq__16344__$1);
var G__16353 = c__5031__auto__;
var G__16354 = cljs.core.count.call(null,c__5031__auto__);
var G__16355 = (0);
seq__16344 = G__16352;
chunk__16345 = G__16353;
count__16346 = G__16354;
i__16347 = G__16355;
continue;
} else {
var param = cljs.core.first.call(null,seq__16344__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16356 = cljs.core.next.call(null,seq__16344__$1);
var G__16357 = null;
var G__16358 = (0);
var G__16359 = (0);
seq__16344 = G__16356;
chunk__16345 = G__16357;
count__16346 = G__16358;
i__16347 = G__16359;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__16360){
var map__16363 = p__16360;
var map__16363__$1 = ((((!((map__16363 == null)))?((((map__16363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16363):map__16363);
var type = cljs.core.get.call(null,map__16363__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__16363__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__16363__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__16363__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__16363__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__16363__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__16363__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__16363__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 * Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))))].join('')));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__16365){
var map__16376 = p__16365;
var map__16376__$1 = ((((!((map__16376 == null)))?((((map__16376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16376):map__16376);
var f = map__16376__$1;
var type = cljs.core.get.call(null,map__16376__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__16376__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__16376__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__16376__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__16376__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__16376__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__16376__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__16376__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_16386__$1 = (function (){var or__4247__auto__ = name;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_16387 = cljs.compiler.munge.call(null,name_16386__$1);
var delegate_name_16388 = [cljs.core.str(mname_16387),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_16388," = function (");

var seq__16378_16389 = cljs.core.seq.call(null,params);
var chunk__16379_16390 = null;
var count__16380_16391 = (0);
var i__16381_16392 = (0);
while(true){
if((i__16381_16392 < count__16380_16391)){
var param_16393 = cljs.core._nth.call(null,chunk__16379_16390,i__16381_16392);
cljs.compiler.emit.call(null,param_16393);

if(cljs.core._EQ_.call(null,param_16393,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16394 = seq__16378_16389;
var G__16395 = chunk__16379_16390;
var G__16396 = count__16380_16391;
var G__16397 = (i__16381_16392 + (1));
seq__16378_16389 = G__16394;
chunk__16379_16390 = G__16395;
count__16380_16391 = G__16396;
i__16381_16392 = G__16397;
continue;
} else {
var temp__4425__auto___16398 = cljs.core.seq.call(null,seq__16378_16389);
if(temp__4425__auto___16398){
var seq__16378_16399__$1 = temp__4425__auto___16398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16378_16399__$1)){
var c__5031__auto___16400 = cljs.core.chunk_first.call(null,seq__16378_16399__$1);
var G__16401 = cljs.core.chunk_rest.call(null,seq__16378_16399__$1);
var G__16402 = c__5031__auto___16400;
var G__16403 = cljs.core.count.call(null,c__5031__auto___16400);
var G__16404 = (0);
seq__16378_16389 = G__16401;
chunk__16379_16390 = G__16402;
count__16380_16391 = G__16403;
i__16381_16392 = G__16404;
continue;
} else {
var param_16405 = cljs.core.first.call(null,seq__16378_16399__$1);
cljs.compiler.emit.call(null,param_16405);

if(cljs.core._EQ_.call(null,param_16405,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16406 = cljs.core.next.call(null,seq__16378_16399__$1);
var G__16407 = null;
var G__16408 = (0);
var G__16409 = (0);
seq__16378_16389 = G__16406;
chunk__16379_16390 = G__16407;
count__16380_16391 = G__16408;
i__16381_16392 = G__16409;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_16387," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_16410 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_16410,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_16388,".call(this,");

var seq__16382_16411 = cljs.core.seq.call(null,params);
var chunk__16383_16412 = null;
var count__16384_16413 = (0);
var i__16385_16414 = (0);
while(true){
if((i__16385_16414 < count__16384_16413)){
var param_16415 = cljs.core._nth.call(null,chunk__16383_16412,i__16385_16414);
cljs.compiler.emit.call(null,param_16415);

if(cljs.core._EQ_.call(null,param_16415,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16416 = seq__16382_16411;
var G__16417 = chunk__16383_16412;
var G__16418 = count__16384_16413;
var G__16419 = (i__16385_16414 + (1));
seq__16382_16411 = G__16416;
chunk__16383_16412 = G__16417;
count__16384_16413 = G__16418;
i__16385_16414 = G__16419;
continue;
} else {
var temp__4425__auto___16420 = cljs.core.seq.call(null,seq__16382_16411);
if(temp__4425__auto___16420){
var seq__16382_16421__$1 = temp__4425__auto___16420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16382_16421__$1)){
var c__5031__auto___16422 = cljs.core.chunk_first.call(null,seq__16382_16421__$1);
var G__16423 = cljs.core.chunk_rest.call(null,seq__16382_16421__$1);
var G__16424 = c__5031__auto___16422;
var G__16425 = cljs.core.count.call(null,c__5031__auto___16422);
var G__16426 = (0);
seq__16382_16411 = G__16423;
chunk__16383_16412 = G__16424;
count__16384_16413 = G__16425;
i__16385_16414 = G__16426;
continue;
} else {
var param_16427 = cljs.core.first.call(null,seq__16382_16421__$1);
cljs.compiler.emit.call(null,param_16427);

if(cljs.core._EQ_.call(null,param_16427,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16428 = cljs.core.next.call(null,seq__16382_16421__$1);
var G__16429 = null;
var G__16430 = (0);
var G__16431 = (0);
seq__16382_16411 = G__16428;
chunk__16383_16412 = G__16429;
count__16384_16413 = G__16430;
i__16385_16414 = G__16431;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_16387,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_16387,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_16386__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_16387,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_16388,";");

cljs.compiler.emitln.call(null,"return ",mname_16387,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__16435){
var map__16436 = p__16435;
var map__16436__$1 = ((((!((map__16436 == null)))?((((map__16436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16436):map__16436);
var name = cljs.core.get.call(null,map__16436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__16436__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__16436__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__16436__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__16436__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__16436__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__16436__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__16436,map__16436__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__16432_SHARP_){
var and__4235__auto__ = p1__16432_SHARP_;
if(cljs.core.truth_(and__4235__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__16432_SHARP_));
} else {
return and__4235__auto__;
}
});})(map__16436,map__16436__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_16457__$1 = (function (){var or__4247__auto__ = name;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_16458 = cljs.compiler.munge.call(null,name_16457__$1);
var maxparams_16459 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_16460 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_16457__$1,mname_16458,maxparams_16459,loop_locals,map__16436,map__16436__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_16458),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_16457__$1,mname_16458,maxparams_16459,loop_locals,map__16436,map__16436__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_16461 = cljs.core.sort_by.call(null,((function (name_16457__$1,mname_16458,maxparams_16459,mmap_16460,loop_locals,map__16436,map__16436__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__16433_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__16433_SHARP_)));
});})(name_16457__$1,mname_16458,maxparams_16459,mmap_16460,loop_locals,map__16436,map__16436__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_16460));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_16458," = null;");

var seq__16438_16462 = cljs.core.seq.call(null,ms_16461);
var chunk__16439_16463 = null;
var count__16440_16464 = (0);
var i__16441_16465 = (0);
while(true){
if((i__16441_16465 < count__16440_16464)){
var vec__16442_16466 = cljs.core._nth.call(null,chunk__16439_16463,i__16441_16465);
var n_16467 = cljs.core.nth.call(null,vec__16442_16466,(0),null);
var meth_16468 = cljs.core.nth.call(null,vec__16442_16466,(1),null);
cljs.compiler.emits.call(null,"var ",n_16467," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16468))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_16468);
} else {
cljs.compiler.emit_fn_method.call(null,meth_16468);
}

cljs.compiler.emitln.call(null,";");

var G__16469 = seq__16438_16462;
var G__16470 = chunk__16439_16463;
var G__16471 = count__16440_16464;
var G__16472 = (i__16441_16465 + (1));
seq__16438_16462 = G__16469;
chunk__16439_16463 = G__16470;
count__16440_16464 = G__16471;
i__16441_16465 = G__16472;
continue;
} else {
var temp__4425__auto___16473 = cljs.core.seq.call(null,seq__16438_16462);
if(temp__4425__auto___16473){
var seq__16438_16474__$1 = temp__4425__auto___16473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16438_16474__$1)){
var c__5031__auto___16475 = cljs.core.chunk_first.call(null,seq__16438_16474__$1);
var G__16476 = cljs.core.chunk_rest.call(null,seq__16438_16474__$1);
var G__16477 = c__5031__auto___16475;
var G__16478 = cljs.core.count.call(null,c__5031__auto___16475);
var G__16479 = (0);
seq__16438_16462 = G__16476;
chunk__16439_16463 = G__16477;
count__16440_16464 = G__16478;
i__16441_16465 = G__16479;
continue;
} else {
var vec__16443_16480 = cljs.core.first.call(null,seq__16438_16474__$1);
var n_16481 = cljs.core.nth.call(null,vec__16443_16480,(0),null);
var meth_16482 = cljs.core.nth.call(null,vec__16443_16480,(1),null);
cljs.compiler.emits.call(null,"var ",n_16481," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16482))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_16482);
} else {
cljs.compiler.emit_fn_method.call(null,meth_16482);
}

cljs.compiler.emitln.call(null,";");

var G__16483 = cljs.core.next.call(null,seq__16438_16474__$1);
var G__16484 = null;
var G__16485 = (0);
var G__16486 = (0);
seq__16438_16462 = G__16483;
chunk__16439_16463 = G__16484;
count__16440_16464 = G__16485;
i__16441_16465 = G__16486;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_16458," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_16459),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_16459)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_16459));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__16444_16487 = cljs.core.seq.call(null,ms_16461);
var chunk__16445_16488 = null;
var count__16446_16489 = (0);
var i__16447_16490 = (0);
while(true){
if((i__16447_16490 < count__16446_16489)){
var vec__16448_16491 = cljs.core._nth.call(null,chunk__16445_16488,i__16447_16490);
var n_16492 = cljs.core.nth.call(null,vec__16448_16491,(0),null);
var meth_16493 = cljs.core.nth.call(null,vec__16448_16491,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16493))){
cljs.compiler.emitln.call(null,"default:");

var restarg_16494 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_16494," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_16495 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_16494," = new cljs.core.IndexedSeq(",a_16495,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_16492,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_16459)),(((cljs.core.count.call(null,maxparams_16459) > (1)))?", ":null),restarg_16494,");");
} else {
var pcnt_16496 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16493));
cljs.compiler.emitln.call(null,"case ",pcnt_16496,":");

cljs.compiler.emitln.call(null,"return ",n_16492,".call(this",(((pcnt_16496 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_16496,maxparams_16459))),",")),");");
}

var G__16497 = seq__16444_16487;
var G__16498 = chunk__16445_16488;
var G__16499 = count__16446_16489;
var G__16500 = (i__16447_16490 + (1));
seq__16444_16487 = G__16497;
chunk__16445_16488 = G__16498;
count__16446_16489 = G__16499;
i__16447_16490 = G__16500;
continue;
} else {
var temp__4425__auto___16501 = cljs.core.seq.call(null,seq__16444_16487);
if(temp__4425__auto___16501){
var seq__16444_16502__$1 = temp__4425__auto___16501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16444_16502__$1)){
var c__5031__auto___16503 = cljs.core.chunk_first.call(null,seq__16444_16502__$1);
var G__16504 = cljs.core.chunk_rest.call(null,seq__16444_16502__$1);
var G__16505 = c__5031__auto___16503;
var G__16506 = cljs.core.count.call(null,c__5031__auto___16503);
var G__16507 = (0);
seq__16444_16487 = G__16504;
chunk__16445_16488 = G__16505;
count__16446_16489 = G__16506;
i__16447_16490 = G__16507;
continue;
} else {
var vec__16449_16508 = cljs.core.first.call(null,seq__16444_16502__$1);
var n_16509 = cljs.core.nth.call(null,vec__16449_16508,(0),null);
var meth_16510 = cljs.core.nth.call(null,vec__16449_16508,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16510))){
cljs.compiler.emitln.call(null,"default:");

var restarg_16511 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_16511," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_16512 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_16511," = new cljs.core.IndexedSeq(",a_16512,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_16509,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_16459)),(((cljs.core.count.call(null,maxparams_16459) > (1)))?", ":null),restarg_16511,");");
} else {
var pcnt_16513 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16510));
cljs.compiler.emitln.call(null,"case ",pcnt_16513,":");

cljs.compiler.emitln.call(null,"return ",n_16509,".call(this",(((pcnt_16513 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_16513,maxparams_16459))),",")),");");
}

var G__16514 = cljs.core.next.call(null,seq__16444_16502__$1);
var G__16515 = null;
var G__16516 = (0);
var G__16517 = (0);
seq__16444_16487 = G__16514;
chunk__16445_16488 = G__16515;
count__16446_16489 = G__16516;
i__16447_16490 = G__16517;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_16458,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_16458,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_16457__$1,mname_16458,maxparams_16459,mmap_16460,ms_16461,loop_locals,map__16436,map__16436__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__16434_SHARP_){
var vec__16450 = p1__16434_SHARP_;
var n = cljs.core.nth.call(null,vec__16450,(0),null);
var m = cljs.core.nth.call(null,vec__16450,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_16457__$1,mname_16458,maxparams_16459,mmap_16460,ms_16461,loop_locals,map__16436,map__16436__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_16461),".cljs$lang$applyTo;");
} else {
}

var seq__16451_16518 = cljs.core.seq.call(null,ms_16461);
var chunk__16452_16519 = null;
var count__16453_16520 = (0);
var i__16454_16521 = (0);
while(true){
if((i__16454_16521 < count__16453_16520)){
var vec__16455_16522 = cljs.core._nth.call(null,chunk__16452_16519,i__16454_16521);
var n_16523 = cljs.core.nth.call(null,vec__16455_16522,(0),null);
var meth_16524 = cljs.core.nth.call(null,vec__16455_16522,(1),null);
var c_16525 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16524));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16524))){
cljs.compiler.emitln.call(null,mname_16458,".cljs$core$IFn$_invoke$arity$variadic = ",n_16523,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_16458,".cljs$core$IFn$_invoke$arity$",c_16525," = ",n_16523,";");
}

var G__16526 = seq__16451_16518;
var G__16527 = chunk__16452_16519;
var G__16528 = count__16453_16520;
var G__16529 = (i__16454_16521 + (1));
seq__16451_16518 = G__16526;
chunk__16452_16519 = G__16527;
count__16453_16520 = G__16528;
i__16454_16521 = G__16529;
continue;
} else {
var temp__4425__auto___16530 = cljs.core.seq.call(null,seq__16451_16518);
if(temp__4425__auto___16530){
var seq__16451_16531__$1 = temp__4425__auto___16530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16451_16531__$1)){
var c__5031__auto___16532 = cljs.core.chunk_first.call(null,seq__16451_16531__$1);
var G__16533 = cljs.core.chunk_rest.call(null,seq__16451_16531__$1);
var G__16534 = c__5031__auto___16532;
var G__16535 = cljs.core.count.call(null,c__5031__auto___16532);
var G__16536 = (0);
seq__16451_16518 = G__16533;
chunk__16452_16519 = G__16534;
count__16453_16520 = G__16535;
i__16454_16521 = G__16536;
continue;
} else {
var vec__16456_16537 = cljs.core.first.call(null,seq__16451_16531__$1);
var n_16538 = cljs.core.nth.call(null,vec__16456_16537,(0),null);
var meth_16539 = cljs.core.nth.call(null,vec__16456_16537,(1),null);
var c_16540 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16539));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16539))){
cljs.compiler.emitln.call(null,mname_16458,".cljs$core$IFn$_invoke$arity$variadic = ",n_16538,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_16458,".cljs$core$IFn$_invoke$arity$",c_16540," = ",n_16538,";");
}

var G__16541 = cljs.core.next.call(null,seq__16451_16531__$1);
var G__16542 = null;
var G__16543 = (0);
var G__16544 = (0);
seq__16451_16518 = G__16541;
chunk__16452_16519 = G__16542;
count__16453_16520 = G__16543;
i__16454_16521 = G__16544;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_16458,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__16545){
var map__16546 = p__16545;
var map__16546__$1 = ((((!((map__16546 == null)))?((((map__16546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16546):map__16546);
var statements = cljs.core.get.call(null,map__16546__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__16546__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__16546__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__4235__auto__ = statements;
if(cljs.core.truth_(and__4235__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__4235__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__16548_16552 = cljs.core.seq.call(null,statements);
var chunk__16549_16553 = null;
var count__16550_16554 = (0);
var i__16551_16555 = (0);
while(true){
if((i__16551_16555 < count__16550_16554)){
var s_16556 = cljs.core._nth.call(null,chunk__16549_16553,i__16551_16555);
cljs.compiler.emitln.call(null,s_16556);

var G__16557 = seq__16548_16552;
var G__16558 = chunk__16549_16553;
var G__16559 = count__16550_16554;
var G__16560 = (i__16551_16555 + (1));
seq__16548_16552 = G__16557;
chunk__16549_16553 = G__16558;
count__16550_16554 = G__16559;
i__16551_16555 = G__16560;
continue;
} else {
var temp__4425__auto___16561 = cljs.core.seq.call(null,seq__16548_16552);
if(temp__4425__auto___16561){
var seq__16548_16562__$1 = temp__4425__auto___16561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16548_16562__$1)){
var c__5031__auto___16563 = cljs.core.chunk_first.call(null,seq__16548_16562__$1);
var G__16564 = cljs.core.chunk_rest.call(null,seq__16548_16562__$1);
var G__16565 = c__5031__auto___16563;
var G__16566 = cljs.core.count.call(null,c__5031__auto___16563);
var G__16567 = (0);
seq__16548_16552 = G__16564;
chunk__16549_16553 = G__16565;
count__16550_16554 = G__16566;
i__16551_16555 = G__16567;
continue;
} else {
var s_16568 = cljs.core.first.call(null,seq__16548_16562__$1);
cljs.compiler.emitln.call(null,s_16568);

var G__16569 = cljs.core.next.call(null,seq__16548_16562__$1);
var G__16570 = null;
var G__16571 = (0);
var G__16572 = (0);
seq__16548_16552 = G__16569;
chunk__16549_16553 = G__16570;
count__16550_16554 = G__16571;
i__16551_16555 = G__16572;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__4235__auto__ = statements;
if(cljs.core.truth_(and__4235__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__4235__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__16573){
var map__16574 = p__16573;
var map__16574__$1 = ((((!((map__16574 == null)))?((((map__16574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16574):map__16574);
var env = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4247__auto__ = name;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))))].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__16576,is_loop){
var map__16588 = p__16576;
var map__16588__$1 = ((((!((map__16588 == null)))?((((map__16588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16588):map__16588);
var bindings = cljs.core.get.call(null,map__16588__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__16588__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__16588__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_16590_16599 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_16590_16599,context,map__16588,map__16588__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core._hash.call(null,name),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_16590_16599,context,map__16588,map__16588__$1,bindings,expr,env))
,bindings):null));

try{var seq__16591_16600 = cljs.core.seq.call(null,bindings);
var chunk__16592_16601 = null;
var count__16593_16602 = (0);
var i__16594_16603 = (0);
while(true){
if((i__16594_16603 < count__16593_16602)){
var map__16595_16604 = cljs.core._nth.call(null,chunk__16592_16601,i__16594_16603);
var map__16595_16605__$1 = ((((!((map__16595_16604 == null)))?((((map__16595_16604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16595_16604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16595_16604):map__16595_16604);
var binding_16606 = map__16595_16605__$1;
var init_16607 = cljs.core.get.call(null,map__16595_16605__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_16606);

cljs.compiler.emitln.call(null," = ",init_16607,";");

var G__16608 = seq__16591_16600;
var G__16609 = chunk__16592_16601;
var G__16610 = count__16593_16602;
var G__16611 = (i__16594_16603 + (1));
seq__16591_16600 = G__16608;
chunk__16592_16601 = G__16609;
count__16593_16602 = G__16610;
i__16594_16603 = G__16611;
continue;
} else {
var temp__4425__auto___16612 = cljs.core.seq.call(null,seq__16591_16600);
if(temp__4425__auto___16612){
var seq__16591_16613__$1 = temp__4425__auto___16612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16591_16613__$1)){
var c__5031__auto___16614 = cljs.core.chunk_first.call(null,seq__16591_16613__$1);
var G__16615 = cljs.core.chunk_rest.call(null,seq__16591_16613__$1);
var G__16616 = c__5031__auto___16614;
var G__16617 = cljs.core.count.call(null,c__5031__auto___16614);
var G__16618 = (0);
seq__16591_16600 = G__16615;
chunk__16592_16601 = G__16616;
count__16593_16602 = G__16617;
i__16594_16603 = G__16618;
continue;
} else {
var map__16597_16619 = cljs.core.first.call(null,seq__16591_16613__$1);
var map__16597_16620__$1 = ((((!((map__16597_16619 == null)))?((((map__16597_16619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16597_16619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16597_16619):map__16597_16619);
var binding_16621 = map__16597_16620__$1;
var init_16622 = cljs.core.get.call(null,map__16597_16620__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_16621);

cljs.compiler.emitln.call(null," = ",init_16622,";");

var G__16623 = cljs.core.next.call(null,seq__16591_16613__$1);
var G__16624 = null;
var G__16625 = (0);
var G__16626 = (0);
seq__16591_16600 = G__16623;
chunk__16592_16601 = G__16624;
count__16593_16602 = G__16625;
i__16594_16603 = G__16626;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_16590_16599;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__16627){
var map__16628 = p__16627;
var map__16628__$1 = ((((!((map__16628 == null)))?((((map__16628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16628):map__16628);
var frame = cljs.core.get.call(null,map__16628__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__16628__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__16628__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5131__auto___16630 = cljs.core.count.call(null,exprs);
var i_16631 = (0);
while(true){
if((i_16631 < n__5131__auto___16630)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_16631)," = ",exprs.call(null,i_16631),";");

var G__16632 = (i_16631 + (1));
i_16631 = G__16632;
continue;
} else {
}
break;
}

var n__5131__auto___16633 = cljs.core.count.call(null,exprs);
var i_16634 = (0);
while(true){
if((i_16634 < n__5131__auto___16633)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_16634))," = ",temps.call(null,i_16634),";");

var G__16635 = (i_16634 + (1));
i_16634 = G__16635;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__16636){
var map__16637 = p__16636;
var map__16637__$1 = ((((!((map__16637 == null)))?((((map__16637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16637):map__16637);
var bindings = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__16639_16647 = cljs.core.seq.call(null,bindings);
var chunk__16640_16648 = null;
var count__16641_16649 = (0);
var i__16642_16650 = (0);
while(true){
if((i__16642_16650 < count__16641_16649)){
var map__16643_16651 = cljs.core._nth.call(null,chunk__16640_16648,i__16642_16650);
var map__16643_16652__$1 = ((((!((map__16643_16651 == null)))?((((map__16643_16651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16643_16651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16643_16651):map__16643_16651);
var binding_16653 = map__16643_16652__$1;
var init_16654 = cljs.core.get.call(null,map__16643_16652__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_16653)," = ",init_16654,";");

var G__16655 = seq__16639_16647;
var G__16656 = chunk__16640_16648;
var G__16657 = count__16641_16649;
var G__16658 = (i__16642_16650 + (1));
seq__16639_16647 = G__16655;
chunk__16640_16648 = G__16656;
count__16641_16649 = G__16657;
i__16642_16650 = G__16658;
continue;
} else {
var temp__4425__auto___16659 = cljs.core.seq.call(null,seq__16639_16647);
if(temp__4425__auto___16659){
var seq__16639_16660__$1 = temp__4425__auto___16659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16639_16660__$1)){
var c__5031__auto___16661 = cljs.core.chunk_first.call(null,seq__16639_16660__$1);
var G__16662 = cljs.core.chunk_rest.call(null,seq__16639_16660__$1);
var G__16663 = c__5031__auto___16661;
var G__16664 = cljs.core.count.call(null,c__5031__auto___16661);
var G__16665 = (0);
seq__16639_16647 = G__16662;
chunk__16640_16648 = G__16663;
count__16641_16649 = G__16664;
i__16642_16650 = G__16665;
continue;
} else {
var map__16645_16666 = cljs.core.first.call(null,seq__16639_16660__$1);
var map__16645_16667__$1 = ((((!((map__16645_16666 == null)))?((((map__16645_16666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16645_16666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16645_16666):map__16645_16666);
var binding_16668 = map__16645_16667__$1;
var init_16669 = cljs.core.get.call(null,map__16645_16667__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_16668)," = ",init_16669,";");

var G__16670 = cljs.core.next.call(null,seq__16639_16660__$1);
var G__16671 = null;
var G__16672 = (0);
var G__16673 = (0);
seq__16639_16647 = G__16670;
chunk__16640_16648 = G__16671;
count__16641_16649 = G__16672;
i__16642_16650 = G__16673;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace(".","$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__16676){
var map__16677 = p__16676;
var map__16677__$1 = ((((!((map__16677 == null)))?((((map__16677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16677):map__16677);
var expr = map__16677__$1;
var f = cljs.core.get.call(null,map__16677__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__16677__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16677__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4235__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4235__auto__)){
var and__4235__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4235__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4235__auto____$1;
}
} else {
return and__4235__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4235__auto__ = protocol;
if(cljs.core.truth_(and__4235__auto__)){
var and__4235__auto____$1 = tag;
if(cljs.core.truth_(and__4235__auto____$1)){
var or__4247__auto__ = (function (){var and__4235__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4235__auto____$2)){
var and__4235__auto____$3 = protocol;
if(cljs.core.truth_(and__4235__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4235__auto____$3;
}
} else {
return and__4235__auto____$2;
}
})();
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
var and__4235__auto____$2 = (function (){var or__4247__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4247__auto____$1)){
return or__4247__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4235__auto____$2)){
var or__4247__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4247__auto____$1){
return or__4247__auto____$1;
} else {
var and__4235__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__4235__auto____$3){
var and__4235__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__4235__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__4235__auto____$4;
}
} else {
return and__4235__auto____$3;
}
}
} else {
return and__4235__auto____$2;
}
}
} else {
return and__4235__auto____$1;
}
} else {
return and__4235__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4247__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4247__auto__){
return or__4247__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__16679 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4235__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4235__auto__)){
return (arity > mfa);
} else {
return and__4235__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16677,map__16677__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16677,map__16677__$1,expr,f,args,env){
return (function (p1__16674_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__16674_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16677,map__16677__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16677,map__16677__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16677,map__16677__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16677,map__16677__$1,expr,f,args,env){
return (function (p1__16675_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__16675_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16677,map__16677__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16677,map__16677__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__16679,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__16679,(1),null);
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_16680 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_16680,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_16681 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_16681,args)),(((mfa_16681 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_16681,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4247__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
var or__4247__auto____$1 = js_QMARK_;
if(or__4247__auto____$1){
return or__4247__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4235__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4235__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__4235__auto__;
}
})())){
var fprop_16682 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_16682," ? ",f__$1,fprop_16682,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__16683){
var map__16684 = p__16683;
var map__16684__$1 = ((((!((map__16684 == null)))?((((map__16684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16684):map__16684);
var ctor = cljs.core.get.call(null,map__16684__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__16684__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16684__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__16686){
var map__16687 = p__16686;
var map__16687__$1 = ((((!((map__16687 == null)))?((((map__16687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16687):map__16687);
var target = cljs.core.get.call(null,map__16687__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__16687__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__16687__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__16693_16697 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__16694_16698 = null;
var count__16695_16699 = (0);
var i__16696_16700 = (0);
while(true){
if((i__16696_16700 < count__16695_16699)){
var lib_16701 = cljs.core._nth.call(null,chunk__16694_16698,i__16696_16700);
if(cljs.core.truth_((function (){var or__4247__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16701),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16701),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4247__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16701),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16701),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16701),"');");

}
}

var G__16702 = seq__16693_16697;
var G__16703 = chunk__16694_16698;
var G__16704 = count__16695_16699;
var G__16705 = (i__16696_16700 + (1));
seq__16693_16697 = G__16702;
chunk__16694_16698 = G__16703;
count__16695_16699 = G__16704;
i__16696_16700 = G__16705;
continue;
} else {
var temp__4425__auto___16706 = cljs.core.seq.call(null,seq__16693_16697);
if(temp__4425__auto___16706){
var seq__16693_16707__$1 = temp__4425__auto___16706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16693_16707__$1)){
var c__5031__auto___16708 = cljs.core.chunk_first.call(null,seq__16693_16707__$1);
var G__16709 = cljs.core.chunk_rest.call(null,seq__16693_16707__$1);
var G__16710 = c__5031__auto___16708;
var G__16711 = cljs.core.count.call(null,c__5031__auto___16708);
var G__16712 = (0);
seq__16693_16697 = G__16709;
chunk__16694_16698 = G__16710;
count__16695_16699 = G__16711;
i__16696_16700 = G__16712;
continue;
} else {
var lib_16713 = cljs.core.first.call(null,seq__16693_16707__$1);
if(cljs.core.truth_((function (){var or__4247__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16713),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16713),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4247__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16713),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16713),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16713),"');");

}
}

var G__16714 = cljs.core.next.call(null,seq__16693_16707__$1);
var G__16715 = null;
var G__16716 = (0);
var G__16717 = (0);
seq__16693_16697 = G__16714;
chunk__16694_16698 = G__16715;
count__16695_16699 = G__16716;
i__16696_16700 = G__16717;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__16718){
var map__16719 = p__16718;
var map__16719__$1 = ((((!((map__16719 == null)))?((((map__16719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16719):map__16719);
var name = cljs.core.get.call(null,map__16719__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__16719__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__16719__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__16719__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__16719__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__16719__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__16721){
var map__16722 = p__16721;
var map__16722__$1 = ((((!((map__16722 == null)))?((((map__16722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16722):map__16722);
var t = cljs.core.get.call(null,map__16722__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16722__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16722__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16722__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__16724_16734 = cljs.core.seq.call(null,fields__$1);
var chunk__16725_16735 = null;
var count__16726_16736 = (0);
var i__16727_16737 = (0);
while(true){
if((i__16727_16737 < count__16726_16736)){
var fld_16738 = cljs.core._nth.call(null,chunk__16725_16735,i__16727_16737);
cljs.compiler.emitln.call(null,"this.",fld_16738," = ",fld_16738,";");

var G__16739 = seq__16724_16734;
var G__16740 = chunk__16725_16735;
var G__16741 = count__16726_16736;
var G__16742 = (i__16727_16737 + (1));
seq__16724_16734 = G__16739;
chunk__16725_16735 = G__16740;
count__16726_16736 = G__16741;
i__16727_16737 = G__16742;
continue;
} else {
var temp__4425__auto___16743 = cljs.core.seq.call(null,seq__16724_16734);
if(temp__4425__auto___16743){
var seq__16724_16744__$1 = temp__4425__auto___16743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16724_16744__$1)){
var c__5031__auto___16745 = cljs.core.chunk_first.call(null,seq__16724_16744__$1);
var G__16746 = cljs.core.chunk_rest.call(null,seq__16724_16744__$1);
var G__16747 = c__5031__auto___16745;
var G__16748 = cljs.core.count.call(null,c__5031__auto___16745);
var G__16749 = (0);
seq__16724_16734 = G__16746;
chunk__16725_16735 = G__16747;
count__16726_16736 = G__16748;
i__16727_16737 = G__16749;
continue;
} else {
var fld_16750 = cljs.core.first.call(null,seq__16724_16744__$1);
cljs.compiler.emitln.call(null,"this.",fld_16750," = ",fld_16750,";");

var G__16751 = cljs.core.next.call(null,seq__16724_16744__$1);
var G__16752 = null;
var G__16753 = (0);
var G__16754 = (0);
seq__16724_16734 = G__16751;
chunk__16725_16735 = G__16752;
count__16726_16736 = G__16753;
i__16727_16737 = G__16754;
continue;
}
} else {
}
}
break;
}

var seq__16728_16755 = cljs.core.seq.call(null,pmasks);
var chunk__16729_16756 = null;
var count__16730_16757 = (0);
var i__16731_16758 = (0);
while(true){
if((i__16731_16758 < count__16730_16757)){
var vec__16732_16759 = cljs.core._nth.call(null,chunk__16729_16756,i__16731_16758);
var pno_16760 = cljs.core.nth.call(null,vec__16732_16759,(0),null);
var pmask_16761 = cljs.core.nth.call(null,vec__16732_16759,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16760,"$ = ",pmask_16761,";");

var G__16762 = seq__16728_16755;
var G__16763 = chunk__16729_16756;
var G__16764 = count__16730_16757;
var G__16765 = (i__16731_16758 + (1));
seq__16728_16755 = G__16762;
chunk__16729_16756 = G__16763;
count__16730_16757 = G__16764;
i__16731_16758 = G__16765;
continue;
} else {
var temp__4425__auto___16766 = cljs.core.seq.call(null,seq__16728_16755);
if(temp__4425__auto___16766){
var seq__16728_16767__$1 = temp__4425__auto___16766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16728_16767__$1)){
var c__5031__auto___16768 = cljs.core.chunk_first.call(null,seq__16728_16767__$1);
var G__16769 = cljs.core.chunk_rest.call(null,seq__16728_16767__$1);
var G__16770 = c__5031__auto___16768;
var G__16771 = cljs.core.count.call(null,c__5031__auto___16768);
var G__16772 = (0);
seq__16728_16755 = G__16769;
chunk__16729_16756 = G__16770;
count__16730_16757 = G__16771;
i__16731_16758 = G__16772;
continue;
} else {
var vec__16733_16773 = cljs.core.first.call(null,seq__16728_16767__$1);
var pno_16774 = cljs.core.nth.call(null,vec__16733_16773,(0),null);
var pmask_16775 = cljs.core.nth.call(null,vec__16733_16773,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16774,"$ = ",pmask_16775,";");

var G__16776 = cljs.core.next.call(null,seq__16728_16767__$1);
var G__16777 = null;
var G__16778 = (0);
var G__16779 = (0);
seq__16728_16755 = G__16776;
chunk__16729_16756 = G__16777;
count__16730_16757 = G__16778;
i__16731_16758 = G__16779;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__16780){
var map__16781 = p__16780;
var map__16781__$1 = ((((!((map__16781 == null)))?((((map__16781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16781):map__16781);
var t = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__16783_16797 = cljs.core.seq.call(null,fields__$1);
var chunk__16784_16798 = null;
var count__16785_16799 = (0);
var i__16786_16800 = (0);
while(true){
if((i__16786_16800 < count__16785_16799)){
var fld_16801 = cljs.core._nth.call(null,chunk__16784_16798,i__16786_16800);
cljs.compiler.emitln.call(null,"* @param {*} ",fld_16801);

var G__16802 = seq__16783_16797;
var G__16803 = chunk__16784_16798;
var G__16804 = count__16785_16799;
var G__16805 = (i__16786_16800 + (1));
seq__16783_16797 = G__16802;
chunk__16784_16798 = G__16803;
count__16785_16799 = G__16804;
i__16786_16800 = G__16805;
continue;
} else {
var temp__4425__auto___16806 = cljs.core.seq.call(null,seq__16783_16797);
if(temp__4425__auto___16806){
var seq__16783_16807__$1 = temp__4425__auto___16806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16783_16807__$1)){
var c__5031__auto___16808 = cljs.core.chunk_first.call(null,seq__16783_16807__$1);
var G__16809 = cljs.core.chunk_rest.call(null,seq__16783_16807__$1);
var G__16810 = c__5031__auto___16808;
var G__16811 = cljs.core.count.call(null,c__5031__auto___16808);
var G__16812 = (0);
seq__16783_16797 = G__16809;
chunk__16784_16798 = G__16810;
count__16785_16799 = G__16811;
i__16786_16800 = G__16812;
continue;
} else {
var fld_16813 = cljs.core.first.call(null,seq__16783_16807__$1);
cljs.compiler.emitln.call(null,"* @param {*} ",fld_16813);

var G__16814 = cljs.core.next.call(null,seq__16783_16807__$1);
var G__16815 = null;
var G__16816 = (0);
var G__16817 = (0);
seq__16783_16797 = G__16814;
chunk__16784_16798 = G__16815;
count__16785_16799 = G__16816;
i__16786_16800 = G__16817;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"* @param {*=} __meta ");

cljs.compiler.emitln.call(null,"* @param {*=} __extmap");

cljs.compiler.emitln.call(null,"* @param {number|null} __hash");

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__16787_16818 = cljs.core.seq.call(null,fields__$1);
var chunk__16788_16819 = null;
var count__16789_16820 = (0);
var i__16790_16821 = (0);
while(true){
if((i__16790_16821 < count__16789_16820)){
var fld_16822 = cljs.core._nth.call(null,chunk__16788_16819,i__16790_16821);
cljs.compiler.emitln.call(null,"this.",fld_16822," = ",fld_16822,";");

var G__16823 = seq__16787_16818;
var G__16824 = chunk__16788_16819;
var G__16825 = count__16789_16820;
var G__16826 = (i__16790_16821 + (1));
seq__16787_16818 = G__16823;
chunk__16788_16819 = G__16824;
count__16789_16820 = G__16825;
i__16790_16821 = G__16826;
continue;
} else {
var temp__4425__auto___16827 = cljs.core.seq.call(null,seq__16787_16818);
if(temp__4425__auto___16827){
var seq__16787_16828__$1 = temp__4425__auto___16827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16787_16828__$1)){
var c__5031__auto___16829 = cljs.core.chunk_first.call(null,seq__16787_16828__$1);
var G__16830 = cljs.core.chunk_rest.call(null,seq__16787_16828__$1);
var G__16831 = c__5031__auto___16829;
var G__16832 = cljs.core.count.call(null,c__5031__auto___16829);
var G__16833 = (0);
seq__16787_16818 = G__16830;
chunk__16788_16819 = G__16831;
count__16789_16820 = G__16832;
i__16790_16821 = G__16833;
continue;
} else {
var fld_16834 = cljs.core.first.call(null,seq__16787_16828__$1);
cljs.compiler.emitln.call(null,"this.",fld_16834," = ",fld_16834,";");

var G__16835 = cljs.core.next.call(null,seq__16787_16828__$1);
var G__16836 = null;
var G__16837 = (0);
var G__16838 = (0);
seq__16787_16818 = G__16835;
chunk__16788_16819 = G__16836;
count__16789_16820 = G__16837;
i__16790_16821 = G__16838;
continue;
}
} else {
}
}
break;
}

var seq__16791_16839 = cljs.core.seq.call(null,pmasks);
var chunk__16792_16840 = null;
var count__16793_16841 = (0);
var i__16794_16842 = (0);
while(true){
if((i__16794_16842 < count__16793_16841)){
var vec__16795_16843 = cljs.core._nth.call(null,chunk__16792_16840,i__16794_16842);
var pno_16844 = cljs.core.nth.call(null,vec__16795_16843,(0),null);
var pmask_16845 = cljs.core.nth.call(null,vec__16795_16843,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16844,"$ = ",pmask_16845,";");

var G__16846 = seq__16791_16839;
var G__16847 = chunk__16792_16840;
var G__16848 = count__16793_16841;
var G__16849 = (i__16794_16842 + (1));
seq__16791_16839 = G__16846;
chunk__16792_16840 = G__16847;
count__16793_16841 = G__16848;
i__16794_16842 = G__16849;
continue;
} else {
var temp__4425__auto___16850 = cljs.core.seq.call(null,seq__16791_16839);
if(temp__4425__auto___16850){
var seq__16791_16851__$1 = temp__4425__auto___16850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16791_16851__$1)){
var c__5031__auto___16852 = cljs.core.chunk_first.call(null,seq__16791_16851__$1);
var G__16853 = cljs.core.chunk_rest.call(null,seq__16791_16851__$1);
var G__16854 = c__5031__auto___16852;
var G__16855 = cljs.core.count.call(null,c__5031__auto___16852);
var G__16856 = (0);
seq__16791_16839 = G__16853;
chunk__16792_16840 = G__16854;
count__16793_16841 = G__16855;
i__16794_16842 = G__16856;
continue;
} else {
var vec__16796_16857 = cljs.core.first.call(null,seq__16791_16851__$1);
var pno_16858 = cljs.core.nth.call(null,vec__16796_16857,(0),null);
var pmask_16859 = cljs.core.nth.call(null,vec__16796_16857,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16858,"$ = ",pmask_16859,";");

var G__16860 = cljs.core.next.call(null,seq__16791_16851__$1);
var G__16861 = null;
var G__16862 = (0);
var G__16863 = (0);
seq__16791_16839 = G__16860;
chunk__16792_16840 = G__16861;
count__16793_16841 = G__16862;
i__16794_16842 = G__16863;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__16864){
var map__16865 = p__16864;
var map__16865__$1 = ((((!((map__16865 == null)))?((((map__16865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16865):map__16865);
var target = cljs.core.get.call(null,map__16865__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__16865__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__16865__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__16865__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16865__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__16867){
var map__16868 = p__16867;
var map__16868__$1 = ((((!((map__16868 == null)))?((((map__16868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16868):map__16868);
var env = cljs.core.get.call(null,map__16868__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__16868__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__16868__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__16868__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env__7507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__16878 = cljs.core.seq.call(null,table);
var chunk__16879 = null;
var count__16880 = (0);
var i__16881 = (0);
while(true){
if((i__16881 < count__16880)){
var vec__16882 = cljs.core._nth.call(null,chunk__16879,i__16881);
var sym = cljs.core.nth.call(null,vec__16882,(0),null);
var value = cljs.core.nth.call(null,vec__16882,(1),null);
var ns_16884 = cljs.core.namespace.call(null,sym);
var name_16885 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__16886 = seq__16878;
var G__16887 = chunk__16879;
var G__16888 = count__16880;
var G__16889 = (i__16881 + (1));
seq__16878 = G__16886;
chunk__16879 = G__16887;
count__16880 = G__16888;
i__16881 = G__16889;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16878);
if(temp__4425__auto__){
var seq__16878__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16878__$1)){
var c__5031__auto__ = cljs.core.chunk_first.call(null,seq__16878__$1);
var G__16890 = cljs.core.chunk_rest.call(null,seq__16878__$1);
var G__16891 = c__5031__auto__;
var G__16892 = cljs.core.count.call(null,c__5031__auto__);
var G__16893 = (0);
seq__16878 = G__16890;
chunk__16879 = G__16891;
count__16880 = G__16892;
i__16881 = G__16893;
continue;
} else {
var vec__16883 = cljs.core.first.call(null,seq__16878__$1);
var sym = cljs.core.nth.call(null,vec__16883,(0),null);
var value = cljs.core.nth.call(null,vec__16883,(1),null);
var ns_16894 = cljs.core.namespace.call(null,sym);
var name_16895 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__16896 = cljs.core.next.call(null,seq__16878__$1);
var G__16897 = null;
var G__16898 = (0);
var G__16899 = (0);
seq__16878 = G__16896;
chunk__16879 = G__16897;
count__16880 = G__16898;
i__16881 = G__16899;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map