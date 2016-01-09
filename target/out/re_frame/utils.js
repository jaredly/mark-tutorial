// Compiled by ClojureScript 1.7.58 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__17387_SHARP_){
return console.log(p1__17387_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__17388_SHARP_){
return console.warn(p1__17388_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__17389_SHARP_){
return console.error(p1__17389_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__17390_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__17390_SHARP_);
} else {
return console.log(p1__17390_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 * 'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))))].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(){
var args__5293__auto__ = [];
var len__5286__auto___17392 = arguments.length;
var i__5287__auto___17393 = (0);
while(true){
if((i__5287__auto___17393 < len__5286__auto___17392)){
args__5293__auto__.push((arguments[i__5287__auto___17393]));

var G__17394 = (i__5287__auto___17393 + (1));
i__5287__auto___17393 = G__17394;
continue;
} else {
}
break;
}

var argseq__5294__auto__ = ((((0) < args__5293__auto__.length))?(new cljs.core.IndexedSeq(args__5293__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5294__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq17391){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17391));
});
re_frame.utils.warn = (function re_frame$utils$warn(){
var args__5293__auto__ = [];
var len__5286__auto___17396 = arguments.length;
var i__5287__auto___17397 = (0);
while(true){
if((i__5287__auto___17397 < len__5286__auto___17396)){
args__5293__auto__.push((arguments[i__5287__auto___17397]));

var G__17398 = (i__5287__auto___17397 + (1));
i__5287__auto___17397 = G__17398;
continue;
} else {
}
break;
}

var argseq__5294__auto__ = ((((0) < args__5293__auto__.length))?(new cljs.core.IndexedSeq(args__5293__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5294__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq17395){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17395));
});
re_frame.utils.group = (function re_frame$utils$group(){
var args__5293__auto__ = [];
var len__5286__auto___17400 = arguments.length;
var i__5287__auto___17401 = (0);
while(true){
if((i__5287__auto___17401 < len__5286__auto___17400)){
args__5293__auto__.push((arguments[i__5287__auto___17401]));

var G__17402 = (i__5287__auto___17401 + (1));
i__5287__auto___17401 = G__17402;
continue;
} else {
}
break;
}

var argseq__5294__auto__ = ((((0) < args__5293__auto__.length))?(new cljs.core.IndexedSeq(args__5293__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5294__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq17399){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17399));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(){
var args__5293__auto__ = [];
var len__5286__auto___17404 = arguments.length;
var i__5287__auto___17405 = (0);
while(true){
if((i__5287__auto___17405 < len__5286__auto___17404)){
args__5293__auto__.push((arguments[i__5287__auto___17405]));

var G__17406 = (i__5287__auto___17405 + (1));
i__5287__auto___17405 = G__17406;
continue;
} else {
}
break;
}

var argseq__5294__auto__ = ((((0) < args__5293__auto__.length))?(new cljs.core.IndexedSeq(args__5293__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__5294__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq17403){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17403));
});
re_frame.utils.error = (function re_frame$utils$error(){
var args__5293__auto__ = [];
var len__5286__auto___17408 = arguments.length;
var i__5287__auto___17409 = (0);
while(true){
if((i__5287__auto___17409 < len__5286__auto___17408)){
args__5293__auto__.push((arguments[i__5287__auto___17409]));

var G__17410 = (i__5287__auto___17409 + (1));
i__5287__auto___17409 = G__17410;
continue;
} else {
}
break;
}

var argseq__5294__auto__ = ((((0) < args__5293__auto__.length))?(new cljs.core.IndexedSeq(args__5293__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5294__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq17407){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17407));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map