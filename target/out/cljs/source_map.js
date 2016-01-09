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
return cljs.core.reduce.call(null,(function (m,p__15181){
var vec__15182 = p__15181;
var i = cljs.core.nth.call(null,vec__15182,(0),null);
var v = cljs.core.nth.call(null,vec__15182,(1),null);
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
var vec__15184 = seg;
var gcol = cljs.core.nth.call(null,vec__15184,(0),null);
var source = cljs.core.nth.call(null,vec__15184,(1),null);
var line = cljs.core.nth.call(null,vec__15184,(2),null);
var col = cljs.core.nth.call(null,vec__15184,(3),null);
var name = cljs.core.nth.call(null,vec__15184,(4),null);
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
var vec__15187 = seg;
var gcol = cljs.core.nth.call(null,vec__15187,(0),null);
var source = cljs.core.nth.call(null,vec__15187,(1),null);
var line = cljs.core.nth.call(null,vec__15187,(2),null);
var col = cljs.core.nth.call(null,vec__15187,(3),null);
var name = cljs.core.nth.call(null,vec__15187,(4),null);
var vec__15188 = relseg;
var rgcol = cljs.core.nth.call(null,vec__15188,(0),null);
var rsource = cljs.core.nth.call(null,vec__15188,(1),null);
var rline = cljs.core.nth.call(null,vec__15188,(2),null);
var rcol = cljs.core.nth.call(null,vec__15188,(3),null);
var rname = cljs.core.nth.call(null,vec__15188,(4),null);
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
var map__15191 = segmap;
var map__15191__$1 = ((((!((map__15191 == null)))?((((map__15191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15191):map__15191);
var gcol = cljs.core.get.call(null,map__15191__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__15191__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__15191__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__15191__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__15191__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__15191,map__15191__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__15191,map__15191__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__15191,map__15191__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__15191,map__15191__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__15191,map__15191__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__15191,map__15191__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 * mapping original ClojureScript source locations to the generated
 * JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(){
var args15193 = [];
var len__5286__auto___15197 = arguments.length;
var i__5287__auto___15198 = (0);
while(true){
if((i__5287__auto___15198 < len__5286__auto___15197)){
args15193.push((arguments[i__5287__auto___15198]));

var G__15199 = (i__5287__auto___15198 + (1));
i__5287__auto___15198 = G__15199;
continue;
} else {
}
break;
}

var G__15195 = args15193.length;
switch (G__15195) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15193.length)].join('')));

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
var vec__15196 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__15201 = cljs.core.next.call(null,segs__$1);
var G__15202 = nrelseg;
var G__15203 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__15201;
relseg__$1 = G__15202;
result__$1 = G__15203;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__15196,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__15196,(1),null);
var G__15204 = (gline + (1));
var G__15205 = cljs.core.next.call(null,lines__$1);
var G__15206 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__15207 = result__$1;
gline = G__15204;
lines__$1 = G__15205;
relseg = G__15206;
result = G__15207;
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
var map__15211 = segmap;
var map__15211__$1 = ((((!((map__15211 == null)))?((((map__15211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15211):map__15211);
var gcol = cljs.core.get.call(null,map__15211__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__15211__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__15211__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__15211__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__15211__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__15211,map__15211__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__15211,map__15211__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__15208_SHARP_){
return cljs.core.conj.call(null,p1__15208_SHARP_,d__$1);
});})(map__15211,map__15211__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__15211,map__15211__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 * generated JavaScript source locations to the original
 * ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(){
var args15213 = [];
var len__5286__auto___15217 = arguments.length;
var i__5287__auto___15218 = (0);
while(true){
if((i__5287__auto___15218 < len__5286__auto___15217)){
args15213.push((arguments[i__5287__auto___15218]));

var G__15219 = (i__5287__auto___15218 + (1));
i__5287__auto___15218 = G__15219;
continue;
} else {
}
break;
}

var G__15215 = args15213.length;
switch (G__15215) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15213.length)].join('')));

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
var vec__15216 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__15221 = cljs.core.next.call(null,segs__$1);
var G__15222 = nrelseg;
var G__15223 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__15221;
relseg__$1 = G__15222;
result__$1 = G__15223;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__15216,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__15216,(1),null);
var G__15224 = (gline + (1));
var G__15225 = cljs.core.next.call(null,lines__$1);
var G__15226 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__15227 = result__$1;
gline = G__15224;
lines__$1 = G__15225;
relseg = G__15226;
result = G__15227;
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
return (function (p__15234){
var vec__15235 = p__15234;
var _ = cljs.core.nth.call(null,vec__15235,(0),null);
var source = cljs.core.nth.call(null,vec__15235,(1),null);
var line = cljs.core.nth.call(null,vec__15235,(2),null);
var col = cljs.core.nth.call(null,vec__15235,(3),null);
var name = cljs.core.nth.call(null,vec__15235,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__15236){
var vec__15237 = p__15236;
var gcol = cljs.core.nth.call(null,vec__15237,(0),null);
var sidx = cljs.core.nth.call(null,vec__15237,(1),null);
var line = cljs.core.nth.call(null,vec__15237,(2),null);
var col = cljs.core.nth.call(null,vec__15237,(3),null);
var name = cljs.core.nth.call(null,vec__15237,(4),null);
var seg = vec__15237;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__15237,gcol,sidx,line,col,name,seg,relseg){
return (function (p__15238){
var vec__15239 = p__15238;
var _ = cljs.core.nth.call(null,vec__15239,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__15239,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__15239,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__15239,(3),null);
var lname = cljs.core.nth.call(null,vec__15239,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4247__auto__ = name;
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__15237,gcol,sidx,line,col,name,seg,relseg))
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
var seq__15293 = cljs.core.seq.call(null,infos);
var chunk__15294 = null;
var count__15295 = (0);
var i__15296 = (0);
while(true){
if((i__15296 < count__15295)){
var info = cljs.core._nth.call(null,chunk__15294,i__15296);
var segv_15343 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_15344 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_15345 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_15344 > (lc_15345 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__15293,chunk__15294,count__15295,i__15296,segv_15343,gline_15344,lc_15345,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_15344 - (lc_15345 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_15343], null));
});})(seq__15293,chunk__15294,count__15295,i__15296,segv_15343,gline_15344,lc_15345,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__15293,chunk__15294,count__15295,i__15296,segv_15343,gline_15344,lc_15345,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15344], null),cljs.core.conj,segv_15343);
});})(seq__15293,chunk__15294,count__15295,i__15296,segv_15343,gline_15344,lc_15345,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__15346 = seq__15293;
var G__15347 = chunk__15294;
var G__15348 = count__15295;
var G__15349 = (i__15296 + (1));
seq__15293 = G__15346;
chunk__15294 = G__15347;
count__15295 = G__15348;
i__15296 = G__15349;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15293);
if(temp__4425__auto__){
var seq__15293__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15293__$1)){
var c__5031__auto__ = cljs.core.chunk_first.call(null,seq__15293__$1);
var G__15350 = cljs.core.chunk_rest.call(null,seq__15293__$1);
var G__15351 = c__5031__auto__;
var G__15352 = cljs.core.count.call(null,c__5031__auto__);
var G__15353 = (0);
seq__15293 = G__15350;
chunk__15294 = G__15351;
count__15295 = G__15352;
i__15296 = G__15353;
continue;
} else {
var info = cljs.core.first.call(null,seq__15293__$1);
var segv_15354 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_15355 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_15356 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_15355 > (lc_15356 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__15293,chunk__15294,count__15295,i__15296,segv_15354,gline_15355,lc_15356,info,seq__15293__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_15355 - (lc_15356 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_15354], null));
});})(seq__15293,chunk__15294,count__15295,i__15296,segv_15354,gline_15355,lc_15356,info,seq__15293__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__15293,chunk__15294,count__15295,i__15296,segv_15354,gline_15355,lc_15356,info,seq__15293__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15355], null),cljs.core.conj,segv_15354);
});})(seq__15293,chunk__15294,count__15295,i__15296,segv_15354,gline_15355,lc_15356,info,seq__15293__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__15357 = cljs.core.next.call(null,seq__15293__$1);
var G__15358 = null;
var G__15359 = (0);
var G__15360 = (0);
seq__15293 = G__15357;
chunk__15294 = G__15358;
count__15295 = G__15359;
i__15296 = G__15360;
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
var seq__15297_15361 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__15298_15362 = null;
var count__15299_15363 = (0);
var i__15300_15364 = (0);
while(true){
if((i__15300_15364 < count__15299_15363)){
var vec__15301_15365 = cljs.core._nth.call(null,chunk__15298_15362,i__15300_15364);
var source_idx_15366 = cljs.core.nth.call(null,vec__15301_15365,(0),null);
var vec__15302_15367 = cljs.core.nth.call(null,vec__15301_15365,(1),null);
var __15368 = cljs.core.nth.call(null,vec__15302_15367,(0),null);
var lines_15369__$1 = cljs.core.nth.call(null,vec__15302_15367,(1),null);
var seq__15303_15370 = cljs.core.seq.call(null,lines_15369__$1);
var chunk__15304_15371 = null;
var count__15305_15372 = (0);
var i__15306_15373 = (0);
while(true){
if((i__15306_15373 < count__15305_15372)){
var vec__15307_15374 = cljs.core._nth.call(null,chunk__15304_15371,i__15306_15373);
var line_15375 = cljs.core.nth.call(null,vec__15307_15374,(0),null);
var cols_15376 = cljs.core.nth.call(null,vec__15307_15374,(1),null);
var seq__15308_15377 = cljs.core.seq.call(null,cols_15376);
var chunk__15309_15378 = null;
var count__15310_15379 = (0);
var i__15311_15380 = (0);
while(true){
if((i__15311_15380 < count__15310_15379)){
var vec__15312_15381 = cljs.core._nth.call(null,chunk__15309_15378,i__15311_15380);
var col_15382 = cljs.core.nth.call(null,vec__15312_15381,(0),null);
var infos_15383 = cljs.core.nth.call(null,vec__15312_15381,(1),null);
encode_cols.call(null,infos_15383,source_idx_15366,line_15375,col_15382);

var G__15384 = seq__15308_15377;
var G__15385 = chunk__15309_15378;
var G__15386 = count__15310_15379;
var G__15387 = (i__15311_15380 + (1));
seq__15308_15377 = G__15384;
chunk__15309_15378 = G__15385;
count__15310_15379 = G__15386;
i__15311_15380 = G__15387;
continue;
} else {
var temp__4425__auto___15388 = cljs.core.seq.call(null,seq__15308_15377);
if(temp__4425__auto___15388){
var seq__15308_15389__$1 = temp__4425__auto___15388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15308_15389__$1)){
var c__5031__auto___15390 = cljs.core.chunk_first.call(null,seq__15308_15389__$1);
var G__15391 = cljs.core.chunk_rest.call(null,seq__15308_15389__$1);
var G__15392 = c__5031__auto___15390;
var G__15393 = cljs.core.count.call(null,c__5031__auto___15390);
var G__15394 = (0);
seq__15308_15377 = G__15391;
chunk__15309_15378 = G__15392;
count__15310_15379 = G__15393;
i__15311_15380 = G__15394;
continue;
} else {
var vec__15313_15395 = cljs.core.first.call(null,seq__15308_15389__$1);
var col_15396 = cljs.core.nth.call(null,vec__15313_15395,(0),null);
var infos_15397 = cljs.core.nth.call(null,vec__15313_15395,(1),null);
encode_cols.call(null,infos_15397,source_idx_15366,line_15375,col_15396);

var G__15398 = cljs.core.next.call(null,seq__15308_15389__$1);
var G__15399 = null;
var G__15400 = (0);
var G__15401 = (0);
seq__15308_15377 = G__15398;
chunk__15309_15378 = G__15399;
count__15310_15379 = G__15400;
i__15311_15380 = G__15401;
continue;
}
} else {
}
}
break;
}

var G__15402 = seq__15303_15370;
var G__15403 = chunk__15304_15371;
var G__15404 = count__15305_15372;
var G__15405 = (i__15306_15373 + (1));
seq__15303_15370 = G__15402;
chunk__15304_15371 = G__15403;
count__15305_15372 = G__15404;
i__15306_15373 = G__15405;
continue;
} else {
var temp__4425__auto___15406 = cljs.core.seq.call(null,seq__15303_15370);
if(temp__4425__auto___15406){
var seq__15303_15407__$1 = temp__4425__auto___15406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15303_15407__$1)){
var c__5031__auto___15408 = cljs.core.chunk_first.call(null,seq__15303_15407__$1);
var G__15409 = cljs.core.chunk_rest.call(null,seq__15303_15407__$1);
var G__15410 = c__5031__auto___15408;
var G__15411 = cljs.core.count.call(null,c__5031__auto___15408);
var G__15412 = (0);
seq__15303_15370 = G__15409;
chunk__15304_15371 = G__15410;
count__15305_15372 = G__15411;
i__15306_15373 = G__15412;
continue;
} else {
var vec__15314_15413 = cljs.core.first.call(null,seq__15303_15407__$1);
var line_15414 = cljs.core.nth.call(null,vec__15314_15413,(0),null);
var cols_15415 = cljs.core.nth.call(null,vec__15314_15413,(1),null);
var seq__15315_15416 = cljs.core.seq.call(null,cols_15415);
var chunk__15316_15417 = null;
var count__15317_15418 = (0);
var i__15318_15419 = (0);
while(true){
if((i__15318_15419 < count__15317_15418)){
var vec__15319_15420 = cljs.core._nth.call(null,chunk__15316_15417,i__15318_15419);
var col_15421 = cljs.core.nth.call(null,vec__15319_15420,(0),null);
var infos_15422 = cljs.core.nth.call(null,vec__15319_15420,(1),null);
encode_cols.call(null,infos_15422,source_idx_15366,line_15414,col_15421);

var G__15423 = seq__15315_15416;
var G__15424 = chunk__15316_15417;
var G__15425 = count__15317_15418;
var G__15426 = (i__15318_15419 + (1));
seq__15315_15416 = G__15423;
chunk__15316_15417 = G__15424;
count__15317_15418 = G__15425;
i__15318_15419 = G__15426;
continue;
} else {
var temp__4425__auto___15427__$1 = cljs.core.seq.call(null,seq__15315_15416);
if(temp__4425__auto___15427__$1){
var seq__15315_15428__$1 = temp__4425__auto___15427__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15315_15428__$1)){
var c__5031__auto___15429 = cljs.core.chunk_first.call(null,seq__15315_15428__$1);
var G__15430 = cljs.core.chunk_rest.call(null,seq__15315_15428__$1);
var G__15431 = c__5031__auto___15429;
var G__15432 = cljs.core.count.call(null,c__5031__auto___15429);
var G__15433 = (0);
seq__15315_15416 = G__15430;
chunk__15316_15417 = G__15431;
count__15317_15418 = G__15432;
i__15318_15419 = G__15433;
continue;
} else {
var vec__15320_15434 = cljs.core.first.call(null,seq__15315_15428__$1);
var col_15435 = cljs.core.nth.call(null,vec__15320_15434,(0),null);
var infos_15436 = cljs.core.nth.call(null,vec__15320_15434,(1),null);
encode_cols.call(null,infos_15436,source_idx_15366,line_15414,col_15435);

var G__15437 = cljs.core.next.call(null,seq__15315_15428__$1);
var G__15438 = null;
var G__15439 = (0);
var G__15440 = (0);
seq__15315_15416 = G__15437;
chunk__15316_15417 = G__15438;
count__15317_15418 = G__15439;
i__15318_15419 = G__15440;
continue;
}
} else {
}
}
break;
}

var G__15441 = cljs.core.next.call(null,seq__15303_15407__$1);
var G__15442 = null;
var G__15443 = (0);
var G__15444 = (0);
seq__15303_15370 = G__15441;
chunk__15304_15371 = G__15442;
count__15305_15372 = G__15443;
i__15306_15373 = G__15444;
continue;
}
} else {
}
}
break;
}

var G__15445 = seq__15297_15361;
var G__15446 = chunk__15298_15362;
var G__15447 = count__15299_15363;
var G__15448 = (i__15300_15364 + (1));
seq__15297_15361 = G__15445;
chunk__15298_15362 = G__15446;
count__15299_15363 = G__15447;
i__15300_15364 = G__15448;
continue;
} else {
var temp__4425__auto___15449 = cljs.core.seq.call(null,seq__15297_15361);
if(temp__4425__auto___15449){
var seq__15297_15450__$1 = temp__4425__auto___15449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15297_15450__$1)){
var c__5031__auto___15451 = cljs.core.chunk_first.call(null,seq__15297_15450__$1);
var G__15452 = cljs.core.chunk_rest.call(null,seq__15297_15450__$1);
var G__15453 = c__5031__auto___15451;
var G__15454 = cljs.core.count.call(null,c__5031__auto___15451);
var G__15455 = (0);
seq__15297_15361 = G__15452;
chunk__15298_15362 = G__15453;
count__15299_15363 = G__15454;
i__15300_15364 = G__15455;
continue;
} else {
var vec__15321_15456 = cljs.core.first.call(null,seq__15297_15450__$1);
var source_idx_15457 = cljs.core.nth.call(null,vec__15321_15456,(0),null);
var vec__15322_15458 = cljs.core.nth.call(null,vec__15321_15456,(1),null);
var __15459 = cljs.core.nth.call(null,vec__15322_15458,(0),null);
var lines_15460__$1 = cljs.core.nth.call(null,vec__15322_15458,(1),null);
var seq__15323_15461 = cljs.core.seq.call(null,lines_15460__$1);
var chunk__15324_15462 = null;
var count__15325_15463 = (0);
var i__15326_15464 = (0);
while(true){
if((i__15326_15464 < count__15325_15463)){
var vec__15327_15465 = cljs.core._nth.call(null,chunk__15324_15462,i__15326_15464);
var line_15466 = cljs.core.nth.call(null,vec__15327_15465,(0),null);
var cols_15467 = cljs.core.nth.call(null,vec__15327_15465,(1),null);
var seq__15328_15468 = cljs.core.seq.call(null,cols_15467);
var chunk__15329_15469 = null;
var count__15330_15470 = (0);
var i__15331_15471 = (0);
while(true){
if((i__15331_15471 < count__15330_15470)){
var vec__15332_15472 = cljs.core._nth.call(null,chunk__15329_15469,i__15331_15471);
var col_15473 = cljs.core.nth.call(null,vec__15332_15472,(0),null);
var infos_15474 = cljs.core.nth.call(null,vec__15332_15472,(1),null);
encode_cols.call(null,infos_15474,source_idx_15457,line_15466,col_15473);

var G__15475 = seq__15328_15468;
var G__15476 = chunk__15329_15469;
var G__15477 = count__15330_15470;
var G__15478 = (i__15331_15471 + (1));
seq__15328_15468 = G__15475;
chunk__15329_15469 = G__15476;
count__15330_15470 = G__15477;
i__15331_15471 = G__15478;
continue;
} else {
var temp__4425__auto___15479__$1 = cljs.core.seq.call(null,seq__15328_15468);
if(temp__4425__auto___15479__$1){
var seq__15328_15480__$1 = temp__4425__auto___15479__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15328_15480__$1)){
var c__5031__auto___15481 = cljs.core.chunk_first.call(null,seq__15328_15480__$1);
var G__15482 = cljs.core.chunk_rest.call(null,seq__15328_15480__$1);
var G__15483 = c__5031__auto___15481;
var G__15484 = cljs.core.count.call(null,c__5031__auto___15481);
var G__15485 = (0);
seq__15328_15468 = G__15482;
chunk__15329_15469 = G__15483;
count__15330_15470 = G__15484;
i__15331_15471 = G__15485;
continue;
} else {
var vec__15333_15486 = cljs.core.first.call(null,seq__15328_15480__$1);
var col_15487 = cljs.core.nth.call(null,vec__15333_15486,(0),null);
var infos_15488 = cljs.core.nth.call(null,vec__15333_15486,(1),null);
encode_cols.call(null,infos_15488,source_idx_15457,line_15466,col_15487);

var G__15489 = cljs.core.next.call(null,seq__15328_15480__$1);
var G__15490 = null;
var G__15491 = (0);
var G__15492 = (0);
seq__15328_15468 = G__15489;
chunk__15329_15469 = G__15490;
count__15330_15470 = G__15491;
i__15331_15471 = G__15492;
continue;
}
} else {
}
}
break;
}

var G__15493 = seq__15323_15461;
var G__15494 = chunk__15324_15462;
var G__15495 = count__15325_15463;
var G__15496 = (i__15326_15464 + (1));
seq__15323_15461 = G__15493;
chunk__15324_15462 = G__15494;
count__15325_15463 = G__15495;
i__15326_15464 = G__15496;
continue;
} else {
var temp__4425__auto___15497__$1 = cljs.core.seq.call(null,seq__15323_15461);
if(temp__4425__auto___15497__$1){
var seq__15323_15498__$1 = temp__4425__auto___15497__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15323_15498__$1)){
var c__5031__auto___15499 = cljs.core.chunk_first.call(null,seq__15323_15498__$1);
var G__15500 = cljs.core.chunk_rest.call(null,seq__15323_15498__$1);
var G__15501 = c__5031__auto___15499;
var G__15502 = cljs.core.count.call(null,c__5031__auto___15499);
var G__15503 = (0);
seq__15323_15461 = G__15500;
chunk__15324_15462 = G__15501;
count__15325_15463 = G__15502;
i__15326_15464 = G__15503;
continue;
} else {
var vec__15334_15504 = cljs.core.first.call(null,seq__15323_15498__$1);
var line_15505 = cljs.core.nth.call(null,vec__15334_15504,(0),null);
var cols_15506 = cljs.core.nth.call(null,vec__15334_15504,(1),null);
var seq__15335_15507 = cljs.core.seq.call(null,cols_15506);
var chunk__15336_15508 = null;
var count__15337_15509 = (0);
var i__15338_15510 = (0);
while(true){
if((i__15338_15510 < count__15337_15509)){
var vec__15339_15511 = cljs.core._nth.call(null,chunk__15336_15508,i__15338_15510);
var col_15512 = cljs.core.nth.call(null,vec__15339_15511,(0),null);
var infos_15513 = cljs.core.nth.call(null,vec__15339_15511,(1),null);
encode_cols.call(null,infos_15513,source_idx_15457,line_15505,col_15512);

var G__15514 = seq__15335_15507;
var G__15515 = chunk__15336_15508;
var G__15516 = count__15337_15509;
var G__15517 = (i__15338_15510 + (1));
seq__15335_15507 = G__15514;
chunk__15336_15508 = G__15515;
count__15337_15509 = G__15516;
i__15338_15510 = G__15517;
continue;
} else {
var temp__4425__auto___15518__$2 = cljs.core.seq.call(null,seq__15335_15507);
if(temp__4425__auto___15518__$2){
var seq__15335_15519__$1 = temp__4425__auto___15518__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15335_15519__$1)){
var c__5031__auto___15520 = cljs.core.chunk_first.call(null,seq__15335_15519__$1);
var G__15521 = cljs.core.chunk_rest.call(null,seq__15335_15519__$1);
var G__15522 = c__5031__auto___15520;
var G__15523 = cljs.core.count.call(null,c__5031__auto___15520);
var G__15524 = (0);
seq__15335_15507 = G__15521;
chunk__15336_15508 = G__15522;
count__15337_15509 = G__15523;
i__15338_15510 = G__15524;
continue;
} else {
var vec__15340_15525 = cljs.core.first.call(null,seq__15335_15519__$1);
var col_15526 = cljs.core.nth.call(null,vec__15340_15525,(0),null);
var infos_15527 = cljs.core.nth.call(null,vec__15340_15525,(1),null);
encode_cols.call(null,infos_15527,source_idx_15457,line_15505,col_15526);

var G__15528 = cljs.core.next.call(null,seq__15335_15519__$1);
var G__15529 = null;
var G__15530 = (0);
var G__15531 = (0);
seq__15335_15507 = G__15528;
chunk__15336_15508 = G__15529;
count__15337_15509 = G__15530;
i__15338_15510 = G__15531;
continue;
}
} else {
}
}
break;
}

var G__15532 = cljs.core.next.call(null,seq__15323_15498__$1);
var G__15533 = null;
var G__15534 = (0);
var G__15535 = (0);
seq__15323_15461 = G__15532;
chunk__15324_15462 = G__15533;
count__15325_15463 = G__15534;
i__15326_15464 = G__15535;
continue;
}
} else {
}
}
break;
}

var G__15536 = cljs.core.next.call(null,seq__15297_15450__$1);
var G__15537 = null;
var G__15538 = (0);
var G__15539 = (0);
seq__15297_15361 = G__15536;
chunk__15298_15362 = G__15537;
count__15299_15363 = G__15538;
i__15300_15364 = G__15539;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__15341 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15240_SHARP_){
return [cljs.core.str(p1__15240_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15241_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__15241_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15242_SHARP_){
return clojure.string.join.call(null,",",p1__15242_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__15341__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__15342 = G__15341;
goog.object.set(G__15342,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__15342;
})():G__15341);
return G__15341__$1;
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
var vec__15545 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__15545,(0),null);
var col_map = cljs.core.nth.call(null,vec__15545,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__15546 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__15546,(0),null);
var infos = cljs.core.nth.call(null,vec__15546,(1),null);
var G__15550 = cljs.core.next.call(null,col_map_seq);
var G__15551 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__15546,col,infos,vec__15545,line,col_map){
return (function (v,p__15547){
var map__15548 = p__15547;
var map__15548__$1 = ((((!((map__15548 == null)))?((((map__15548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15548):map__15548);
var gline = cljs.core.get.call(null,map__15548__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__15548__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__15546,col,infos,vec__15545,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__15550;
new_cols = G__15551;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__15552 = cljs.core.next.call(null,line_map_seq);
var G__15553 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__15552;
new_lines = G__15553;
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
var seq__15604_15654 = cljs.core.seq.call(null,reverse_map);
var chunk__15605_15655 = null;
var count__15606_15656 = (0);
var i__15607_15657 = (0);
while(true){
if((i__15607_15657 < count__15606_15656)){
var vec__15608_15658 = cljs.core._nth.call(null,chunk__15605_15655,i__15607_15657);
var line_15659 = cljs.core.nth.call(null,vec__15608_15658,(0),null);
var columns_15660 = cljs.core.nth.call(null,vec__15608_15658,(1),null);
var seq__15609_15661 = cljs.core.seq.call(null,columns_15660);
var chunk__15610_15662 = null;
var count__15611_15663 = (0);
var i__15612_15664 = (0);
while(true){
if((i__15612_15664 < count__15611_15663)){
var vec__15613_15665 = cljs.core._nth.call(null,chunk__15610_15662,i__15612_15664);
var column_15666 = cljs.core.nth.call(null,vec__15613_15665,(0),null);
var column_info_15667 = cljs.core.nth.call(null,vec__15613_15665,(1),null);
var seq__15614_15668 = cljs.core.seq.call(null,column_info_15667);
var chunk__15615_15669 = null;
var count__15616_15670 = (0);
var i__15617_15671 = (0);
while(true){
if((i__15617_15671 < count__15616_15670)){
var map__15618_15672 = cljs.core._nth.call(null,chunk__15615_15669,i__15617_15671);
var map__15618_15673__$1 = ((((!((map__15618_15672 == null)))?((((map__15618_15672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15618_15672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15618_15672):map__15618_15672);
var gline_15674 = cljs.core.get.call(null,map__15618_15673__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15675 = cljs.core.get.call(null,map__15618_15673__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15676 = cljs.core.get.call(null,map__15618_15673__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15674], null),cljs.core.fnil.call(null,((function (seq__15614_15668,chunk__15615_15669,count__15616_15670,i__15617_15671,seq__15609_15661,chunk__15610_15662,count__15611_15663,i__15612_15664,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15618_15672,map__15618_15673__$1,gline_15674,gcol_15675,name_15676,vec__15613_15665,column_15666,column_info_15667,vec__15608_15658,line_15659,columns_15660,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15666], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15659,new cljs.core.Keyword(null,"col","col",-1959363084),column_15666,new cljs.core.Keyword(null,"name","name",1843675177),name_15676], null));
});})(seq__15614_15668,chunk__15615_15669,count__15616_15670,i__15617_15671,seq__15609_15661,chunk__15610_15662,count__15611_15663,i__15612_15664,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15618_15672,map__15618_15673__$1,gline_15674,gcol_15675,name_15676,vec__15613_15665,column_15666,column_info_15667,vec__15608_15658,line_15659,columns_15660,inverted))
,cljs.core.sorted_map.call(null)));

var G__15677 = seq__15614_15668;
var G__15678 = chunk__15615_15669;
var G__15679 = count__15616_15670;
var G__15680 = (i__15617_15671 + (1));
seq__15614_15668 = G__15677;
chunk__15615_15669 = G__15678;
count__15616_15670 = G__15679;
i__15617_15671 = G__15680;
continue;
} else {
var temp__4425__auto___15681 = cljs.core.seq.call(null,seq__15614_15668);
if(temp__4425__auto___15681){
var seq__15614_15682__$1 = temp__4425__auto___15681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15614_15682__$1)){
var c__5031__auto___15683 = cljs.core.chunk_first.call(null,seq__15614_15682__$1);
var G__15684 = cljs.core.chunk_rest.call(null,seq__15614_15682__$1);
var G__15685 = c__5031__auto___15683;
var G__15686 = cljs.core.count.call(null,c__5031__auto___15683);
var G__15687 = (0);
seq__15614_15668 = G__15684;
chunk__15615_15669 = G__15685;
count__15616_15670 = G__15686;
i__15617_15671 = G__15687;
continue;
} else {
var map__15620_15688 = cljs.core.first.call(null,seq__15614_15682__$1);
var map__15620_15689__$1 = ((((!((map__15620_15688 == null)))?((((map__15620_15688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15620_15688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15620_15688):map__15620_15688);
var gline_15690 = cljs.core.get.call(null,map__15620_15689__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15691 = cljs.core.get.call(null,map__15620_15689__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15692 = cljs.core.get.call(null,map__15620_15689__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15690], null),cljs.core.fnil.call(null,((function (seq__15614_15668,chunk__15615_15669,count__15616_15670,i__15617_15671,seq__15609_15661,chunk__15610_15662,count__15611_15663,i__15612_15664,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15620_15688,map__15620_15689__$1,gline_15690,gcol_15691,name_15692,seq__15614_15682__$1,temp__4425__auto___15681,vec__15613_15665,column_15666,column_info_15667,vec__15608_15658,line_15659,columns_15660,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15666], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15659,new cljs.core.Keyword(null,"col","col",-1959363084),column_15666,new cljs.core.Keyword(null,"name","name",1843675177),name_15692], null));
});})(seq__15614_15668,chunk__15615_15669,count__15616_15670,i__15617_15671,seq__15609_15661,chunk__15610_15662,count__15611_15663,i__15612_15664,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15620_15688,map__15620_15689__$1,gline_15690,gcol_15691,name_15692,seq__15614_15682__$1,temp__4425__auto___15681,vec__15613_15665,column_15666,column_info_15667,vec__15608_15658,line_15659,columns_15660,inverted))
,cljs.core.sorted_map.call(null)));

var G__15693 = cljs.core.next.call(null,seq__15614_15682__$1);
var G__15694 = null;
var G__15695 = (0);
var G__15696 = (0);
seq__15614_15668 = G__15693;
chunk__15615_15669 = G__15694;
count__15616_15670 = G__15695;
i__15617_15671 = G__15696;
continue;
}
} else {
}
}
break;
}

var G__15697 = seq__15609_15661;
var G__15698 = chunk__15610_15662;
var G__15699 = count__15611_15663;
var G__15700 = (i__15612_15664 + (1));
seq__15609_15661 = G__15697;
chunk__15610_15662 = G__15698;
count__15611_15663 = G__15699;
i__15612_15664 = G__15700;
continue;
} else {
var temp__4425__auto___15701 = cljs.core.seq.call(null,seq__15609_15661);
if(temp__4425__auto___15701){
var seq__15609_15702__$1 = temp__4425__auto___15701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15609_15702__$1)){
var c__5031__auto___15703 = cljs.core.chunk_first.call(null,seq__15609_15702__$1);
var G__15704 = cljs.core.chunk_rest.call(null,seq__15609_15702__$1);
var G__15705 = c__5031__auto___15703;
var G__15706 = cljs.core.count.call(null,c__5031__auto___15703);
var G__15707 = (0);
seq__15609_15661 = G__15704;
chunk__15610_15662 = G__15705;
count__15611_15663 = G__15706;
i__15612_15664 = G__15707;
continue;
} else {
var vec__15622_15708 = cljs.core.first.call(null,seq__15609_15702__$1);
var column_15709 = cljs.core.nth.call(null,vec__15622_15708,(0),null);
var column_info_15710 = cljs.core.nth.call(null,vec__15622_15708,(1),null);
var seq__15623_15711 = cljs.core.seq.call(null,column_info_15710);
var chunk__15624_15712 = null;
var count__15625_15713 = (0);
var i__15626_15714 = (0);
while(true){
if((i__15626_15714 < count__15625_15713)){
var map__15627_15715 = cljs.core._nth.call(null,chunk__15624_15712,i__15626_15714);
var map__15627_15716__$1 = ((((!((map__15627_15715 == null)))?((((map__15627_15715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15627_15715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15627_15715):map__15627_15715);
var gline_15717 = cljs.core.get.call(null,map__15627_15716__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15718 = cljs.core.get.call(null,map__15627_15716__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15719 = cljs.core.get.call(null,map__15627_15716__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15717], null),cljs.core.fnil.call(null,((function (seq__15623_15711,chunk__15624_15712,count__15625_15713,i__15626_15714,seq__15609_15661,chunk__15610_15662,count__15611_15663,i__15612_15664,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15627_15715,map__15627_15716__$1,gline_15717,gcol_15718,name_15719,vec__15622_15708,column_15709,column_info_15710,seq__15609_15702__$1,temp__4425__auto___15701,vec__15608_15658,line_15659,columns_15660,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15709], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15659,new cljs.core.Keyword(null,"col","col",-1959363084),column_15709,new cljs.core.Keyword(null,"name","name",1843675177),name_15719], null));
});})(seq__15623_15711,chunk__15624_15712,count__15625_15713,i__15626_15714,seq__15609_15661,chunk__15610_15662,count__15611_15663,i__15612_15664,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15627_15715,map__15627_15716__$1,gline_15717,gcol_15718,name_15719,vec__15622_15708,column_15709,column_info_15710,seq__15609_15702__$1,temp__4425__auto___15701,vec__15608_15658,line_15659,columns_15660,inverted))
,cljs.core.sorted_map.call(null)));

var G__15720 = seq__15623_15711;
var G__15721 = chunk__15624_15712;
var G__15722 = count__15625_15713;
var G__15723 = (i__15626_15714 + (1));
seq__15623_15711 = G__15720;
chunk__15624_15712 = G__15721;
count__15625_15713 = G__15722;
i__15626_15714 = G__15723;
continue;
} else {
var temp__4425__auto___15724__$1 = cljs.core.seq.call(null,seq__15623_15711);
if(temp__4425__auto___15724__$1){
var seq__15623_15725__$1 = temp__4425__auto___15724__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15623_15725__$1)){
var c__5031__auto___15726 = cljs.core.chunk_first.call(null,seq__15623_15725__$1);
var G__15727 = cljs.core.chunk_rest.call(null,seq__15623_15725__$1);
var G__15728 = c__5031__auto___15726;
var G__15729 = cljs.core.count.call(null,c__5031__auto___15726);
var G__15730 = (0);
seq__15623_15711 = G__15727;
chunk__15624_15712 = G__15728;
count__15625_15713 = G__15729;
i__15626_15714 = G__15730;
continue;
} else {
var map__15629_15731 = cljs.core.first.call(null,seq__15623_15725__$1);
var map__15629_15732__$1 = ((((!((map__15629_15731 == null)))?((((map__15629_15731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15629_15731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15629_15731):map__15629_15731);
var gline_15733 = cljs.core.get.call(null,map__15629_15732__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15734 = cljs.core.get.call(null,map__15629_15732__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15735 = cljs.core.get.call(null,map__15629_15732__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15733], null),cljs.core.fnil.call(null,((function (seq__15623_15711,chunk__15624_15712,count__15625_15713,i__15626_15714,seq__15609_15661,chunk__15610_15662,count__15611_15663,i__15612_15664,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15629_15731,map__15629_15732__$1,gline_15733,gcol_15734,name_15735,seq__15623_15725__$1,temp__4425__auto___15724__$1,vec__15622_15708,column_15709,column_info_15710,seq__15609_15702__$1,temp__4425__auto___15701,vec__15608_15658,line_15659,columns_15660,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15709], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15659,new cljs.core.Keyword(null,"col","col",-1959363084),column_15709,new cljs.core.Keyword(null,"name","name",1843675177),name_15735], null));
});})(seq__15623_15711,chunk__15624_15712,count__15625_15713,i__15626_15714,seq__15609_15661,chunk__15610_15662,count__15611_15663,i__15612_15664,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15629_15731,map__15629_15732__$1,gline_15733,gcol_15734,name_15735,seq__15623_15725__$1,temp__4425__auto___15724__$1,vec__15622_15708,column_15709,column_info_15710,seq__15609_15702__$1,temp__4425__auto___15701,vec__15608_15658,line_15659,columns_15660,inverted))
,cljs.core.sorted_map.call(null)));

var G__15736 = cljs.core.next.call(null,seq__15623_15725__$1);
var G__15737 = null;
var G__15738 = (0);
var G__15739 = (0);
seq__15623_15711 = G__15736;
chunk__15624_15712 = G__15737;
count__15625_15713 = G__15738;
i__15626_15714 = G__15739;
continue;
}
} else {
}
}
break;
}

var G__15740 = cljs.core.next.call(null,seq__15609_15702__$1);
var G__15741 = null;
var G__15742 = (0);
var G__15743 = (0);
seq__15609_15661 = G__15740;
chunk__15610_15662 = G__15741;
count__15611_15663 = G__15742;
i__15612_15664 = G__15743;
continue;
}
} else {
}
}
break;
}

var G__15744 = seq__15604_15654;
var G__15745 = chunk__15605_15655;
var G__15746 = count__15606_15656;
var G__15747 = (i__15607_15657 + (1));
seq__15604_15654 = G__15744;
chunk__15605_15655 = G__15745;
count__15606_15656 = G__15746;
i__15607_15657 = G__15747;
continue;
} else {
var temp__4425__auto___15748 = cljs.core.seq.call(null,seq__15604_15654);
if(temp__4425__auto___15748){
var seq__15604_15749__$1 = temp__4425__auto___15748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15604_15749__$1)){
var c__5031__auto___15750 = cljs.core.chunk_first.call(null,seq__15604_15749__$1);
var G__15751 = cljs.core.chunk_rest.call(null,seq__15604_15749__$1);
var G__15752 = c__5031__auto___15750;
var G__15753 = cljs.core.count.call(null,c__5031__auto___15750);
var G__15754 = (0);
seq__15604_15654 = G__15751;
chunk__15605_15655 = G__15752;
count__15606_15656 = G__15753;
i__15607_15657 = G__15754;
continue;
} else {
var vec__15631_15755 = cljs.core.first.call(null,seq__15604_15749__$1);
var line_15756 = cljs.core.nth.call(null,vec__15631_15755,(0),null);
var columns_15757 = cljs.core.nth.call(null,vec__15631_15755,(1),null);
var seq__15632_15758 = cljs.core.seq.call(null,columns_15757);
var chunk__15633_15759 = null;
var count__15634_15760 = (0);
var i__15635_15761 = (0);
while(true){
if((i__15635_15761 < count__15634_15760)){
var vec__15636_15762 = cljs.core._nth.call(null,chunk__15633_15759,i__15635_15761);
var column_15763 = cljs.core.nth.call(null,vec__15636_15762,(0),null);
var column_info_15764 = cljs.core.nth.call(null,vec__15636_15762,(1),null);
var seq__15637_15765 = cljs.core.seq.call(null,column_info_15764);
var chunk__15638_15766 = null;
var count__15639_15767 = (0);
var i__15640_15768 = (0);
while(true){
if((i__15640_15768 < count__15639_15767)){
var map__15641_15769 = cljs.core._nth.call(null,chunk__15638_15766,i__15640_15768);
var map__15641_15770__$1 = ((((!((map__15641_15769 == null)))?((((map__15641_15769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15641_15769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15641_15769):map__15641_15769);
var gline_15771 = cljs.core.get.call(null,map__15641_15770__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15772 = cljs.core.get.call(null,map__15641_15770__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15773 = cljs.core.get.call(null,map__15641_15770__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15771], null),cljs.core.fnil.call(null,((function (seq__15637_15765,chunk__15638_15766,count__15639_15767,i__15640_15768,seq__15632_15758,chunk__15633_15759,count__15634_15760,i__15635_15761,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15641_15769,map__15641_15770__$1,gline_15771,gcol_15772,name_15773,vec__15636_15762,column_15763,column_info_15764,vec__15631_15755,line_15756,columns_15757,seq__15604_15749__$1,temp__4425__auto___15748,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15763], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15756,new cljs.core.Keyword(null,"col","col",-1959363084),column_15763,new cljs.core.Keyword(null,"name","name",1843675177),name_15773], null));
});})(seq__15637_15765,chunk__15638_15766,count__15639_15767,i__15640_15768,seq__15632_15758,chunk__15633_15759,count__15634_15760,i__15635_15761,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15641_15769,map__15641_15770__$1,gline_15771,gcol_15772,name_15773,vec__15636_15762,column_15763,column_info_15764,vec__15631_15755,line_15756,columns_15757,seq__15604_15749__$1,temp__4425__auto___15748,inverted))
,cljs.core.sorted_map.call(null)));

var G__15774 = seq__15637_15765;
var G__15775 = chunk__15638_15766;
var G__15776 = count__15639_15767;
var G__15777 = (i__15640_15768 + (1));
seq__15637_15765 = G__15774;
chunk__15638_15766 = G__15775;
count__15639_15767 = G__15776;
i__15640_15768 = G__15777;
continue;
} else {
var temp__4425__auto___15778__$1 = cljs.core.seq.call(null,seq__15637_15765);
if(temp__4425__auto___15778__$1){
var seq__15637_15779__$1 = temp__4425__auto___15778__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15637_15779__$1)){
var c__5031__auto___15780 = cljs.core.chunk_first.call(null,seq__15637_15779__$1);
var G__15781 = cljs.core.chunk_rest.call(null,seq__15637_15779__$1);
var G__15782 = c__5031__auto___15780;
var G__15783 = cljs.core.count.call(null,c__5031__auto___15780);
var G__15784 = (0);
seq__15637_15765 = G__15781;
chunk__15638_15766 = G__15782;
count__15639_15767 = G__15783;
i__15640_15768 = G__15784;
continue;
} else {
var map__15643_15785 = cljs.core.first.call(null,seq__15637_15779__$1);
var map__15643_15786__$1 = ((((!((map__15643_15785 == null)))?((((map__15643_15785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15643_15785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15643_15785):map__15643_15785);
var gline_15787 = cljs.core.get.call(null,map__15643_15786__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15788 = cljs.core.get.call(null,map__15643_15786__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15789 = cljs.core.get.call(null,map__15643_15786__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15787], null),cljs.core.fnil.call(null,((function (seq__15637_15765,chunk__15638_15766,count__15639_15767,i__15640_15768,seq__15632_15758,chunk__15633_15759,count__15634_15760,i__15635_15761,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15643_15785,map__15643_15786__$1,gline_15787,gcol_15788,name_15789,seq__15637_15779__$1,temp__4425__auto___15778__$1,vec__15636_15762,column_15763,column_info_15764,vec__15631_15755,line_15756,columns_15757,seq__15604_15749__$1,temp__4425__auto___15748,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15763], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15756,new cljs.core.Keyword(null,"col","col",-1959363084),column_15763,new cljs.core.Keyword(null,"name","name",1843675177),name_15789], null));
});})(seq__15637_15765,chunk__15638_15766,count__15639_15767,i__15640_15768,seq__15632_15758,chunk__15633_15759,count__15634_15760,i__15635_15761,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15643_15785,map__15643_15786__$1,gline_15787,gcol_15788,name_15789,seq__15637_15779__$1,temp__4425__auto___15778__$1,vec__15636_15762,column_15763,column_info_15764,vec__15631_15755,line_15756,columns_15757,seq__15604_15749__$1,temp__4425__auto___15748,inverted))
,cljs.core.sorted_map.call(null)));

var G__15790 = cljs.core.next.call(null,seq__15637_15779__$1);
var G__15791 = null;
var G__15792 = (0);
var G__15793 = (0);
seq__15637_15765 = G__15790;
chunk__15638_15766 = G__15791;
count__15639_15767 = G__15792;
i__15640_15768 = G__15793;
continue;
}
} else {
}
}
break;
}

var G__15794 = seq__15632_15758;
var G__15795 = chunk__15633_15759;
var G__15796 = count__15634_15760;
var G__15797 = (i__15635_15761 + (1));
seq__15632_15758 = G__15794;
chunk__15633_15759 = G__15795;
count__15634_15760 = G__15796;
i__15635_15761 = G__15797;
continue;
} else {
var temp__4425__auto___15798__$1 = cljs.core.seq.call(null,seq__15632_15758);
if(temp__4425__auto___15798__$1){
var seq__15632_15799__$1 = temp__4425__auto___15798__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15632_15799__$1)){
var c__5031__auto___15800 = cljs.core.chunk_first.call(null,seq__15632_15799__$1);
var G__15801 = cljs.core.chunk_rest.call(null,seq__15632_15799__$1);
var G__15802 = c__5031__auto___15800;
var G__15803 = cljs.core.count.call(null,c__5031__auto___15800);
var G__15804 = (0);
seq__15632_15758 = G__15801;
chunk__15633_15759 = G__15802;
count__15634_15760 = G__15803;
i__15635_15761 = G__15804;
continue;
} else {
var vec__15645_15805 = cljs.core.first.call(null,seq__15632_15799__$1);
var column_15806 = cljs.core.nth.call(null,vec__15645_15805,(0),null);
var column_info_15807 = cljs.core.nth.call(null,vec__15645_15805,(1),null);
var seq__15646_15808 = cljs.core.seq.call(null,column_info_15807);
var chunk__15647_15809 = null;
var count__15648_15810 = (0);
var i__15649_15811 = (0);
while(true){
if((i__15649_15811 < count__15648_15810)){
var map__15650_15812 = cljs.core._nth.call(null,chunk__15647_15809,i__15649_15811);
var map__15650_15813__$1 = ((((!((map__15650_15812 == null)))?((((map__15650_15812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15650_15812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15650_15812):map__15650_15812);
var gline_15814 = cljs.core.get.call(null,map__15650_15813__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15815 = cljs.core.get.call(null,map__15650_15813__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15816 = cljs.core.get.call(null,map__15650_15813__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15814], null),cljs.core.fnil.call(null,((function (seq__15646_15808,chunk__15647_15809,count__15648_15810,i__15649_15811,seq__15632_15758,chunk__15633_15759,count__15634_15760,i__15635_15761,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15650_15812,map__15650_15813__$1,gline_15814,gcol_15815,name_15816,vec__15645_15805,column_15806,column_info_15807,seq__15632_15799__$1,temp__4425__auto___15798__$1,vec__15631_15755,line_15756,columns_15757,seq__15604_15749__$1,temp__4425__auto___15748,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15806], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15756,new cljs.core.Keyword(null,"col","col",-1959363084),column_15806,new cljs.core.Keyword(null,"name","name",1843675177),name_15816], null));
});})(seq__15646_15808,chunk__15647_15809,count__15648_15810,i__15649_15811,seq__15632_15758,chunk__15633_15759,count__15634_15760,i__15635_15761,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15650_15812,map__15650_15813__$1,gline_15814,gcol_15815,name_15816,vec__15645_15805,column_15806,column_info_15807,seq__15632_15799__$1,temp__4425__auto___15798__$1,vec__15631_15755,line_15756,columns_15757,seq__15604_15749__$1,temp__4425__auto___15748,inverted))
,cljs.core.sorted_map.call(null)));

var G__15817 = seq__15646_15808;
var G__15818 = chunk__15647_15809;
var G__15819 = count__15648_15810;
var G__15820 = (i__15649_15811 + (1));
seq__15646_15808 = G__15817;
chunk__15647_15809 = G__15818;
count__15648_15810 = G__15819;
i__15649_15811 = G__15820;
continue;
} else {
var temp__4425__auto___15821__$2 = cljs.core.seq.call(null,seq__15646_15808);
if(temp__4425__auto___15821__$2){
var seq__15646_15822__$1 = temp__4425__auto___15821__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15646_15822__$1)){
var c__5031__auto___15823 = cljs.core.chunk_first.call(null,seq__15646_15822__$1);
var G__15824 = cljs.core.chunk_rest.call(null,seq__15646_15822__$1);
var G__15825 = c__5031__auto___15823;
var G__15826 = cljs.core.count.call(null,c__5031__auto___15823);
var G__15827 = (0);
seq__15646_15808 = G__15824;
chunk__15647_15809 = G__15825;
count__15648_15810 = G__15826;
i__15649_15811 = G__15827;
continue;
} else {
var map__15652_15828 = cljs.core.first.call(null,seq__15646_15822__$1);
var map__15652_15829__$1 = ((((!((map__15652_15828 == null)))?((((map__15652_15828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15652_15828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15652_15828):map__15652_15828);
var gline_15830 = cljs.core.get.call(null,map__15652_15829__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15831 = cljs.core.get.call(null,map__15652_15829__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15832 = cljs.core.get.call(null,map__15652_15829__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15830], null),cljs.core.fnil.call(null,((function (seq__15646_15808,chunk__15647_15809,count__15648_15810,i__15649_15811,seq__15632_15758,chunk__15633_15759,count__15634_15760,i__15635_15761,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15652_15828,map__15652_15829__$1,gline_15830,gcol_15831,name_15832,seq__15646_15822__$1,temp__4425__auto___15821__$2,vec__15645_15805,column_15806,column_info_15807,seq__15632_15799__$1,temp__4425__auto___15798__$1,vec__15631_15755,line_15756,columns_15757,seq__15604_15749__$1,temp__4425__auto___15748,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15806], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15756,new cljs.core.Keyword(null,"col","col",-1959363084),column_15806,new cljs.core.Keyword(null,"name","name",1843675177),name_15832], null));
});})(seq__15646_15808,chunk__15647_15809,count__15648_15810,i__15649_15811,seq__15632_15758,chunk__15633_15759,count__15634_15760,i__15635_15761,seq__15604_15654,chunk__15605_15655,count__15606_15656,i__15607_15657,map__15652_15828,map__15652_15829__$1,gline_15830,gcol_15831,name_15832,seq__15646_15822__$1,temp__4425__auto___15821__$2,vec__15645_15805,column_15806,column_info_15807,seq__15632_15799__$1,temp__4425__auto___15798__$1,vec__15631_15755,line_15756,columns_15757,seq__15604_15749__$1,temp__4425__auto___15748,inverted))
,cljs.core.sorted_map.call(null)));

var G__15833 = cljs.core.next.call(null,seq__15646_15822__$1);
var G__15834 = null;
var G__15835 = (0);
var G__15836 = (0);
seq__15646_15808 = G__15833;
chunk__15647_15809 = G__15834;
count__15648_15810 = G__15835;
i__15649_15811 = G__15836;
continue;
}
} else {
}
}
break;
}

var G__15837 = cljs.core.next.call(null,seq__15632_15799__$1);
var G__15838 = null;
var G__15839 = (0);
var G__15840 = (0);
seq__15632_15758 = G__15837;
chunk__15633_15759 = G__15838;
count__15634_15760 = G__15839;
i__15635_15761 = G__15840;
continue;
}
} else {
}
}
break;
}

var G__15841 = cljs.core.next.call(null,seq__15604_15749__$1);
var G__15842 = null;
var G__15843 = (0);
var G__15844 = (0);
seq__15604_15654 = G__15841;
chunk__15605_15655 = G__15842;
count__15606_15656 = G__15843;
i__15607_15657 = G__15844;
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