// Compiled by ClojureScript 1.7.58 {}
goog.provide('replumb.load');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('clojure.string');
goog.require('replumb.common');
/**
 * This load function just calls:
 * (cb {:lang   :js
 * :source ""})
 */
replumb.load.fake_load_fn_BANG_ = (function replumb$load$fake_load_fn_BANG_(_,cb){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
});
/**
 * Mimics "Resource not found" as it just calls: (cb nil)
 */
replumb.load.no_resource_load_fn_BANG_ = (function replumb$load$no_resource_load_fn_BANG_(_,cb){
return cb.call(null,null);
});
/**
 * Converts a filename to a lang keyword by inspecting the file
 * extension.
 */
replumb.load.filename__GT_lang = (function replumb$load$filename__GT_lang(file_name){
if(cljs.core.truth_(clojure.string.ends_with_QMARK_.call(null,file_name,".js"))){
return new cljs.core.Keyword(null,"js","js",1768080579);
} else {
return new cljs.core.Keyword(null,"clj","clj",-660495428);
}
});
/**
 * Returns the correct file extensions to try (no dot prefix), following
 * the cljs.js/*load-fn* docstring.
 */
replumb.load.extensions = (function replumb$load$extensions(){
var args13623 = [];
var len__5286__auto___13626 = arguments.length;
var i__5287__auto___13627 = (0);
while(true){
if((i__5287__auto___13627 < len__5286__auto___13626)){
args13623.push((arguments[i__5287__auto___13627]));

var G__13628 = (i__5287__auto___13627 + (1));
i__5287__auto___13627 = G__13628;
continue;
} else {
}
break;
}

var G__13625 = args13623.length;
switch (G__13625) {
case 0:
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13623.length)].join('')));

}
});

replumb.load.extensions.cljs$core$IFn$_invoke$arity$0 = (function (){
return replumb.load.extensions.call(null,false);
});

replumb.load.extensions.cljs$core$IFn$_invoke$arity$1 = (function (macros){
if(cljs.core.truth_(macros)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clj","cljc"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs","cljc","js"], null);
}
});

replumb.load.extensions.cljs$lang$maxFixedArity = 1;
/**
 * Loop on the file-names using a supplied read-file-fn (fn [file-name
 * src-cb] ...), calling back cb upon first successful read, otherwise
 * calling back with nil.
 * This function does not check whether parameters are nil, please do it
 * in the caller.
 */
replumb.load.read_files_and_callback_BANG_ = (function replumb$load$read_files_and_callback_BANG_(verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb){
var temp__4423__auto__ = cljs.core.first.call(null,file_names);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Reading",name,"...");
} else {
}

return read_file_fn_BANG_.call(null,name,((function (name,temp__4423__auto__){
return (function (source){
if(cljs.core.truth_(source)){
return load_fn_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),replumb.load.filename__GT_lang.call(null,name),new cljs.core.Keyword(null,"source","source",-433931539),source], null));
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"No source found...");
} else {
}

return replumb$load$read_files_and_callback_BANG_.call(null,verbose_QMARK_,cljs.core.rest.call(null,file_names),read_file_fn_BANG_,load_fn_cb);
}
});})(name,temp__4423__auto__))
);
} else {
return load_fn_cb.call(null,null);
}
});
/**
 * Produces a sequence of file paths based on src-paths and file-path (a
 * path already including one or more "/" and an extension).
 */
replumb.load.file_paths = (function replumb$load$file_paths(src_paths,file_path){
var iter__5000__auto__ = (function replumb$load$file_paths_$_iter__13634(s__13635){
return (new cljs.core.LazySeq(null,(function (){
var s__13635__$1 = s__13635;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13635__$1);
if(temp__4425__auto__){
var s__13635__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13635__$2)){
var c__4998__auto__ = cljs.core.chunk_first.call(null,s__13635__$2);
var size__4999__auto__ = cljs.core.count.call(null,c__4998__auto__);
var b__13637 = cljs.core.chunk_buffer.call(null,size__4999__auto__);
if((function (){var i__13636 = (0);
while(true){
if((i__13636 < size__4999__auto__)){
var src_path = cljs.core._nth.call(null,c__4998__auto__,i__13636);
cljs.core.chunk_append.call(null,b__13637,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(file_path)].join(''));

var G__13638 = (i__13636 + (1));
i__13636 = G__13638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13637),replumb$load$file_paths_$_iter__13634.call(null,cljs.core.chunk_rest.call(null,s__13635__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13637),null);
}
} else {
var src_path = cljs.core.first.call(null,s__13635__$2);
return cljs.core.cons.call(null,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(file_path)].join(''),replumb$load$file_paths_$_iter__13634.call(null,cljs.core.rest.call(null,s__13635__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5000__auto__.call(null,src_paths);
});
/**
 * Produces a sequence of file names to try reading from src-paths and
 * file-path-without-ext (it should already include one or more
 * "/"). The right order and extension is taken from cljs.js/*load-fn*
 * docstring and takes into consideration the macros parameter.
 */
replumb.load.file_paths_for_load_fn = (function replumb$load$file_paths_for_load_fn(src_paths,macros,file_path_without_ext){
var iter__5000__auto__ = (function replumb$load$file_paths_for_load_fn_$_iter__13645(s__13646){
return (new cljs.core.LazySeq(null,(function (){
var s__13646__$1 = s__13646;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13646__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var extension = cljs.core.first.call(null,xs__4977__auto__);
var iterys__4996__auto__ = ((function (s__13646__$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function replumb$load$file_paths_for_load_fn_$_iter__13645_$_iter__13647(s__13648){
return (new cljs.core.LazySeq(null,((function (s__13646__$1,extension,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__13648__$1 = s__13648;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__13648__$1);
if(temp__4425__auto____$1){
var s__13648__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13648__$2)){
var c__4998__auto__ = cljs.core.chunk_first.call(null,s__13648__$2);
var size__4999__auto__ = cljs.core.count.call(null,c__4998__auto__);
var b__13650 = cljs.core.chunk_buffer.call(null,size__4999__auto__);
if((function (){var i__13649 = (0);
while(true){
if((i__13649 < size__4999__auto__)){
var src_path = cljs.core._nth.call(null,c__4998__auto__,i__13649);
cljs.core.chunk_append.call(null,b__13650,[cljs.core.str(src_path),cljs.core.str("."),cljs.core.str(extension)].join(''));

var G__13651 = (i__13649 + (1));
i__13649 = G__13651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13650),replumb$load$file_paths_for_load_fn_$_iter__13645_$_iter__13647.call(null,cljs.core.chunk_rest.call(null,s__13648__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13650),null);
}
} else {
var src_path = cljs.core.first.call(null,s__13648__$2);
return cljs.core.cons.call(null,[cljs.core.str(src_path),cljs.core.str("."),cljs.core.str(extension)].join(''),replumb$load$file_paths_for_load_fn_$_iter__13645_$_iter__13647.call(null,cljs.core.rest.call(null,s__13648__$2)));
}
} else {
return null;
}
break;
}
});})(s__13646__$1,extension,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__13646__$1,extension,xs__4977__auto__,temp__4425__auto__))
;
var fs__4997__auto__ = cljs.core.seq.call(null,iterys__4996__auto__.call(null,replumb.load.file_paths.call(null,src_paths,file_path_without_ext)));
if(fs__4997__auto__){
return cljs.core.concat.call(null,fs__4997__auto__,replumb$load$file_paths_for_load_fn_$_iter__13645.call(null,cljs.core.rest.call(null,s__13646__$1)));
} else {
var G__13652 = cljs.core.rest.call(null,s__13646__$1);
s__13646__$1 = G__13652;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5000__auto__.call(null,replumb.load.extensions.call(null,macros));
});
/**
 * Produces a sequence of filenames to try reading crafted for goog
 * libraries, in the order they should be tried.
 */
replumb.load.file_paths_for_closure = (function replumb$load$file_paths_for_closure(src_paths,goog_path){
var iter__5000__auto__ = (function replumb$load$file_paths_for_closure_$_iter__13657(s__13658){
return (new cljs.core.LazySeq(null,(function (){
var s__13658__$1 = s__13658;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13658__$1);
if(temp__4425__auto__){
var s__13658__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13658__$2)){
var c__4998__auto__ = cljs.core.chunk_first.call(null,s__13658__$2);
var size__4999__auto__ = cljs.core.count.call(null,c__4998__auto__);
var b__13660 = cljs.core.chunk_buffer.call(null,size__4999__auto__);
if((function (){var i__13659 = (0);
while(true){
if((i__13659 < size__4999__auto__)){
var src_path = cljs.core._nth.call(null,c__4998__auto__,i__13659);
cljs.core.chunk_append.call(null,b__13660,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(goog_path),cljs.core.str(".js")].join(''));

var G__13661 = (i__13659 + (1));
i__13659 = G__13661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13660),replumb$load$file_paths_for_closure_$_iter__13657.call(null,cljs.core.chunk_rest.call(null,s__13658__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13660),null);
}
} else {
var src_path = cljs.core.first.call(null,s__13658__$2);
return cljs.core.cons.call(null,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(goog_path),cljs.core.str(".js")].join(''),replumb$load$file_paths_for_closure_$_iter__13657.call(null,cljs.core.rest.call(null,s__13658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5000__auto__.call(null,src_paths);
});
replumb.load.skip_load_QMARK_ = (function replumb$load$skip_load_QMARK_(p__13662){
var map__13665 = p__13662;
var map__13665__$1 = ((((!((map__13665 == null)))?((((map__13665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13665):map__13665);
var name = cljs.core.get.call(null,map__13665__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__13665__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var or__4247__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null));
if(or__4247__auto__){
return or__4247__auto__;
} else {
var or__4247__auto____$1 = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.analyzer","cljs.analyzer",1897881911,null));
if(or__4247__auto____$1){
return or__4247__auto____$1;
} else {
var or__4247__auto____$2 = (function (){var and__4235__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null));
if(and__4235__auto__){
return macros;
} else {
return and__4235__auto__;
}
})();
if(cljs.core.truth_(or__4247__auto____$2)){
return or__4247__auto____$2;
} else {
var or__4247__auto____$3 = (function (){var and__4235__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null));
if(and__4235__auto__){
return macros;
} else {
return and__4235__auto__;
}
})();
if(cljs.core.truth_(or__4247__auto____$3)){
return or__4247__auto____$3;
} else {
var and__4235__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null));
if(and__4235__auto__){
return macros;
} else {
return and__4235__auto__;
}
}
}
}
}
});

//# sourceMappingURL=load.js.map