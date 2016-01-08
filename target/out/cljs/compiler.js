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
var map__15853 = s;
var map__15853__$1 = ((((!((map__15853 == null)))?((((map__15853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15853):map__15853);
var name = cljs.core.get.call(null,map__15853__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15853__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__15856 = info;
var map__15857 = G__15856;
var map__15857__$1 = ((((!((map__15857 == null)))?((((map__15857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15857):map__15857);
var shadow = cljs.core.get.call(null,map__15857__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__15856__$1 = G__15856;
while(true){
var d__$2 = d__$1;
var map__15859 = G__15856__$1;
var map__15859__$1 = ((((!((map__15859 == null)))?((((map__15859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15859):map__15859);
var shadow__$1 = cljs.core.get.call(null,map__15859__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__15861 = (d__$2 + (1));
var G__15862 = shadow__$1;
d__$1 = G__15861;
G__15856__$1 = G__15862;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__15863){
var map__15868 = p__15863;
var map__15868__$1 = ((((!((map__15868 == null)))?((((map__15868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15868):map__15868);
var name_var = map__15868__$1;
var name = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__15870 = info;
var map__15870__$1 = ((((!((map__15870 == null)))?((((map__15870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15870):map__15870);
var ns = cljs.core.get.call(null,map__15870__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__15870__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args15872 = [];
var len__5286__auto___15875 = arguments.length;
var i__5287__auto___15876 = (0);
while(true){
if((i__5287__auto___15876 < len__5286__auto___15875)){
args15872.push((arguments[i__5287__auto___15876]));

var G__15877 = (i__5287__auto___15876 + (1));
i__5287__auto___15876 = G__15877;
continue;
} else {
}
break;
}

var G__15874 = args15872.length;
switch (G__15874) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15872.length)].join('')));

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
var G__15880 = cp;
switch (G__15880) {
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
var seq__15886_15890 = cljs.core.seq.call(null,s);
var chunk__15887_15891 = null;
var count__15888_15892 = (0);
var i__15889_15893 = (0);
while(true){
if((i__15889_15893 < count__15888_15892)){
var c_15894 = cljs.core._nth.call(null,chunk__15887_15891,i__15889_15893);
sb.append(cljs.compiler.escape_char.call(null,c_15894));

var G__15895 = seq__15886_15890;
var G__15896 = chunk__15887_15891;
var G__15897 = count__15888_15892;
var G__15898 = (i__15889_15893 + (1));
seq__15886_15890 = G__15895;
chunk__15887_15891 = G__15896;
count__15888_15892 = G__15897;
i__15889_15893 = G__15898;
continue;
} else {
var temp__4425__auto___15899 = cljs.core.seq.call(null,seq__15886_15890);
if(temp__4425__auto___15899){
var seq__15886_15900__$1 = temp__4425__auto___15899;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15886_15900__$1)){
var c__5031__auto___15901 = cljs.core.chunk_first.call(null,seq__15886_15900__$1);
var G__15902 = cljs.core.chunk_rest.call(null,seq__15886_15900__$1);
var G__15903 = c__5031__auto___15901;
var G__15904 = cljs.core.count.call(null,c__5031__auto___15901);
var G__15905 = (0);
seq__15886_15890 = G__15902;
chunk__15887_15891 = G__15903;
count__15888_15892 = G__15904;
i__15889_15893 = G__15905;
continue;
} else {
var c_15906 = cljs.core.first.call(null,seq__15886_15900__$1);
sb.append(cljs.compiler.escape_char.call(null,c_15906));

var G__15907 = cljs.core.next.call(null,seq__15886_15900__$1);
var G__15908 = null;
var G__15909 = (0);
var G__15910 = (0);
seq__15886_15890 = G__15907;
chunk__15887_15891 = G__15908;
count__15888_15892 = G__15909;
i__15889_15893 = G__15910;
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
var val__5975__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5975__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__15916_15921 = ast;
var map__15916_15922__$1 = ((((!((map__15916_15921 == null)))?((((map__15916_15921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15916_15921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15916_15921):map__15916_15921);
var env_15923 = cljs.core.get.call(null,map__15916_15922__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_15923))){
var map__15918_15924 = env_15923;
var map__15918_15925__$1 = ((((!((map__15918_15924 == null)))?((((map__15918_15924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15918_15924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15918_15924):map__15918_15924);
var line_15926 = cljs.core.get.call(null,map__15918_15925__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_15927 = cljs.core.get.call(null,map__15918_15925__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__15918_15924,map__15918_15925__$1,line_15926,column_15927,map__15916_15921,map__15916_15922__$1,env_15923,val__5975__auto__){
return (function (m){
var minfo = (function (){var G__15920 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__15920__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__15920,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__15920);
return G__15920__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_15926 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__15918_15924,map__15918_15925__$1,line_15926,column_15927,map__15916_15921,map__15916_15922__$1,env_15923,val__5975__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_15927)?(column_15927 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__15918_15924,map__15918_15925__$1,line_15926,column_15927,map__15916_15921,map__15916_15922__$1,env_15923,val__5975__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__15918_15924,map__15918_15925__$1,line_15926,column_15927,map__15916_15921,map__15916_15922__$1,env_15923,val__5975__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__15918_15924,map__15918_15925__$1,line_15926,column_15927,map__15916_15921,map__15916_15922__$1,env_15923,val__5975__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__15918_15924,map__15918_15925__$1,line_15926,column_15927,map__15916_15921,map__15916_15922__$1,env_15923,val__5975__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__5975__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(){
var args__5293__auto__ = [];
var len__5286__auto___15934 = arguments.length;
var i__5287__auto___15935 = (0);
while(true){
if((i__5287__auto___15935 < len__5286__auto___15934)){
args__5293__auto__.push((arguments[i__5287__auto___15935]));

var G__15936 = (i__5287__auto___15935 + (1));
i__5287__auto___15935 = G__15936;
continue;
} else {
}
break;
}

var argseq__5294__auto__ = ((((0) < args__5293__auto__.length))?(new cljs.core.IndexedSeq(args__5293__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__5294__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__15930_15937 = cljs.core.seq.call(null,xs);
var chunk__15931_15938 = null;
var count__15932_15939 = (0);
var i__15933_15940 = (0);
while(true){
if((i__15933_15940 < count__15932_15939)){
var x_15941 = cljs.core._nth.call(null,chunk__15931_15938,i__15933_15940);
if((x_15941 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_15941)){
cljs.compiler.emit.call(null,x_15941);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_15941)){
cljs.core.apply.call(null,cljs.compiler.emits,x_15941);
} else {
if(goog.isFunction(x_15941)){
x_15941.call(null);
} else {
var s_15942 = cljs.core.print_str.call(null,x_15941);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__15930_15937,chunk__15931_15938,count__15932_15939,i__15933_15940,s_15942,x_15941){
return (function (p1__15928_SHARP_){
return (p1__15928_SHARP_ + cljs.core.count.call(null,s_15942));
});})(seq__15930_15937,chunk__15931_15938,count__15932_15939,i__15933_15940,s_15942,x_15941))
);
}

cljs.core.print.call(null,s_15942);

}
}
}
}

var G__15943 = seq__15930_15937;
var G__15944 = chunk__15931_15938;
var G__15945 = count__15932_15939;
var G__15946 = (i__15933_15940 + (1));
seq__15930_15937 = G__15943;
chunk__15931_15938 = G__15944;
count__15932_15939 = G__15945;
i__15933_15940 = G__15946;
continue;
} else {
var temp__4425__auto___15947 = cljs.core.seq.call(null,seq__15930_15937);
if(temp__4425__auto___15947){
var seq__15930_15948__$1 = temp__4425__auto___15947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15930_15948__$1)){
var c__5031__auto___15949 = cljs.core.chunk_first.call(null,seq__15930_15948__$1);
var G__15950 = cljs.core.chunk_rest.call(null,seq__15930_15948__$1);
var G__15951 = c__5031__auto___15949;
var G__15952 = cljs.core.count.call(null,c__5031__auto___15949);
var G__15953 = (0);
seq__15930_15937 = G__15950;
chunk__15931_15938 = G__15951;
count__15932_15939 = G__15952;
i__15933_15940 = G__15953;
continue;
} else {
var x_15954 = cljs.core.first.call(null,seq__15930_15948__$1);
if((x_15954 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_15954)){
cljs.compiler.emit.call(null,x_15954);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_15954)){
cljs.core.apply.call(null,cljs.compiler.emits,x_15954);
} else {
if(goog.isFunction(x_15954)){
x_15954.call(null);
} else {
var s_15955 = cljs.core.print_str.call(null,x_15954);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__15930_15937,chunk__15931_15938,count__15932_15939,i__15933_15940,s_15955,x_15954,seq__15930_15948__$1,temp__4425__auto___15947){
return (function (p1__15928_SHARP_){
return (p1__15928_SHARP_ + cljs.core.count.call(null,s_15955));
});})(seq__15930_15937,chunk__15931_15938,count__15932_15939,i__15933_15940,s_15955,x_15954,seq__15930_15948__$1,temp__4425__auto___15947))
);
}

cljs.core.print.call(null,s_15955);

}
}
}
}

var G__15956 = cljs.core.next.call(null,seq__15930_15948__$1);
var G__15957 = null;
var G__15958 = (0);
var G__15959 = (0);
seq__15930_15937 = G__15956;
chunk__15931_15938 = G__15957;
count__15932_15939 = G__15958;
i__15933_15940 = G__15959;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq15929){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15929));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(){
var args__5293__auto__ = [];
var len__5286__auto___15964 = arguments.length;
var i__5287__auto___15965 = (0);
while(true){
if((i__5287__auto___15965 < len__5286__auto___15964)){
args__5293__auto__.push((arguments[i__5287__auto___15965]));

var G__15966 = (i__5287__auto___15965 + (1));
i__5287__auto___15965 = G__15966;
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
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__15961){
var map__15962 = p__15961;
var map__15962__$1 = ((((!((map__15962 == null)))?((((map__15962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15962):map__15962);
var m = map__15962__$1;
var gen_line = cljs.core.get.call(null,map__15962__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq15960){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15960));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5202__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15969_15971 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15970_15972 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15969_15971,_STAR_print_fn_STAR_15970_15972,sb__5202__auto__){
return (function (x__5203__auto__){
return sb__5202__auto__.append(x__5203__auto__);
});})(_STAR_print_newline_STAR_15969_15971,_STAR_print_fn_STAR_15970_15972,sb__5202__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15970_15972;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15969_15971;
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
var vec__15973 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__15973,(0),null);
var flags = cljs.core.nth.call(null,vec__15973,(1),null);
var pattern = cljs.core.nth.call(null,vec__15973,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__15975){
var map__15976 = p__15975;
var map__15976__$1 = ((((!((map__15976 == null)))?((((map__15976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15976):map__15976);
var arg = map__15976__$1;
var info = cljs.core.get.call(null,map__15976__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__15976__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__15976__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__15978 = info__$1;
var G__15978__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__15978):G__15978);
return G__15978__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__15979){
var map__15980 = p__15979;
var map__15980__$1 = ((((!((map__15980 == null)))?((((map__15980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15980):map__15980);
var arg = map__15980__$1;
var env = cljs.core.get.call(null,map__15980__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__15980__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__15980__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__15980__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__15982 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__15982__$1 = ((((!((map__15982 == null)))?((((map__15982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15982):map__15982);
var name = cljs.core.get.call(null,map__15982__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__15984){
var map__15985 = p__15984;
var map__15985__$1 = ((((!((map__15985 == null)))?((((map__15985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15985):map__15985);
var expr = cljs.core.get.call(null,map__15985__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__15985__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__15985__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__15987_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15987_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__15988){
var map__15989 = p__15988;
var map__15989__$1 = ((((!((map__15989 == null)))?((((map__15989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15989):map__15989);
var env = cljs.core.get.call(null,map__15989__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__15989__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15989__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__15991){
var map__15992 = p__15991;
var map__15992__$1 = ((((!((map__15992 == null)))?((((map__15992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15992):map__15992);
var items = cljs.core.get.call(null,map__15992__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15992__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__15994){
var map__15995 = p__15994;
var map__15995__$1 = ((((!((map__15995 == null)))?((((map__15995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15995):map__15995);
var items = cljs.core.get.call(null,map__15995__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15995__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_15997 = cljs.core.count.call(null,items);
if((cnt_15997 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_15997,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__15998_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15998_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__15999){
var map__16000 = p__15999;
var map__16000__$1 = ((((!((map__16000 == null)))?((((map__16000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16000):map__16000);
var items = cljs.core.get.call(null,map__16000__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__16000__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__16002){
var map__16003 = p__16002;
var map__16003__$1 = ((((!((map__16003 == null)))?((((map__16003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16003):map__16003);
var items = cljs.core.get.call(null,map__16003__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__16003__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__16003__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___16013 = cljs.core.seq.call(null,items);
if(temp__4425__auto___16013){
var items_16014__$1 = temp__4425__auto___16013;
var vec__16005_16015 = items_16014__$1;
var vec__16006_16016 = cljs.core.nth.call(null,vec__16005_16015,(0),null);
var k_16017 = cljs.core.nth.call(null,vec__16006_16016,(0),null);
var v_16018 = cljs.core.nth.call(null,vec__16006_16016,(1),null);
var r_16019 = cljs.core.nthnext.call(null,vec__16005_16015,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_16017),"\": ",v_16018);

var seq__16007_16020 = cljs.core.seq.call(null,r_16019);
var chunk__16008_16021 = null;
var count__16009_16022 = (0);
var i__16010_16023 = (0);
while(true){
if((i__16010_16023 < count__16009_16022)){
var vec__16011_16024 = cljs.core._nth.call(null,chunk__16008_16021,i__16010_16023);
var k_16025__$1 = cljs.core.nth.call(null,vec__16011_16024,(0),null);
var v_16026__$1 = cljs.core.nth.call(null,vec__16011_16024,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_16025__$1),"\": ",v_16026__$1);

var G__16027 = seq__16007_16020;
var G__16028 = chunk__16008_16021;
var G__16029 = count__16009_16022;
var G__16030 = (i__16010_16023 + (1));
seq__16007_16020 = G__16027;
chunk__16008_16021 = G__16028;
count__16009_16022 = G__16029;
i__16010_16023 = G__16030;
continue;
} else {
var temp__4425__auto___16031__$1 = cljs.core.seq.call(null,seq__16007_16020);
if(temp__4425__auto___16031__$1){
var seq__16007_16032__$1 = temp__4425__auto___16031__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16007_16032__$1)){
var c__5031__auto___16033 = cljs.core.chunk_first.call(null,seq__16007_16032__$1);
var G__16034 = cljs.core.chunk_rest.call(null,seq__16007_16032__$1);
var G__16035 = c__5031__auto___16033;
var G__16036 = cljs.core.count.call(null,c__5031__auto___16033);
var G__16037 = (0);
seq__16007_16020 = G__16034;
chunk__16008_16021 = G__16035;
count__16009_16022 = G__16036;
i__16010_16023 = G__16037;
continue;
} else {
var vec__16012_16038 = cljs.core.first.call(null,seq__16007_16032__$1);
var k_16039__$1 = cljs.core.nth.call(null,vec__16012_16038,(0),null);
var v_16040__$1 = cljs.core.nth.call(null,vec__16012_16038,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_16039__$1),"\": ",v_16040__$1);

var G__16041 = cljs.core.next.call(null,seq__16007_16032__$1);
var G__16042 = null;
var G__16043 = (0);
var G__16044 = (0);
seq__16007_16020 = G__16041;
chunk__16008_16021 = G__16042;
count__16009_16022 = G__16043;
i__16010_16023 = G__16044;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__16045){
var map__16046 = p__16045;
var map__16046__$1 = ((((!((map__16046 == null)))?((((map__16046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16046):map__16046);
var form = cljs.core.get.call(null,map__16046__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__16046__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__16048){
var map__16051 = p__16048;
var map__16051__$1 = ((((!((map__16051 == null)))?((((map__16051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16051):map__16051);
var op = cljs.core.get.call(null,map__16051__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__16051__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__16053){
var map__16056 = p__16053;
var map__16056__$1 = ((((!((map__16056 == null)))?((((map__16056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16056):map__16056);
var op = cljs.core.get.call(null,map__16056__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__16056__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__16058){
var map__16059 = p__16058;
var map__16059__$1 = ((((!((map__16059 == null)))?((((map__16059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16059):map__16059);
var test = cljs.core.get.call(null,map__16059__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__16059__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__16059__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__16059__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__16059__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__16061){
var map__16062 = p__16061;
var map__16062__$1 = ((((!((map__16062 == null)))?((((map__16062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16062):map__16062);
var v = cljs.core.get.call(null,map__16062__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__16062__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__16062__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__16062__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__16062__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__16064_16078 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__16065_16079 = null;
var count__16066_16080 = (0);
var i__16067_16081 = (0);
while(true){
if((i__16067_16081 < count__16066_16080)){
var vec__16068_16082 = cljs.core._nth.call(null,chunk__16065_16079,i__16067_16081);
var ts_16083 = cljs.core.nth.call(null,vec__16068_16082,(0),null);
var then_16084 = cljs.core.nth.call(null,vec__16068_16082,(1),null);
var seq__16069_16085 = cljs.core.seq.call(null,ts_16083);
var chunk__16070_16086 = null;
var count__16071_16087 = (0);
var i__16072_16088 = (0);
while(true){
if((i__16072_16088 < count__16071_16087)){
var test_16089 = cljs.core._nth.call(null,chunk__16070_16086,i__16072_16088);
cljs.compiler.emitln.call(null,"case ",test_16089,":");

var G__16090 = seq__16069_16085;
var G__16091 = chunk__16070_16086;
var G__16092 = count__16071_16087;
var G__16093 = (i__16072_16088 + (1));
seq__16069_16085 = G__16090;
chunk__16070_16086 = G__16091;
count__16071_16087 = G__16092;
i__16072_16088 = G__16093;
continue;
} else {
var temp__4425__auto___16094 = cljs.core.seq.call(null,seq__16069_16085);
if(temp__4425__auto___16094){
var seq__16069_16095__$1 = temp__4425__auto___16094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16069_16095__$1)){
var c__5031__auto___16096 = cljs.core.chunk_first.call(null,seq__16069_16095__$1);
var G__16097 = cljs.core.chunk_rest.call(null,seq__16069_16095__$1);
var G__16098 = c__5031__auto___16096;
var G__16099 = cljs.core.count.call(null,c__5031__auto___16096);
var G__16100 = (0);
seq__16069_16085 = G__16097;
chunk__16070_16086 = G__16098;
count__16071_16087 = G__16099;
i__16072_16088 = G__16100;
continue;
} else {
var test_16101 = cljs.core.first.call(null,seq__16069_16095__$1);
cljs.compiler.emitln.call(null,"case ",test_16101,":");

var G__16102 = cljs.core.next.call(null,seq__16069_16095__$1);
var G__16103 = null;
var G__16104 = (0);
var G__16105 = (0);
seq__16069_16085 = G__16102;
chunk__16070_16086 = G__16103;
count__16071_16087 = G__16104;
i__16072_16088 = G__16105;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_16084);
} else {
cljs.compiler.emitln.call(null,then_16084);
}

cljs.compiler.emitln.call(null,"break;");

var G__16106 = seq__16064_16078;
var G__16107 = chunk__16065_16079;
var G__16108 = count__16066_16080;
var G__16109 = (i__16067_16081 + (1));
seq__16064_16078 = G__16106;
chunk__16065_16079 = G__16107;
count__16066_16080 = G__16108;
i__16067_16081 = G__16109;
continue;
} else {
var temp__4425__auto___16110 = cljs.core.seq.call(null,seq__16064_16078);
if(temp__4425__auto___16110){
var seq__16064_16111__$1 = temp__4425__auto___16110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16064_16111__$1)){
var c__5031__auto___16112 = cljs.core.chunk_first.call(null,seq__16064_16111__$1);
var G__16113 = cljs.core.chunk_rest.call(null,seq__16064_16111__$1);
var G__16114 = c__5031__auto___16112;
var G__16115 = cljs.core.count.call(null,c__5031__auto___16112);
var G__16116 = (0);
seq__16064_16078 = G__16113;
chunk__16065_16079 = G__16114;
count__16066_16080 = G__16115;
i__16067_16081 = G__16116;
continue;
} else {
var vec__16073_16117 = cljs.core.first.call(null,seq__16064_16111__$1);
var ts_16118 = cljs.core.nth.call(null,vec__16073_16117,(0),null);
var then_16119 = cljs.core.nth.call(null,vec__16073_16117,(1),null);
var seq__16074_16120 = cljs.core.seq.call(null,ts_16118);
var chunk__16075_16121 = null;
var count__16076_16122 = (0);
var i__16077_16123 = (0);
while(true){
if((i__16077_16123 < count__16076_16122)){
var test_16124 = cljs.core._nth.call(null,chunk__16075_16121,i__16077_16123);
cljs.compiler.emitln.call(null,"case ",test_16124,":");

var G__16125 = seq__16074_16120;
var G__16126 = chunk__16075_16121;
var G__16127 = count__16076_16122;
var G__16128 = (i__16077_16123 + (1));
seq__16074_16120 = G__16125;
chunk__16075_16121 = G__16126;
count__16076_16122 = G__16127;
i__16077_16123 = G__16128;
continue;
} else {
var temp__4425__auto___16129__$1 = cljs.core.seq.call(null,seq__16074_16120);
if(temp__4425__auto___16129__$1){
var seq__16074_16130__$1 = temp__4425__auto___16129__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16074_16130__$1)){
var c__5031__auto___16131 = cljs.core.chunk_first.call(null,seq__16074_16130__$1);
var G__16132 = cljs.core.chunk_rest.call(null,seq__16074_16130__$1);
var G__16133 = c__5031__auto___16131;
var G__16134 = cljs.core.count.call(null,c__5031__auto___16131);
var G__16135 = (0);
seq__16074_16120 = G__16132;
chunk__16075_16121 = G__16133;
count__16076_16122 = G__16134;
i__16077_16123 = G__16135;
continue;
} else {
var test_16136 = cljs.core.first.call(null,seq__16074_16130__$1);
cljs.compiler.emitln.call(null,"case ",test_16136,":");

var G__16137 = cljs.core.next.call(null,seq__16074_16130__$1);
var G__16138 = null;
var G__16139 = (0);
var G__16140 = (0);
seq__16074_16120 = G__16137;
chunk__16075_16121 = G__16138;
count__16076_16122 = G__16139;
i__16077_16123 = G__16140;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_16119);
} else {
cljs.compiler.emitln.call(null,then_16119);
}

cljs.compiler.emitln.call(null,"break;");

var G__16141 = cljs.core.next.call(null,seq__16064_16111__$1);
var G__16142 = null;
var G__16143 = (0);
var G__16144 = (0);
seq__16064_16078 = G__16141;
chunk__16065_16079 = G__16142;
count__16066_16080 = G__16143;
i__16067_16081 = G__16144;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__16145){
var map__16146 = p__16145;
var map__16146__$1 = ((((!((map__16146 == null)))?((((map__16146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16146):map__16146);
var throw$ = cljs.core.get.call(null,map__16146__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__16146__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var seq__16180 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,e));
var chunk__16181 = null;
var count__16182 = (0);
var i__16183 = (0);
while(true){
if((i__16183 < count__16182)){
var next_line = cljs.core._nth.call(null,chunk__16181,i__16183);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.trim.call(null,next_line),"*/","* /"));

var G__16188 = seq__16180;
var G__16189 = chunk__16181;
var G__16190 = count__16182;
var G__16191 = (i__16183 + (1));
seq__16180 = G__16188;
chunk__16181 = G__16189;
count__16182 = G__16190;
i__16183 = G__16191;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16180);
if(temp__4425__auto__){
var seq__16180__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16180__$1)){
var c__5031__auto__ = cljs.core.chunk_first.call(null,seq__16180__$1);
var G__16192 = cljs.core.chunk_rest.call(null,seq__16180__$1);
var G__16193 = c__5031__auto__;
var G__16194 = cljs.core.count.call(null,c__5031__auto__);
var G__16195 = (0);
seq__16180 = G__16192;
chunk__16181 = G__16193;
count__16182 = G__16194;
i__16183 = G__16195;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__16180__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.trim.call(null,next_line),"*/","* /"));

var G__16196 = cljs.core.next.call(null,seq__16180__$1);
var G__16197 = null;
var G__16198 = (0);
var G__16199 = (0);
seq__16180 = G__16196;
chunk__16181 = G__16197;
count__16182 = G__16198;
i__16183 = G__16199;
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

var seq__16184_16200 = cljs.core.seq.call(null,docs__$2);
var chunk__16185_16201 = null;
var count__16186_16202 = (0);
var i__16187_16203 = (0);
while(true){
if((i__16187_16203 < count__16186_16202)){
var e_16204 = cljs.core._nth.call(null,chunk__16185_16201,i__16187_16203);
if(cljs.core.truth_(e_16204)){
print_comment_lines.call(null,e_16204);
} else {
}

var G__16205 = seq__16184_16200;
var G__16206 = chunk__16185_16201;
var G__16207 = count__16186_16202;
var G__16208 = (i__16187_16203 + (1));
seq__16184_16200 = G__16205;
chunk__16185_16201 = G__16206;
count__16186_16202 = G__16207;
i__16187_16203 = G__16208;
continue;
} else {
var temp__4425__auto___16209 = cljs.core.seq.call(null,seq__16184_16200);
if(temp__4425__auto___16209){
var seq__16184_16210__$1 = temp__4425__auto___16209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16184_16210__$1)){
var c__5031__auto___16211 = cljs.core.chunk_first.call(null,seq__16184_16210__$1);
var G__16212 = cljs.core.chunk_rest.call(null,seq__16184_16210__$1);
var G__16213 = c__5031__auto___16211;
var G__16214 = cljs.core.count.call(null,c__5031__auto___16211);
var G__16215 = (0);
seq__16184_16200 = G__16212;
chunk__16185_16201 = G__16213;
count__16186_16202 = G__16214;
i__16187_16203 = G__16215;
continue;
} else {
var e_16216 = cljs.core.first.call(null,seq__16184_16210__$1);
if(cljs.core.truth_(e_16216)){
print_comment_lines.call(null,e_16216);
} else {
}

var G__16217 = cljs.core.next.call(null,seq__16184_16210__$1);
var G__16218 = null;
var G__16219 = (0);
var G__16220 = (0);
seq__16184_16200 = G__16217;
chunk__16185_16201 = G__16218;
count__16186_16202 = G__16219;
i__16187_16203 = G__16220;
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
return (function (p1__16222_SHARP_){
return goog.string.startsWith(p1__16222_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__16223){
var map__16224 = p__16223;
var map__16224__$1 = ((((!((map__16224 == null)))?((((map__16224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16224):map__16224);
var name = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__16226){
var map__16243 = p__16226;
var map__16243__$1 = ((((!((map__16243 == null)))?((((map__16243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16243):map__16243);
var name = cljs.core.get.call(null,map__16243__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__16243__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__16243__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__16245_16259 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__16246_16260 = null;
var count__16247_16261 = (0);
var i__16248_16262 = (0);
while(true){
if((i__16248_16262 < count__16247_16261)){
var vec__16249_16263 = cljs.core._nth.call(null,chunk__16246_16260,i__16248_16262);
var i_16264 = cljs.core.nth.call(null,vec__16249_16263,(0),null);
var param_16265 = cljs.core.nth.call(null,vec__16249_16263,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_16265);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__16266 = seq__16245_16259;
var G__16267 = chunk__16246_16260;
var G__16268 = count__16247_16261;
var G__16269 = (i__16248_16262 + (1));
seq__16245_16259 = G__16266;
chunk__16246_16260 = G__16267;
count__16247_16261 = G__16268;
i__16248_16262 = G__16269;
continue;
} else {
var temp__4425__auto___16270 = cljs.core.seq.call(null,seq__16245_16259);
if(temp__4425__auto___16270){
var seq__16245_16271__$1 = temp__4425__auto___16270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16245_16271__$1)){
var c__5031__auto___16272 = cljs.core.chunk_first.call(null,seq__16245_16271__$1);
var G__16273 = cljs.core.chunk_rest.call(null,seq__16245_16271__$1);
var G__16274 = c__5031__auto___16272;
var G__16275 = cljs.core.count.call(null,c__5031__auto___16272);
var G__16276 = (0);
seq__16245_16259 = G__16273;
chunk__16246_16260 = G__16274;
count__16247_16261 = G__16275;
i__16248_16262 = G__16276;
continue;
} else {
var vec__16250_16277 = cljs.core.first.call(null,seq__16245_16271__$1);
var i_16278 = cljs.core.nth.call(null,vec__16250_16277,(0),null);
var param_16279 = cljs.core.nth.call(null,vec__16250_16277,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_16279);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__16280 = cljs.core.next.call(null,seq__16245_16271__$1);
var G__16281 = null;
var G__16282 = (0);
var G__16283 = (0);
seq__16245_16259 = G__16280;
chunk__16246_16260 = G__16281;
count__16247_16261 = G__16282;
i__16248_16262 = G__16283;
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

var seq__16251_16284 = cljs.core.seq.call(null,params);
var chunk__16252_16285 = null;
var count__16253_16286 = (0);
var i__16254_16287 = (0);
while(true){
if((i__16254_16287 < count__16253_16286)){
var param_16288 = cljs.core._nth.call(null,chunk__16252_16285,i__16254_16287);
cljs.compiler.emit.call(null,param_16288);

if(cljs.core._EQ_.call(null,param_16288,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16289 = seq__16251_16284;
var G__16290 = chunk__16252_16285;
var G__16291 = count__16253_16286;
var G__16292 = (i__16254_16287 + (1));
seq__16251_16284 = G__16289;
chunk__16252_16285 = G__16290;
count__16253_16286 = G__16291;
i__16254_16287 = G__16292;
continue;
} else {
var temp__4425__auto___16293 = cljs.core.seq.call(null,seq__16251_16284);
if(temp__4425__auto___16293){
var seq__16251_16294__$1 = temp__4425__auto___16293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16251_16294__$1)){
var c__5031__auto___16295 = cljs.core.chunk_first.call(null,seq__16251_16294__$1);
var G__16296 = cljs.core.chunk_rest.call(null,seq__16251_16294__$1);
var G__16297 = c__5031__auto___16295;
var G__16298 = cljs.core.count.call(null,c__5031__auto___16295);
var G__16299 = (0);
seq__16251_16284 = G__16296;
chunk__16252_16285 = G__16297;
count__16253_16286 = G__16298;
i__16254_16287 = G__16299;
continue;
} else {
var param_16300 = cljs.core.first.call(null,seq__16251_16294__$1);
cljs.compiler.emit.call(null,param_16300);

if(cljs.core._EQ_.call(null,param_16300,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16301 = cljs.core.next.call(null,seq__16251_16294__$1);
var G__16302 = null;
var G__16303 = (0);
var G__16304 = (0);
seq__16251_16284 = G__16301;
chunk__16252_16285 = G__16302;
count__16253_16286 = G__16303;
i__16254_16287 = G__16304;
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

var seq__16255_16305 = cljs.core.seq.call(null,params);
var chunk__16256_16306 = null;
var count__16257_16307 = (0);
var i__16258_16308 = (0);
while(true){
if((i__16258_16308 < count__16257_16307)){
var param_16309 = cljs.core._nth.call(null,chunk__16256_16306,i__16258_16308);
cljs.compiler.emit.call(null,param_16309);

if(cljs.core._EQ_.call(null,param_16309,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16310 = seq__16255_16305;
var G__16311 = chunk__16256_16306;
var G__16312 = count__16257_16307;
var G__16313 = (i__16258_16308 + (1));
seq__16255_16305 = G__16310;
chunk__16256_16306 = G__16311;
count__16257_16307 = G__16312;
i__16258_16308 = G__16313;
continue;
} else {
var temp__4425__auto___16314 = cljs.core.seq.call(null,seq__16255_16305);
if(temp__4425__auto___16314){
var seq__16255_16315__$1 = temp__4425__auto___16314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16255_16315__$1)){
var c__5031__auto___16316 = cljs.core.chunk_first.call(null,seq__16255_16315__$1);
var G__16317 = cljs.core.chunk_rest.call(null,seq__16255_16315__$1);
var G__16318 = c__5031__auto___16316;
var G__16319 = cljs.core.count.call(null,c__5031__auto___16316);
var G__16320 = (0);
seq__16255_16305 = G__16317;
chunk__16256_16306 = G__16318;
count__16257_16307 = G__16319;
i__16258_16308 = G__16320;
continue;
} else {
var param_16321 = cljs.core.first.call(null,seq__16255_16315__$1);
cljs.compiler.emit.call(null,param_16321);

if(cljs.core._EQ_.call(null,param_16321,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16322 = cljs.core.next.call(null,seq__16255_16315__$1);
var G__16323 = null;
var G__16324 = (0);
var G__16325 = (0);
seq__16255_16305 = G__16322;
chunk__16256_16306 = G__16323;
count__16257_16307 = G__16324;
i__16258_16308 = G__16325;
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
var seq__16330 = cljs.core.seq.call(null,params);
var chunk__16331 = null;
var count__16332 = (0);
var i__16333 = (0);
while(true){
if((i__16333 < count__16332)){
var param = cljs.core._nth.call(null,chunk__16331,i__16333);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16334 = seq__16330;
var G__16335 = chunk__16331;
var G__16336 = count__16332;
var G__16337 = (i__16333 + (1));
seq__16330 = G__16334;
chunk__16331 = G__16335;
count__16332 = G__16336;
i__16333 = G__16337;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16330);
if(temp__4425__auto__){
var seq__16330__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16330__$1)){
var c__5031__auto__ = cljs.core.chunk_first.call(null,seq__16330__$1);
var G__16338 = cljs.core.chunk_rest.call(null,seq__16330__$1);
var G__16339 = c__5031__auto__;
var G__16340 = cljs.core.count.call(null,c__5031__auto__);
var G__16341 = (0);
seq__16330 = G__16338;
chunk__16331 = G__16339;
count__16332 = G__16340;
i__16333 = G__16341;
continue;
} else {
var param = cljs.core.first.call(null,seq__16330__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16342 = cljs.core.next.call(null,seq__16330__$1);
var G__16343 = null;
var G__16344 = (0);
var G__16345 = (0);
seq__16330 = G__16342;
chunk__16331 = G__16343;
count__16332 = G__16344;
i__16333 = G__16345;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__16346){
var map__16349 = p__16346;
var map__16349__$1 = ((((!((map__16349 == null)))?((((map__16349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16349):map__16349);
var type = cljs.core.get.call(null,map__16349__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__16349__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__16349__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__16349__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__16349__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__16349__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__16349__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__16349__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__16351){
var map__16362 = p__16351;
var map__16362__$1 = ((((!((map__16362 == null)))?((((map__16362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16362):map__16362);
var f = map__16362__$1;
var type = cljs.core.get.call(null,map__16362__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__16362__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__16362__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__16362__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__16362__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__16362__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__16362__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__16362__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_16372__$1 = (function (){var or__4247__auto__ = name;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_16373 = cljs.compiler.munge.call(null,name_16372__$1);
var delegate_name_16374 = [cljs.core.str(mname_16373),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_16374," = function (");

var seq__16364_16375 = cljs.core.seq.call(null,params);
var chunk__16365_16376 = null;
var count__16366_16377 = (0);
var i__16367_16378 = (0);
while(true){
if((i__16367_16378 < count__16366_16377)){
var param_16379 = cljs.core._nth.call(null,chunk__16365_16376,i__16367_16378);
cljs.compiler.emit.call(null,param_16379);

if(cljs.core._EQ_.call(null,param_16379,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16380 = seq__16364_16375;
var G__16381 = chunk__16365_16376;
var G__16382 = count__16366_16377;
var G__16383 = (i__16367_16378 + (1));
seq__16364_16375 = G__16380;
chunk__16365_16376 = G__16381;
count__16366_16377 = G__16382;
i__16367_16378 = G__16383;
continue;
} else {
var temp__4425__auto___16384 = cljs.core.seq.call(null,seq__16364_16375);
if(temp__4425__auto___16384){
var seq__16364_16385__$1 = temp__4425__auto___16384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16364_16385__$1)){
var c__5031__auto___16386 = cljs.core.chunk_first.call(null,seq__16364_16385__$1);
var G__16387 = cljs.core.chunk_rest.call(null,seq__16364_16385__$1);
var G__16388 = c__5031__auto___16386;
var G__16389 = cljs.core.count.call(null,c__5031__auto___16386);
var G__16390 = (0);
seq__16364_16375 = G__16387;
chunk__16365_16376 = G__16388;
count__16366_16377 = G__16389;
i__16367_16378 = G__16390;
continue;
} else {
var param_16391 = cljs.core.first.call(null,seq__16364_16385__$1);
cljs.compiler.emit.call(null,param_16391);

if(cljs.core._EQ_.call(null,param_16391,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16392 = cljs.core.next.call(null,seq__16364_16385__$1);
var G__16393 = null;
var G__16394 = (0);
var G__16395 = (0);
seq__16364_16375 = G__16392;
chunk__16365_16376 = G__16393;
count__16366_16377 = G__16394;
i__16367_16378 = G__16395;
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

cljs.compiler.emitln.call(null,"var ",mname_16373," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_16396 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_16396,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_16374,".call(this,");

var seq__16368_16397 = cljs.core.seq.call(null,params);
var chunk__16369_16398 = null;
var count__16370_16399 = (0);
var i__16371_16400 = (0);
while(true){
if((i__16371_16400 < count__16370_16399)){
var param_16401 = cljs.core._nth.call(null,chunk__16369_16398,i__16371_16400);
cljs.compiler.emit.call(null,param_16401);

if(cljs.core._EQ_.call(null,param_16401,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16402 = seq__16368_16397;
var G__16403 = chunk__16369_16398;
var G__16404 = count__16370_16399;
var G__16405 = (i__16371_16400 + (1));
seq__16368_16397 = G__16402;
chunk__16369_16398 = G__16403;
count__16370_16399 = G__16404;
i__16371_16400 = G__16405;
continue;
} else {
var temp__4425__auto___16406 = cljs.core.seq.call(null,seq__16368_16397);
if(temp__4425__auto___16406){
var seq__16368_16407__$1 = temp__4425__auto___16406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16368_16407__$1)){
var c__5031__auto___16408 = cljs.core.chunk_first.call(null,seq__16368_16407__$1);
var G__16409 = cljs.core.chunk_rest.call(null,seq__16368_16407__$1);
var G__16410 = c__5031__auto___16408;
var G__16411 = cljs.core.count.call(null,c__5031__auto___16408);
var G__16412 = (0);
seq__16368_16397 = G__16409;
chunk__16369_16398 = G__16410;
count__16370_16399 = G__16411;
i__16371_16400 = G__16412;
continue;
} else {
var param_16413 = cljs.core.first.call(null,seq__16368_16407__$1);
cljs.compiler.emit.call(null,param_16413);

if(cljs.core._EQ_.call(null,param_16413,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16414 = cljs.core.next.call(null,seq__16368_16407__$1);
var G__16415 = null;
var G__16416 = (0);
var G__16417 = (0);
seq__16368_16397 = G__16414;
chunk__16369_16398 = G__16415;
count__16370_16399 = G__16416;
i__16371_16400 = G__16417;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_16373,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_16373,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_16372__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_16373,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_16374,";");

cljs.compiler.emitln.call(null,"return ",mname_16373,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__16421){
var map__16422 = p__16421;
var map__16422__$1 = ((((!((map__16422 == null)))?((((map__16422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16422):map__16422);
var name = cljs.core.get.call(null,map__16422__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__16422__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__16422__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__16422__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__16422__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__16422__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__16422__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__16422,map__16422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__16418_SHARP_){
var and__4235__auto__ = p1__16418_SHARP_;
if(cljs.core.truth_(and__4235__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__16418_SHARP_));
} else {
return and__4235__auto__;
}
});})(map__16422,map__16422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_16443__$1 = (function (){var or__4247__auto__ = name;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_16444 = cljs.compiler.munge.call(null,name_16443__$1);
var maxparams_16445 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_16446 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_16443__$1,mname_16444,maxparams_16445,loop_locals,map__16422,map__16422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_16444),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_16443__$1,mname_16444,maxparams_16445,loop_locals,map__16422,map__16422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_16447 = cljs.core.sort_by.call(null,((function (name_16443__$1,mname_16444,maxparams_16445,mmap_16446,loop_locals,map__16422,map__16422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__16419_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__16419_SHARP_)));
});})(name_16443__$1,mname_16444,maxparams_16445,mmap_16446,loop_locals,map__16422,map__16422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_16446));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_16444," = null;");

var seq__16424_16448 = cljs.core.seq.call(null,ms_16447);
var chunk__16425_16449 = null;
var count__16426_16450 = (0);
var i__16427_16451 = (0);
while(true){
if((i__16427_16451 < count__16426_16450)){
var vec__16428_16452 = cljs.core._nth.call(null,chunk__16425_16449,i__16427_16451);
var n_16453 = cljs.core.nth.call(null,vec__16428_16452,(0),null);
var meth_16454 = cljs.core.nth.call(null,vec__16428_16452,(1),null);
cljs.compiler.emits.call(null,"var ",n_16453," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16454))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_16454);
} else {
cljs.compiler.emit_fn_method.call(null,meth_16454);
}

cljs.compiler.emitln.call(null,";");

var G__16455 = seq__16424_16448;
var G__16456 = chunk__16425_16449;
var G__16457 = count__16426_16450;
var G__16458 = (i__16427_16451 + (1));
seq__16424_16448 = G__16455;
chunk__16425_16449 = G__16456;
count__16426_16450 = G__16457;
i__16427_16451 = G__16458;
continue;
} else {
var temp__4425__auto___16459 = cljs.core.seq.call(null,seq__16424_16448);
if(temp__4425__auto___16459){
var seq__16424_16460__$1 = temp__4425__auto___16459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16424_16460__$1)){
var c__5031__auto___16461 = cljs.core.chunk_first.call(null,seq__16424_16460__$1);
var G__16462 = cljs.core.chunk_rest.call(null,seq__16424_16460__$1);
var G__16463 = c__5031__auto___16461;
var G__16464 = cljs.core.count.call(null,c__5031__auto___16461);
var G__16465 = (0);
seq__16424_16448 = G__16462;
chunk__16425_16449 = G__16463;
count__16426_16450 = G__16464;
i__16427_16451 = G__16465;
continue;
} else {
var vec__16429_16466 = cljs.core.first.call(null,seq__16424_16460__$1);
var n_16467 = cljs.core.nth.call(null,vec__16429_16466,(0),null);
var meth_16468 = cljs.core.nth.call(null,vec__16429_16466,(1),null);
cljs.compiler.emits.call(null,"var ",n_16467," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16468))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_16468);
} else {
cljs.compiler.emit_fn_method.call(null,meth_16468);
}

cljs.compiler.emitln.call(null,";");

var G__16469 = cljs.core.next.call(null,seq__16424_16460__$1);
var G__16470 = null;
var G__16471 = (0);
var G__16472 = (0);
seq__16424_16448 = G__16469;
chunk__16425_16449 = G__16470;
count__16426_16450 = G__16471;
i__16427_16451 = G__16472;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_16444," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_16445),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_16445)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_16445));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__16430_16473 = cljs.core.seq.call(null,ms_16447);
var chunk__16431_16474 = null;
var count__16432_16475 = (0);
var i__16433_16476 = (0);
while(true){
if((i__16433_16476 < count__16432_16475)){
var vec__16434_16477 = cljs.core._nth.call(null,chunk__16431_16474,i__16433_16476);
var n_16478 = cljs.core.nth.call(null,vec__16434_16477,(0),null);
var meth_16479 = cljs.core.nth.call(null,vec__16434_16477,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16479))){
cljs.compiler.emitln.call(null,"default:");

var restarg_16480 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_16480," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_16481 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_16480," = new cljs.core.IndexedSeq(",a_16481,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_16478,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_16445)),(((cljs.core.count.call(null,maxparams_16445) > (1)))?", ":null),restarg_16480,");");
} else {
var pcnt_16482 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16479));
cljs.compiler.emitln.call(null,"case ",pcnt_16482,":");

cljs.compiler.emitln.call(null,"return ",n_16478,".call(this",(((pcnt_16482 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_16482,maxparams_16445))),",")),");");
}

var G__16483 = seq__16430_16473;
var G__16484 = chunk__16431_16474;
var G__16485 = count__16432_16475;
var G__16486 = (i__16433_16476 + (1));
seq__16430_16473 = G__16483;
chunk__16431_16474 = G__16484;
count__16432_16475 = G__16485;
i__16433_16476 = G__16486;
continue;
} else {
var temp__4425__auto___16487 = cljs.core.seq.call(null,seq__16430_16473);
if(temp__4425__auto___16487){
var seq__16430_16488__$1 = temp__4425__auto___16487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16430_16488__$1)){
var c__5031__auto___16489 = cljs.core.chunk_first.call(null,seq__16430_16488__$1);
var G__16490 = cljs.core.chunk_rest.call(null,seq__16430_16488__$1);
var G__16491 = c__5031__auto___16489;
var G__16492 = cljs.core.count.call(null,c__5031__auto___16489);
var G__16493 = (0);
seq__16430_16473 = G__16490;
chunk__16431_16474 = G__16491;
count__16432_16475 = G__16492;
i__16433_16476 = G__16493;
continue;
} else {
var vec__16435_16494 = cljs.core.first.call(null,seq__16430_16488__$1);
var n_16495 = cljs.core.nth.call(null,vec__16435_16494,(0),null);
var meth_16496 = cljs.core.nth.call(null,vec__16435_16494,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16496))){
cljs.compiler.emitln.call(null,"default:");

var restarg_16497 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_16497," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_16498 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_16497," = new cljs.core.IndexedSeq(",a_16498,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_16495,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_16445)),(((cljs.core.count.call(null,maxparams_16445) > (1)))?", ":null),restarg_16497,");");
} else {
var pcnt_16499 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16496));
cljs.compiler.emitln.call(null,"case ",pcnt_16499,":");

cljs.compiler.emitln.call(null,"return ",n_16495,".call(this",(((pcnt_16499 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_16499,maxparams_16445))),",")),");");
}

var G__16500 = cljs.core.next.call(null,seq__16430_16488__$1);
var G__16501 = null;
var G__16502 = (0);
var G__16503 = (0);
seq__16430_16473 = G__16500;
chunk__16431_16474 = G__16501;
count__16432_16475 = G__16502;
i__16433_16476 = G__16503;
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
cljs.compiler.emitln.call(null,mname_16444,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_16444,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_16443__$1,mname_16444,maxparams_16445,mmap_16446,ms_16447,loop_locals,map__16422,map__16422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__16420_SHARP_){
var vec__16436 = p1__16420_SHARP_;
var n = cljs.core.nth.call(null,vec__16436,(0),null);
var m = cljs.core.nth.call(null,vec__16436,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_16443__$1,mname_16444,maxparams_16445,mmap_16446,ms_16447,loop_locals,map__16422,map__16422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_16447),".cljs$lang$applyTo;");
} else {
}

var seq__16437_16504 = cljs.core.seq.call(null,ms_16447);
var chunk__16438_16505 = null;
var count__16439_16506 = (0);
var i__16440_16507 = (0);
while(true){
if((i__16440_16507 < count__16439_16506)){
var vec__16441_16508 = cljs.core._nth.call(null,chunk__16438_16505,i__16440_16507);
var n_16509 = cljs.core.nth.call(null,vec__16441_16508,(0),null);
var meth_16510 = cljs.core.nth.call(null,vec__16441_16508,(1),null);
var c_16511 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16510));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16510))){
cljs.compiler.emitln.call(null,mname_16444,".cljs$core$IFn$_invoke$arity$variadic = ",n_16509,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_16444,".cljs$core$IFn$_invoke$arity$",c_16511," = ",n_16509,";");
}

var G__16512 = seq__16437_16504;
var G__16513 = chunk__16438_16505;
var G__16514 = count__16439_16506;
var G__16515 = (i__16440_16507 + (1));
seq__16437_16504 = G__16512;
chunk__16438_16505 = G__16513;
count__16439_16506 = G__16514;
i__16440_16507 = G__16515;
continue;
} else {
var temp__4425__auto___16516 = cljs.core.seq.call(null,seq__16437_16504);
if(temp__4425__auto___16516){
var seq__16437_16517__$1 = temp__4425__auto___16516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16437_16517__$1)){
var c__5031__auto___16518 = cljs.core.chunk_first.call(null,seq__16437_16517__$1);
var G__16519 = cljs.core.chunk_rest.call(null,seq__16437_16517__$1);
var G__16520 = c__5031__auto___16518;
var G__16521 = cljs.core.count.call(null,c__5031__auto___16518);
var G__16522 = (0);
seq__16437_16504 = G__16519;
chunk__16438_16505 = G__16520;
count__16439_16506 = G__16521;
i__16440_16507 = G__16522;
continue;
} else {
var vec__16442_16523 = cljs.core.first.call(null,seq__16437_16517__$1);
var n_16524 = cljs.core.nth.call(null,vec__16442_16523,(0),null);
var meth_16525 = cljs.core.nth.call(null,vec__16442_16523,(1),null);
var c_16526 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16525));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16525))){
cljs.compiler.emitln.call(null,mname_16444,".cljs$core$IFn$_invoke$arity$variadic = ",n_16524,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_16444,".cljs$core$IFn$_invoke$arity$",c_16526," = ",n_16524,";");
}

var G__16527 = cljs.core.next.call(null,seq__16437_16517__$1);
var G__16528 = null;
var G__16529 = (0);
var G__16530 = (0);
seq__16437_16504 = G__16527;
chunk__16438_16505 = G__16528;
count__16439_16506 = G__16529;
i__16440_16507 = G__16530;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_16444,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__16531){
var map__16532 = p__16531;
var map__16532__$1 = ((((!((map__16532 == null)))?((((map__16532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16532):map__16532);
var statements = cljs.core.get.call(null,map__16532__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__16532__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__16532__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__16534_16538 = cljs.core.seq.call(null,statements);
var chunk__16535_16539 = null;
var count__16536_16540 = (0);
var i__16537_16541 = (0);
while(true){
if((i__16537_16541 < count__16536_16540)){
var s_16542 = cljs.core._nth.call(null,chunk__16535_16539,i__16537_16541);
cljs.compiler.emitln.call(null,s_16542);

var G__16543 = seq__16534_16538;
var G__16544 = chunk__16535_16539;
var G__16545 = count__16536_16540;
var G__16546 = (i__16537_16541 + (1));
seq__16534_16538 = G__16543;
chunk__16535_16539 = G__16544;
count__16536_16540 = G__16545;
i__16537_16541 = G__16546;
continue;
} else {
var temp__4425__auto___16547 = cljs.core.seq.call(null,seq__16534_16538);
if(temp__4425__auto___16547){
var seq__16534_16548__$1 = temp__4425__auto___16547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16534_16548__$1)){
var c__5031__auto___16549 = cljs.core.chunk_first.call(null,seq__16534_16548__$1);
var G__16550 = cljs.core.chunk_rest.call(null,seq__16534_16548__$1);
var G__16551 = c__5031__auto___16549;
var G__16552 = cljs.core.count.call(null,c__5031__auto___16549);
var G__16553 = (0);
seq__16534_16538 = G__16550;
chunk__16535_16539 = G__16551;
count__16536_16540 = G__16552;
i__16537_16541 = G__16553;
continue;
} else {
var s_16554 = cljs.core.first.call(null,seq__16534_16548__$1);
cljs.compiler.emitln.call(null,s_16554);

var G__16555 = cljs.core.next.call(null,seq__16534_16548__$1);
var G__16556 = null;
var G__16557 = (0);
var G__16558 = (0);
seq__16534_16538 = G__16555;
chunk__16535_16539 = G__16556;
count__16536_16540 = G__16557;
i__16537_16541 = G__16558;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__16559){
var map__16560 = p__16559;
var map__16560__$1 = ((((!((map__16560 == null)))?((((map__16560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16560):map__16560);
var env = cljs.core.get.call(null,map__16560__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__16560__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__16560__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__16560__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__16560__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__16562,is_loop){
var map__16574 = p__16562;
var map__16574__$1 = ((((!((map__16574 == null)))?((((map__16574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16574):map__16574);
var bindings = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_16576_16585 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_16576_16585,context,map__16574,map__16574__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core._hash.call(null,name),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_16576_16585,context,map__16574,map__16574__$1,bindings,expr,env))
,bindings):null));

try{var seq__16577_16586 = cljs.core.seq.call(null,bindings);
var chunk__16578_16587 = null;
var count__16579_16588 = (0);
var i__16580_16589 = (0);
while(true){
if((i__16580_16589 < count__16579_16588)){
var map__16581_16590 = cljs.core._nth.call(null,chunk__16578_16587,i__16580_16589);
var map__16581_16591__$1 = ((((!((map__16581_16590 == null)))?((((map__16581_16590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16581_16590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16581_16590):map__16581_16590);
var binding_16592 = map__16581_16591__$1;
var init_16593 = cljs.core.get.call(null,map__16581_16591__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_16592);

cljs.compiler.emitln.call(null," = ",init_16593,";");

var G__16594 = seq__16577_16586;
var G__16595 = chunk__16578_16587;
var G__16596 = count__16579_16588;
var G__16597 = (i__16580_16589 + (1));
seq__16577_16586 = G__16594;
chunk__16578_16587 = G__16595;
count__16579_16588 = G__16596;
i__16580_16589 = G__16597;
continue;
} else {
var temp__4425__auto___16598 = cljs.core.seq.call(null,seq__16577_16586);
if(temp__4425__auto___16598){
var seq__16577_16599__$1 = temp__4425__auto___16598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16577_16599__$1)){
var c__5031__auto___16600 = cljs.core.chunk_first.call(null,seq__16577_16599__$1);
var G__16601 = cljs.core.chunk_rest.call(null,seq__16577_16599__$1);
var G__16602 = c__5031__auto___16600;
var G__16603 = cljs.core.count.call(null,c__5031__auto___16600);
var G__16604 = (0);
seq__16577_16586 = G__16601;
chunk__16578_16587 = G__16602;
count__16579_16588 = G__16603;
i__16580_16589 = G__16604;
continue;
} else {
var map__16583_16605 = cljs.core.first.call(null,seq__16577_16599__$1);
var map__16583_16606__$1 = ((((!((map__16583_16605 == null)))?((((map__16583_16605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16583_16605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16583_16605):map__16583_16605);
var binding_16607 = map__16583_16606__$1;
var init_16608 = cljs.core.get.call(null,map__16583_16606__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_16607);

cljs.compiler.emitln.call(null," = ",init_16608,";");

var G__16609 = cljs.core.next.call(null,seq__16577_16599__$1);
var G__16610 = null;
var G__16611 = (0);
var G__16612 = (0);
seq__16577_16586 = G__16609;
chunk__16578_16587 = G__16610;
count__16579_16588 = G__16611;
i__16580_16589 = G__16612;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_16576_16585;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__16613){
var map__16614 = p__16613;
var map__16614__$1 = ((((!((map__16614 == null)))?((((map__16614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16614):map__16614);
var frame = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5131__auto___16616 = cljs.core.count.call(null,exprs);
var i_16617 = (0);
while(true){
if((i_16617 < n__5131__auto___16616)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_16617)," = ",exprs.call(null,i_16617),";");

var G__16618 = (i_16617 + (1));
i_16617 = G__16618;
continue;
} else {
}
break;
}

var n__5131__auto___16619 = cljs.core.count.call(null,exprs);
var i_16620 = (0);
while(true){
if((i_16620 < n__5131__auto___16619)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_16620))," = ",temps.call(null,i_16620),";");

var G__16621 = (i_16620 + (1));
i_16620 = G__16621;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__16622){
var map__16623 = p__16622;
var map__16623__$1 = ((((!((map__16623 == null)))?((((map__16623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16623):map__16623);
var bindings = cljs.core.get.call(null,map__16623__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__16623__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__16623__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__16625_16633 = cljs.core.seq.call(null,bindings);
var chunk__16626_16634 = null;
var count__16627_16635 = (0);
var i__16628_16636 = (0);
while(true){
if((i__16628_16636 < count__16627_16635)){
var map__16629_16637 = cljs.core._nth.call(null,chunk__16626_16634,i__16628_16636);
var map__16629_16638__$1 = ((((!((map__16629_16637 == null)))?((((map__16629_16637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16629_16637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16629_16637):map__16629_16637);
var binding_16639 = map__16629_16638__$1;
var init_16640 = cljs.core.get.call(null,map__16629_16638__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_16639)," = ",init_16640,";");

var G__16641 = seq__16625_16633;
var G__16642 = chunk__16626_16634;
var G__16643 = count__16627_16635;
var G__16644 = (i__16628_16636 + (1));
seq__16625_16633 = G__16641;
chunk__16626_16634 = G__16642;
count__16627_16635 = G__16643;
i__16628_16636 = G__16644;
continue;
} else {
var temp__4425__auto___16645 = cljs.core.seq.call(null,seq__16625_16633);
if(temp__4425__auto___16645){
var seq__16625_16646__$1 = temp__4425__auto___16645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16625_16646__$1)){
var c__5031__auto___16647 = cljs.core.chunk_first.call(null,seq__16625_16646__$1);
var G__16648 = cljs.core.chunk_rest.call(null,seq__16625_16646__$1);
var G__16649 = c__5031__auto___16647;
var G__16650 = cljs.core.count.call(null,c__5031__auto___16647);
var G__16651 = (0);
seq__16625_16633 = G__16648;
chunk__16626_16634 = G__16649;
count__16627_16635 = G__16650;
i__16628_16636 = G__16651;
continue;
} else {
var map__16631_16652 = cljs.core.first.call(null,seq__16625_16646__$1);
var map__16631_16653__$1 = ((((!((map__16631_16652 == null)))?((((map__16631_16652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16631_16652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16631_16652):map__16631_16652);
var binding_16654 = map__16631_16653__$1;
var init_16655 = cljs.core.get.call(null,map__16631_16653__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_16654)," = ",init_16655,";");

var G__16656 = cljs.core.next.call(null,seq__16625_16646__$1);
var G__16657 = null;
var G__16658 = (0);
var G__16659 = (0);
seq__16625_16633 = G__16656;
chunk__16626_16634 = G__16657;
count__16627_16635 = G__16658;
i__16628_16636 = G__16659;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__16662){
var map__16663 = p__16662;
var map__16663__$1 = ((((!((map__16663 == null)))?((((map__16663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16663):map__16663);
var expr = map__16663__$1;
var f = cljs.core.get.call(null,map__16663__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__16663__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16663__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__16665 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16663,map__16663__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16663,map__16663__$1,expr,f,args,env){
return (function (p1__16660_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__16660_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16663,map__16663__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16663,map__16663__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16663,map__16663__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16663,map__16663__$1,expr,f,args,env){
return (function (p1__16661_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__16661_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16663,map__16663__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16663,map__16663__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__16665,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__16665,(1),null);
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_16666 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_16666,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_16667 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_16667,args)),(((mfa_16667 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_16667,args)),"], 0))");
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
var fprop_16668 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_16668," ? ",f__$1,fprop_16668,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__16669){
var map__16670 = p__16669;
var map__16670__$1 = ((((!((map__16670 == null)))?((((map__16670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16670):map__16670);
var ctor = cljs.core.get.call(null,map__16670__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__16670__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16670__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__16672){
var map__16673 = p__16672;
var map__16673__$1 = ((((!((map__16673 == null)))?((((map__16673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16673):map__16673);
var target = cljs.core.get.call(null,map__16673__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__16673__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__16673__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
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

var seq__16679_16683 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__16680_16684 = null;
var count__16681_16685 = (0);
var i__16682_16686 = (0);
while(true){
if((i__16682_16686 < count__16681_16685)){
var lib_16687 = cljs.core._nth.call(null,chunk__16680_16684,i__16682_16686);
if(cljs.core.truth_((function (){var or__4247__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16687),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16687),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4247__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16687),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16687),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16687),"');");

}
}

var G__16688 = seq__16679_16683;
var G__16689 = chunk__16680_16684;
var G__16690 = count__16681_16685;
var G__16691 = (i__16682_16686 + (1));
seq__16679_16683 = G__16688;
chunk__16680_16684 = G__16689;
count__16681_16685 = G__16690;
i__16682_16686 = G__16691;
continue;
} else {
var temp__4425__auto___16692 = cljs.core.seq.call(null,seq__16679_16683);
if(temp__4425__auto___16692){
var seq__16679_16693__$1 = temp__4425__auto___16692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16679_16693__$1)){
var c__5031__auto___16694 = cljs.core.chunk_first.call(null,seq__16679_16693__$1);
var G__16695 = cljs.core.chunk_rest.call(null,seq__16679_16693__$1);
var G__16696 = c__5031__auto___16694;
var G__16697 = cljs.core.count.call(null,c__5031__auto___16694);
var G__16698 = (0);
seq__16679_16683 = G__16695;
chunk__16680_16684 = G__16696;
count__16681_16685 = G__16697;
i__16682_16686 = G__16698;
continue;
} else {
var lib_16699 = cljs.core.first.call(null,seq__16679_16693__$1);
if(cljs.core.truth_((function (){var or__4247__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16699),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16699),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4247__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16699),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16699),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16699),"');");

}
}

var G__16700 = cljs.core.next.call(null,seq__16679_16693__$1);
var G__16701 = null;
var G__16702 = (0);
var G__16703 = (0);
seq__16679_16683 = G__16700;
chunk__16680_16684 = G__16701;
count__16681_16685 = G__16702;
i__16682_16686 = G__16703;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__16704){
var map__16705 = p__16704;
var map__16705__$1 = ((((!((map__16705 == null)))?((((map__16705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16705):map__16705);
var name = cljs.core.get.call(null,map__16705__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__16705__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__16705__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__16705__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__16705__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__16705__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__16707){
var map__16708 = p__16707;
var map__16708__$1 = ((((!((map__16708 == null)))?((((map__16708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16708):map__16708);
var t = cljs.core.get.call(null,map__16708__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16708__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16708__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16708__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__16710_16720 = cljs.core.seq.call(null,fields__$1);
var chunk__16711_16721 = null;
var count__16712_16722 = (0);
var i__16713_16723 = (0);
while(true){
if((i__16713_16723 < count__16712_16722)){
var fld_16724 = cljs.core._nth.call(null,chunk__16711_16721,i__16713_16723);
cljs.compiler.emitln.call(null,"this.",fld_16724," = ",fld_16724,";");

var G__16725 = seq__16710_16720;
var G__16726 = chunk__16711_16721;
var G__16727 = count__16712_16722;
var G__16728 = (i__16713_16723 + (1));
seq__16710_16720 = G__16725;
chunk__16711_16721 = G__16726;
count__16712_16722 = G__16727;
i__16713_16723 = G__16728;
continue;
} else {
var temp__4425__auto___16729 = cljs.core.seq.call(null,seq__16710_16720);
if(temp__4425__auto___16729){
var seq__16710_16730__$1 = temp__4425__auto___16729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16710_16730__$1)){
var c__5031__auto___16731 = cljs.core.chunk_first.call(null,seq__16710_16730__$1);
var G__16732 = cljs.core.chunk_rest.call(null,seq__16710_16730__$1);
var G__16733 = c__5031__auto___16731;
var G__16734 = cljs.core.count.call(null,c__5031__auto___16731);
var G__16735 = (0);
seq__16710_16720 = G__16732;
chunk__16711_16721 = G__16733;
count__16712_16722 = G__16734;
i__16713_16723 = G__16735;
continue;
} else {
var fld_16736 = cljs.core.first.call(null,seq__16710_16730__$1);
cljs.compiler.emitln.call(null,"this.",fld_16736," = ",fld_16736,";");

var G__16737 = cljs.core.next.call(null,seq__16710_16730__$1);
var G__16738 = null;
var G__16739 = (0);
var G__16740 = (0);
seq__16710_16720 = G__16737;
chunk__16711_16721 = G__16738;
count__16712_16722 = G__16739;
i__16713_16723 = G__16740;
continue;
}
} else {
}
}
break;
}

var seq__16714_16741 = cljs.core.seq.call(null,pmasks);
var chunk__16715_16742 = null;
var count__16716_16743 = (0);
var i__16717_16744 = (0);
while(true){
if((i__16717_16744 < count__16716_16743)){
var vec__16718_16745 = cljs.core._nth.call(null,chunk__16715_16742,i__16717_16744);
var pno_16746 = cljs.core.nth.call(null,vec__16718_16745,(0),null);
var pmask_16747 = cljs.core.nth.call(null,vec__16718_16745,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16746,"$ = ",pmask_16747,";");

var G__16748 = seq__16714_16741;
var G__16749 = chunk__16715_16742;
var G__16750 = count__16716_16743;
var G__16751 = (i__16717_16744 + (1));
seq__16714_16741 = G__16748;
chunk__16715_16742 = G__16749;
count__16716_16743 = G__16750;
i__16717_16744 = G__16751;
continue;
} else {
var temp__4425__auto___16752 = cljs.core.seq.call(null,seq__16714_16741);
if(temp__4425__auto___16752){
var seq__16714_16753__$1 = temp__4425__auto___16752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16714_16753__$1)){
var c__5031__auto___16754 = cljs.core.chunk_first.call(null,seq__16714_16753__$1);
var G__16755 = cljs.core.chunk_rest.call(null,seq__16714_16753__$1);
var G__16756 = c__5031__auto___16754;
var G__16757 = cljs.core.count.call(null,c__5031__auto___16754);
var G__16758 = (0);
seq__16714_16741 = G__16755;
chunk__16715_16742 = G__16756;
count__16716_16743 = G__16757;
i__16717_16744 = G__16758;
continue;
} else {
var vec__16719_16759 = cljs.core.first.call(null,seq__16714_16753__$1);
var pno_16760 = cljs.core.nth.call(null,vec__16719_16759,(0),null);
var pmask_16761 = cljs.core.nth.call(null,vec__16719_16759,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16760,"$ = ",pmask_16761,";");

var G__16762 = cljs.core.next.call(null,seq__16714_16753__$1);
var G__16763 = null;
var G__16764 = (0);
var G__16765 = (0);
seq__16714_16741 = G__16762;
chunk__16715_16742 = G__16763;
count__16716_16743 = G__16764;
i__16717_16744 = G__16765;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__16766){
var map__16767 = p__16766;
var map__16767__$1 = ((((!((map__16767 == null)))?((((map__16767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16767):map__16767);
var t = cljs.core.get.call(null,map__16767__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16767__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16767__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16767__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__16769_16783 = cljs.core.seq.call(null,fields__$1);
var chunk__16770_16784 = null;
var count__16771_16785 = (0);
var i__16772_16786 = (0);
while(true){
if((i__16772_16786 < count__16771_16785)){
var fld_16787 = cljs.core._nth.call(null,chunk__16770_16784,i__16772_16786);
cljs.compiler.emitln.call(null,"* @param {*} ",fld_16787);

var G__16788 = seq__16769_16783;
var G__16789 = chunk__16770_16784;
var G__16790 = count__16771_16785;
var G__16791 = (i__16772_16786 + (1));
seq__16769_16783 = G__16788;
chunk__16770_16784 = G__16789;
count__16771_16785 = G__16790;
i__16772_16786 = G__16791;
continue;
} else {
var temp__4425__auto___16792 = cljs.core.seq.call(null,seq__16769_16783);
if(temp__4425__auto___16792){
var seq__16769_16793__$1 = temp__4425__auto___16792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16769_16793__$1)){
var c__5031__auto___16794 = cljs.core.chunk_first.call(null,seq__16769_16793__$1);
var G__16795 = cljs.core.chunk_rest.call(null,seq__16769_16793__$1);
var G__16796 = c__5031__auto___16794;
var G__16797 = cljs.core.count.call(null,c__5031__auto___16794);
var G__16798 = (0);
seq__16769_16783 = G__16795;
chunk__16770_16784 = G__16796;
count__16771_16785 = G__16797;
i__16772_16786 = G__16798;
continue;
} else {
var fld_16799 = cljs.core.first.call(null,seq__16769_16793__$1);
cljs.compiler.emitln.call(null,"* @param {*} ",fld_16799);

var G__16800 = cljs.core.next.call(null,seq__16769_16793__$1);
var G__16801 = null;
var G__16802 = (0);
var G__16803 = (0);
seq__16769_16783 = G__16800;
chunk__16770_16784 = G__16801;
count__16771_16785 = G__16802;
i__16772_16786 = G__16803;
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

var seq__16773_16804 = cljs.core.seq.call(null,fields__$1);
var chunk__16774_16805 = null;
var count__16775_16806 = (0);
var i__16776_16807 = (0);
while(true){
if((i__16776_16807 < count__16775_16806)){
var fld_16808 = cljs.core._nth.call(null,chunk__16774_16805,i__16776_16807);
cljs.compiler.emitln.call(null,"this.",fld_16808," = ",fld_16808,";");

var G__16809 = seq__16773_16804;
var G__16810 = chunk__16774_16805;
var G__16811 = count__16775_16806;
var G__16812 = (i__16776_16807 + (1));
seq__16773_16804 = G__16809;
chunk__16774_16805 = G__16810;
count__16775_16806 = G__16811;
i__16776_16807 = G__16812;
continue;
} else {
var temp__4425__auto___16813 = cljs.core.seq.call(null,seq__16773_16804);
if(temp__4425__auto___16813){
var seq__16773_16814__$1 = temp__4425__auto___16813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16773_16814__$1)){
var c__5031__auto___16815 = cljs.core.chunk_first.call(null,seq__16773_16814__$1);
var G__16816 = cljs.core.chunk_rest.call(null,seq__16773_16814__$1);
var G__16817 = c__5031__auto___16815;
var G__16818 = cljs.core.count.call(null,c__5031__auto___16815);
var G__16819 = (0);
seq__16773_16804 = G__16816;
chunk__16774_16805 = G__16817;
count__16775_16806 = G__16818;
i__16776_16807 = G__16819;
continue;
} else {
var fld_16820 = cljs.core.first.call(null,seq__16773_16814__$1);
cljs.compiler.emitln.call(null,"this.",fld_16820," = ",fld_16820,";");

var G__16821 = cljs.core.next.call(null,seq__16773_16814__$1);
var G__16822 = null;
var G__16823 = (0);
var G__16824 = (0);
seq__16773_16804 = G__16821;
chunk__16774_16805 = G__16822;
count__16775_16806 = G__16823;
i__16776_16807 = G__16824;
continue;
}
} else {
}
}
break;
}

var seq__16777_16825 = cljs.core.seq.call(null,pmasks);
var chunk__16778_16826 = null;
var count__16779_16827 = (0);
var i__16780_16828 = (0);
while(true){
if((i__16780_16828 < count__16779_16827)){
var vec__16781_16829 = cljs.core._nth.call(null,chunk__16778_16826,i__16780_16828);
var pno_16830 = cljs.core.nth.call(null,vec__16781_16829,(0),null);
var pmask_16831 = cljs.core.nth.call(null,vec__16781_16829,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16830,"$ = ",pmask_16831,";");

var G__16832 = seq__16777_16825;
var G__16833 = chunk__16778_16826;
var G__16834 = count__16779_16827;
var G__16835 = (i__16780_16828 + (1));
seq__16777_16825 = G__16832;
chunk__16778_16826 = G__16833;
count__16779_16827 = G__16834;
i__16780_16828 = G__16835;
continue;
} else {
var temp__4425__auto___16836 = cljs.core.seq.call(null,seq__16777_16825);
if(temp__4425__auto___16836){
var seq__16777_16837__$1 = temp__4425__auto___16836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16777_16837__$1)){
var c__5031__auto___16838 = cljs.core.chunk_first.call(null,seq__16777_16837__$1);
var G__16839 = cljs.core.chunk_rest.call(null,seq__16777_16837__$1);
var G__16840 = c__5031__auto___16838;
var G__16841 = cljs.core.count.call(null,c__5031__auto___16838);
var G__16842 = (0);
seq__16777_16825 = G__16839;
chunk__16778_16826 = G__16840;
count__16779_16827 = G__16841;
i__16780_16828 = G__16842;
continue;
} else {
var vec__16782_16843 = cljs.core.first.call(null,seq__16777_16837__$1);
var pno_16844 = cljs.core.nth.call(null,vec__16782_16843,(0),null);
var pmask_16845 = cljs.core.nth.call(null,vec__16782_16843,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16844,"$ = ",pmask_16845,";");

var G__16846 = cljs.core.next.call(null,seq__16777_16837__$1);
var G__16847 = null;
var G__16848 = (0);
var G__16849 = (0);
seq__16777_16825 = G__16846;
chunk__16778_16826 = G__16847;
count__16779_16827 = G__16848;
i__16780_16828 = G__16849;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__16850){
var map__16851 = p__16850;
var map__16851__$1 = ((((!((map__16851 == null)))?((((map__16851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16851):map__16851);
var target = cljs.core.get.call(null,map__16851__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__16851__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__16851__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__16851__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16851__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__16853){
var map__16854 = p__16853;
var map__16854__$1 = ((((!((map__16854 == null)))?((((map__16854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16854):map__16854);
var env = cljs.core.get.call(null,map__16854__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__16854__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__16854__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__16854__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env__6717__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6717__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__16864 = cljs.core.seq.call(null,table);
var chunk__16865 = null;
var count__16866 = (0);
var i__16867 = (0);
while(true){
if((i__16867 < count__16866)){
var vec__16868 = cljs.core._nth.call(null,chunk__16865,i__16867);
var sym = cljs.core.nth.call(null,vec__16868,(0),null);
var value = cljs.core.nth.call(null,vec__16868,(1),null);
var ns_16870 = cljs.core.namespace.call(null,sym);
var name_16871 = cljs.core.name.call(null,sym);
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

var G__16872 = seq__16864;
var G__16873 = chunk__16865;
var G__16874 = count__16866;
var G__16875 = (i__16867 + (1));
seq__16864 = G__16872;
chunk__16865 = G__16873;
count__16866 = G__16874;
i__16867 = G__16875;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16864);
if(temp__4425__auto__){
var seq__16864__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16864__$1)){
var c__5031__auto__ = cljs.core.chunk_first.call(null,seq__16864__$1);
var G__16876 = cljs.core.chunk_rest.call(null,seq__16864__$1);
var G__16877 = c__5031__auto__;
var G__16878 = cljs.core.count.call(null,c__5031__auto__);
var G__16879 = (0);
seq__16864 = G__16876;
chunk__16865 = G__16877;
count__16866 = G__16878;
i__16867 = G__16879;
continue;
} else {
var vec__16869 = cljs.core.first.call(null,seq__16864__$1);
var sym = cljs.core.nth.call(null,vec__16869,(0),null);
var value = cljs.core.nth.call(null,vec__16869,(1),null);
var ns_16880 = cljs.core.namespace.call(null,sym);
var name_16881 = cljs.core.name.call(null,sym);
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

var G__16882 = cljs.core.next.call(null,seq__16864__$1);
var G__16883 = null;
var G__16884 = (0);
var G__16885 = (0);
seq__16864 = G__16882;
chunk__16865 = G__16883;
count__16866 = G__16884;
i__16867 = G__16885;
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