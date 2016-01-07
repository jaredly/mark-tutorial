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
var map__14106 = s;
var map__14106__$1 = ((((!((map__14106 == null)))?((((map__14106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14106):map__14106);
var name = cljs.core.get.call(null,map__14106__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__14106__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__14109 = info;
var map__14110 = G__14109;
var map__14110__$1 = ((((!((map__14110 == null)))?((((map__14110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14110):map__14110);
var shadow = cljs.core.get.call(null,map__14110__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__14109__$1 = G__14109;
while(true){
var d__$2 = d__$1;
var map__14112 = G__14109__$1;
var map__14112__$1 = ((((!((map__14112 == null)))?((((map__14112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14112):map__14112);
var shadow__$1 = cljs.core.get.call(null,map__14112__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__14114 = (d__$2 + (1));
var G__14115 = shadow__$1;
d__$1 = G__14114;
G__14109__$1 = G__14115;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__14116){
var map__14121 = p__14116;
var map__14121__$1 = ((((!((map__14121 == null)))?((((map__14121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14121):map__14121);
var name_var = map__14121__$1;
var name = cljs.core.get.call(null,map__14121__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__14121__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__14123 = info;
var map__14123__$1 = ((((!((map__14123 == null)))?((((map__14123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14123):map__14123);
var ns = cljs.core.get.call(null,map__14123__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__14123__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args14125 = [];
var len__5286__auto___14128 = arguments.length;
var i__5287__auto___14129 = (0);
while(true){
if((i__5287__auto___14129 < len__5286__auto___14128)){
args14125.push((arguments[i__5287__auto___14129]));

var G__14130 = (i__5287__auto___14129 + (1));
i__5287__auto___14129 = G__14130;
continue;
} else {
}
break;
}

var G__14127 = args14125.length;
switch (G__14127) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14125.length)].join('')));

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
var G__14133 = cp;
switch (G__14133) {
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
var seq__14139_14143 = cljs.core.seq.call(null,s);
var chunk__14140_14144 = null;
var count__14141_14145 = (0);
var i__14142_14146 = (0);
while(true){
if((i__14142_14146 < count__14141_14145)){
var c_14147 = cljs.core._nth.call(null,chunk__14140_14144,i__14142_14146);
sb.append(cljs.compiler.escape_char.call(null,c_14147));

var G__14148 = seq__14139_14143;
var G__14149 = chunk__14140_14144;
var G__14150 = count__14141_14145;
var G__14151 = (i__14142_14146 + (1));
seq__14139_14143 = G__14148;
chunk__14140_14144 = G__14149;
count__14141_14145 = G__14150;
i__14142_14146 = G__14151;
continue;
} else {
var temp__4425__auto___14152 = cljs.core.seq.call(null,seq__14139_14143);
if(temp__4425__auto___14152){
var seq__14139_14153__$1 = temp__4425__auto___14152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14139_14153__$1)){
var c__5031__auto___14154 = cljs.core.chunk_first.call(null,seq__14139_14153__$1);
var G__14155 = cljs.core.chunk_rest.call(null,seq__14139_14153__$1);
var G__14156 = c__5031__auto___14154;
var G__14157 = cljs.core.count.call(null,c__5031__auto___14154);
var G__14158 = (0);
seq__14139_14143 = G__14155;
chunk__14140_14144 = G__14156;
count__14141_14145 = G__14157;
i__14142_14146 = G__14158;
continue;
} else {
var c_14159 = cljs.core.first.call(null,seq__14139_14153__$1);
sb.append(cljs.compiler.escape_char.call(null,c_14159));

var G__14160 = cljs.core.next.call(null,seq__14139_14153__$1);
var G__14161 = null;
var G__14162 = (0);
var G__14163 = (0);
seq__14139_14143 = G__14160;
chunk__14140_14144 = G__14161;
count__14141_14145 = G__14162;
i__14142_14146 = G__14163;
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
var val__5601__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5601__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__14169_14174 = ast;
var map__14169_14175__$1 = ((((!((map__14169_14174 == null)))?((((map__14169_14174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14169_14174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14169_14174):map__14169_14174);
var env_14176 = cljs.core.get.call(null,map__14169_14175__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_14176))){
var map__14171_14177 = env_14176;
var map__14171_14178__$1 = ((((!((map__14171_14177 == null)))?((((map__14171_14177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14171_14177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14171_14177):map__14171_14177);
var line_14179 = cljs.core.get.call(null,map__14171_14178__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_14180 = cljs.core.get.call(null,map__14171_14178__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__14171_14177,map__14171_14178__$1,line_14179,column_14180,map__14169_14174,map__14169_14175__$1,env_14176,val__5601__auto__){
return (function (m){
var minfo = (function (){var G__14173 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__14173__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__14173,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__14173);
return G__14173__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_14179 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__14171_14177,map__14171_14178__$1,line_14179,column_14180,map__14169_14174,map__14169_14175__$1,env_14176,val__5601__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_14180)?(column_14180 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__14171_14177,map__14171_14178__$1,line_14179,column_14180,map__14169_14174,map__14169_14175__$1,env_14176,val__5601__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__14171_14177,map__14171_14178__$1,line_14179,column_14180,map__14169_14174,map__14169_14175__$1,env_14176,val__5601__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__14171_14177,map__14171_14178__$1,line_14179,column_14180,map__14169_14174,map__14169_14175__$1,env_14176,val__5601__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__14171_14177,map__14171_14178__$1,line_14179,column_14180,map__14169_14174,map__14169_14175__$1,env_14176,val__5601__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__5601__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(){
var args__5293__auto__ = [];
var len__5286__auto___14187 = arguments.length;
var i__5287__auto___14188 = (0);
while(true){
if((i__5287__auto___14188 < len__5286__auto___14187)){
args__5293__auto__.push((arguments[i__5287__auto___14188]));

var G__14189 = (i__5287__auto___14188 + (1));
i__5287__auto___14188 = G__14189;
continue;
} else {
}
break;
}

var argseq__5294__auto__ = ((((0) < args__5293__auto__.length))?(new cljs.core.IndexedSeq(args__5293__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__5294__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__14183_14190 = cljs.core.seq.call(null,xs);
var chunk__14184_14191 = null;
var count__14185_14192 = (0);
var i__14186_14193 = (0);
while(true){
if((i__14186_14193 < count__14185_14192)){
var x_14194 = cljs.core._nth.call(null,chunk__14184_14191,i__14186_14193);
if((x_14194 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_14194)){
cljs.compiler.emit.call(null,x_14194);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_14194)){
cljs.core.apply.call(null,cljs.compiler.emits,x_14194);
} else {
if(goog.isFunction(x_14194)){
x_14194.call(null);
} else {
var s_14195 = cljs.core.print_str.call(null,x_14194);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__14183_14190,chunk__14184_14191,count__14185_14192,i__14186_14193,s_14195,x_14194){
return (function (p1__14181_SHARP_){
return (p1__14181_SHARP_ + cljs.core.count.call(null,s_14195));
});})(seq__14183_14190,chunk__14184_14191,count__14185_14192,i__14186_14193,s_14195,x_14194))
);
}

cljs.core.print.call(null,s_14195);

}
}
}
}

var G__14196 = seq__14183_14190;
var G__14197 = chunk__14184_14191;
var G__14198 = count__14185_14192;
var G__14199 = (i__14186_14193 + (1));
seq__14183_14190 = G__14196;
chunk__14184_14191 = G__14197;
count__14185_14192 = G__14198;
i__14186_14193 = G__14199;
continue;
} else {
var temp__4425__auto___14200 = cljs.core.seq.call(null,seq__14183_14190);
if(temp__4425__auto___14200){
var seq__14183_14201__$1 = temp__4425__auto___14200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14183_14201__$1)){
var c__5031__auto___14202 = cljs.core.chunk_first.call(null,seq__14183_14201__$1);
var G__14203 = cljs.core.chunk_rest.call(null,seq__14183_14201__$1);
var G__14204 = c__5031__auto___14202;
var G__14205 = cljs.core.count.call(null,c__5031__auto___14202);
var G__14206 = (0);
seq__14183_14190 = G__14203;
chunk__14184_14191 = G__14204;
count__14185_14192 = G__14205;
i__14186_14193 = G__14206;
continue;
} else {
var x_14207 = cljs.core.first.call(null,seq__14183_14201__$1);
if((x_14207 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_14207)){
cljs.compiler.emit.call(null,x_14207);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_14207)){
cljs.core.apply.call(null,cljs.compiler.emits,x_14207);
} else {
if(goog.isFunction(x_14207)){
x_14207.call(null);
} else {
var s_14208 = cljs.core.print_str.call(null,x_14207);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__14183_14190,chunk__14184_14191,count__14185_14192,i__14186_14193,s_14208,x_14207,seq__14183_14201__$1,temp__4425__auto___14200){
return (function (p1__14181_SHARP_){
return (p1__14181_SHARP_ + cljs.core.count.call(null,s_14208));
});})(seq__14183_14190,chunk__14184_14191,count__14185_14192,i__14186_14193,s_14208,x_14207,seq__14183_14201__$1,temp__4425__auto___14200))
);
}

cljs.core.print.call(null,s_14208);

}
}
}
}

var G__14209 = cljs.core.next.call(null,seq__14183_14201__$1);
var G__14210 = null;
var G__14211 = (0);
var G__14212 = (0);
seq__14183_14190 = G__14209;
chunk__14184_14191 = G__14210;
count__14185_14192 = G__14211;
i__14186_14193 = G__14212;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq14182){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14182));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(){
var args__5293__auto__ = [];
var len__5286__auto___14217 = arguments.length;
var i__5287__auto___14218 = (0);
while(true){
if((i__5287__auto___14218 < len__5286__auto___14217)){
args__5293__auto__.push((arguments[i__5287__auto___14218]));

var G__14219 = (i__5287__auto___14218 + (1));
i__5287__auto___14218 = G__14219;
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
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__14214){
var map__14215 = p__14214;
var map__14215__$1 = ((((!((map__14215 == null)))?((((map__14215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14215):map__14215);
var m = map__14215__$1;
var gen_line = cljs.core.get.call(null,map__14215__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq14213){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14213));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5202__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14222_14224 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14223_14225 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14222_14224,_STAR_print_fn_STAR_14223_14225,sb__5202__auto__){
return (function (x__5203__auto__){
return sb__5202__auto__.append(x__5203__auto__);
});})(_STAR_print_newline_STAR_14222_14224,_STAR_print_fn_STAR_14223_14225,sb__5202__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14223_14225;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14222_14224;
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
var vec__14226 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__14226,(0),null);
var flags = cljs.core.nth.call(null,vec__14226,(1),null);
var pattern = cljs.core.nth.call(null,vec__14226,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__14228){
var map__14229 = p__14228;
var map__14229__$1 = ((((!((map__14229 == null)))?((((map__14229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14229):map__14229);
var arg = map__14229__$1;
var info = cljs.core.get.call(null,map__14229__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__14229__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__14229__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__14231 = info__$1;
var G__14231__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__14231):G__14231);
return G__14231__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__14232){
var map__14233 = p__14232;
var map__14233__$1 = ((((!((map__14233 == null)))?((((map__14233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14233):map__14233);
var arg = map__14233__$1;
var env = cljs.core.get.call(null,map__14233__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__14233__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__14233__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__14233__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__14235 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__14235__$1 = ((((!((map__14235 == null)))?((((map__14235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14235):map__14235);
var name = cljs.core.get.call(null,map__14235__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__14237){
var map__14238 = p__14237;
var map__14238__$1 = ((((!((map__14238 == null)))?((((map__14238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14238):map__14238);
var expr = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__14240_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__14240_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__14241){
var map__14242 = p__14241;
var map__14242__$1 = ((((!((map__14242 == null)))?((((map__14242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14242):map__14242);
var env = cljs.core.get.call(null,map__14242__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__14242__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__14242__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__14244){
var map__14245 = p__14244;
var map__14245__$1 = ((((!((map__14245 == null)))?((((map__14245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14245):map__14245);
var items = cljs.core.get.call(null,map__14245__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14245__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__14247){
var map__14248 = p__14247;
var map__14248__$1 = ((((!((map__14248 == null)))?((((map__14248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14248):map__14248);
var items = cljs.core.get.call(null,map__14248__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14248__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_14250 = cljs.core.count.call(null,items);
if((cnt_14250 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_14250,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__14251_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__14251_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__14252){
var map__14253 = p__14252;
var map__14253__$1 = ((((!((map__14253 == null)))?((((map__14253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14253):map__14253);
var items = cljs.core.get.call(null,map__14253__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14253__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__14255){
var map__14256 = p__14255;
var map__14256__$1 = ((((!((map__14256 == null)))?((((map__14256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14256):map__14256);
var items = cljs.core.get.call(null,map__14256__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__14256__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__14256__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___14266 = cljs.core.seq.call(null,items);
if(temp__4425__auto___14266){
var items_14267__$1 = temp__4425__auto___14266;
var vec__14258_14268 = items_14267__$1;
var vec__14259_14269 = cljs.core.nth.call(null,vec__14258_14268,(0),null);
var k_14270 = cljs.core.nth.call(null,vec__14259_14269,(0),null);
var v_14271 = cljs.core.nth.call(null,vec__14259_14269,(1),null);
var r_14272 = cljs.core.nthnext.call(null,vec__14258_14268,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_14270),"\": ",v_14271);

var seq__14260_14273 = cljs.core.seq.call(null,r_14272);
var chunk__14261_14274 = null;
var count__14262_14275 = (0);
var i__14263_14276 = (0);
while(true){
if((i__14263_14276 < count__14262_14275)){
var vec__14264_14277 = cljs.core._nth.call(null,chunk__14261_14274,i__14263_14276);
var k_14278__$1 = cljs.core.nth.call(null,vec__14264_14277,(0),null);
var v_14279__$1 = cljs.core.nth.call(null,vec__14264_14277,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_14278__$1),"\": ",v_14279__$1);

var G__14280 = seq__14260_14273;
var G__14281 = chunk__14261_14274;
var G__14282 = count__14262_14275;
var G__14283 = (i__14263_14276 + (1));
seq__14260_14273 = G__14280;
chunk__14261_14274 = G__14281;
count__14262_14275 = G__14282;
i__14263_14276 = G__14283;
continue;
} else {
var temp__4425__auto___14284__$1 = cljs.core.seq.call(null,seq__14260_14273);
if(temp__4425__auto___14284__$1){
var seq__14260_14285__$1 = temp__4425__auto___14284__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14260_14285__$1)){
var c__5031__auto___14286 = cljs.core.chunk_first.call(null,seq__14260_14285__$1);
var G__14287 = cljs.core.chunk_rest.call(null,seq__14260_14285__$1);
var G__14288 = c__5031__auto___14286;
var G__14289 = cljs.core.count.call(null,c__5031__auto___14286);
var G__14290 = (0);
seq__14260_14273 = G__14287;
chunk__14261_14274 = G__14288;
count__14262_14275 = G__14289;
i__14263_14276 = G__14290;
continue;
} else {
var vec__14265_14291 = cljs.core.first.call(null,seq__14260_14285__$1);
var k_14292__$1 = cljs.core.nth.call(null,vec__14265_14291,(0),null);
var v_14293__$1 = cljs.core.nth.call(null,vec__14265_14291,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_14292__$1),"\": ",v_14293__$1);

var G__14294 = cljs.core.next.call(null,seq__14260_14285__$1);
var G__14295 = null;
var G__14296 = (0);
var G__14297 = (0);
seq__14260_14273 = G__14294;
chunk__14261_14274 = G__14295;
count__14262_14275 = G__14296;
i__14263_14276 = G__14297;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__14298){
var map__14299 = p__14298;
var map__14299__$1 = ((((!((map__14299 == null)))?((((map__14299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14299):map__14299);
var form = cljs.core.get.call(null,map__14299__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__14299__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__14301){
var map__14304 = p__14301;
var map__14304__$1 = ((((!((map__14304 == null)))?((((map__14304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14304):map__14304);
var op = cljs.core.get.call(null,map__14304__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__14304__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__14306){
var map__14309 = p__14306;
var map__14309__$1 = ((((!((map__14309 == null)))?((((map__14309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14309):map__14309);
var op = cljs.core.get.call(null,map__14309__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__14309__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__14311){
var map__14312 = p__14311;
var map__14312__$1 = ((((!((map__14312 == null)))?((((map__14312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14312):map__14312);
var test = cljs.core.get.call(null,map__14312__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__14312__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__14312__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__14312__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__14312__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__14314){
var map__14315 = p__14314;
var map__14315__$1 = ((((!((map__14315 == null)))?((((map__14315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14315):map__14315);
var v = cljs.core.get.call(null,map__14315__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__14315__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__14315__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__14315__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__14315__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__14317_14331 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__14318_14332 = null;
var count__14319_14333 = (0);
var i__14320_14334 = (0);
while(true){
if((i__14320_14334 < count__14319_14333)){
var vec__14321_14335 = cljs.core._nth.call(null,chunk__14318_14332,i__14320_14334);
var ts_14336 = cljs.core.nth.call(null,vec__14321_14335,(0),null);
var then_14337 = cljs.core.nth.call(null,vec__14321_14335,(1),null);
var seq__14322_14338 = cljs.core.seq.call(null,ts_14336);
var chunk__14323_14339 = null;
var count__14324_14340 = (0);
var i__14325_14341 = (0);
while(true){
if((i__14325_14341 < count__14324_14340)){
var test_14342 = cljs.core._nth.call(null,chunk__14323_14339,i__14325_14341);
cljs.compiler.emitln.call(null,"case ",test_14342,":");

var G__14343 = seq__14322_14338;
var G__14344 = chunk__14323_14339;
var G__14345 = count__14324_14340;
var G__14346 = (i__14325_14341 + (1));
seq__14322_14338 = G__14343;
chunk__14323_14339 = G__14344;
count__14324_14340 = G__14345;
i__14325_14341 = G__14346;
continue;
} else {
var temp__4425__auto___14347 = cljs.core.seq.call(null,seq__14322_14338);
if(temp__4425__auto___14347){
var seq__14322_14348__$1 = temp__4425__auto___14347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14322_14348__$1)){
var c__5031__auto___14349 = cljs.core.chunk_first.call(null,seq__14322_14348__$1);
var G__14350 = cljs.core.chunk_rest.call(null,seq__14322_14348__$1);
var G__14351 = c__5031__auto___14349;
var G__14352 = cljs.core.count.call(null,c__5031__auto___14349);
var G__14353 = (0);
seq__14322_14338 = G__14350;
chunk__14323_14339 = G__14351;
count__14324_14340 = G__14352;
i__14325_14341 = G__14353;
continue;
} else {
var test_14354 = cljs.core.first.call(null,seq__14322_14348__$1);
cljs.compiler.emitln.call(null,"case ",test_14354,":");

var G__14355 = cljs.core.next.call(null,seq__14322_14348__$1);
var G__14356 = null;
var G__14357 = (0);
var G__14358 = (0);
seq__14322_14338 = G__14355;
chunk__14323_14339 = G__14356;
count__14324_14340 = G__14357;
i__14325_14341 = G__14358;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_14337);
} else {
cljs.compiler.emitln.call(null,then_14337);
}

cljs.compiler.emitln.call(null,"break;");

var G__14359 = seq__14317_14331;
var G__14360 = chunk__14318_14332;
var G__14361 = count__14319_14333;
var G__14362 = (i__14320_14334 + (1));
seq__14317_14331 = G__14359;
chunk__14318_14332 = G__14360;
count__14319_14333 = G__14361;
i__14320_14334 = G__14362;
continue;
} else {
var temp__4425__auto___14363 = cljs.core.seq.call(null,seq__14317_14331);
if(temp__4425__auto___14363){
var seq__14317_14364__$1 = temp__4425__auto___14363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14317_14364__$1)){
var c__5031__auto___14365 = cljs.core.chunk_first.call(null,seq__14317_14364__$1);
var G__14366 = cljs.core.chunk_rest.call(null,seq__14317_14364__$1);
var G__14367 = c__5031__auto___14365;
var G__14368 = cljs.core.count.call(null,c__5031__auto___14365);
var G__14369 = (0);
seq__14317_14331 = G__14366;
chunk__14318_14332 = G__14367;
count__14319_14333 = G__14368;
i__14320_14334 = G__14369;
continue;
} else {
var vec__14326_14370 = cljs.core.first.call(null,seq__14317_14364__$1);
var ts_14371 = cljs.core.nth.call(null,vec__14326_14370,(0),null);
var then_14372 = cljs.core.nth.call(null,vec__14326_14370,(1),null);
var seq__14327_14373 = cljs.core.seq.call(null,ts_14371);
var chunk__14328_14374 = null;
var count__14329_14375 = (0);
var i__14330_14376 = (0);
while(true){
if((i__14330_14376 < count__14329_14375)){
var test_14377 = cljs.core._nth.call(null,chunk__14328_14374,i__14330_14376);
cljs.compiler.emitln.call(null,"case ",test_14377,":");

var G__14378 = seq__14327_14373;
var G__14379 = chunk__14328_14374;
var G__14380 = count__14329_14375;
var G__14381 = (i__14330_14376 + (1));
seq__14327_14373 = G__14378;
chunk__14328_14374 = G__14379;
count__14329_14375 = G__14380;
i__14330_14376 = G__14381;
continue;
} else {
var temp__4425__auto___14382__$1 = cljs.core.seq.call(null,seq__14327_14373);
if(temp__4425__auto___14382__$1){
var seq__14327_14383__$1 = temp__4425__auto___14382__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14327_14383__$1)){
var c__5031__auto___14384 = cljs.core.chunk_first.call(null,seq__14327_14383__$1);
var G__14385 = cljs.core.chunk_rest.call(null,seq__14327_14383__$1);
var G__14386 = c__5031__auto___14384;
var G__14387 = cljs.core.count.call(null,c__5031__auto___14384);
var G__14388 = (0);
seq__14327_14373 = G__14385;
chunk__14328_14374 = G__14386;
count__14329_14375 = G__14387;
i__14330_14376 = G__14388;
continue;
} else {
var test_14389 = cljs.core.first.call(null,seq__14327_14383__$1);
cljs.compiler.emitln.call(null,"case ",test_14389,":");

var G__14390 = cljs.core.next.call(null,seq__14327_14383__$1);
var G__14391 = null;
var G__14392 = (0);
var G__14393 = (0);
seq__14327_14373 = G__14390;
chunk__14328_14374 = G__14391;
count__14329_14375 = G__14392;
i__14330_14376 = G__14393;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_14372);
} else {
cljs.compiler.emitln.call(null,then_14372);
}

cljs.compiler.emitln.call(null,"break;");

var G__14394 = cljs.core.next.call(null,seq__14317_14364__$1);
var G__14395 = null;
var G__14396 = (0);
var G__14397 = (0);
seq__14317_14331 = G__14394;
chunk__14318_14332 = G__14395;
count__14319_14333 = G__14396;
i__14320_14334 = G__14397;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__14398){
var map__14399 = p__14398;
var map__14399__$1 = ((((!((map__14399 == null)))?((((map__14399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14399):map__14399);
var throw$ = cljs.core.get.call(null,map__14399__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__14399__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var seq__14433 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,e));
var chunk__14434 = null;
var count__14435 = (0);
var i__14436 = (0);
while(true){
if((i__14436 < count__14435)){
var next_line = cljs.core._nth.call(null,chunk__14434,i__14436);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.trim.call(null,next_line),"*/","* /"));

var G__14441 = seq__14433;
var G__14442 = chunk__14434;
var G__14443 = count__14435;
var G__14444 = (i__14436 + (1));
seq__14433 = G__14441;
chunk__14434 = G__14442;
count__14435 = G__14443;
i__14436 = G__14444;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14433);
if(temp__4425__auto__){
var seq__14433__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14433__$1)){
var c__5031__auto__ = cljs.core.chunk_first.call(null,seq__14433__$1);
var G__14445 = cljs.core.chunk_rest.call(null,seq__14433__$1);
var G__14446 = c__5031__auto__;
var G__14447 = cljs.core.count.call(null,c__5031__auto__);
var G__14448 = (0);
seq__14433 = G__14445;
chunk__14434 = G__14446;
count__14435 = G__14447;
i__14436 = G__14448;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__14433__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.trim.call(null,next_line),"*/","* /"));

var G__14449 = cljs.core.next.call(null,seq__14433__$1);
var G__14450 = null;
var G__14451 = (0);
var G__14452 = (0);
seq__14433 = G__14449;
chunk__14434 = G__14450;
count__14435 = G__14451;
i__14436 = G__14452;
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

var seq__14437_14453 = cljs.core.seq.call(null,docs__$2);
var chunk__14438_14454 = null;
var count__14439_14455 = (0);
var i__14440_14456 = (0);
while(true){
if((i__14440_14456 < count__14439_14455)){
var e_14457 = cljs.core._nth.call(null,chunk__14438_14454,i__14440_14456);
if(cljs.core.truth_(e_14457)){
print_comment_lines.call(null,e_14457);
} else {
}

var G__14458 = seq__14437_14453;
var G__14459 = chunk__14438_14454;
var G__14460 = count__14439_14455;
var G__14461 = (i__14440_14456 + (1));
seq__14437_14453 = G__14458;
chunk__14438_14454 = G__14459;
count__14439_14455 = G__14460;
i__14440_14456 = G__14461;
continue;
} else {
var temp__4425__auto___14462 = cljs.core.seq.call(null,seq__14437_14453);
if(temp__4425__auto___14462){
var seq__14437_14463__$1 = temp__4425__auto___14462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14437_14463__$1)){
var c__5031__auto___14464 = cljs.core.chunk_first.call(null,seq__14437_14463__$1);
var G__14465 = cljs.core.chunk_rest.call(null,seq__14437_14463__$1);
var G__14466 = c__5031__auto___14464;
var G__14467 = cljs.core.count.call(null,c__5031__auto___14464);
var G__14468 = (0);
seq__14437_14453 = G__14465;
chunk__14438_14454 = G__14466;
count__14439_14455 = G__14467;
i__14440_14456 = G__14468;
continue;
} else {
var e_14469 = cljs.core.first.call(null,seq__14437_14463__$1);
if(cljs.core.truth_(e_14469)){
print_comment_lines.call(null,e_14469);
} else {
}

var G__14470 = cljs.core.next.call(null,seq__14437_14463__$1);
var G__14471 = null;
var G__14472 = (0);
var G__14473 = (0);
seq__14437_14453 = G__14470;
chunk__14438_14454 = G__14471;
count__14439_14455 = G__14472;
i__14440_14456 = G__14473;
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
return (function (p1__14475_SHARP_){
return goog.string.startsWith(p1__14475_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__14476){
var map__14477 = p__14476;
var map__14477__$1 = ((((!((map__14477 == null)))?((((map__14477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14477):map__14477);
var name = cljs.core.get.call(null,map__14477__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__14477__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__14477__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__14477__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__14477__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__14477__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__14477__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__14477__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__14477__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__14479){
var map__14496 = p__14479;
var map__14496__$1 = ((((!((map__14496 == null)))?((((map__14496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14496):map__14496);
var name = cljs.core.get.call(null,map__14496__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__14496__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__14496__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__14498_14512 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__14499_14513 = null;
var count__14500_14514 = (0);
var i__14501_14515 = (0);
while(true){
if((i__14501_14515 < count__14500_14514)){
var vec__14502_14516 = cljs.core._nth.call(null,chunk__14499_14513,i__14501_14515);
var i_14517 = cljs.core.nth.call(null,vec__14502_14516,(0),null);
var param_14518 = cljs.core.nth.call(null,vec__14502_14516,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_14518);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__14519 = seq__14498_14512;
var G__14520 = chunk__14499_14513;
var G__14521 = count__14500_14514;
var G__14522 = (i__14501_14515 + (1));
seq__14498_14512 = G__14519;
chunk__14499_14513 = G__14520;
count__14500_14514 = G__14521;
i__14501_14515 = G__14522;
continue;
} else {
var temp__4425__auto___14523 = cljs.core.seq.call(null,seq__14498_14512);
if(temp__4425__auto___14523){
var seq__14498_14524__$1 = temp__4425__auto___14523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14498_14524__$1)){
var c__5031__auto___14525 = cljs.core.chunk_first.call(null,seq__14498_14524__$1);
var G__14526 = cljs.core.chunk_rest.call(null,seq__14498_14524__$1);
var G__14527 = c__5031__auto___14525;
var G__14528 = cljs.core.count.call(null,c__5031__auto___14525);
var G__14529 = (0);
seq__14498_14512 = G__14526;
chunk__14499_14513 = G__14527;
count__14500_14514 = G__14528;
i__14501_14515 = G__14529;
continue;
} else {
var vec__14503_14530 = cljs.core.first.call(null,seq__14498_14524__$1);
var i_14531 = cljs.core.nth.call(null,vec__14503_14530,(0),null);
var param_14532 = cljs.core.nth.call(null,vec__14503_14530,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_14532);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__14533 = cljs.core.next.call(null,seq__14498_14524__$1);
var G__14534 = null;
var G__14535 = (0);
var G__14536 = (0);
seq__14498_14512 = G__14533;
chunk__14499_14513 = G__14534;
count__14500_14514 = G__14535;
i__14501_14515 = G__14536;
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

var seq__14504_14537 = cljs.core.seq.call(null,params);
var chunk__14505_14538 = null;
var count__14506_14539 = (0);
var i__14507_14540 = (0);
while(true){
if((i__14507_14540 < count__14506_14539)){
var param_14541 = cljs.core._nth.call(null,chunk__14505_14538,i__14507_14540);
cljs.compiler.emit.call(null,param_14541);

if(cljs.core._EQ_.call(null,param_14541,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14542 = seq__14504_14537;
var G__14543 = chunk__14505_14538;
var G__14544 = count__14506_14539;
var G__14545 = (i__14507_14540 + (1));
seq__14504_14537 = G__14542;
chunk__14505_14538 = G__14543;
count__14506_14539 = G__14544;
i__14507_14540 = G__14545;
continue;
} else {
var temp__4425__auto___14546 = cljs.core.seq.call(null,seq__14504_14537);
if(temp__4425__auto___14546){
var seq__14504_14547__$1 = temp__4425__auto___14546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14504_14547__$1)){
var c__5031__auto___14548 = cljs.core.chunk_first.call(null,seq__14504_14547__$1);
var G__14549 = cljs.core.chunk_rest.call(null,seq__14504_14547__$1);
var G__14550 = c__5031__auto___14548;
var G__14551 = cljs.core.count.call(null,c__5031__auto___14548);
var G__14552 = (0);
seq__14504_14537 = G__14549;
chunk__14505_14538 = G__14550;
count__14506_14539 = G__14551;
i__14507_14540 = G__14552;
continue;
} else {
var param_14553 = cljs.core.first.call(null,seq__14504_14547__$1);
cljs.compiler.emit.call(null,param_14553);

if(cljs.core._EQ_.call(null,param_14553,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14554 = cljs.core.next.call(null,seq__14504_14547__$1);
var G__14555 = null;
var G__14556 = (0);
var G__14557 = (0);
seq__14504_14537 = G__14554;
chunk__14505_14538 = G__14555;
count__14506_14539 = G__14556;
i__14507_14540 = G__14557;
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

var seq__14508_14558 = cljs.core.seq.call(null,params);
var chunk__14509_14559 = null;
var count__14510_14560 = (0);
var i__14511_14561 = (0);
while(true){
if((i__14511_14561 < count__14510_14560)){
var param_14562 = cljs.core._nth.call(null,chunk__14509_14559,i__14511_14561);
cljs.compiler.emit.call(null,param_14562);

if(cljs.core._EQ_.call(null,param_14562,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14563 = seq__14508_14558;
var G__14564 = chunk__14509_14559;
var G__14565 = count__14510_14560;
var G__14566 = (i__14511_14561 + (1));
seq__14508_14558 = G__14563;
chunk__14509_14559 = G__14564;
count__14510_14560 = G__14565;
i__14511_14561 = G__14566;
continue;
} else {
var temp__4425__auto___14567 = cljs.core.seq.call(null,seq__14508_14558);
if(temp__4425__auto___14567){
var seq__14508_14568__$1 = temp__4425__auto___14567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14508_14568__$1)){
var c__5031__auto___14569 = cljs.core.chunk_first.call(null,seq__14508_14568__$1);
var G__14570 = cljs.core.chunk_rest.call(null,seq__14508_14568__$1);
var G__14571 = c__5031__auto___14569;
var G__14572 = cljs.core.count.call(null,c__5031__auto___14569);
var G__14573 = (0);
seq__14508_14558 = G__14570;
chunk__14509_14559 = G__14571;
count__14510_14560 = G__14572;
i__14511_14561 = G__14573;
continue;
} else {
var param_14574 = cljs.core.first.call(null,seq__14508_14568__$1);
cljs.compiler.emit.call(null,param_14574);

if(cljs.core._EQ_.call(null,param_14574,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14575 = cljs.core.next.call(null,seq__14508_14568__$1);
var G__14576 = null;
var G__14577 = (0);
var G__14578 = (0);
seq__14508_14558 = G__14575;
chunk__14509_14559 = G__14576;
count__14510_14560 = G__14577;
i__14511_14561 = G__14578;
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
var seq__14583 = cljs.core.seq.call(null,params);
var chunk__14584 = null;
var count__14585 = (0);
var i__14586 = (0);
while(true){
if((i__14586 < count__14585)){
var param = cljs.core._nth.call(null,chunk__14584,i__14586);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14587 = seq__14583;
var G__14588 = chunk__14584;
var G__14589 = count__14585;
var G__14590 = (i__14586 + (1));
seq__14583 = G__14587;
chunk__14584 = G__14588;
count__14585 = G__14589;
i__14586 = G__14590;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14583);
if(temp__4425__auto__){
var seq__14583__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14583__$1)){
var c__5031__auto__ = cljs.core.chunk_first.call(null,seq__14583__$1);
var G__14591 = cljs.core.chunk_rest.call(null,seq__14583__$1);
var G__14592 = c__5031__auto__;
var G__14593 = cljs.core.count.call(null,c__5031__auto__);
var G__14594 = (0);
seq__14583 = G__14591;
chunk__14584 = G__14592;
count__14585 = G__14593;
i__14586 = G__14594;
continue;
} else {
var param = cljs.core.first.call(null,seq__14583__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14595 = cljs.core.next.call(null,seq__14583__$1);
var G__14596 = null;
var G__14597 = (0);
var G__14598 = (0);
seq__14583 = G__14595;
chunk__14584 = G__14596;
count__14585 = G__14597;
i__14586 = G__14598;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__14599){
var map__14602 = p__14599;
var map__14602__$1 = ((((!((map__14602 == null)))?((((map__14602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14602):map__14602);
var type = cljs.core.get.call(null,map__14602__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__14602__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__14602__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__14602__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__14602__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14602__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__14602__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__14602__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__14604){
var map__14615 = p__14604;
var map__14615__$1 = ((((!((map__14615 == null)))?((((map__14615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14615):map__14615);
var f = map__14615__$1;
var type = cljs.core.get.call(null,map__14615__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__14615__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__14615__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__14615__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__14615__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14615__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__14615__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__14615__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_14625__$1 = (function (){var or__4247__auto__ = name;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_14626 = cljs.compiler.munge.call(null,name_14625__$1);
var delegate_name_14627 = [cljs.core.str(mname_14626),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_14627," = function (");

var seq__14617_14628 = cljs.core.seq.call(null,params);
var chunk__14618_14629 = null;
var count__14619_14630 = (0);
var i__14620_14631 = (0);
while(true){
if((i__14620_14631 < count__14619_14630)){
var param_14632 = cljs.core._nth.call(null,chunk__14618_14629,i__14620_14631);
cljs.compiler.emit.call(null,param_14632);

if(cljs.core._EQ_.call(null,param_14632,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14633 = seq__14617_14628;
var G__14634 = chunk__14618_14629;
var G__14635 = count__14619_14630;
var G__14636 = (i__14620_14631 + (1));
seq__14617_14628 = G__14633;
chunk__14618_14629 = G__14634;
count__14619_14630 = G__14635;
i__14620_14631 = G__14636;
continue;
} else {
var temp__4425__auto___14637 = cljs.core.seq.call(null,seq__14617_14628);
if(temp__4425__auto___14637){
var seq__14617_14638__$1 = temp__4425__auto___14637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14617_14638__$1)){
var c__5031__auto___14639 = cljs.core.chunk_first.call(null,seq__14617_14638__$1);
var G__14640 = cljs.core.chunk_rest.call(null,seq__14617_14638__$1);
var G__14641 = c__5031__auto___14639;
var G__14642 = cljs.core.count.call(null,c__5031__auto___14639);
var G__14643 = (0);
seq__14617_14628 = G__14640;
chunk__14618_14629 = G__14641;
count__14619_14630 = G__14642;
i__14620_14631 = G__14643;
continue;
} else {
var param_14644 = cljs.core.first.call(null,seq__14617_14638__$1);
cljs.compiler.emit.call(null,param_14644);

if(cljs.core._EQ_.call(null,param_14644,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14645 = cljs.core.next.call(null,seq__14617_14638__$1);
var G__14646 = null;
var G__14647 = (0);
var G__14648 = (0);
seq__14617_14628 = G__14645;
chunk__14618_14629 = G__14646;
count__14619_14630 = G__14647;
i__14620_14631 = G__14648;
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

cljs.compiler.emitln.call(null,"var ",mname_14626," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_14649 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_14649,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_14627,".call(this,");

var seq__14621_14650 = cljs.core.seq.call(null,params);
var chunk__14622_14651 = null;
var count__14623_14652 = (0);
var i__14624_14653 = (0);
while(true){
if((i__14624_14653 < count__14623_14652)){
var param_14654 = cljs.core._nth.call(null,chunk__14622_14651,i__14624_14653);
cljs.compiler.emit.call(null,param_14654);

if(cljs.core._EQ_.call(null,param_14654,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14655 = seq__14621_14650;
var G__14656 = chunk__14622_14651;
var G__14657 = count__14623_14652;
var G__14658 = (i__14624_14653 + (1));
seq__14621_14650 = G__14655;
chunk__14622_14651 = G__14656;
count__14623_14652 = G__14657;
i__14624_14653 = G__14658;
continue;
} else {
var temp__4425__auto___14659 = cljs.core.seq.call(null,seq__14621_14650);
if(temp__4425__auto___14659){
var seq__14621_14660__$1 = temp__4425__auto___14659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14621_14660__$1)){
var c__5031__auto___14661 = cljs.core.chunk_first.call(null,seq__14621_14660__$1);
var G__14662 = cljs.core.chunk_rest.call(null,seq__14621_14660__$1);
var G__14663 = c__5031__auto___14661;
var G__14664 = cljs.core.count.call(null,c__5031__auto___14661);
var G__14665 = (0);
seq__14621_14650 = G__14662;
chunk__14622_14651 = G__14663;
count__14623_14652 = G__14664;
i__14624_14653 = G__14665;
continue;
} else {
var param_14666 = cljs.core.first.call(null,seq__14621_14660__$1);
cljs.compiler.emit.call(null,param_14666);

if(cljs.core._EQ_.call(null,param_14666,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14667 = cljs.core.next.call(null,seq__14621_14660__$1);
var G__14668 = null;
var G__14669 = (0);
var G__14670 = (0);
seq__14621_14650 = G__14667;
chunk__14622_14651 = G__14668;
count__14623_14652 = G__14669;
i__14624_14653 = G__14670;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_14626,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_14626,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_14625__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_14626,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_14627,";");

cljs.compiler.emitln.call(null,"return ",mname_14626,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__14674){
var map__14675 = p__14674;
var map__14675__$1 = ((((!((map__14675 == null)))?((((map__14675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14675):map__14675);
var name = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__14675,map__14675__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14671_SHARP_){
var and__4235__auto__ = p1__14671_SHARP_;
if(cljs.core.truth_(and__4235__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__14671_SHARP_));
} else {
return and__4235__auto__;
}
});})(map__14675,map__14675__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_14696__$1 = (function (){var or__4247__auto__ = name;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_14697 = cljs.compiler.munge.call(null,name_14696__$1);
var maxparams_14698 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_14699 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_14696__$1,mname_14697,maxparams_14698,loop_locals,map__14675,map__14675__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_14697),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_14696__$1,mname_14697,maxparams_14698,loop_locals,map__14675,map__14675__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_14700 = cljs.core.sort_by.call(null,((function (name_14696__$1,mname_14697,maxparams_14698,mmap_14699,loop_locals,map__14675,map__14675__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14672_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__14672_SHARP_)));
});})(name_14696__$1,mname_14697,maxparams_14698,mmap_14699,loop_locals,map__14675,map__14675__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_14699));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_14697," = null;");

var seq__14677_14701 = cljs.core.seq.call(null,ms_14700);
var chunk__14678_14702 = null;
var count__14679_14703 = (0);
var i__14680_14704 = (0);
while(true){
if((i__14680_14704 < count__14679_14703)){
var vec__14681_14705 = cljs.core._nth.call(null,chunk__14678_14702,i__14680_14704);
var n_14706 = cljs.core.nth.call(null,vec__14681_14705,(0),null);
var meth_14707 = cljs.core.nth.call(null,vec__14681_14705,(1),null);
cljs.compiler.emits.call(null,"var ",n_14706," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14707))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_14707);
} else {
cljs.compiler.emit_fn_method.call(null,meth_14707);
}

cljs.compiler.emitln.call(null,";");

var G__14708 = seq__14677_14701;
var G__14709 = chunk__14678_14702;
var G__14710 = count__14679_14703;
var G__14711 = (i__14680_14704 + (1));
seq__14677_14701 = G__14708;
chunk__14678_14702 = G__14709;
count__14679_14703 = G__14710;
i__14680_14704 = G__14711;
continue;
} else {
var temp__4425__auto___14712 = cljs.core.seq.call(null,seq__14677_14701);
if(temp__4425__auto___14712){
var seq__14677_14713__$1 = temp__4425__auto___14712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14677_14713__$1)){
var c__5031__auto___14714 = cljs.core.chunk_first.call(null,seq__14677_14713__$1);
var G__14715 = cljs.core.chunk_rest.call(null,seq__14677_14713__$1);
var G__14716 = c__5031__auto___14714;
var G__14717 = cljs.core.count.call(null,c__5031__auto___14714);
var G__14718 = (0);
seq__14677_14701 = G__14715;
chunk__14678_14702 = G__14716;
count__14679_14703 = G__14717;
i__14680_14704 = G__14718;
continue;
} else {
var vec__14682_14719 = cljs.core.first.call(null,seq__14677_14713__$1);
var n_14720 = cljs.core.nth.call(null,vec__14682_14719,(0),null);
var meth_14721 = cljs.core.nth.call(null,vec__14682_14719,(1),null);
cljs.compiler.emits.call(null,"var ",n_14720," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14721))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_14721);
} else {
cljs.compiler.emit_fn_method.call(null,meth_14721);
}

cljs.compiler.emitln.call(null,";");

var G__14722 = cljs.core.next.call(null,seq__14677_14713__$1);
var G__14723 = null;
var G__14724 = (0);
var G__14725 = (0);
seq__14677_14701 = G__14722;
chunk__14678_14702 = G__14723;
count__14679_14703 = G__14724;
i__14680_14704 = G__14725;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_14697," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_14698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_14698)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_14698));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__14683_14726 = cljs.core.seq.call(null,ms_14700);
var chunk__14684_14727 = null;
var count__14685_14728 = (0);
var i__14686_14729 = (0);
while(true){
if((i__14686_14729 < count__14685_14728)){
var vec__14687_14730 = cljs.core._nth.call(null,chunk__14684_14727,i__14686_14729);
var n_14731 = cljs.core.nth.call(null,vec__14687_14730,(0),null);
var meth_14732 = cljs.core.nth.call(null,vec__14687_14730,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14732))){
cljs.compiler.emitln.call(null,"default:");

var restarg_14733 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_14733," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_14734 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_14733," = new cljs.core.IndexedSeq(",a_14734,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_14731,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_14698)),(((cljs.core.count.call(null,maxparams_14698) > (1)))?", ":null),restarg_14733,");");
} else {
var pcnt_14735 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14732));
cljs.compiler.emitln.call(null,"case ",pcnt_14735,":");

cljs.compiler.emitln.call(null,"return ",n_14731,".call(this",(((pcnt_14735 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_14735,maxparams_14698))),",")),");");
}

var G__14736 = seq__14683_14726;
var G__14737 = chunk__14684_14727;
var G__14738 = count__14685_14728;
var G__14739 = (i__14686_14729 + (1));
seq__14683_14726 = G__14736;
chunk__14684_14727 = G__14737;
count__14685_14728 = G__14738;
i__14686_14729 = G__14739;
continue;
} else {
var temp__4425__auto___14740 = cljs.core.seq.call(null,seq__14683_14726);
if(temp__4425__auto___14740){
var seq__14683_14741__$1 = temp__4425__auto___14740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14683_14741__$1)){
var c__5031__auto___14742 = cljs.core.chunk_first.call(null,seq__14683_14741__$1);
var G__14743 = cljs.core.chunk_rest.call(null,seq__14683_14741__$1);
var G__14744 = c__5031__auto___14742;
var G__14745 = cljs.core.count.call(null,c__5031__auto___14742);
var G__14746 = (0);
seq__14683_14726 = G__14743;
chunk__14684_14727 = G__14744;
count__14685_14728 = G__14745;
i__14686_14729 = G__14746;
continue;
} else {
var vec__14688_14747 = cljs.core.first.call(null,seq__14683_14741__$1);
var n_14748 = cljs.core.nth.call(null,vec__14688_14747,(0),null);
var meth_14749 = cljs.core.nth.call(null,vec__14688_14747,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14749))){
cljs.compiler.emitln.call(null,"default:");

var restarg_14750 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_14750," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_14751 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_14750," = new cljs.core.IndexedSeq(",a_14751,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_14748,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_14698)),(((cljs.core.count.call(null,maxparams_14698) > (1)))?", ":null),restarg_14750,");");
} else {
var pcnt_14752 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14749));
cljs.compiler.emitln.call(null,"case ",pcnt_14752,":");

cljs.compiler.emitln.call(null,"return ",n_14748,".call(this",(((pcnt_14752 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_14752,maxparams_14698))),",")),");");
}

var G__14753 = cljs.core.next.call(null,seq__14683_14741__$1);
var G__14754 = null;
var G__14755 = (0);
var G__14756 = (0);
seq__14683_14726 = G__14753;
chunk__14684_14727 = G__14754;
count__14685_14728 = G__14755;
i__14686_14729 = G__14756;
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
cljs.compiler.emitln.call(null,mname_14697,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_14697,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_14696__$1,mname_14697,maxparams_14698,mmap_14699,ms_14700,loop_locals,map__14675,map__14675__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14673_SHARP_){
var vec__14689 = p1__14673_SHARP_;
var n = cljs.core.nth.call(null,vec__14689,(0),null);
var m = cljs.core.nth.call(null,vec__14689,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_14696__$1,mname_14697,maxparams_14698,mmap_14699,ms_14700,loop_locals,map__14675,map__14675__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_14700),".cljs$lang$applyTo;");
} else {
}

var seq__14690_14757 = cljs.core.seq.call(null,ms_14700);
var chunk__14691_14758 = null;
var count__14692_14759 = (0);
var i__14693_14760 = (0);
while(true){
if((i__14693_14760 < count__14692_14759)){
var vec__14694_14761 = cljs.core._nth.call(null,chunk__14691_14758,i__14693_14760);
var n_14762 = cljs.core.nth.call(null,vec__14694_14761,(0),null);
var meth_14763 = cljs.core.nth.call(null,vec__14694_14761,(1),null);
var c_14764 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14763));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14763))){
cljs.compiler.emitln.call(null,mname_14697,".cljs$core$IFn$_invoke$arity$variadic = ",n_14762,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_14697,".cljs$core$IFn$_invoke$arity$",c_14764," = ",n_14762,";");
}

var G__14765 = seq__14690_14757;
var G__14766 = chunk__14691_14758;
var G__14767 = count__14692_14759;
var G__14768 = (i__14693_14760 + (1));
seq__14690_14757 = G__14765;
chunk__14691_14758 = G__14766;
count__14692_14759 = G__14767;
i__14693_14760 = G__14768;
continue;
} else {
var temp__4425__auto___14769 = cljs.core.seq.call(null,seq__14690_14757);
if(temp__4425__auto___14769){
var seq__14690_14770__$1 = temp__4425__auto___14769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14690_14770__$1)){
var c__5031__auto___14771 = cljs.core.chunk_first.call(null,seq__14690_14770__$1);
var G__14772 = cljs.core.chunk_rest.call(null,seq__14690_14770__$1);
var G__14773 = c__5031__auto___14771;
var G__14774 = cljs.core.count.call(null,c__5031__auto___14771);
var G__14775 = (0);
seq__14690_14757 = G__14772;
chunk__14691_14758 = G__14773;
count__14692_14759 = G__14774;
i__14693_14760 = G__14775;
continue;
} else {
var vec__14695_14776 = cljs.core.first.call(null,seq__14690_14770__$1);
var n_14777 = cljs.core.nth.call(null,vec__14695_14776,(0),null);
var meth_14778 = cljs.core.nth.call(null,vec__14695_14776,(1),null);
var c_14779 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14778));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14778))){
cljs.compiler.emitln.call(null,mname_14697,".cljs$core$IFn$_invoke$arity$variadic = ",n_14777,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_14697,".cljs$core$IFn$_invoke$arity$",c_14779," = ",n_14777,";");
}

var G__14780 = cljs.core.next.call(null,seq__14690_14770__$1);
var G__14781 = null;
var G__14782 = (0);
var G__14783 = (0);
seq__14690_14757 = G__14780;
chunk__14691_14758 = G__14781;
count__14692_14759 = G__14782;
i__14693_14760 = G__14783;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_14697,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__14784){
var map__14785 = p__14784;
var map__14785__$1 = ((((!((map__14785 == null)))?((((map__14785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14785):map__14785);
var statements = cljs.core.get.call(null,map__14785__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__14785__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__14785__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__14787_14791 = cljs.core.seq.call(null,statements);
var chunk__14788_14792 = null;
var count__14789_14793 = (0);
var i__14790_14794 = (0);
while(true){
if((i__14790_14794 < count__14789_14793)){
var s_14795 = cljs.core._nth.call(null,chunk__14788_14792,i__14790_14794);
cljs.compiler.emitln.call(null,s_14795);

var G__14796 = seq__14787_14791;
var G__14797 = chunk__14788_14792;
var G__14798 = count__14789_14793;
var G__14799 = (i__14790_14794 + (1));
seq__14787_14791 = G__14796;
chunk__14788_14792 = G__14797;
count__14789_14793 = G__14798;
i__14790_14794 = G__14799;
continue;
} else {
var temp__4425__auto___14800 = cljs.core.seq.call(null,seq__14787_14791);
if(temp__4425__auto___14800){
var seq__14787_14801__$1 = temp__4425__auto___14800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14787_14801__$1)){
var c__5031__auto___14802 = cljs.core.chunk_first.call(null,seq__14787_14801__$1);
var G__14803 = cljs.core.chunk_rest.call(null,seq__14787_14801__$1);
var G__14804 = c__5031__auto___14802;
var G__14805 = cljs.core.count.call(null,c__5031__auto___14802);
var G__14806 = (0);
seq__14787_14791 = G__14803;
chunk__14788_14792 = G__14804;
count__14789_14793 = G__14805;
i__14790_14794 = G__14806;
continue;
} else {
var s_14807 = cljs.core.first.call(null,seq__14787_14801__$1);
cljs.compiler.emitln.call(null,s_14807);

var G__14808 = cljs.core.next.call(null,seq__14787_14801__$1);
var G__14809 = null;
var G__14810 = (0);
var G__14811 = (0);
seq__14787_14791 = G__14808;
chunk__14788_14792 = G__14809;
count__14789_14793 = G__14810;
i__14790_14794 = G__14811;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__14812){
var map__14813 = p__14812;
var map__14813__$1 = ((((!((map__14813 == null)))?((((map__14813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14813):map__14813);
var env = cljs.core.get.call(null,map__14813__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__14813__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__14813__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__14813__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__14813__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__14815,is_loop){
var map__14827 = p__14815;
var map__14827__$1 = ((((!((map__14827 == null)))?((((map__14827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14827):map__14827);
var bindings = cljs.core.get.call(null,map__14827__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__14827__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14827__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_14829_14838 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_14829_14838,context,map__14827,map__14827__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core._hash.call(null,name),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_14829_14838,context,map__14827,map__14827__$1,bindings,expr,env))
,bindings):null));

try{var seq__14830_14839 = cljs.core.seq.call(null,bindings);
var chunk__14831_14840 = null;
var count__14832_14841 = (0);
var i__14833_14842 = (0);
while(true){
if((i__14833_14842 < count__14832_14841)){
var map__14834_14843 = cljs.core._nth.call(null,chunk__14831_14840,i__14833_14842);
var map__14834_14844__$1 = ((((!((map__14834_14843 == null)))?((((map__14834_14843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14834_14843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14834_14843):map__14834_14843);
var binding_14845 = map__14834_14844__$1;
var init_14846 = cljs.core.get.call(null,map__14834_14844__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_14845);

cljs.compiler.emitln.call(null," = ",init_14846,";");

var G__14847 = seq__14830_14839;
var G__14848 = chunk__14831_14840;
var G__14849 = count__14832_14841;
var G__14850 = (i__14833_14842 + (1));
seq__14830_14839 = G__14847;
chunk__14831_14840 = G__14848;
count__14832_14841 = G__14849;
i__14833_14842 = G__14850;
continue;
} else {
var temp__4425__auto___14851 = cljs.core.seq.call(null,seq__14830_14839);
if(temp__4425__auto___14851){
var seq__14830_14852__$1 = temp__4425__auto___14851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14830_14852__$1)){
var c__5031__auto___14853 = cljs.core.chunk_first.call(null,seq__14830_14852__$1);
var G__14854 = cljs.core.chunk_rest.call(null,seq__14830_14852__$1);
var G__14855 = c__5031__auto___14853;
var G__14856 = cljs.core.count.call(null,c__5031__auto___14853);
var G__14857 = (0);
seq__14830_14839 = G__14854;
chunk__14831_14840 = G__14855;
count__14832_14841 = G__14856;
i__14833_14842 = G__14857;
continue;
} else {
var map__14836_14858 = cljs.core.first.call(null,seq__14830_14852__$1);
var map__14836_14859__$1 = ((((!((map__14836_14858 == null)))?((((map__14836_14858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14836_14858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14836_14858):map__14836_14858);
var binding_14860 = map__14836_14859__$1;
var init_14861 = cljs.core.get.call(null,map__14836_14859__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_14860);

cljs.compiler.emitln.call(null," = ",init_14861,";");

var G__14862 = cljs.core.next.call(null,seq__14830_14852__$1);
var G__14863 = null;
var G__14864 = (0);
var G__14865 = (0);
seq__14830_14839 = G__14862;
chunk__14831_14840 = G__14863;
count__14832_14841 = G__14864;
i__14833_14842 = G__14865;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_14829_14838;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__14866){
var map__14867 = p__14866;
var map__14867__$1 = ((((!((map__14867 == null)))?((((map__14867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14867):map__14867);
var frame = cljs.core.get.call(null,map__14867__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__14867__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__14867__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5131__auto___14869 = cljs.core.count.call(null,exprs);
var i_14870 = (0);
while(true){
if((i_14870 < n__5131__auto___14869)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_14870)," = ",exprs.call(null,i_14870),";");

var G__14871 = (i_14870 + (1));
i_14870 = G__14871;
continue;
} else {
}
break;
}

var n__5131__auto___14872 = cljs.core.count.call(null,exprs);
var i_14873 = (0);
while(true){
if((i_14873 < n__5131__auto___14872)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_14873))," = ",temps.call(null,i_14873),";");

var G__14874 = (i_14873 + (1));
i_14873 = G__14874;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__14875){
var map__14876 = p__14875;
var map__14876__$1 = ((((!((map__14876 == null)))?((((map__14876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14876):map__14876);
var bindings = cljs.core.get.call(null,map__14876__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__14876__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14876__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__14878_14886 = cljs.core.seq.call(null,bindings);
var chunk__14879_14887 = null;
var count__14880_14888 = (0);
var i__14881_14889 = (0);
while(true){
if((i__14881_14889 < count__14880_14888)){
var map__14882_14890 = cljs.core._nth.call(null,chunk__14879_14887,i__14881_14889);
var map__14882_14891__$1 = ((((!((map__14882_14890 == null)))?((((map__14882_14890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14882_14890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14882_14890):map__14882_14890);
var binding_14892 = map__14882_14891__$1;
var init_14893 = cljs.core.get.call(null,map__14882_14891__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_14892)," = ",init_14893,";");

var G__14894 = seq__14878_14886;
var G__14895 = chunk__14879_14887;
var G__14896 = count__14880_14888;
var G__14897 = (i__14881_14889 + (1));
seq__14878_14886 = G__14894;
chunk__14879_14887 = G__14895;
count__14880_14888 = G__14896;
i__14881_14889 = G__14897;
continue;
} else {
var temp__4425__auto___14898 = cljs.core.seq.call(null,seq__14878_14886);
if(temp__4425__auto___14898){
var seq__14878_14899__$1 = temp__4425__auto___14898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14878_14899__$1)){
var c__5031__auto___14900 = cljs.core.chunk_first.call(null,seq__14878_14899__$1);
var G__14901 = cljs.core.chunk_rest.call(null,seq__14878_14899__$1);
var G__14902 = c__5031__auto___14900;
var G__14903 = cljs.core.count.call(null,c__5031__auto___14900);
var G__14904 = (0);
seq__14878_14886 = G__14901;
chunk__14879_14887 = G__14902;
count__14880_14888 = G__14903;
i__14881_14889 = G__14904;
continue;
} else {
var map__14884_14905 = cljs.core.first.call(null,seq__14878_14899__$1);
var map__14884_14906__$1 = ((((!((map__14884_14905 == null)))?((((map__14884_14905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14884_14905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14884_14905):map__14884_14905);
var binding_14907 = map__14884_14906__$1;
var init_14908 = cljs.core.get.call(null,map__14884_14906__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_14907)," = ",init_14908,";");

var G__14909 = cljs.core.next.call(null,seq__14878_14899__$1);
var G__14910 = null;
var G__14911 = (0);
var G__14912 = (0);
seq__14878_14886 = G__14909;
chunk__14879_14887 = G__14910;
count__14880_14888 = G__14911;
i__14881_14889 = G__14912;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__14915){
var map__14916 = p__14915;
var map__14916__$1 = ((((!((map__14916 == null)))?((((map__14916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14916):map__14916);
var expr = map__14916__$1;
var f = cljs.core.get.call(null,map__14916__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__14916__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14916__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__14918 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14916,map__14916__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14916,map__14916__$1,expr,f,args,env){
return (function (p1__14913_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__14913_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14916,map__14916__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14916,map__14916__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14916,map__14916__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14916,map__14916__$1,expr,f,args,env){
return (function (p1__14914_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__14914_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14916,map__14916__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14916,map__14916__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__14918,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__14918,(1),null);
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_14919 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_14919,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_14920 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_14920,args)),(((mfa_14920 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_14920,args)),"], 0))");
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
var fprop_14921 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_14921," ? ",f__$1,fprop_14921,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__14922){
var map__14923 = p__14922;
var map__14923__$1 = ((((!((map__14923 == null)))?((((map__14923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14923):map__14923);
var ctor = cljs.core.get.call(null,map__14923__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__14923__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14923__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__14925){
var map__14926 = p__14925;
var map__14926__$1 = ((((!((map__14926 == null)))?((((map__14926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14926):map__14926);
var target = cljs.core.get.call(null,map__14926__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__14926__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__14926__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
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

var seq__14932_14936 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__14933_14937 = null;
var count__14934_14938 = (0);
var i__14935_14939 = (0);
while(true){
if((i__14935_14939 < count__14934_14938)){
var lib_14940 = cljs.core._nth.call(null,chunk__14933_14937,i__14935_14939);
if(cljs.core.truth_((function (){var or__4247__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14940),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14940),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4247__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14940),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14940),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14940),"');");

}
}

var G__14941 = seq__14932_14936;
var G__14942 = chunk__14933_14937;
var G__14943 = count__14934_14938;
var G__14944 = (i__14935_14939 + (1));
seq__14932_14936 = G__14941;
chunk__14933_14937 = G__14942;
count__14934_14938 = G__14943;
i__14935_14939 = G__14944;
continue;
} else {
var temp__4425__auto___14945 = cljs.core.seq.call(null,seq__14932_14936);
if(temp__4425__auto___14945){
var seq__14932_14946__$1 = temp__4425__auto___14945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14932_14946__$1)){
var c__5031__auto___14947 = cljs.core.chunk_first.call(null,seq__14932_14946__$1);
var G__14948 = cljs.core.chunk_rest.call(null,seq__14932_14946__$1);
var G__14949 = c__5031__auto___14947;
var G__14950 = cljs.core.count.call(null,c__5031__auto___14947);
var G__14951 = (0);
seq__14932_14936 = G__14948;
chunk__14933_14937 = G__14949;
count__14934_14938 = G__14950;
i__14935_14939 = G__14951;
continue;
} else {
var lib_14952 = cljs.core.first.call(null,seq__14932_14946__$1);
if(cljs.core.truth_((function (){var or__4247__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14952),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14952),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4247__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14952),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14952),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14952),"');");

}
}

var G__14953 = cljs.core.next.call(null,seq__14932_14946__$1);
var G__14954 = null;
var G__14955 = (0);
var G__14956 = (0);
seq__14932_14936 = G__14953;
chunk__14933_14937 = G__14954;
count__14934_14938 = G__14955;
i__14935_14939 = G__14956;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__14957){
var map__14958 = p__14957;
var map__14958__$1 = ((((!((map__14958 == null)))?((((map__14958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14958):map__14958);
var name = cljs.core.get.call(null,map__14958__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__14958__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__14958__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__14958__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__14958__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__14958__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__14960){
var map__14961 = p__14960;
var map__14961__$1 = ((((!((map__14961 == null)))?((((map__14961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14961):map__14961);
var t = cljs.core.get.call(null,map__14961__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__14961__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__14961__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__14961__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__14963_14973 = cljs.core.seq.call(null,fields__$1);
var chunk__14964_14974 = null;
var count__14965_14975 = (0);
var i__14966_14976 = (0);
while(true){
if((i__14966_14976 < count__14965_14975)){
var fld_14977 = cljs.core._nth.call(null,chunk__14964_14974,i__14966_14976);
cljs.compiler.emitln.call(null,"this.",fld_14977," = ",fld_14977,";");

var G__14978 = seq__14963_14973;
var G__14979 = chunk__14964_14974;
var G__14980 = count__14965_14975;
var G__14981 = (i__14966_14976 + (1));
seq__14963_14973 = G__14978;
chunk__14964_14974 = G__14979;
count__14965_14975 = G__14980;
i__14966_14976 = G__14981;
continue;
} else {
var temp__4425__auto___14982 = cljs.core.seq.call(null,seq__14963_14973);
if(temp__4425__auto___14982){
var seq__14963_14983__$1 = temp__4425__auto___14982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14963_14983__$1)){
var c__5031__auto___14984 = cljs.core.chunk_first.call(null,seq__14963_14983__$1);
var G__14985 = cljs.core.chunk_rest.call(null,seq__14963_14983__$1);
var G__14986 = c__5031__auto___14984;
var G__14987 = cljs.core.count.call(null,c__5031__auto___14984);
var G__14988 = (0);
seq__14963_14973 = G__14985;
chunk__14964_14974 = G__14986;
count__14965_14975 = G__14987;
i__14966_14976 = G__14988;
continue;
} else {
var fld_14989 = cljs.core.first.call(null,seq__14963_14983__$1);
cljs.compiler.emitln.call(null,"this.",fld_14989," = ",fld_14989,";");

var G__14990 = cljs.core.next.call(null,seq__14963_14983__$1);
var G__14991 = null;
var G__14992 = (0);
var G__14993 = (0);
seq__14963_14973 = G__14990;
chunk__14964_14974 = G__14991;
count__14965_14975 = G__14992;
i__14966_14976 = G__14993;
continue;
}
} else {
}
}
break;
}

var seq__14967_14994 = cljs.core.seq.call(null,pmasks);
var chunk__14968_14995 = null;
var count__14969_14996 = (0);
var i__14970_14997 = (0);
while(true){
if((i__14970_14997 < count__14969_14996)){
var vec__14971_14998 = cljs.core._nth.call(null,chunk__14968_14995,i__14970_14997);
var pno_14999 = cljs.core.nth.call(null,vec__14971_14998,(0),null);
var pmask_15000 = cljs.core.nth.call(null,vec__14971_14998,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14999,"$ = ",pmask_15000,";");

var G__15001 = seq__14967_14994;
var G__15002 = chunk__14968_14995;
var G__15003 = count__14969_14996;
var G__15004 = (i__14970_14997 + (1));
seq__14967_14994 = G__15001;
chunk__14968_14995 = G__15002;
count__14969_14996 = G__15003;
i__14970_14997 = G__15004;
continue;
} else {
var temp__4425__auto___15005 = cljs.core.seq.call(null,seq__14967_14994);
if(temp__4425__auto___15005){
var seq__14967_15006__$1 = temp__4425__auto___15005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14967_15006__$1)){
var c__5031__auto___15007 = cljs.core.chunk_first.call(null,seq__14967_15006__$1);
var G__15008 = cljs.core.chunk_rest.call(null,seq__14967_15006__$1);
var G__15009 = c__5031__auto___15007;
var G__15010 = cljs.core.count.call(null,c__5031__auto___15007);
var G__15011 = (0);
seq__14967_14994 = G__15008;
chunk__14968_14995 = G__15009;
count__14969_14996 = G__15010;
i__14970_14997 = G__15011;
continue;
} else {
var vec__14972_15012 = cljs.core.first.call(null,seq__14967_15006__$1);
var pno_15013 = cljs.core.nth.call(null,vec__14972_15012,(0),null);
var pmask_15014 = cljs.core.nth.call(null,vec__14972_15012,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15013,"$ = ",pmask_15014,";");

var G__15015 = cljs.core.next.call(null,seq__14967_15006__$1);
var G__15016 = null;
var G__15017 = (0);
var G__15018 = (0);
seq__14967_14994 = G__15015;
chunk__14968_14995 = G__15016;
count__14969_14996 = G__15017;
i__14970_14997 = G__15018;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__15019){
var map__15020 = p__15019;
var map__15020__$1 = ((((!((map__15020 == null)))?((((map__15020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15020):map__15020);
var t = cljs.core.get.call(null,map__15020__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__15020__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__15020__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__15020__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__15022_15036 = cljs.core.seq.call(null,fields__$1);
var chunk__15023_15037 = null;
var count__15024_15038 = (0);
var i__15025_15039 = (0);
while(true){
if((i__15025_15039 < count__15024_15038)){
var fld_15040 = cljs.core._nth.call(null,chunk__15023_15037,i__15025_15039);
cljs.compiler.emitln.call(null,"* @param {*} ",fld_15040);

var G__15041 = seq__15022_15036;
var G__15042 = chunk__15023_15037;
var G__15043 = count__15024_15038;
var G__15044 = (i__15025_15039 + (1));
seq__15022_15036 = G__15041;
chunk__15023_15037 = G__15042;
count__15024_15038 = G__15043;
i__15025_15039 = G__15044;
continue;
} else {
var temp__4425__auto___15045 = cljs.core.seq.call(null,seq__15022_15036);
if(temp__4425__auto___15045){
var seq__15022_15046__$1 = temp__4425__auto___15045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15022_15046__$1)){
var c__5031__auto___15047 = cljs.core.chunk_first.call(null,seq__15022_15046__$1);
var G__15048 = cljs.core.chunk_rest.call(null,seq__15022_15046__$1);
var G__15049 = c__5031__auto___15047;
var G__15050 = cljs.core.count.call(null,c__5031__auto___15047);
var G__15051 = (0);
seq__15022_15036 = G__15048;
chunk__15023_15037 = G__15049;
count__15024_15038 = G__15050;
i__15025_15039 = G__15051;
continue;
} else {
var fld_15052 = cljs.core.first.call(null,seq__15022_15046__$1);
cljs.compiler.emitln.call(null,"* @param {*} ",fld_15052);

var G__15053 = cljs.core.next.call(null,seq__15022_15046__$1);
var G__15054 = null;
var G__15055 = (0);
var G__15056 = (0);
seq__15022_15036 = G__15053;
chunk__15023_15037 = G__15054;
count__15024_15038 = G__15055;
i__15025_15039 = G__15056;
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

var seq__15026_15057 = cljs.core.seq.call(null,fields__$1);
var chunk__15027_15058 = null;
var count__15028_15059 = (0);
var i__15029_15060 = (0);
while(true){
if((i__15029_15060 < count__15028_15059)){
var fld_15061 = cljs.core._nth.call(null,chunk__15027_15058,i__15029_15060);
cljs.compiler.emitln.call(null,"this.",fld_15061," = ",fld_15061,";");

var G__15062 = seq__15026_15057;
var G__15063 = chunk__15027_15058;
var G__15064 = count__15028_15059;
var G__15065 = (i__15029_15060 + (1));
seq__15026_15057 = G__15062;
chunk__15027_15058 = G__15063;
count__15028_15059 = G__15064;
i__15029_15060 = G__15065;
continue;
} else {
var temp__4425__auto___15066 = cljs.core.seq.call(null,seq__15026_15057);
if(temp__4425__auto___15066){
var seq__15026_15067__$1 = temp__4425__auto___15066;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15026_15067__$1)){
var c__5031__auto___15068 = cljs.core.chunk_first.call(null,seq__15026_15067__$1);
var G__15069 = cljs.core.chunk_rest.call(null,seq__15026_15067__$1);
var G__15070 = c__5031__auto___15068;
var G__15071 = cljs.core.count.call(null,c__5031__auto___15068);
var G__15072 = (0);
seq__15026_15057 = G__15069;
chunk__15027_15058 = G__15070;
count__15028_15059 = G__15071;
i__15029_15060 = G__15072;
continue;
} else {
var fld_15073 = cljs.core.first.call(null,seq__15026_15067__$1);
cljs.compiler.emitln.call(null,"this.",fld_15073," = ",fld_15073,";");

var G__15074 = cljs.core.next.call(null,seq__15026_15067__$1);
var G__15075 = null;
var G__15076 = (0);
var G__15077 = (0);
seq__15026_15057 = G__15074;
chunk__15027_15058 = G__15075;
count__15028_15059 = G__15076;
i__15029_15060 = G__15077;
continue;
}
} else {
}
}
break;
}

var seq__15030_15078 = cljs.core.seq.call(null,pmasks);
var chunk__15031_15079 = null;
var count__15032_15080 = (0);
var i__15033_15081 = (0);
while(true){
if((i__15033_15081 < count__15032_15080)){
var vec__15034_15082 = cljs.core._nth.call(null,chunk__15031_15079,i__15033_15081);
var pno_15083 = cljs.core.nth.call(null,vec__15034_15082,(0),null);
var pmask_15084 = cljs.core.nth.call(null,vec__15034_15082,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15083,"$ = ",pmask_15084,";");

var G__15085 = seq__15030_15078;
var G__15086 = chunk__15031_15079;
var G__15087 = count__15032_15080;
var G__15088 = (i__15033_15081 + (1));
seq__15030_15078 = G__15085;
chunk__15031_15079 = G__15086;
count__15032_15080 = G__15087;
i__15033_15081 = G__15088;
continue;
} else {
var temp__4425__auto___15089 = cljs.core.seq.call(null,seq__15030_15078);
if(temp__4425__auto___15089){
var seq__15030_15090__$1 = temp__4425__auto___15089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15030_15090__$1)){
var c__5031__auto___15091 = cljs.core.chunk_first.call(null,seq__15030_15090__$1);
var G__15092 = cljs.core.chunk_rest.call(null,seq__15030_15090__$1);
var G__15093 = c__5031__auto___15091;
var G__15094 = cljs.core.count.call(null,c__5031__auto___15091);
var G__15095 = (0);
seq__15030_15078 = G__15092;
chunk__15031_15079 = G__15093;
count__15032_15080 = G__15094;
i__15033_15081 = G__15095;
continue;
} else {
var vec__15035_15096 = cljs.core.first.call(null,seq__15030_15090__$1);
var pno_15097 = cljs.core.nth.call(null,vec__15035_15096,(0),null);
var pmask_15098 = cljs.core.nth.call(null,vec__15035_15096,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15097,"$ = ",pmask_15098,";");

var G__15099 = cljs.core.next.call(null,seq__15030_15090__$1);
var G__15100 = null;
var G__15101 = (0);
var G__15102 = (0);
seq__15030_15078 = G__15099;
chunk__15031_15079 = G__15100;
count__15032_15080 = G__15101;
i__15033_15081 = G__15102;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__15103){
var map__15104 = p__15103;
var map__15104__$1 = ((((!((map__15104 == null)))?((((map__15104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15104):map__15104);
var target = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__15106){
var map__15107 = p__15106;
var map__15107__$1 = ((((!((map__15107 == null)))?((((map__15107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15107):map__15107);
var env = cljs.core.get.call(null,map__15107__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__15107__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__15107__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__15107__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env__6343__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6343__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__15117 = cljs.core.seq.call(null,table);
var chunk__15118 = null;
var count__15119 = (0);
var i__15120 = (0);
while(true){
if((i__15120 < count__15119)){
var vec__15121 = cljs.core._nth.call(null,chunk__15118,i__15120);
var sym = cljs.core.nth.call(null,vec__15121,(0),null);
var value = cljs.core.nth.call(null,vec__15121,(1),null);
var ns_15123 = cljs.core.namespace.call(null,sym);
var name_15124 = cljs.core.name.call(null,sym);
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

var G__15125 = seq__15117;
var G__15126 = chunk__15118;
var G__15127 = count__15119;
var G__15128 = (i__15120 + (1));
seq__15117 = G__15125;
chunk__15118 = G__15126;
count__15119 = G__15127;
i__15120 = G__15128;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15117);
if(temp__4425__auto__){
var seq__15117__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15117__$1)){
var c__5031__auto__ = cljs.core.chunk_first.call(null,seq__15117__$1);
var G__15129 = cljs.core.chunk_rest.call(null,seq__15117__$1);
var G__15130 = c__5031__auto__;
var G__15131 = cljs.core.count.call(null,c__5031__auto__);
var G__15132 = (0);
seq__15117 = G__15129;
chunk__15118 = G__15130;
count__15119 = G__15131;
i__15120 = G__15132;
continue;
} else {
var vec__15122 = cljs.core.first.call(null,seq__15117__$1);
var sym = cljs.core.nth.call(null,vec__15122,(0),null);
var value = cljs.core.nth.call(null,vec__15122,(1),null);
var ns_15133 = cljs.core.namespace.call(null,sym);
var name_15134 = cljs.core.name.call(null,sym);
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

var G__15135 = cljs.core.next.call(null,seq__15117__$1);
var G__15136 = null;
var G__15137 = (0);
var G__15138 = (0);
seq__15117 = G__15135;
chunk__15118 = G__15136;
count__15119 = G__15137;
i__15120 = G__15138;
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