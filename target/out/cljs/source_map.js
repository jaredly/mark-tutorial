// Compiled by ClojureScript 1.7.58 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__13420){
var vec__13421 = p__13420;
var i = cljs.core.nth.call(null,vec__13421,(0),null);
var v = cljs.core.nth.call(null,vec__13421,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__13423 = seg;
var gcol = cljs.core.nth.call(null,vec__13423,(0),null);
var source = cljs.core.nth.call(null,vec__13423,(1),null);
var line = cljs.core.nth.call(null,vec__13423,(2),null);
var col = cljs.core.nth.call(null,vec__13423,(3),null);
var name = cljs.core.nth.call(null,vec__13423,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__13426 = seg;
var gcol = cljs.core.nth.call(null,vec__13426,(0),null);
var source = cljs.core.nth.call(null,vec__13426,(1),null);
var line = cljs.core.nth.call(null,vec__13426,(2),null);
var col = cljs.core.nth.call(null,vec__13426,(3),null);
var name = cljs.core.nth.call(null,vec__13426,(4),null);
var vec__13427 = relseg;
var rgcol = cljs.core.nth.call(null,vec__13427,(0),null);
var rsource = cljs.core.nth.call(null,vec__13427,(1),null);
var rline = cljs.core.nth.call(null,vec__13427,(2),null);
var rcol = cljs.core.nth.call(null,vec__13427,(3),null);
var rname = cljs.core.nth.call(null,vec__13427,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4247__auto__ = source;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4247__auto__ = line;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4247__auto__ = col;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4247__auto__ = name;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 * update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__13430 = segmap;
var map__13430__$1 = ((((!((map__13430 == null)))?((((map__13430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13430):map__13430);
var gcol = cljs.core.get.call(null,map__13430__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__13430__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__13430__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__13430__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__13430__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__13430,map__13430__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__13430,map__13430__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__13430,map__13430__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__13430,map__13430__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__13430,map__13430__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__13430,map__13430__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 * mapping original ClojureScript source locations to the generated
 * JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(){
var args13432 = [];
var len__5286__auto___13436 = arguments.length;
var i__5287__auto___13437 = (0);
while(true){
if((i__5287__auto___13437 < len__5286__auto___13436)){
args13432.push((arguments[i__5287__auto___13437]));

var G__13438 = (i__5287__auto___13437 + (1));
i__5287__auto___13437 = G__13438;
continue;
} else {
}
break;
}

var G__13434 = args13432.length;
switch (G__13434) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13432.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__13435 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__13440 = cljs.core.next.call(null,segs__$1);
var G__13441 = nrelseg;
var G__13442 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__13440;
relseg__$1 = G__13441;
result__$1 = G__13442;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__13435,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__13435,(1),null);
var G__13443 = (gline + (1));
var G__13444 = cljs.core.next.call(null,lines__$1);
var G__13445 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__13446 = result__$1;
gline = G__13443;
lines__$1 = G__13444;
relseg = G__13445;
result = G__13446;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 * segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__13450 = segmap;
var map__13450__$1 = ((((!((map__13450 == null)))?((((map__13450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13450):map__13450);
var gcol = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__13450,map__13450__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__13450,map__13450__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__13447_SHARP_){
return cljs.core.conj.call(null,p1__13447_SHARP_,d__$1);
});})(map__13450,map__13450__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__13450,map__13450__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 * generated JavaScript source locations to the original
 * ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(){
var args13452 = [];
var len__5286__auto___13456 = arguments.length;
var i__5287__auto___13457 = (0);
while(true){
if((i__5287__auto___13457 < len__5286__auto___13456)){
args13452.push((arguments[i__5287__auto___13457]));

var G__13458 = (i__5287__auto___13457 + (1));
i__5287__auto___13457 = G__13458;
continue;
} else {
}
break;
}

var G__13454 = args13452.length;
switch (G__13454) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13452.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__13455 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__13460 = cljs.core.next.call(null,segs__$1);
var G__13461 = nrelseg;
var G__13462 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__13460;
relseg__$1 = G__13461;
result__$1 = G__13462;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__13455,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__13455,(1),null);
var G__13463 = (gline + (1));
var G__13464 = cljs.core.next.call(null,lines__$1);
var G__13465 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__13466 = result__$1;
gline = G__13463;
lines__$1 = G__13464;
relseg = G__13465;
result = G__13466;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__13473){
var vec__13474 = p__13473;
var _ = cljs.core.nth.call(null,vec__13474,(0),null);
var source = cljs.core.nth.call(null,vec__13474,(1),null);
var line = cljs.core.nth.call(null,vec__13474,(2),null);
var col = cljs.core.nth.call(null,vec__13474,(3),null);
var name = cljs.core.nth.call(null,vec__13474,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__13475){
var vec__13476 = p__13475;
var gcol = cljs.core.nth.call(null,vec__13476,(0),null);
var sidx = cljs.core.nth.call(null,vec__13476,(1),null);
var line = cljs.core.nth.call(null,vec__13476,(2),null);
var col = cljs.core.nth.call(null,vec__13476,(3),null);
var name = cljs.core.nth.call(null,vec__13476,(4),null);
var seg = vec__13476;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__13476,gcol,sidx,line,col,name,seg,relseg){
return (function (p__13477){
var vec__13478 = p__13477;
var _ = cljs.core.nth.call(null,vec__13478,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__13478,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__13478,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__13478,(3),null);
var lname = cljs.core.nth.call(null,vec__13478,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4247__auto__ = name;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__13476,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4247__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__13532 = cljs.core.seq.call(null,infos);
var chunk__13533 = null;
var count__13534 = (0);
var i__13535 = (0);
while(true){
if((i__13535 < count__13534)){
var info = cljs.core._nth.call(null,chunk__13533,i__13535);
var segv_13582 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_13583 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_13584 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_13583 > (lc_13584 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__13532,chunk__13533,count__13534,i__13535,segv_13582,gline_13583,lc_13584,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_13583 - (lc_13584 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_13582], null));
});})(seq__13532,chunk__13533,count__13534,i__13535,segv_13582,gline_13583,lc_13584,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__13532,chunk__13533,count__13534,i__13535,segv_13582,gline_13583,lc_13584,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13583], null),cljs.core.conj,segv_13582);
});})(seq__13532,chunk__13533,count__13534,i__13535,segv_13582,gline_13583,lc_13584,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__13585 = seq__13532;
var G__13586 = chunk__13533;
var G__13587 = count__13534;
var G__13588 = (i__13535 + (1));
seq__13532 = G__13585;
chunk__13533 = G__13586;
count__13534 = G__13587;
i__13535 = G__13588;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__13532);
if(temp__4425__auto__){
var seq__13532__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13532__$1)){
var c__5031__auto__ = cljs.core.chunk_first.call(null,seq__13532__$1);
var G__13589 = cljs.core.chunk_rest.call(null,seq__13532__$1);
var G__13590 = c__5031__auto__;
var G__13591 = cljs.core.count.call(null,c__5031__auto__);
var G__13592 = (0);
seq__13532 = G__13589;
chunk__13533 = G__13590;
count__13534 = G__13591;
i__13535 = G__13592;
continue;
} else {
var info = cljs.core.first.call(null,seq__13532__$1);
var segv_13593 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_13594 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_13595 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_13594 > (lc_13595 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__13532,chunk__13533,count__13534,i__13535,segv_13593,gline_13594,lc_13595,info,seq__13532__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_13594 - (lc_13595 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_13593], null));
});})(seq__13532,chunk__13533,count__13534,i__13535,segv_13593,gline_13594,lc_13595,info,seq__13532__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__13532,chunk__13533,count__13534,i__13535,segv_13593,gline_13594,lc_13595,info,seq__13532__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13594], null),cljs.core.conj,segv_13593);
});})(seq__13532,chunk__13533,count__13534,i__13535,segv_13593,gline_13594,lc_13595,info,seq__13532__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__13596 = cljs.core.next.call(null,seq__13532__$1);
var G__13597 = null;
var G__13598 = (0);
var G__13599 = (0);
seq__13532 = G__13596;
chunk__13533 = G__13597;
count__13534 = G__13598;
i__13535 = G__13599;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__13536_13600 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__13537_13601 = null;
var count__13538_13602 = (0);
var i__13539_13603 = (0);
while(true){
if((i__13539_13603 < count__13538_13602)){
var vec__13540_13604 = cljs.core._nth.call(null,chunk__13537_13601,i__13539_13603);
var source_idx_13605 = cljs.core.nth.call(null,vec__13540_13604,(0),null);
var vec__13541_13606 = cljs.core.nth.call(null,vec__13540_13604,(1),null);
var __13607 = cljs.core.nth.call(null,vec__13541_13606,(0),null);
var lines_13608__$1 = cljs.core.nth.call(null,vec__13541_13606,(1),null);
var seq__13542_13609 = cljs.core.seq.call(null,lines_13608__$1);
var chunk__13543_13610 = null;
var count__13544_13611 = (0);
var i__13545_13612 = (0);
while(true){
if((i__13545_13612 < count__13544_13611)){
var vec__13546_13613 = cljs.core._nth.call(null,chunk__13543_13610,i__13545_13612);
var line_13614 = cljs.core.nth.call(null,vec__13546_13613,(0),null);
var cols_13615 = cljs.core.nth.call(null,vec__13546_13613,(1),null);
var seq__13547_13616 = cljs.core.seq.call(null,cols_13615);
var chunk__13548_13617 = null;
var count__13549_13618 = (0);
var i__13550_13619 = (0);
while(true){
if((i__13550_13619 < count__13549_13618)){
var vec__13551_13620 = cljs.core._nth.call(null,chunk__13548_13617,i__13550_13619);
var col_13621 = cljs.core.nth.call(null,vec__13551_13620,(0),null);
var infos_13622 = cljs.core.nth.call(null,vec__13551_13620,(1),null);
encode_cols.call(null,infos_13622,source_idx_13605,line_13614,col_13621);

var G__13623 = seq__13547_13616;
var G__13624 = chunk__13548_13617;
var G__13625 = count__13549_13618;
var G__13626 = (i__13550_13619 + (1));
seq__13547_13616 = G__13623;
chunk__13548_13617 = G__13624;
count__13549_13618 = G__13625;
i__13550_13619 = G__13626;
continue;
} else {
var temp__4425__auto___13627 = cljs.core.seq.call(null,seq__13547_13616);
if(temp__4425__auto___13627){
var seq__13547_13628__$1 = temp__4425__auto___13627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13547_13628__$1)){
var c__5031__auto___13629 = cljs.core.chunk_first.call(null,seq__13547_13628__$1);
var G__13630 = cljs.core.chunk_rest.call(null,seq__13547_13628__$1);
var G__13631 = c__5031__auto___13629;
var G__13632 = cljs.core.count.call(null,c__5031__auto___13629);
var G__13633 = (0);
seq__13547_13616 = G__13630;
chunk__13548_13617 = G__13631;
count__13549_13618 = G__13632;
i__13550_13619 = G__13633;
continue;
} else {
var vec__13552_13634 = cljs.core.first.call(null,seq__13547_13628__$1);
var col_13635 = cljs.core.nth.call(null,vec__13552_13634,(0),null);
var infos_13636 = cljs.core.nth.call(null,vec__13552_13634,(1),null);
encode_cols.call(null,infos_13636,source_idx_13605,line_13614,col_13635);

var G__13637 = cljs.core.next.call(null,seq__13547_13628__$1);
var G__13638 = null;
var G__13639 = (0);
var G__13640 = (0);
seq__13547_13616 = G__13637;
chunk__13548_13617 = G__13638;
count__13549_13618 = G__13639;
i__13550_13619 = G__13640;
continue;
}
} else {
}
}
break;
}

var G__13641 = seq__13542_13609;
var G__13642 = chunk__13543_13610;
var G__13643 = count__13544_13611;
var G__13644 = (i__13545_13612 + (1));
seq__13542_13609 = G__13641;
chunk__13543_13610 = G__13642;
count__13544_13611 = G__13643;
i__13545_13612 = G__13644;
continue;
} else {
var temp__4425__auto___13645 = cljs.core.seq.call(null,seq__13542_13609);
if(temp__4425__auto___13645){
var seq__13542_13646__$1 = temp__4425__auto___13645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13542_13646__$1)){
var c__5031__auto___13647 = cljs.core.chunk_first.call(null,seq__13542_13646__$1);
var G__13648 = cljs.core.chunk_rest.call(null,seq__13542_13646__$1);
var G__13649 = c__5031__auto___13647;
var G__13650 = cljs.core.count.call(null,c__5031__auto___13647);
var G__13651 = (0);
seq__13542_13609 = G__13648;
chunk__13543_13610 = G__13649;
count__13544_13611 = G__13650;
i__13545_13612 = G__13651;
continue;
} else {
var vec__13553_13652 = cljs.core.first.call(null,seq__13542_13646__$1);
var line_13653 = cljs.core.nth.call(null,vec__13553_13652,(0),null);
var cols_13654 = cljs.core.nth.call(null,vec__13553_13652,(1),null);
var seq__13554_13655 = cljs.core.seq.call(null,cols_13654);
var chunk__13555_13656 = null;
var count__13556_13657 = (0);
var i__13557_13658 = (0);
while(true){
if((i__13557_13658 < count__13556_13657)){
var vec__13558_13659 = cljs.core._nth.call(null,chunk__13555_13656,i__13557_13658);
var col_13660 = cljs.core.nth.call(null,vec__13558_13659,(0),null);
var infos_13661 = cljs.core.nth.call(null,vec__13558_13659,(1),null);
encode_cols.call(null,infos_13661,source_idx_13605,line_13653,col_13660);

var G__13662 = seq__13554_13655;
var G__13663 = chunk__13555_13656;
var G__13664 = count__13556_13657;
var G__13665 = (i__13557_13658 + (1));
seq__13554_13655 = G__13662;
chunk__13555_13656 = G__13663;
count__13556_13657 = G__13664;
i__13557_13658 = G__13665;
continue;
} else {
var temp__4425__auto___13666__$1 = cljs.core.seq.call(null,seq__13554_13655);
if(temp__4425__auto___13666__$1){
var seq__13554_13667__$1 = temp__4425__auto___13666__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13554_13667__$1)){
var c__5031__auto___13668 = cljs.core.chunk_first.call(null,seq__13554_13667__$1);
var G__13669 = cljs.core.chunk_rest.call(null,seq__13554_13667__$1);
var G__13670 = c__5031__auto___13668;
var G__13671 = cljs.core.count.call(null,c__5031__auto___13668);
var G__13672 = (0);
seq__13554_13655 = G__13669;
chunk__13555_13656 = G__13670;
count__13556_13657 = G__13671;
i__13557_13658 = G__13672;
continue;
} else {
var vec__13559_13673 = cljs.core.first.call(null,seq__13554_13667__$1);
var col_13674 = cljs.core.nth.call(null,vec__13559_13673,(0),null);
var infos_13675 = cljs.core.nth.call(null,vec__13559_13673,(1),null);
encode_cols.call(null,infos_13675,source_idx_13605,line_13653,col_13674);

var G__13676 = cljs.core.next.call(null,seq__13554_13667__$1);
var G__13677 = null;
var G__13678 = (0);
var G__13679 = (0);
seq__13554_13655 = G__13676;
chunk__13555_13656 = G__13677;
count__13556_13657 = G__13678;
i__13557_13658 = G__13679;
continue;
}
} else {
}
}
break;
}

var G__13680 = cljs.core.next.call(null,seq__13542_13646__$1);
var G__13681 = null;
var G__13682 = (0);
var G__13683 = (0);
seq__13542_13609 = G__13680;
chunk__13543_13610 = G__13681;
count__13544_13611 = G__13682;
i__13545_13612 = G__13683;
continue;
}
} else {
}
}
break;
}

var G__13684 = seq__13536_13600;
var G__13685 = chunk__13537_13601;
var G__13686 = count__13538_13602;
var G__13687 = (i__13539_13603 + (1));
seq__13536_13600 = G__13684;
chunk__13537_13601 = G__13685;
count__13538_13602 = G__13686;
i__13539_13603 = G__13687;
continue;
} else {
var temp__4425__auto___13688 = cljs.core.seq.call(null,seq__13536_13600);
if(temp__4425__auto___13688){
var seq__13536_13689__$1 = temp__4425__auto___13688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13536_13689__$1)){
var c__5031__auto___13690 = cljs.core.chunk_first.call(null,seq__13536_13689__$1);
var G__13691 = cljs.core.chunk_rest.call(null,seq__13536_13689__$1);
var G__13692 = c__5031__auto___13690;
var G__13693 = cljs.core.count.call(null,c__5031__auto___13690);
var G__13694 = (0);
seq__13536_13600 = G__13691;
chunk__13537_13601 = G__13692;
count__13538_13602 = G__13693;
i__13539_13603 = G__13694;
continue;
} else {
var vec__13560_13695 = cljs.core.first.call(null,seq__13536_13689__$1);
var source_idx_13696 = cljs.core.nth.call(null,vec__13560_13695,(0),null);
var vec__13561_13697 = cljs.core.nth.call(null,vec__13560_13695,(1),null);
var __13698 = cljs.core.nth.call(null,vec__13561_13697,(0),null);
var lines_13699__$1 = cljs.core.nth.call(null,vec__13561_13697,(1),null);
var seq__13562_13700 = cljs.core.seq.call(null,lines_13699__$1);
var chunk__13563_13701 = null;
var count__13564_13702 = (0);
var i__13565_13703 = (0);
while(true){
if((i__13565_13703 < count__13564_13702)){
var vec__13566_13704 = cljs.core._nth.call(null,chunk__13563_13701,i__13565_13703);
var line_13705 = cljs.core.nth.call(null,vec__13566_13704,(0),null);
var cols_13706 = cljs.core.nth.call(null,vec__13566_13704,(1),null);
var seq__13567_13707 = cljs.core.seq.call(null,cols_13706);
var chunk__13568_13708 = null;
var count__13569_13709 = (0);
var i__13570_13710 = (0);
while(true){
if((i__13570_13710 < count__13569_13709)){
var vec__13571_13711 = cljs.core._nth.call(null,chunk__13568_13708,i__13570_13710);
var col_13712 = cljs.core.nth.call(null,vec__13571_13711,(0),null);
var infos_13713 = cljs.core.nth.call(null,vec__13571_13711,(1),null);
encode_cols.call(null,infos_13713,source_idx_13696,line_13705,col_13712);

var G__13714 = seq__13567_13707;
var G__13715 = chunk__13568_13708;
var G__13716 = count__13569_13709;
var G__13717 = (i__13570_13710 + (1));
seq__13567_13707 = G__13714;
chunk__13568_13708 = G__13715;
count__13569_13709 = G__13716;
i__13570_13710 = G__13717;
continue;
} else {
var temp__4425__auto___13718__$1 = cljs.core.seq.call(null,seq__13567_13707);
if(temp__4425__auto___13718__$1){
var seq__13567_13719__$1 = temp__4425__auto___13718__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13567_13719__$1)){
var c__5031__auto___13720 = cljs.core.chunk_first.call(null,seq__13567_13719__$1);
var G__13721 = cljs.core.chunk_rest.call(null,seq__13567_13719__$1);
var G__13722 = c__5031__auto___13720;
var G__13723 = cljs.core.count.call(null,c__5031__auto___13720);
var G__13724 = (0);
seq__13567_13707 = G__13721;
chunk__13568_13708 = G__13722;
count__13569_13709 = G__13723;
i__13570_13710 = G__13724;
continue;
} else {
var vec__13572_13725 = cljs.core.first.call(null,seq__13567_13719__$1);
var col_13726 = cljs.core.nth.call(null,vec__13572_13725,(0),null);
var infos_13727 = cljs.core.nth.call(null,vec__13572_13725,(1),null);
encode_cols.call(null,infos_13727,source_idx_13696,line_13705,col_13726);

var G__13728 = cljs.core.next.call(null,seq__13567_13719__$1);
var G__13729 = null;
var G__13730 = (0);
var G__13731 = (0);
seq__13567_13707 = G__13728;
chunk__13568_13708 = G__13729;
count__13569_13709 = G__13730;
i__13570_13710 = G__13731;
continue;
}
} else {
}
}
break;
}

var G__13732 = seq__13562_13700;
var G__13733 = chunk__13563_13701;
var G__13734 = count__13564_13702;
var G__13735 = (i__13565_13703 + (1));
seq__13562_13700 = G__13732;
chunk__13563_13701 = G__13733;
count__13564_13702 = G__13734;
i__13565_13703 = G__13735;
continue;
} else {
var temp__4425__auto___13736__$1 = cljs.core.seq.call(null,seq__13562_13700);
if(temp__4425__auto___13736__$1){
var seq__13562_13737__$1 = temp__4425__auto___13736__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13562_13737__$1)){
var c__5031__auto___13738 = cljs.core.chunk_first.call(null,seq__13562_13737__$1);
var G__13739 = cljs.core.chunk_rest.call(null,seq__13562_13737__$1);
var G__13740 = c__5031__auto___13738;
var G__13741 = cljs.core.count.call(null,c__5031__auto___13738);
var G__13742 = (0);
seq__13562_13700 = G__13739;
chunk__13563_13701 = G__13740;
count__13564_13702 = G__13741;
i__13565_13703 = G__13742;
continue;
} else {
var vec__13573_13743 = cljs.core.first.call(null,seq__13562_13737__$1);
var line_13744 = cljs.core.nth.call(null,vec__13573_13743,(0),null);
var cols_13745 = cljs.core.nth.call(null,vec__13573_13743,(1),null);
var seq__13574_13746 = cljs.core.seq.call(null,cols_13745);
var chunk__13575_13747 = null;
var count__13576_13748 = (0);
var i__13577_13749 = (0);
while(true){
if((i__13577_13749 < count__13576_13748)){
var vec__13578_13750 = cljs.core._nth.call(null,chunk__13575_13747,i__13577_13749);
var col_13751 = cljs.core.nth.call(null,vec__13578_13750,(0),null);
var infos_13752 = cljs.core.nth.call(null,vec__13578_13750,(1),null);
encode_cols.call(null,infos_13752,source_idx_13696,line_13744,col_13751);

var G__13753 = seq__13574_13746;
var G__13754 = chunk__13575_13747;
var G__13755 = count__13576_13748;
var G__13756 = (i__13577_13749 + (1));
seq__13574_13746 = G__13753;
chunk__13575_13747 = G__13754;
count__13576_13748 = G__13755;
i__13577_13749 = G__13756;
continue;
} else {
var temp__4425__auto___13757__$2 = cljs.core.seq.call(null,seq__13574_13746);
if(temp__4425__auto___13757__$2){
var seq__13574_13758__$1 = temp__4425__auto___13757__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13574_13758__$1)){
var c__5031__auto___13759 = cljs.core.chunk_first.call(null,seq__13574_13758__$1);
var G__13760 = cljs.core.chunk_rest.call(null,seq__13574_13758__$1);
var G__13761 = c__5031__auto___13759;
var G__13762 = cljs.core.count.call(null,c__5031__auto___13759);
var G__13763 = (0);
seq__13574_13746 = G__13760;
chunk__13575_13747 = G__13761;
count__13576_13748 = G__13762;
i__13577_13749 = G__13763;
continue;
} else {
var vec__13579_13764 = cljs.core.first.call(null,seq__13574_13758__$1);
var col_13765 = cljs.core.nth.call(null,vec__13579_13764,(0),null);
var infos_13766 = cljs.core.nth.call(null,vec__13579_13764,(1),null);
encode_cols.call(null,infos_13766,source_idx_13696,line_13744,col_13765);

var G__13767 = cljs.core.next.call(null,seq__13574_13758__$1);
var G__13768 = null;
var G__13769 = (0);
var G__13770 = (0);
seq__13574_13746 = G__13767;
chunk__13575_13747 = G__13768;
count__13576_13748 = G__13769;
i__13577_13749 = G__13770;
continue;
}
} else {
}
}
break;
}

var G__13771 = cljs.core.next.call(null,seq__13562_13737__$1);
var G__13772 = null;
var G__13773 = (0);
var G__13774 = (0);
seq__13562_13700 = G__13771;
chunk__13563_13701 = G__13772;
count__13564_13702 = G__13773;
i__13565_13703 = G__13774;
continue;
}
} else {
}
}
break;
}

var G__13775 = cljs.core.next.call(null,seq__13536_13689__$1);
var G__13776 = null;
var G__13777 = (0);
var G__13778 = (0);
seq__13536_13600 = G__13775;
chunk__13537_13601 = G__13776;
count__13538_13602 = G__13777;
i__13539_13603 = G__13778;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__13580 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13479_SHARP_){
return [cljs.core.str(p1__13479_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13480_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__13480_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13481_SHARP_){
return clojure.string.join.call(null,",",p1__13481_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__13580__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__13581 = G__13580;
goog.object.set(G__13581,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__13581;
})():G__13580);
return G__13580__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__13784 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__13784,(0),null);
var col_map = cljs.core.nth.call(null,vec__13784,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__13785 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__13785,(0),null);
var infos = cljs.core.nth.call(null,vec__13785,(1),null);
var G__13789 = cljs.core.next.call(null,col_map_seq);
var G__13790 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__13785,col,infos,vec__13784,line,col_map){
return (function (v,p__13786){
var map__13787 = p__13786;
var map__13787__$1 = ((((!((map__13787 == null)))?((((map__13787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13787):map__13787);
var gline = cljs.core.get.call(null,map__13787__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__13787__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__13785,col,infos,vec__13784,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__13789;
new_cols = G__13790;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__13791 = cljs.core.next.call(null,line_map_seq);
var G__13792 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__13791;
new_lines = G__13792;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__13843_13893 = cljs.core.seq.call(null,reverse_map);
var chunk__13844_13894 = null;
var count__13845_13895 = (0);
var i__13846_13896 = (0);
while(true){
if((i__13846_13896 < count__13845_13895)){
var vec__13847_13897 = cljs.core._nth.call(null,chunk__13844_13894,i__13846_13896);
var line_13898 = cljs.core.nth.call(null,vec__13847_13897,(0),null);
var columns_13899 = cljs.core.nth.call(null,vec__13847_13897,(1),null);
var seq__13848_13900 = cljs.core.seq.call(null,columns_13899);
var chunk__13849_13901 = null;
var count__13850_13902 = (0);
var i__13851_13903 = (0);
while(true){
if((i__13851_13903 < count__13850_13902)){
var vec__13852_13904 = cljs.core._nth.call(null,chunk__13849_13901,i__13851_13903);
var column_13905 = cljs.core.nth.call(null,vec__13852_13904,(0),null);
var column_info_13906 = cljs.core.nth.call(null,vec__13852_13904,(1),null);
var seq__13853_13907 = cljs.core.seq.call(null,column_info_13906);
var chunk__13854_13908 = null;
var count__13855_13909 = (0);
var i__13856_13910 = (0);
while(true){
if((i__13856_13910 < count__13855_13909)){
var map__13857_13911 = cljs.core._nth.call(null,chunk__13854_13908,i__13856_13910);
var map__13857_13912__$1 = ((((!((map__13857_13911 == null)))?((((map__13857_13911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13857_13911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13857_13911):map__13857_13911);
var gline_13913 = cljs.core.get.call(null,map__13857_13912__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13914 = cljs.core.get.call(null,map__13857_13912__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13915 = cljs.core.get.call(null,map__13857_13912__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13913], null),cljs.core.fnil.call(null,((function (seq__13853_13907,chunk__13854_13908,count__13855_13909,i__13856_13910,seq__13848_13900,chunk__13849_13901,count__13850_13902,i__13851_13903,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13857_13911,map__13857_13912__$1,gline_13913,gcol_13914,name_13915,vec__13852_13904,column_13905,column_info_13906,vec__13847_13897,line_13898,columns_13899,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_13905], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13898,new cljs.core.Keyword(null,"col","col",-1959363084),column_13905,new cljs.core.Keyword(null,"name","name",1843675177),name_13915], null));
});})(seq__13853_13907,chunk__13854_13908,count__13855_13909,i__13856_13910,seq__13848_13900,chunk__13849_13901,count__13850_13902,i__13851_13903,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13857_13911,map__13857_13912__$1,gline_13913,gcol_13914,name_13915,vec__13852_13904,column_13905,column_info_13906,vec__13847_13897,line_13898,columns_13899,inverted))
,cljs.core.sorted_map.call(null)));

var G__13916 = seq__13853_13907;
var G__13917 = chunk__13854_13908;
var G__13918 = count__13855_13909;
var G__13919 = (i__13856_13910 + (1));
seq__13853_13907 = G__13916;
chunk__13854_13908 = G__13917;
count__13855_13909 = G__13918;
i__13856_13910 = G__13919;
continue;
} else {
var temp__4425__auto___13920 = cljs.core.seq.call(null,seq__13853_13907);
if(temp__4425__auto___13920){
var seq__13853_13921__$1 = temp__4425__auto___13920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13853_13921__$1)){
var c__5031__auto___13922 = cljs.core.chunk_first.call(null,seq__13853_13921__$1);
var G__13923 = cljs.core.chunk_rest.call(null,seq__13853_13921__$1);
var G__13924 = c__5031__auto___13922;
var G__13925 = cljs.core.count.call(null,c__5031__auto___13922);
var G__13926 = (0);
seq__13853_13907 = G__13923;
chunk__13854_13908 = G__13924;
count__13855_13909 = G__13925;
i__13856_13910 = G__13926;
continue;
} else {
var map__13859_13927 = cljs.core.first.call(null,seq__13853_13921__$1);
var map__13859_13928__$1 = ((((!((map__13859_13927 == null)))?((((map__13859_13927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13859_13927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13859_13927):map__13859_13927);
var gline_13929 = cljs.core.get.call(null,map__13859_13928__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13930 = cljs.core.get.call(null,map__13859_13928__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13931 = cljs.core.get.call(null,map__13859_13928__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13929], null),cljs.core.fnil.call(null,((function (seq__13853_13907,chunk__13854_13908,count__13855_13909,i__13856_13910,seq__13848_13900,chunk__13849_13901,count__13850_13902,i__13851_13903,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13859_13927,map__13859_13928__$1,gline_13929,gcol_13930,name_13931,seq__13853_13921__$1,temp__4425__auto___13920,vec__13852_13904,column_13905,column_info_13906,vec__13847_13897,line_13898,columns_13899,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_13905], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13898,new cljs.core.Keyword(null,"col","col",-1959363084),column_13905,new cljs.core.Keyword(null,"name","name",1843675177),name_13931], null));
});})(seq__13853_13907,chunk__13854_13908,count__13855_13909,i__13856_13910,seq__13848_13900,chunk__13849_13901,count__13850_13902,i__13851_13903,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13859_13927,map__13859_13928__$1,gline_13929,gcol_13930,name_13931,seq__13853_13921__$1,temp__4425__auto___13920,vec__13852_13904,column_13905,column_info_13906,vec__13847_13897,line_13898,columns_13899,inverted))
,cljs.core.sorted_map.call(null)));

var G__13932 = cljs.core.next.call(null,seq__13853_13921__$1);
var G__13933 = null;
var G__13934 = (0);
var G__13935 = (0);
seq__13853_13907 = G__13932;
chunk__13854_13908 = G__13933;
count__13855_13909 = G__13934;
i__13856_13910 = G__13935;
continue;
}
} else {
}
}
break;
}

var G__13936 = seq__13848_13900;
var G__13937 = chunk__13849_13901;
var G__13938 = count__13850_13902;
var G__13939 = (i__13851_13903 + (1));
seq__13848_13900 = G__13936;
chunk__13849_13901 = G__13937;
count__13850_13902 = G__13938;
i__13851_13903 = G__13939;
continue;
} else {
var temp__4425__auto___13940 = cljs.core.seq.call(null,seq__13848_13900);
if(temp__4425__auto___13940){
var seq__13848_13941__$1 = temp__4425__auto___13940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13848_13941__$1)){
var c__5031__auto___13942 = cljs.core.chunk_first.call(null,seq__13848_13941__$1);
var G__13943 = cljs.core.chunk_rest.call(null,seq__13848_13941__$1);
var G__13944 = c__5031__auto___13942;
var G__13945 = cljs.core.count.call(null,c__5031__auto___13942);
var G__13946 = (0);
seq__13848_13900 = G__13943;
chunk__13849_13901 = G__13944;
count__13850_13902 = G__13945;
i__13851_13903 = G__13946;
continue;
} else {
var vec__13861_13947 = cljs.core.first.call(null,seq__13848_13941__$1);
var column_13948 = cljs.core.nth.call(null,vec__13861_13947,(0),null);
var column_info_13949 = cljs.core.nth.call(null,vec__13861_13947,(1),null);
var seq__13862_13950 = cljs.core.seq.call(null,column_info_13949);
var chunk__13863_13951 = null;
var count__13864_13952 = (0);
var i__13865_13953 = (0);
while(true){
if((i__13865_13953 < count__13864_13952)){
var map__13866_13954 = cljs.core._nth.call(null,chunk__13863_13951,i__13865_13953);
var map__13866_13955__$1 = ((((!((map__13866_13954 == null)))?((((map__13866_13954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13866_13954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13866_13954):map__13866_13954);
var gline_13956 = cljs.core.get.call(null,map__13866_13955__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13957 = cljs.core.get.call(null,map__13866_13955__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13958 = cljs.core.get.call(null,map__13866_13955__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13956], null),cljs.core.fnil.call(null,((function (seq__13862_13950,chunk__13863_13951,count__13864_13952,i__13865_13953,seq__13848_13900,chunk__13849_13901,count__13850_13902,i__13851_13903,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13866_13954,map__13866_13955__$1,gline_13956,gcol_13957,name_13958,vec__13861_13947,column_13948,column_info_13949,seq__13848_13941__$1,temp__4425__auto___13940,vec__13847_13897,line_13898,columns_13899,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_13948], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13898,new cljs.core.Keyword(null,"col","col",-1959363084),column_13948,new cljs.core.Keyword(null,"name","name",1843675177),name_13958], null));
});})(seq__13862_13950,chunk__13863_13951,count__13864_13952,i__13865_13953,seq__13848_13900,chunk__13849_13901,count__13850_13902,i__13851_13903,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13866_13954,map__13866_13955__$1,gline_13956,gcol_13957,name_13958,vec__13861_13947,column_13948,column_info_13949,seq__13848_13941__$1,temp__4425__auto___13940,vec__13847_13897,line_13898,columns_13899,inverted))
,cljs.core.sorted_map.call(null)));

var G__13959 = seq__13862_13950;
var G__13960 = chunk__13863_13951;
var G__13961 = count__13864_13952;
var G__13962 = (i__13865_13953 + (1));
seq__13862_13950 = G__13959;
chunk__13863_13951 = G__13960;
count__13864_13952 = G__13961;
i__13865_13953 = G__13962;
continue;
} else {
var temp__4425__auto___13963__$1 = cljs.core.seq.call(null,seq__13862_13950);
if(temp__4425__auto___13963__$1){
var seq__13862_13964__$1 = temp__4425__auto___13963__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13862_13964__$1)){
var c__5031__auto___13965 = cljs.core.chunk_first.call(null,seq__13862_13964__$1);
var G__13966 = cljs.core.chunk_rest.call(null,seq__13862_13964__$1);
var G__13967 = c__5031__auto___13965;
var G__13968 = cljs.core.count.call(null,c__5031__auto___13965);
var G__13969 = (0);
seq__13862_13950 = G__13966;
chunk__13863_13951 = G__13967;
count__13864_13952 = G__13968;
i__13865_13953 = G__13969;
continue;
} else {
var map__13868_13970 = cljs.core.first.call(null,seq__13862_13964__$1);
var map__13868_13971__$1 = ((((!((map__13868_13970 == null)))?((((map__13868_13970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13868_13970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13868_13970):map__13868_13970);
var gline_13972 = cljs.core.get.call(null,map__13868_13971__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13973 = cljs.core.get.call(null,map__13868_13971__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13974 = cljs.core.get.call(null,map__13868_13971__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13972], null),cljs.core.fnil.call(null,((function (seq__13862_13950,chunk__13863_13951,count__13864_13952,i__13865_13953,seq__13848_13900,chunk__13849_13901,count__13850_13902,i__13851_13903,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13868_13970,map__13868_13971__$1,gline_13972,gcol_13973,name_13974,seq__13862_13964__$1,temp__4425__auto___13963__$1,vec__13861_13947,column_13948,column_info_13949,seq__13848_13941__$1,temp__4425__auto___13940,vec__13847_13897,line_13898,columns_13899,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_13948], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13898,new cljs.core.Keyword(null,"col","col",-1959363084),column_13948,new cljs.core.Keyword(null,"name","name",1843675177),name_13974], null));
});})(seq__13862_13950,chunk__13863_13951,count__13864_13952,i__13865_13953,seq__13848_13900,chunk__13849_13901,count__13850_13902,i__13851_13903,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13868_13970,map__13868_13971__$1,gline_13972,gcol_13973,name_13974,seq__13862_13964__$1,temp__4425__auto___13963__$1,vec__13861_13947,column_13948,column_info_13949,seq__13848_13941__$1,temp__4425__auto___13940,vec__13847_13897,line_13898,columns_13899,inverted))
,cljs.core.sorted_map.call(null)));

var G__13975 = cljs.core.next.call(null,seq__13862_13964__$1);
var G__13976 = null;
var G__13977 = (0);
var G__13978 = (0);
seq__13862_13950 = G__13975;
chunk__13863_13951 = G__13976;
count__13864_13952 = G__13977;
i__13865_13953 = G__13978;
continue;
}
} else {
}
}
break;
}

var G__13979 = cljs.core.next.call(null,seq__13848_13941__$1);
var G__13980 = null;
var G__13981 = (0);
var G__13982 = (0);
seq__13848_13900 = G__13979;
chunk__13849_13901 = G__13980;
count__13850_13902 = G__13981;
i__13851_13903 = G__13982;
continue;
}
} else {
}
}
break;
}

var G__13983 = seq__13843_13893;
var G__13984 = chunk__13844_13894;
var G__13985 = count__13845_13895;
var G__13986 = (i__13846_13896 + (1));
seq__13843_13893 = G__13983;
chunk__13844_13894 = G__13984;
count__13845_13895 = G__13985;
i__13846_13896 = G__13986;
continue;
} else {
var temp__4425__auto___13987 = cljs.core.seq.call(null,seq__13843_13893);
if(temp__4425__auto___13987){
var seq__13843_13988__$1 = temp__4425__auto___13987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13843_13988__$1)){
var c__5031__auto___13989 = cljs.core.chunk_first.call(null,seq__13843_13988__$1);
var G__13990 = cljs.core.chunk_rest.call(null,seq__13843_13988__$1);
var G__13991 = c__5031__auto___13989;
var G__13992 = cljs.core.count.call(null,c__5031__auto___13989);
var G__13993 = (0);
seq__13843_13893 = G__13990;
chunk__13844_13894 = G__13991;
count__13845_13895 = G__13992;
i__13846_13896 = G__13993;
continue;
} else {
var vec__13870_13994 = cljs.core.first.call(null,seq__13843_13988__$1);
var line_13995 = cljs.core.nth.call(null,vec__13870_13994,(0),null);
var columns_13996 = cljs.core.nth.call(null,vec__13870_13994,(1),null);
var seq__13871_13997 = cljs.core.seq.call(null,columns_13996);
var chunk__13872_13998 = null;
var count__13873_13999 = (0);
var i__13874_14000 = (0);
while(true){
if((i__13874_14000 < count__13873_13999)){
var vec__13875_14001 = cljs.core._nth.call(null,chunk__13872_13998,i__13874_14000);
var column_14002 = cljs.core.nth.call(null,vec__13875_14001,(0),null);
var column_info_14003 = cljs.core.nth.call(null,vec__13875_14001,(1),null);
var seq__13876_14004 = cljs.core.seq.call(null,column_info_14003);
var chunk__13877_14005 = null;
var count__13878_14006 = (0);
var i__13879_14007 = (0);
while(true){
if((i__13879_14007 < count__13878_14006)){
var map__13880_14008 = cljs.core._nth.call(null,chunk__13877_14005,i__13879_14007);
var map__13880_14009__$1 = ((((!((map__13880_14008 == null)))?((((map__13880_14008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13880_14008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13880_14008):map__13880_14008);
var gline_14010 = cljs.core.get.call(null,map__13880_14009__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14011 = cljs.core.get.call(null,map__13880_14009__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14012 = cljs.core.get.call(null,map__13880_14009__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14010], null),cljs.core.fnil.call(null,((function (seq__13876_14004,chunk__13877_14005,count__13878_14006,i__13879_14007,seq__13871_13997,chunk__13872_13998,count__13873_13999,i__13874_14000,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13880_14008,map__13880_14009__$1,gline_14010,gcol_14011,name_14012,vec__13875_14001,column_14002,column_info_14003,vec__13870_13994,line_13995,columns_13996,seq__13843_13988__$1,temp__4425__auto___13987,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_14002], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13995,new cljs.core.Keyword(null,"col","col",-1959363084),column_14002,new cljs.core.Keyword(null,"name","name",1843675177),name_14012], null));
});})(seq__13876_14004,chunk__13877_14005,count__13878_14006,i__13879_14007,seq__13871_13997,chunk__13872_13998,count__13873_13999,i__13874_14000,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13880_14008,map__13880_14009__$1,gline_14010,gcol_14011,name_14012,vec__13875_14001,column_14002,column_info_14003,vec__13870_13994,line_13995,columns_13996,seq__13843_13988__$1,temp__4425__auto___13987,inverted))
,cljs.core.sorted_map.call(null)));

var G__14013 = seq__13876_14004;
var G__14014 = chunk__13877_14005;
var G__14015 = count__13878_14006;
var G__14016 = (i__13879_14007 + (1));
seq__13876_14004 = G__14013;
chunk__13877_14005 = G__14014;
count__13878_14006 = G__14015;
i__13879_14007 = G__14016;
continue;
} else {
var temp__4425__auto___14017__$1 = cljs.core.seq.call(null,seq__13876_14004);
if(temp__4425__auto___14017__$1){
var seq__13876_14018__$1 = temp__4425__auto___14017__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13876_14018__$1)){
var c__5031__auto___14019 = cljs.core.chunk_first.call(null,seq__13876_14018__$1);
var G__14020 = cljs.core.chunk_rest.call(null,seq__13876_14018__$1);
var G__14021 = c__5031__auto___14019;
var G__14022 = cljs.core.count.call(null,c__5031__auto___14019);
var G__14023 = (0);
seq__13876_14004 = G__14020;
chunk__13877_14005 = G__14021;
count__13878_14006 = G__14022;
i__13879_14007 = G__14023;
continue;
} else {
var map__13882_14024 = cljs.core.first.call(null,seq__13876_14018__$1);
var map__13882_14025__$1 = ((((!((map__13882_14024 == null)))?((((map__13882_14024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13882_14024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13882_14024):map__13882_14024);
var gline_14026 = cljs.core.get.call(null,map__13882_14025__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14027 = cljs.core.get.call(null,map__13882_14025__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14028 = cljs.core.get.call(null,map__13882_14025__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14026], null),cljs.core.fnil.call(null,((function (seq__13876_14004,chunk__13877_14005,count__13878_14006,i__13879_14007,seq__13871_13997,chunk__13872_13998,count__13873_13999,i__13874_14000,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13882_14024,map__13882_14025__$1,gline_14026,gcol_14027,name_14028,seq__13876_14018__$1,temp__4425__auto___14017__$1,vec__13875_14001,column_14002,column_info_14003,vec__13870_13994,line_13995,columns_13996,seq__13843_13988__$1,temp__4425__auto___13987,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_14002], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13995,new cljs.core.Keyword(null,"col","col",-1959363084),column_14002,new cljs.core.Keyword(null,"name","name",1843675177),name_14028], null));
});})(seq__13876_14004,chunk__13877_14005,count__13878_14006,i__13879_14007,seq__13871_13997,chunk__13872_13998,count__13873_13999,i__13874_14000,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13882_14024,map__13882_14025__$1,gline_14026,gcol_14027,name_14028,seq__13876_14018__$1,temp__4425__auto___14017__$1,vec__13875_14001,column_14002,column_info_14003,vec__13870_13994,line_13995,columns_13996,seq__13843_13988__$1,temp__4425__auto___13987,inverted))
,cljs.core.sorted_map.call(null)));

var G__14029 = cljs.core.next.call(null,seq__13876_14018__$1);
var G__14030 = null;
var G__14031 = (0);
var G__14032 = (0);
seq__13876_14004 = G__14029;
chunk__13877_14005 = G__14030;
count__13878_14006 = G__14031;
i__13879_14007 = G__14032;
continue;
}
} else {
}
}
break;
}

var G__14033 = seq__13871_13997;
var G__14034 = chunk__13872_13998;
var G__14035 = count__13873_13999;
var G__14036 = (i__13874_14000 + (1));
seq__13871_13997 = G__14033;
chunk__13872_13998 = G__14034;
count__13873_13999 = G__14035;
i__13874_14000 = G__14036;
continue;
} else {
var temp__4425__auto___14037__$1 = cljs.core.seq.call(null,seq__13871_13997);
if(temp__4425__auto___14037__$1){
var seq__13871_14038__$1 = temp__4425__auto___14037__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13871_14038__$1)){
var c__5031__auto___14039 = cljs.core.chunk_first.call(null,seq__13871_14038__$1);
var G__14040 = cljs.core.chunk_rest.call(null,seq__13871_14038__$1);
var G__14041 = c__5031__auto___14039;
var G__14042 = cljs.core.count.call(null,c__5031__auto___14039);
var G__14043 = (0);
seq__13871_13997 = G__14040;
chunk__13872_13998 = G__14041;
count__13873_13999 = G__14042;
i__13874_14000 = G__14043;
continue;
} else {
var vec__13884_14044 = cljs.core.first.call(null,seq__13871_14038__$1);
var column_14045 = cljs.core.nth.call(null,vec__13884_14044,(0),null);
var column_info_14046 = cljs.core.nth.call(null,vec__13884_14044,(1),null);
var seq__13885_14047 = cljs.core.seq.call(null,column_info_14046);
var chunk__13886_14048 = null;
var count__13887_14049 = (0);
var i__13888_14050 = (0);
while(true){
if((i__13888_14050 < count__13887_14049)){
var map__13889_14051 = cljs.core._nth.call(null,chunk__13886_14048,i__13888_14050);
var map__13889_14052__$1 = ((((!((map__13889_14051 == null)))?((((map__13889_14051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13889_14051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13889_14051):map__13889_14051);
var gline_14053 = cljs.core.get.call(null,map__13889_14052__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14054 = cljs.core.get.call(null,map__13889_14052__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14055 = cljs.core.get.call(null,map__13889_14052__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14053], null),cljs.core.fnil.call(null,((function (seq__13885_14047,chunk__13886_14048,count__13887_14049,i__13888_14050,seq__13871_13997,chunk__13872_13998,count__13873_13999,i__13874_14000,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13889_14051,map__13889_14052__$1,gline_14053,gcol_14054,name_14055,vec__13884_14044,column_14045,column_info_14046,seq__13871_14038__$1,temp__4425__auto___14037__$1,vec__13870_13994,line_13995,columns_13996,seq__13843_13988__$1,temp__4425__auto___13987,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_14045], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13995,new cljs.core.Keyword(null,"col","col",-1959363084),column_14045,new cljs.core.Keyword(null,"name","name",1843675177),name_14055], null));
});})(seq__13885_14047,chunk__13886_14048,count__13887_14049,i__13888_14050,seq__13871_13997,chunk__13872_13998,count__13873_13999,i__13874_14000,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13889_14051,map__13889_14052__$1,gline_14053,gcol_14054,name_14055,vec__13884_14044,column_14045,column_info_14046,seq__13871_14038__$1,temp__4425__auto___14037__$1,vec__13870_13994,line_13995,columns_13996,seq__13843_13988__$1,temp__4425__auto___13987,inverted))
,cljs.core.sorted_map.call(null)));

var G__14056 = seq__13885_14047;
var G__14057 = chunk__13886_14048;
var G__14058 = count__13887_14049;
var G__14059 = (i__13888_14050 + (1));
seq__13885_14047 = G__14056;
chunk__13886_14048 = G__14057;
count__13887_14049 = G__14058;
i__13888_14050 = G__14059;
continue;
} else {
var temp__4425__auto___14060__$2 = cljs.core.seq.call(null,seq__13885_14047);
if(temp__4425__auto___14060__$2){
var seq__13885_14061__$1 = temp__4425__auto___14060__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13885_14061__$1)){
var c__5031__auto___14062 = cljs.core.chunk_first.call(null,seq__13885_14061__$1);
var G__14063 = cljs.core.chunk_rest.call(null,seq__13885_14061__$1);
var G__14064 = c__5031__auto___14062;
var G__14065 = cljs.core.count.call(null,c__5031__auto___14062);
var G__14066 = (0);
seq__13885_14047 = G__14063;
chunk__13886_14048 = G__14064;
count__13887_14049 = G__14065;
i__13888_14050 = G__14066;
continue;
} else {
var map__13891_14067 = cljs.core.first.call(null,seq__13885_14061__$1);
var map__13891_14068__$1 = ((((!((map__13891_14067 == null)))?((((map__13891_14067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13891_14067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13891_14067):map__13891_14067);
var gline_14069 = cljs.core.get.call(null,map__13891_14068__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14070 = cljs.core.get.call(null,map__13891_14068__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14071 = cljs.core.get.call(null,map__13891_14068__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14069], null),cljs.core.fnil.call(null,((function (seq__13885_14047,chunk__13886_14048,count__13887_14049,i__13888_14050,seq__13871_13997,chunk__13872_13998,count__13873_13999,i__13874_14000,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13891_14067,map__13891_14068__$1,gline_14069,gcol_14070,name_14071,seq__13885_14061__$1,temp__4425__auto___14060__$2,vec__13884_14044,column_14045,column_info_14046,seq__13871_14038__$1,temp__4425__auto___14037__$1,vec__13870_13994,line_13995,columns_13996,seq__13843_13988__$1,temp__4425__auto___13987,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_14045], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13995,new cljs.core.Keyword(null,"col","col",-1959363084),column_14045,new cljs.core.Keyword(null,"name","name",1843675177),name_14071], null));
});})(seq__13885_14047,chunk__13886_14048,count__13887_14049,i__13888_14050,seq__13871_13997,chunk__13872_13998,count__13873_13999,i__13874_14000,seq__13843_13893,chunk__13844_13894,count__13845_13895,i__13846_13896,map__13891_14067,map__13891_14068__$1,gline_14069,gcol_14070,name_14071,seq__13885_14061__$1,temp__4425__auto___14060__$2,vec__13884_14044,column_14045,column_info_14046,seq__13871_14038__$1,temp__4425__auto___14037__$1,vec__13870_13994,line_13995,columns_13996,seq__13843_13988__$1,temp__4425__auto___13987,inverted))
,cljs.core.sorted_map.call(null)));

var G__14072 = cljs.core.next.call(null,seq__13885_14061__$1);
var G__14073 = null;
var G__14074 = (0);
var G__14075 = (0);
seq__13885_14047 = G__14072;
chunk__13886_14048 = G__14073;
count__13887_14049 = G__14074;
i__13888_14050 = G__14075;
continue;
}
} else {
}
}
break;
}

var G__14076 = cljs.core.next.call(null,seq__13871_14038__$1);
var G__14077 = null;
var G__14078 = (0);
var G__14079 = (0);
seq__13871_13997 = G__14076;
chunk__13872_13998 = G__14077;
count__13873_13999 = G__14078;
i__13874_14000 = G__14079;
continue;
}
} else {
}
}
break;
}

var G__14080 = cljs.core.next.call(null,seq__13843_13988__$1);
var G__14081 = null;
var G__14082 = (0);
var G__14083 = (0);
seq__13843_13893 = G__14080;
chunk__13844_13894 = G__14081;
count__13845_13895 = G__14082;
i__13846_13896 = G__14083;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map