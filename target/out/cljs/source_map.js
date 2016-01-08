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
return cljs.core.reduce.call(null,(function (m,p__15167){
var vec__15168 = p__15167;
var i = cljs.core.nth.call(null,vec__15168,(0),null);
var v = cljs.core.nth.call(null,vec__15168,(1),null);
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
var vec__15170 = seg;
var gcol = cljs.core.nth.call(null,vec__15170,(0),null);
var source = cljs.core.nth.call(null,vec__15170,(1),null);
var line = cljs.core.nth.call(null,vec__15170,(2),null);
var col = cljs.core.nth.call(null,vec__15170,(3),null);
var name = cljs.core.nth.call(null,vec__15170,(4),null);
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
var vec__15173 = seg;
var gcol = cljs.core.nth.call(null,vec__15173,(0),null);
var source = cljs.core.nth.call(null,vec__15173,(1),null);
var line = cljs.core.nth.call(null,vec__15173,(2),null);
var col = cljs.core.nth.call(null,vec__15173,(3),null);
var name = cljs.core.nth.call(null,vec__15173,(4),null);
var vec__15174 = relseg;
var rgcol = cljs.core.nth.call(null,vec__15174,(0),null);
var rsource = cljs.core.nth.call(null,vec__15174,(1),null);
var rline = cljs.core.nth.call(null,vec__15174,(2),null);
var rcol = cljs.core.nth.call(null,vec__15174,(3),null);
var rname = cljs.core.nth.call(null,vec__15174,(4),null);
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
var map__15177 = segmap;
var map__15177__$1 = ((((!((map__15177 == null)))?((((map__15177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15177):map__15177);
var gcol = cljs.core.get.call(null,map__15177__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__15177__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__15177__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__15177__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__15177__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__15177,map__15177__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__15177,map__15177__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__15177,map__15177__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__15177,map__15177__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__15177,map__15177__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__15177,map__15177__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 * mapping original ClojureScript source locations to the generated
 * JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(){
var args15179 = [];
var len__5286__auto___15183 = arguments.length;
var i__5287__auto___15184 = (0);
while(true){
if((i__5287__auto___15184 < len__5286__auto___15183)){
args15179.push((arguments[i__5287__auto___15184]));

var G__15185 = (i__5287__auto___15184 + (1));
i__5287__auto___15184 = G__15185;
continue;
} else {
}
break;
}

var G__15181 = args15179.length;
switch (G__15181) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15179.length)].join('')));

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
var vec__15182 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__15187 = cljs.core.next.call(null,segs__$1);
var G__15188 = nrelseg;
var G__15189 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__15187;
relseg__$1 = G__15188;
result__$1 = G__15189;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__15182,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__15182,(1),null);
var G__15190 = (gline + (1));
var G__15191 = cljs.core.next.call(null,lines__$1);
var G__15192 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__15193 = result__$1;
gline = G__15190;
lines__$1 = G__15191;
relseg = G__15192;
result = G__15193;
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
var map__15197 = segmap;
var map__15197__$1 = ((((!((map__15197 == null)))?((((map__15197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15197):map__15197);
var gcol = cljs.core.get.call(null,map__15197__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__15197__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__15197__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__15197__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__15197__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__15197,map__15197__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__15197,map__15197__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__15194_SHARP_){
return cljs.core.conj.call(null,p1__15194_SHARP_,d__$1);
});})(map__15197,map__15197__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__15197,map__15197__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 * generated JavaScript source locations to the original
 * ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(){
var args15199 = [];
var len__5286__auto___15203 = arguments.length;
var i__5287__auto___15204 = (0);
while(true){
if((i__5287__auto___15204 < len__5286__auto___15203)){
args15199.push((arguments[i__5287__auto___15204]));

var G__15205 = (i__5287__auto___15204 + (1));
i__5287__auto___15204 = G__15205;
continue;
} else {
}
break;
}

var G__15201 = args15199.length;
switch (G__15201) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15199.length)].join('')));

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
var vec__15202 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__15207 = cljs.core.next.call(null,segs__$1);
var G__15208 = nrelseg;
var G__15209 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__15207;
relseg__$1 = G__15208;
result__$1 = G__15209;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__15202,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__15202,(1),null);
var G__15210 = (gline + (1));
var G__15211 = cljs.core.next.call(null,lines__$1);
var G__15212 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__15213 = result__$1;
gline = G__15210;
lines__$1 = G__15211;
relseg = G__15212;
result = G__15213;
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
return (function (p__15220){
var vec__15221 = p__15220;
var _ = cljs.core.nth.call(null,vec__15221,(0),null);
var source = cljs.core.nth.call(null,vec__15221,(1),null);
var line = cljs.core.nth.call(null,vec__15221,(2),null);
var col = cljs.core.nth.call(null,vec__15221,(3),null);
var name = cljs.core.nth.call(null,vec__15221,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__15222){
var vec__15223 = p__15222;
var gcol = cljs.core.nth.call(null,vec__15223,(0),null);
var sidx = cljs.core.nth.call(null,vec__15223,(1),null);
var line = cljs.core.nth.call(null,vec__15223,(2),null);
var col = cljs.core.nth.call(null,vec__15223,(3),null);
var name = cljs.core.nth.call(null,vec__15223,(4),null);
var seg = vec__15223;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__15223,gcol,sidx,line,col,name,seg,relseg){
return (function (p__15224){
var vec__15225 = p__15224;
var _ = cljs.core.nth.call(null,vec__15225,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__15225,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__15225,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__15225,(3),null);
var lname = cljs.core.nth.call(null,vec__15225,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4247__auto__ = name;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__15223,gcol,sidx,line,col,name,seg,relseg))
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
var seq__15279 = cljs.core.seq.call(null,infos);
var chunk__15280 = null;
var count__15281 = (0);
var i__15282 = (0);
while(true){
if((i__15282 < count__15281)){
var info = cljs.core._nth.call(null,chunk__15280,i__15282);
var segv_15329 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_15330 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_15331 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_15330 > (lc_15331 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__15279,chunk__15280,count__15281,i__15282,segv_15329,gline_15330,lc_15331,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_15330 - (lc_15331 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_15329], null));
});})(seq__15279,chunk__15280,count__15281,i__15282,segv_15329,gline_15330,lc_15331,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__15279,chunk__15280,count__15281,i__15282,segv_15329,gline_15330,lc_15331,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15330], null),cljs.core.conj,segv_15329);
});})(seq__15279,chunk__15280,count__15281,i__15282,segv_15329,gline_15330,lc_15331,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__15332 = seq__15279;
var G__15333 = chunk__15280;
var G__15334 = count__15281;
var G__15335 = (i__15282 + (1));
seq__15279 = G__15332;
chunk__15280 = G__15333;
count__15281 = G__15334;
i__15282 = G__15335;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15279);
if(temp__4425__auto__){
var seq__15279__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15279__$1)){
var c__5031__auto__ = cljs.core.chunk_first.call(null,seq__15279__$1);
var G__15336 = cljs.core.chunk_rest.call(null,seq__15279__$1);
var G__15337 = c__5031__auto__;
var G__15338 = cljs.core.count.call(null,c__5031__auto__);
var G__15339 = (0);
seq__15279 = G__15336;
chunk__15280 = G__15337;
count__15281 = G__15338;
i__15282 = G__15339;
continue;
} else {
var info = cljs.core.first.call(null,seq__15279__$1);
var segv_15340 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_15341 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_15342 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_15341 > (lc_15342 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__15279,chunk__15280,count__15281,i__15282,segv_15340,gline_15341,lc_15342,info,seq__15279__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_15341 - (lc_15342 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_15340], null));
});})(seq__15279,chunk__15280,count__15281,i__15282,segv_15340,gline_15341,lc_15342,info,seq__15279__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__15279,chunk__15280,count__15281,i__15282,segv_15340,gline_15341,lc_15342,info,seq__15279__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15341], null),cljs.core.conj,segv_15340);
});})(seq__15279,chunk__15280,count__15281,i__15282,segv_15340,gline_15341,lc_15342,info,seq__15279__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__15343 = cljs.core.next.call(null,seq__15279__$1);
var G__15344 = null;
var G__15345 = (0);
var G__15346 = (0);
seq__15279 = G__15343;
chunk__15280 = G__15344;
count__15281 = G__15345;
i__15282 = G__15346;
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
var seq__15283_15347 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__15284_15348 = null;
var count__15285_15349 = (0);
var i__15286_15350 = (0);
while(true){
if((i__15286_15350 < count__15285_15349)){
var vec__15287_15351 = cljs.core._nth.call(null,chunk__15284_15348,i__15286_15350);
var source_idx_15352 = cljs.core.nth.call(null,vec__15287_15351,(0),null);
var vec__15288_15353 = cljs.core.nth.call(null,vec__15287_15351,(1),null);
var __15354 = cljs.core.nth.call(null,vec__15288_15353,(0),null);
var lines_15355__$1 = cljs.core.nth.call(null,vec__15288_15353,(1),null);
var seq__15289_15356 = cljs.core.seq.call(null,lines_15355__$1);
var chunk__15290_15357 = null;
var count__15291_15358 = (0);
var i__15292_15359 = (0);
while(true){
if((i__15292_15359 < count__15291_15358)){
var vec__15293_15360 = cljs.core._nth.call(null,chunk__15290_15357,i__15292_15359);
var line_15361 = cljs.core.nth.call(null,vec__15293_15360,(0),null);
var cols_15362 = cljs.core.nth.call(null,vec__15293_15360,(1),null);
var seq__15294_15363 = cljs.core.seq.call(null,cols_15362);
var chunk__15295_15364 = null;
var count__15296_15365 = (0);
var i__15297_15366 = (0);
while(true){
if((i__15297_15366 < count__15296_15365)){
var vec__15298_15367 = cljs.core._nth.call(null,chunk__15295_15364,i__15297_15366);
var col_15368 = cljs.core.nth.call(null,vec__15298_15367,(0),null);
var infos_15369 = cljs.core.nth.call(null,vec__15298_15367,(1),null);
encode_cols.call(null,infos_15369,source_idx_15352,line_15361,col_15368);

var G__15370 = seq__15294_15363;
var G__15371 = chunk__15295_15364;
var G__15372 = count__15296_15365;
var G__15373 = (i__15297_15366 + (1));
seq__15294_15363 = G__15370;
chunk__15295_15364 = G__15371;
count__15296_15365 = G__15372;
i__15297_15366 = G__15373;
continue;
} else {
var temp__4425__auto___15374 = cljs.core.seq.call(null,seq__15294_15363);
if(temp__4425__auto___15374){
var seq__15294_15375__$1 = temp__4425__auto___15374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15294_15375__$1)){
var c__5031__auto___15376 = cljs.core.chunk_first.call(null,seq__15294_15375__$1);
var G__15377 = cljs.core.chunk_rest.call(null,seq__15294_15375__$1);
var G__15378 = c__5031__auto___15376;
var G__15379 = cljs.core.count.call(null,c__5031__auto___15376);
var G__15380 = (0);
seq__15294_15363 = G__15377;
chunk__15295_15364 = G__15378;
count__15296_15365 = G__15379;
i__15297_15366 = G__15380;
continue;
} else {
var vec__15299_15381 = cljs.core.first.call(null,seq__15294_15375__$1);
var col_15382 = cljs.core.nth.call(null,vec__15299_15381,(0),null);
var infos_15383 = cljs.core.nth.call(null,vec__15299_15381,(1),null);
encode_cols.call(null,infos_15383,source_idx_15352,line_15361,col_15382);

var G__15384 = cljs.core.next.call(null,seq__15294_15375__$1);
var G__15385 = null;
var G__15386 = (0);
var G__15387 = (0);
seq__15294_15363 = G__15384;
chunk__15295_15364 = G__15385;
count__15296_15365 = G__15386;
i__15297_15366 = G__15387;
continue;
}
} else {
}
}
break;
}

var G__15388 = seq__15289_15356;
var G__15389 = chunk__15290_15357;
var G__15390 = count__15291_15358;
var G__15391 = (i__15292_15359 + (1));
seq__15289_15356 = G__15388;
chunk__15290_15357 = G__15389;
count__15291_15358 = G__15390;
i__15292_15359 = G__15391;
continue;
} else {
var temp__4425__auto___15392 = cljs.core.seq.call(null,seq__15289_15356);
if(temp__4425__auto___15392){
var seq__15289_15393__$1 = temp__4425__auto___15392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15289_15393__$1)){
var c__5031__auto___15394 = cljs.core.chunk_first.call(null,seq__15289_15393__$1);
var G__15395 = cljs.core.chunk_rest.call(null,seq__15289_15393__$1);
var G__15396 = c__5031__auto___15394;
var G__15397 = cljs.core.count.call(null,c__5031__auto___15394);
var G__15398 = (0);
seq__15289_15356 = G__15395;
chunk__15290_15357 = G__15396;
count__15291_15358 = G__15397;
i__15292_15359 = G__15398;
continue;
} else {
var vec__15300_15399 = cljs.core.first.call(null,seq__15289_15393__$1);
var line_15400 = cljs.core.nth.call(null,vec__15300_15399,(0),null);
var cols_15401 = cljs.core.nth.call(null,vec__15300_15399,(1),null);
var seq__15301_15402 = cljs.core.seq.call(null,cols_15401);
var chunk__15302_15403 = null;
var count__15303_15404 = (0);
var i__15304_15405 = (0);
while(true){
if((i__15304_15405 < count__15303_15404)){
var vec__15305_15406 = cljs.core._nth.call(null,chunk__15302_15403,i__15304_15405);
var col_15407 = cljs.core.nth.call(null,vec__15305_15406,(0),null);
var infos_15408 = cljs.core.nth.call(null,vec__15305_15406,(1),null);
encode_cols.call(null,infos_15408,source_idx_15352,line_15400,col_15407);

var G__15409 = seq__15301_15402;
var G__15410 = chunk__15302_15403;
var G__15411 = count__15303_15404;
var G__15412 = (i__15304_15405 + (1));
seq__15301_15402 = G__15409;
chunk__15302_15403 = G__15410;
count__15303_15404 = G__15411;
i__15304_15405 = G__15412;
continue;
} else {
var temp__4425__auto___15413__$1 = cljs.core.seq.call(null,seq__15301_15402);
if(temp__4425__auto___15413__$1){
var seq__15301_15414__$1 = temp__4425__auto___15413__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15301_15414__$1)){
var c__5031__auto___15415 = cljs.core.chunk_first.call(null,seq__15301_15414__$1);
var G__15416 = cljs.core.chunk_rest.call(null,seq__15301_15414__$1);
var G__15417 = c__5031__auto___15415;
var G__15418 = cljs.core.count.call(null,c__5031__auto___15415);
var G__15419 = (0);
seq__15301_15402 = G__15416;
chunk__15302_15403 = G__15417;
count__15303_15404 = G__15418;
i__15304_15405 = G__15419;
continue;
} else {
var vec__15306_15420 = cljs.core.first.call(null,seq__15301_15414__$1);
var col_15421 = cljs.core.nth.call(null,vec__15306_15420,(0),null);
var infos_15422 = cljs.core.nth.call(null,vec__15306_15420,(1),null);
encode_cols.call(null,infos_15422,source_idx_15352,line_15400,col_15421);

var G__15423 = cljs.core.next.call(null,seq__15301_15414__$1);
var G__15424 = null;
var G__15425 = (0);
var G__15426 = (0);
seq__15301_15402 = G__15423;
chunk__15302_15403 = G__15424;
count__15303_15404 = G__15425;
i__15304_15405 = G__15426;
continue;
}
} else {
}
}
break;
}

var G__15427 = cljs.core.next.call(null,seq__15289_15393__$1);
var G__15428 = null;
var G__15429 = (0);
var G__15430 = (0);
seq__15289_15356 = G__15427;
chunk__15290_15357 = G__15428;
count__15291_15358 = G__15429;
i__15292_15359 = G__15430;
continue;
}
} else {
}
}
break;
}

var G__15431 = seq__15283_15347;
var G__15432 = chunk__15284_15348;
var G__15433 = count__15285_15349;
var G__15434 = (i__15286_15350 + (1));
seq__15283_15347 = G__15431;
chunk__15284_15348 = G__15432;
count__15285_15349 = G__15433;
i__15286_15350 = G__15434;
continue;
} else {
var temp__4425__auto___15435 = cljs.core.seq.call(null,seq__15283_15347);
if(temp__4425__auto___15435){
var seq__15283_15436__$1 = temp__4425__auto___15435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15283_15436__$1)){
var c__5031__auto___15437 = cljs.core.chunk_first.call(null,seq__15283_15436__$1);
var G__15438 = cljs.core.chunk_rest.call(null,seq__15283_15436__$1);
var G__15439 = c__5031__auto___15437;
var G__15440 = cljs.core.count.call(null,c__5031__auto___15437);
var G__15441 = (0);
seq__15283_15347 = G__15438;
chunk__15284_15348 = G__15439;
count__15285_15349 = G__15440;
i__15286_15350 = G__15441;
continue;
} else {
var vec__15307_15442 = cljs.core.first.call(null,seq__15283_15436__$1);
var source_idx_15443 = cljs.core.nth.call(null,vec__15307_15442,(0),null);
var vec__15308_15444 = cljs.core.nth.call(null,vec__15307_15442,(1),null);
var __15445 = cljs.core.nth.call(null,vec__15308_15444,(0),null);
var lines_15446__$1 = cljs.core.nth.call(null,vec__15308_15444,(1),null);
var seq__15309_15447 = cljs.core.seq.call(null,lines_15446__$1);
var chunk__15310_15448 = null;
var count__15311_15449 = (0);
var i__15312_15450 = (0);
while(true){
if((i__15312_15450 < count__15311_15449)){
var vec__15313_15451 = cljs.core._nth.call(null,chunk__15310_15448,i__15312_15450);
var line_15452 = cljs.core.nth.call(null,vec__15313_15451,(0),null);
var cols_15453 = cljs.core.nth.call(null,vec__15313_15451,(1),null);
var seq__15314_15454 = cljs.core.seq.call(null,cols_15453);
var chunk__15315_15455 = null;
var count__15316_15456 = (0);
var i__15317_15457 = (0);
while(true){
if((i__15317_15457 < count__15316_15456)){
var vec__15318_15458 = cljs.core._nth.call(null,chunk__15315_15455,i__15317_15457);
var col_15459 = cljs.core.nth.call(null,vec__15318_15458,(0),null);
var infos_15460 = cljs.core.nth.call(null,vec__15318_15458,(1),null);
encode_cols.call(null,infos_15460,source_idx_15443,line_15452,col_15459);

var G__15461 = seq__15314_15454;
var G__15462 = chunk__15315_15455;
var G__15463 = count__15316_15456;
var G__15464 = (i__15317_15457 + (1));
seq__15314_15454 = G__15461;
chunk__15315_15455 = G__15462;
count__15316_15456 = G__15463;
i__15317_15457 = G__15464;
continue;
} else {
var temp__4425__auto___15465__$1 = cljs.core.seq.call(null,seq__15314_15454);
if(temp__4425__auto___15465__$1){
var seq__15314_15466__$1 = temp__4425__auto___15465__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15314_15466__$1)){
var c__5031__auto___15467 = cljs.core.chunk_first.call(null,seq__15314_15466__$1);
var G__15468 = cljs.core.chunk_rest.call(null,seq__15314_15466__$1);
var G__15469 = c__5031__auto___15467;
var G__15470 = cljs.core.count.call(null,c__5031__auto___15467);
var G__15471 = (0);
seq__15314_15454 = G__15468;
chunk__15315_15455 = G__15469;
count__15316_15456 = G__15470;
i__15317_15457 = G__15471;
continue;
} else {
var vec__15319_15472 = cljs.core.first.call(null,seq__15314_15466__$1);
var col_15473 = cljs.core.nth.call(null,vec__15319_15472,(0),null);
var infos_15474 = cljs.core.nth.call(null,vec__15319_15472,(1),null);
encode_cols.call(null,infos_15474,source_idx_15443,line_15452,col_15473);

var G__15475 = cljs.core.next.call(null,seq__15314_15466__$1);
var G__15476 = null;
var G__15477 = (0);
var G__15478 = (0);
seq__15314_15454 = G__15475;
chunk__15315_15455 = G__15476;
count__15316_15456 = G__15477;
i__15317_15457 = G__15478;
continue;
}
} else {
}
}
break;
}

var G__15479 = seq__15309_15447;
var G__15480 = chunk__15310_15448;
var G__15481 = count__15311_15449;
var G__15482 = (i__15312_15450 + (1));
seq__15309_15447 = G__15479;
chunk__15310_15448 = G__15480;
count__15311_15449 = G__15481;
i__15312_15450 = G__15482;
continue;
} else {
var temp__4425__auto___15483__$1 = cljs.core.seq.call(null,seq__15309_15447);
if(temp__4425__auto___15483__$1){
var seq__15309_15484__$1 = temp__4425__auto___15483__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15309_15484__$1)){
var c__5031__auto___15485 = cljs.core.chunk_first.call(null,seq__15309_15484__$1);
var G__15486 = cljs.core.chunk_rest.call(null,seq__15309_15484__$1);
var G__15487 = c__5031__auto___15485;
var G__15488 = cljs.core.count.call(null,c__5031__auto___15485);
var G__15489 = (0);
seq__15309_15447 = G__15486;
chunk__15310_15448 = G__15487;
count__15311_15449 = G__15488;
i__15312_15450 = G__15489;
continue;
} else {
var vec__15320_15490 = cljs.core.first.call(null,seq__15309_15484__$1);
var line_15491 = cljs.core.nth.call(null,vec__15320_15490,(0),null);
var cols_15492 = cljs.core.nth.call(null,vec__15320_15490,(1),null);
var seq__15321_15493 = cljs.core.seq.call(null,cols_15492);
var chunk__15322_15494 = null;
var count__15323_15495 = (0);
var i__15324_15496 = (0);
while(true){
if((i__15324_15496 < count__15323_15495)){
var vec__15325_15497 = cljs.core._nth.call(null,chunk__15322_15494,i__15324_15496);
var col_15498 = cljs.core.nth.call(null,vec__15325_15497,(0),null);
var infos_15499 = cljs.core.nth.call(null,vec__15325_15497,(1),null);
encode_cols.call(null,infos_15499,source_idx_15443,line_15491,col_15498);

var G__15500 = seq__15321_15493;
var G__15501 = chunk__15322_15494;
var G__15502 = count__15323_15495;
var G__15503 = (i__15324_15496 + (1));
seq__15321_15493 = G__15500;
chunk__15322_15494 = G__15501;
count__15323_15495 = G__15502;
i__15324_15496 = G__15503;
continue;
} else {
var temp__4425__auto___15504__$2 = cljs.core.seq.call(null,seq__15321_15493);
if(temp__4425__auto___15504__$2){
var seq__15321_15505__$1 = temp__4425__auto___15504__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15321_15505__$1)){
var c__5031__auto___15506 = cljs.core.chunk_first.call(null,seq__15321_15505__$1);
var G__15507 = cljs.core.chunk_rest.call(null,seq__15321_15505__$1);
var G__15508 = c__5031__auto___15506;
var G__15509 = cljs.core.count.call(null,c__5031__auto___15506);
var G__15510 = (0);
seq__15321_15493 = G__15507;
chunk__15322_15494 = G__15508;
count__15323_15495 = G__15509;
i__15324_15496 = G__15510;
continue;
} else {
var vec__15326_15511 = cljs.core.first.call(null,seq__15321_15505__$1);
var col_15512 = cljs.core.nth.call(null,vec__15326_15511,(0),null);
var infos_15513 = cljs.core.nth.call(null,vec__15326_15511,(1),null);
encode_cols.call(null,infos_15513,source_idx_15443,line_15491,col_15512);

var G__15514 = cljs.core.next.call(null,seq__15321_15505__$1);
var G__15515 = null;
var G__15516 = (0);
var G__15517 = (0);
seq__15321_15493 = G__15514;
chunk__15322_15494 = G__15515;
count__15323_15495 = G__15516;
i__15324_15496 = G__15517;
continue;
}
} else {
}
}
break;
}

var G__15518 = cljs.core.next.call(null,seq__15309_15484__$1);
var G__15519 = null;
var G__15520 = (0);
var G__15521 = (0);
seq__15309_15447 = G__15518;
chunk__15310_15448 = G__15519;
count__15311_15449 = G__15520;
i__15312_15450 = G__15521;
continue;
}
} else {
}
}
break;
}

var G__15522 = cljs.core.next.call(null,seq__15283_15436__$1);
var G__15523 = null;
var G__15524 = (0);
var G__15525 = (0);
seq__15283_15347 = G__15522;
chunk__15284_15348 = G__15523;
count__15285_15349 = G__15524;
i__15286_15350 = G__15525;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__15327 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15226_SHARP_){
return [cljs.core.str(p1__15226_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15227_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__15227_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15228_SHARP_){
return clojure.string.join.call(null,",",p1__15228_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__15327__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__15328 = G__15327;
goog.object.set(G__15328,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__15328;
})():G__15327);
return G__15327__$1;
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
var vec__15531 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__15531,(0),null);
var col_map = cljs.core.nth.call(null,vec__15531,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__15532 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__15532,(0),null);
var infos = cljs.core.nth.call(null,vec__15532,(1),null);
var G__15536 = cljs.core.next.call(null,col_map_seq);
var G__15537 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__15532,col,infos,vec__15531,line,col_map){
return (function (v,p__15533){
var map__15534 = p__15533;
var map__15534__$1 = ((((!((map__15534 == null)))?((((map__15534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15534):map__15534);
var gline = cljs.core.get.call(null,map__15534__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__15534__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__15532,col,infos,vec__15531,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__15536;
new_cols = G__15537;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__15538 = cljs.core.next.call(null,line_map_seq);
var G__15539 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__15538;
new_lines = G__15539;
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
var seq__15590_15640 = cljs.core.seq.call(null,reverse_map);
var chunk__15591_15641 = null;
var count__15592_15642 = (0);
var i__15593_15643 = (0);
while(true){
if((i__15593_15643 < count__15592_15642)){
var vec__15594_15644 = cljs.core._nth.call(null,chunk__15591_15641,i__15593_15643);
var line_15645 = cljs.core.nth.call(null,vec__15594_15644,(0),null);
var columns_15646 = cljs.core.nth.call(null,vec__15594_15644,(1),null);
var seq__15595_15647 = cljs.core.seq.call(null,columns_15646);
var chunk__15596_15648 = null;
var count__15597_15649 = (0);
var i__15598_15650 = (0);
while(true){
if((i__15598_15650 < count__15597_15649)){
var vec__15599_15651 = cljs.core._nth.call(null,chunk__15596_15648,i__15598_15650);
var column_15652 = cljs.core.nth.call(null,vec__15599_15651,(0),null);
var column_info_15653 = cljs.core.nth.call(null,vec__15599_15651,(1),null);
var seq__15600_15654 = cljs.core.seq.call(null,column_info_15653);
var chunk__15601_15655 = null;
var count__15602_15656 = (0);
var i__15603_15657 = (0);
while(true){
if((i__15603_15657 < count__15602_15656)){
var map__15604_15658 = cljs.core._nth.call(null,chunk__15601_15655,i__15603_15657);
var map__15604_15659__$1 = ((((!((map__15604_15658 == null)))?((((map__15604_15658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15604_15658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15604_15658):map__15604_15658);
var gline_15660 = cljs.core.get.call(null,map__15604_15659__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15661 = cljs.core.get.call(null,map__15604_15659__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15662 = cljs.core.get.call(null,map__15604_15659__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15660], null),cljs.core.fnil.call(null,((function (seq__15600_15654,chunk__15601_15655,count__15602_15656,i__15603_15657,seq__15595_15647,chunk__15596_15648,count__15597_15649,i__15598_15650,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15604_15658,map__15604_15659__$1,gline_15660,gcol_15661,name_15662,vec__15599_15651,column_15652,column_info_15653,vec__15594_15644,line_15645,columns_15646,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15652], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15645,new cljs.core.Keyword(null,"col","col",-1959363084),column_15652,new cljs.core.Keyword(null,"name","name",1843675177),name_15662], null));
});})(seq__15600_15654,chunk__15601_15655,count__15602_15656,i__15603_15657,seq__15595_15647,chunk__15596_15648,count__15597_15649,i__15598_15650,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15604_15658,map__15604_15659__$1,gline_15660,gcol_15661,name_15662,vec__15599_15651,column_15652,column_info_15653,vec__15594_15644,line_15645,columns_15646,inverted))
,cljs.core.sorted_map.call(null)));

var G__15663 = seq__15600_15654;
var G__15664 = chunk__15601_15655;
var G__15665 = count__15602_15656;
var G__15666 = (i__15603_15657 + (1));
seq__15600_15654 = G__15663;
chunk__15601_15655 = G__15664;
count__15602_15656 = G__15665;
i__15603_15657 = G__15666;
continue;
} else {
var temp__4425__auto___15667 = cljs.core.seq.call(null,seq__15600_15654);
if(temp__4425__auto___15667){
var seq__15600_15668__$1 = temp__4425__auto___15667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15600_15668__$1)){
var c__5031__auto___15669 = cljs.core.chunk_first.call(null,seq__15600_15668__$1);
var G__15670 = cljs.core.chunk_rest.call(null,seq__15600_15668__$1);
var G__15671 = c__5031__auto___15669;
var G__15672 = cljs.core.count.call(null,c__5031__auto___15669);
var G__15673 = (0);
seq__15600_15654 = G__15670;
chunk__15601_15655 = G__15671;
count__15602_15656 = G__15672;
i__15603_15657 = G__15673;
continue;
} else {
var map__15606_15674 = cljs.core.first.call(null,seq__15600_15668__$1);
var map__15606_15675__$1 = ((((!((map__15606_15674 == null)))?((((map__15606_15674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15606_15674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15606_15674):map__15606_15674);
var gline_15676 = cljs.core.get.call(null,map__15606_15675__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15677 = cljs.core.get.call(null,map__15606_15675__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15678 = cljs.core.get.call(null,map__15606_15675__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15676], null),cljs.core.fnil.call(null,((function (seq__15600_15654,chunk__15601_15655,count__15602_15656,i__15603_15657,seq__15595_15647,chunk__15596_15648,count__15597_15649,i__15598_15650,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15606_15674,map__15606_15675__$1,gline_15676,gcol_15677,name_15678,seq__15600_15668__$1,temp__4425__auto___15667,vec__15599_15651,column_15652,column_info_15653,vec__15594_15644,line_15645,columns_15646,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15652], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15645,new cljs.core.Keyword(null,"col","col",-1959363084),column_15652,new cljs.core.Keyword(null,"name","name",1843675177),name_15678], null));
});})(seq__15600_15654,chunk__15601_15655,count__15602_15656,i__15603_15657,seq__15595_15647,chunk__15596_15648,count__15597_15649,i__15598_15650,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15606_15674,map__15606_15675__$1,gline_15676,gcol_15677,name_15678,seq__15600_15668__$1,temp__4425__auto___15667,vec__15599_15651,column_15652,column_info_15653,vec__15594_15644,line_15645,columns_15646,inverted))
,cljs.core.sorted_map.call(null)));

var G__15679 = cljs.core.next.call(null,seq__15600_15668__$1);
var G__15680 = null;
var G__15681 = (0);
var G__15682 = (0);
seq__15600_15654 = G__15679;
chunk__15601_15655 = G__15680;
count__15602_15656 = G__15681;
i__15603_15657 = G__15682;
continue;
}
} else {
}
}
break;
}

var G__15683 = seq__15595_15647;
var G__15684 = chunk__15596_15648;
var G__15685 = count__15597_15649;
var G__15686 = (i__15598_15650 + (1));
seq__15595_15647 = G__15683;
chunk__15596_15648 = G__15684;
count__15597_15649 = G__15685;
i__15598_15650 = G__15686;
continue;
} else {
var temp__4425__auto___15687 = cljs.core.seq.call(null,seq__15595_15647);
if(temp__4425__auto___15687){
var seq__15595_15688__$1 = temp__4425__auto___15687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15595_15688__$1)){
var c__5031__auto___15689 = cljs.core.chunk_first.call(null,seq__15595_15688__$1);
var G__15690 = cljs.core.chunk_rest.call(null,seq__15595_15688__$1);
var G__15691 = c__5031__auto___15689;
var G__15692 = cljs.core.count.call(null,c__5031__auto___15689);
var G__15693 = (0);
seq__15595_15647 = G__15690;
chunk__15596_15648 = G__15691;
count__15597_15649 = G__15692;
i__15598_15650 = G__15693;
continue;
} else {
var vec__15608_15694 = cljs.core.first.call(null,seq__15595_15688__$1);
var column_15695 = cljs.core.nth.call(null,vec__15608_15694,(0),null);
var column_info_15696 = cljs.core.nth.call(null,vec__15608_15694,(1),null);
var seq__15609_15697 = cljs.core.seq.call(null,column_info_15696);
var chunk__15610_15698 = null;
var count__15611_15699 = (0);
var i__15612_15700 = (0);
while(true){
if((i__15612_15700 < count__15611_15699)){
var map__15613_15701 = cljs.core._nth.call(null,chunk__15610_15698,i__15612_15700);
var map__15613_15702__$1 = ((((!((map__15613_15701 == null)))?((((map__15613_15701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15613_15701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15613_15701):map__15613_15701);
var gline_15703 = cljs.core.get.call(null,map__15613_15702__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15704 = cljs.core.get.call(null,map__15613_15702__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15705 = cljs.core.get.call(null,map__15613_15702__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15703], null),cljs.core.fnil.call(null,((function (seq__15609_15697,chunk__15610_15698,count__15611_15699,i__15612_15700,seq__15595_15647,chunk__15596_15648,count__15597_15649,i__15598_15650,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15613_15701,map__15613_15702__$1,gline_15703,gcol_15704,name_15705,vec__15608_15694,column_15695,column_info_15696,seq__15595_15688__$1,temp__4425__auto___15687,vec__15594_15644,line_15645,columns_15646,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15695], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15645,new cljs.core.Keyword(null,"col","col",-1959363084),column_15695,new cljs.core.Keyword(null,"name","name",1843675177),name_15705], null));
});})(seq__15609_15697,chunk__15610_15698,count__15611_15699,i__15612_15700,seq__15595_15647,chunk__15596_15648,count__15597_15649,i__15598_15650,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15613_15701,map__15613_15702__$1,gline_15703,gcol_15704,name_15705,vec__15608_15694,column_15695,column_info_15696,seq__15595_15688__$1,temp__4425__auto___15687,vec__15594_15644,line_15645,columns_15646,inverted))
,cljs.core.sorted_map.call(null)));

var G__15706 = seq__15609_15697;
var G__15707 = chunk__15610_15698;
var G__15708 = count__15611_15699;
var G__15709 = (i__15612_15700 + (1));
seq__15609_15697 = G__15706;
chunk__15610_15698 = G__15707;
count__15611_15699 = G__15708;
i__15612_15700 = G__15709;
continue;
} else {
var temp__4425__auto___15710__$1 = cljs.core.seq.call(null,seq__15609_15697);
if(temp__4425__auto___15710__$1){
var seq__15609_15711__$1 = temp__4425__auto___15710__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15609_15711__$1)){
var c__5031__auto___15712 = cljs.core.chunk_first.call(null,seq__15609_15711__$1);
var G__15713 = cljs.core.chunk_rest.call(null,seq__15609_15711__$1);
var G__15714 = c__5031__auto___15712;
var G__15715 = cljs.core.count.call(null,c__5031__auto___15712);
var G__15716 = (0);
seq__15609_15697 = G__15713;
chunk__15610_15698 = G__15714;
count__15611_15699 = G__15715;
i__15612_15700 = G__15716;
continue;
} else {
var map__15615_15717 = cljs.core.first.call(null,seq__15609_15711__$1);
var map__15615_15718__$1 = ((((!((map__15615_15717 == null)))?((((map__15615_15717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15615_15717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15615_15717):map__15615_15717);
var gline_15719 = cljs.core.get.call(null,map__15615_15718__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15720 = cljs.core.get.call(null,map__15615_15718__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15721 = cljs.core.get.call(null,map__15615_15718__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15719], null),cljs.core.fnil.call(null,((function (seq__15609_15697,chunk__15610_15698,count__15611_15699,i__15612_15700,seq__15595_15647,chunk__15596_15648,count__15597_15649,i__15598_15650,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15615_15717,map__15615_15718__$1,gline_15719,gcol_15720,name_15721,seq__15609_15711__$1,temp__4425__auto___15710__$1,vec__15608_15694,column_15695,column_info_15696,seq__15595_15688__$1,temp__4425__auto___15687,vec__15594_15644,line_15645,columns_15646,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15695], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15645,new cljs.core.Keyword(null,"col","col",-1959363084),column_15695,new cljs.core.Keyword(null,"name","name",1843675177),name_15721], null));
});})(seq__15609_15697,chunk__15610_15698,count__15611_15699,i__15612_15700,seq__15595_15647,chunk__15596_15648,count__15597_15649,i__15598_15650,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15615_15717,map__15615_15718__$1,gline_15719,gcol_15720,name_15721,seq__15609_15711__$1,temp__4425__auto___15710__$1,vec__15608_15694,column_15695,column_info_15696,seq__15595_15688__$1,temp__4425__auto___15687,vec__15594_15644,line_15645,columns_15646,inverted))
,cljs.core.sorted_map.call(null)));

var G__15722 = cljs.core.next.call(null,seq__15609_15711__$1);
var G__15723 = null;
var G__15724 = (0);
var G__15725 = (0);
seq__15609_15697 = G__15722;
chunk__15610_15698 = G__15723;
count__15611_15699 = G__15724;
i__15612_15700 = G__15725;
continue;
}
} else {
}
}
break;
}

var G__15726 = cljs.core.next.call(null,seq__15595_15688__$1);
var G__15727 = null;
var G__15728 = (0);
var G__15729 = (0);
seq__15595_15647 = G__15726;
chunk__15596_15648 = G__15727;
count__15597_15649 = G__15728;
i__15598_15650 = G__15729;
continue;
}
} else {
}
}
break;
}

var G__15730 = seq__15590_15640;
var G__15731 = chunk__15591_15641;
var G__15732 = count__15592_15642;
var G__15733 = (i__15593_15643 + (1));
seq__15590_15640 = G__15730;
chunk__15591_15641 = G__15731;
count__15592_15642 = G__15732;
i__15593_15643 = G__15733;
continue;
} else {
var temp__4425__auto___15734 = cljs.core.seq.call(null,seq__15590_15640);
if(temp__4425__auto___15734){
var seq__15590_15735__$1 = temp__4425__auto___15734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15590_15735__$1)){
var c__5031__auto___15736 = cljs.core.chunk_first.call(null,seq__15590_15735__$1);
var G__15737 = cljs.core.chunk_rest.call(null,seq__15590_15735__$1);
var G__15738 = c__5031__auto___15736;
var G__15739 = cljs.core.count.call(null,c__5031__auto___15736);
var G__15740 = (0);
seq__15590_15640 = G__15737;
chunk__15591_15641 = G__15738;
count__15592_15642 = G__15739;
i__15593_15643 = G__15740;
continue;
} else {
var vec__15617_15741 = cljs.core.first.call(null,seq__15590_15735__$1);
var line_15742 = cljs.core.nth.call(null,vec__15617_15741,(0),null);
var columns_15743 = cljs.core.nth.call(null,vec__15617_15741,(1),null);
var seq__15618_15744 = cljs.core.seq.call(null,columns_15743);
var chunk__15619_15745 = null;
var count__15620_15746 = (0);
var i__15621_15747 = (0);
while(true){
if((i__15621_15747 < count__15620_15746)){
var vec__15622_15748 = cljs.core._nth.call(null,chunk__15619_15745,i__15621_15747);
var column_15749 = cljs.core.nth.call(null,vec__15622_15748,(0),null);
var column_info_15750 = cljs.core.nth.call(null,vec__15622_15748,(1),null);
var seq__15623_15751 = cljs.core.seq.call(null,column_info_15750);
var chunk__15624_15752 = null;
var count__15625_15753 = (0);
var i__15626_15754 = (0);
while(true){
if((i__15626_15754 < count__15625_15753)){
var map__15627_15755 = cljs.core._nth.call(null,chunk__15624_15752,i__15626_15754);
var map__15627_15756__$1 = ((((!((map__15627_15755 == null)))?((((map__15627_15755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15627_15755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15627_15755):map__15627_15755);
var gline_15757 = cljs.core.get.call(null,map__15627_15756__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15758 = cljs.core.get.call(null,map__15627_15756__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15759 = cljs.core.get.call(null,map__15627_15756__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15757], null),cljs.core.fnil.call(null,((function (seq__15623_15751,chunk__15624_15752,count__15625_15753,i__15626_15754,seq__15618_15744,chunk__15619_15745,count__15620_15746,i__15621_15747,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15627_15755,map__15627_15756__$1,gline_15757,gcol_15758,name_15759,vec__15622_15748,column_15749,column_info_15750,vec__15617_15741,line_15742,columns_15743,seq__15590_15735__$1,temp__4425__auto___15734,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15749], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15742,new cljs.core.Keyword(null,"col","col",-1959363084),column_15749,new cljs.core.Keyword(null,"name","name",1843675177),name_15759], null));
});})(seq__15623_15751,chunk__15624_15752,count__15625_15753,i__15626_15754,seq__15618_15744,chunk__15619_15745,count__15620_15746,i__15621_15747,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15627_15755,map__15627_15756__$1,gline_15757,gcol_15758,name_15759,vec__15622_15748,column_15749,column_info_15750,vec__15617_15741,line_15742,columns_15743,seq__15590_15735__$1,temp__4425__auto___15734,inverted))
,cljs.core.sorted_map.call(null)));

var G__15760 = seq__15623_15751;
var G__15761 = chunk__15624_15752;
var G__15762 = count__15625_15753;
var G__15763 = (i__15626_15754 + (1));
seq__15623_15751 = G__15760;
chunk__15624_15752 = G__15761;
count__15625_15753 = G__15762;
i__15626_15754 = G__15763;
continue;
} else {
var temp__4425__auto___15764__$1 = cljs.core.seq.call(null,seq__15623_15751);
if(temp__4425__auto___15764__$1){
var seq__15623_15765__$1 = temp__4425__auto___15764__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15623_15765__$1)){
var c__5031__auto___15766 = cljs.core.chunk_first.call(null,seq__15623_15765__$1);
var G__15767 = cljs.core.chunk_rest.call(null,seq__15623_15765__$1);
var G__15768 = c__5031__auto___15766;
var G__15769 = cljs.core.count.call(null,c__5031__auto___15766);
var G__15770 = (0);
seq__15623_15751 = G__15767;
chunk__15624_15752 = G__15768;
count__15625_15753 = G__15769;
i__15626_15754 = G__15770;
continue;
} else {
var map__15629_15771 = cljs.core.first.call(null,seq__15623_15765__$1);
var map__15629_15772__$1 = ((((!((map__15629_15771 == null)))?((((map__15629_15771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15629_15771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15629_15771):map__15629_15771);
var gline_15773 = cljs.core.get.call(null,map__15629_15772__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15774 = cljs.core.get.call(null,map__15629_15772__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15775 = cljs.core.get.call(null,map__15629_15772__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15773], null),cljs.core.fnil.call(null,((function (seq__15623_15751,chunk__15624_15752,count__15625_15753,i__15626_15754,seq__15618_15744,chunk__15619_15745,count__15620_15746,i__15621_15747,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15629_15771,map__15629_15772__$1,gline_15773,gcol_15774,name_15775,seq__15623_15765__$1,temp__4425__auto___15764__$1,vec__15622_15748,column_15749,column_info_15750,vec__15617_15741,line_15742,columns_15743,seq__15590_15735__$1,temp__4425__auto___15734,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15749], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15742,new cljs.core.Keyword(null,"col","col",-1959363084),column_15749,new cljs.core.Keyword(null,"name","name",1843675177),name_15775], null));
});})(seq__15623_15751,chunk__15624_15752,count__15625_15753,i__15626_15754,seq__15618_15744,chunk__15619_15745,count__15620_15746,i__15621_15747,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15629_15771,map__15629_15772__$1,gline_15773,gcol_15774,name_15775,seq__15623_15765__$1,temp__4425__auto___15764__$1,vec__15622_15748,column_15749,column_info_15750,vec__15617_15741,line_15742,columns_15743,seq__15590_15735__$1,temp__4425__auto___15734,inverted))
,cljs.core.sorted_map.call(null)));

var G__15776 = cljs.core.next.call(null,seq__15623_15765__$1);
var G__15777 = null;
var G__15778 = (0);
var G__15779 = (0);
seq__15623_15751 = G__15776;
chunk__15624_15752 = G__15777;
count__15625_15753 = G__15778;
i__15626_15754 = G__15779;
continue;
}
} else {
}
}
break;
}

var G__15780 = seq__15618_15744;
var G__15781 = chunk__15619_15745;
var G__15782 = count__15620_15746;
var G__15783 = (i__15621_15747 + (1));
seq__15618_15744 = G__15780;
chunk__15619_15745 = G__15781;
count__15620_15746 = G__15782;
i__15621_15747 = G__15783;
continue;
} else {
var temp__4425__auto___15784__$1 = cljs.core.seq.call(null,seq__15618_15744);
if(temp__4425__auto___15784__$1){
var seq__15618_15785__$1 = temp__4425__auto___15784__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15618_15785__$1)){
var c__5031__auto___15786 = cljs.core.chunk_first.call(null,seq__15618_15785__$1);
var G__15787 = cljs.core.chunk_rest.call(null,seq__15618_15785__$1);
var G__15788 = c__5031__auto___15786;
var G__15789 = cljs.core.count.call(null,c__5031__auto___15786);
var G__15790 = (0);
seq__15618_15744 = G__15787;
chunk__15619_15745 = G__15788;
count__15620_15746 = G__15789;
i__15621_15747 = G__15790;
continue;
} else {
var vec__15631_15791 = cljs.core.first.call(null,seq__15618_15785__$1);
var column_15792 = cljs.core.nth.call(null,vec__15631_15791,(0),null);
var column_info_15793 = cljs.core.nth.call(null,vec__15631_15791,(1),null);
var seq__15632_15794 = cljs.core.seq.call(null,column_info_15793);
var chunk__15633_15795 = null;
var count__15634_15796 = (0);
var i__15635_15797 = (0);
while(true){
if((i__15635_15797 < count__15634_15796)){
var map__15636_15798 = cljs.core._nth.call(null,chunk__15633_15795,i__15635_15797);
var map__15636_15799__$1 = ((((!((map__15636_15798 == null)))?((((map__15636_15798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15636_15798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15636_15798):map__15636_15798);
var gline_15800 = cljs.core.get.call(null,map__15636_15799__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15801 = cljs.core.get.call(null,map__15636_15799__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15802 = cljs.core.get.call(null,map__15636_15799__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15800], null),cljs.core.fnil.call(null,((function (seq__15632_15794,chunk__15633_15795,count__15634_15796,i__15635_15797,seq__15618_15744,chunk__15619_15745,count__15620_15746,i__15621_15747,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15636_15798,map__15636_15799__$1,gline_15800,gcol_15801,name_15802,vec__15631_15791,column_15792,column_info_15793,seq__15618_15785__$1,temp__4425__auto___15784__$1,vec__15617_15741,line_15742,columns_15743,seq__15590_15735__$1,temp__4425__auto___15734,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15792], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15742,new cljs.core.Keyword(null,"col","col",-1959363084),column_15792,new cljs.core.Keyword(null,"name","name",1843675177),name_15802], null));
});})(seq__15632_15794,chunk__15633_15795,count__15634_15796,i__15635_15797,seq__15618_15744,chunk__15619_15745,count__15620_15746,i__15621_15747,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15636_15798,map__15636_15799__$1,gline_15800,gcol_15801,name_15802,vec__15631_15791,column_15792,column_info_15793,seq__15618_15785__$1,temp__4425__auto___15784__$1,vec__15617_15741,line_15742,columns_15743,seq__15590_15735__$1,temp__4425__auto___15734,inverted))
,cljs.core.sorted_map.call(null)));

var G__15803 = seq__15632_15794;
var G__15804 = chunk__15633_15795;
var G__15805 = count__15634_15796;
var G__15806 = (i__15635_15797 + (1));
seq__15632_15794 = G__15803;
chunk__15633_15795 = G__15804;
count__15634_15796 = G__15805;
i__15635_15797 = G__15806;
continue;
} else {
var temp__4425__auto___15807__$2 = cljs.core.seq.call(null,seq__15632_15794);
if(temp__4425__auto___15807__$2){
var seq__15632_15808__$1 = temp__4425__auto___15807__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15632_15808__$1)){
var c__5031__auto___15809 = cljs.core.chunk_first.call(null,seq__15632_15808__$1);
var G__15810 = cljs.core.chunk_rest.call(null,seq__15632_15808__$1);
var G__15811 = c__5031__auto___15809;
var G__15812 = cljs.core.count.call(null,c__5031__auto___15809);
var G__15813 = (0);
seq__15632_15794 = G__15810;
chunk__15633_15795 = G__15811;
count__15634_15796 = G__15812;
i__15635_15797 = G__15813;
continue;
} else {
var map__15638_15814 = cljs.core.first.call(null,seq__15632_15808__$1);
var map__15638_15815__$1 = ((((!((map__15638_15814 == null)))?((((map__15638_15814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15638_15814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15638_15814):map__15638_15814);
var gline_15816 = cljs.core.get.call(null,map__15638_15815__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15817 = cljs.core.get.call(null,map__15638_15815__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15818 = cljs.core.get.call(null,map__15638_15815__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15816], null),cljs.core.fnil.call(null,((function (seq__15632_15794,chunk__15633_15795,count__15634_15796,i__15635_15797,seq__15618_15744,chunk__15619_15745,count__15620_15746,i__15621_15747,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15638_15814,map__15638_15815__$1,gline_15816,gcol_15817,name_15818,seq__15632_15808__$1,temp__4425__auto___15807__$2,vec__15631_15791,column_15792,column_info_15793,seq__15618_15785__$1,temp__4425__auto___15784__$1,vec__15617_15741,line_15742,columns_15743,seq__15590_15735__$1,temp__4425__auto___15734,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15792], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15742,new cljs.core.Keyword(null,"col","col",-1959363084),column_15792,new cljs.core.Keyword(null,"name","name",1843675177),name_15818], null));
});})(seq__15632_15794,chunk__15633_15795,count__15634_15796,i__15635_15797,seq__15618_15744,chunk__15619_15745,count__15620_15746,i__15621_15747,seq__15590_15640,chunk__15591_15641,count__15592_15642,i__15593_15643,map__15638_15814,map__15638_15815__$1,gline_15816,gcol_15817,name_15818,seq__15632_15808__$1,temp__4425__auto___15807__$2,vec__15631_15791,column_15792,column_info_15793,seq__15618_15785__$1,temp__4425__auto___15784__$1,vec__15617_15741,line_15742,columns_15743,seq__15590_15735__$1,temp__4425__auto___15734,inverted))
,cljs.core.sorted_map.call(null)));

var G__15819 = cljs.core.next.call(null,seq__15632_15808__$1);
var G__15820 = null;
var G__15821 = (0);
var G__15822 = (0);
seq__15632_15794 = G__15819;
chunk__15633_15795 = G__15820;
count__15634_15796 = G__15821;
i__15635_15797 = G__15822;
continue;
}
} else {
}
}
break;
}

var G__15823 = cljs.core.next.call(null,seq__15618_15785__$1);
var G__15824 = null;
var G__15825 = (0);
var G__15826 = (0);
seq__15618_15744 = G__15823;
chunk__15619_15745 = G__15824;
count__15620_15746 = G__15825;
i__15621_15747 = G__15826;
continue;
}
} else {
}
}
break;
}

var G__15827 = cljs.core.next.call(null,seq__15590_15735__$1);
var G__15828 = null;
var G__15829 = (0);
var G__15830 = (0);
seq__15590_15640 = G__15827;
chunk__15591_15641 = G__15828;
count__15592_15642 = G__15829;
i__15593_15643 = G__15830;
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