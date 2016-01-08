// Compiled by ClojureScript 1.7.58 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13569_13583 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13570_13584 = null;
var count__13571_13585 = (0);
var i__13572_13586 = (0);
while(true){
if((i__13572_13586 < count__13571_13585)){
var f_13587 = cljs.core._nth.call(null,chunk__13570_13584,i__13572_13586);
cljs.core.println.call(null,"  ",f_13587);

var G__13588 = seq__13569_13583;
var G__13589 = chunk__13570_13584;
var G__13590 = count__13571_13585;
var G__13591 = (i__13572_13586 + (1));
seq__13569_13583 = G__13588;
chunk__13570_13584 = G__13589;
count__13571_13585 = G__13590;
i__13572_13586 = G__13591;
continue;
} else {
var temp__4425__auto___13592 = cljs.core.seq.call(null,seq__13569_13583);
if(temp__4425__auto___13592){
var seq__13569_13593__$1 = temp__4425__auto___13592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13569_13593__$1)){
var c__5031__auto___13594 = cljs.core.chunk_first.call(null,seq__13569_13593__$1);
var G__13595 = cljs.core.chunk_rest.call(null,seq__13569_13593__$1);
var G__13596 = c__5031__auto___13594;
var G__13597 = cljs.core.count.call(null,c__5031__auto___13594);
var G__13598 = (0);
seq__13569_13583 = G__13595;
chunk__13570_13584 = G__13596;
count__13571_13585 = G__13597;
i__13572_13586 = G__13598;
continue;
} else {
var f_13599 = cljs.core.first.call(null,seq__13569_13593__$1);
cljs.core.println.call(null,"  ",f_13599);

var G__13600 = cljs.core.next.call(null,seq__13569_13593__$1);
var G__13601 = null;
var G__13602 = (0);
var G__13603 = (0);
seq__13569_13583 = G__13600;
chunk__13570_13584 = G__13601;
count__13571_13585 = G__13602;
i__13572_13586 = G__13603;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13604 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4247__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13604);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13604)))?cljs.core.second.call(null,arglists_13604):arglists_13604));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13573 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13574 = null;
var count__13575 = (0);
var i__13576 = (0);
while(true){
if((i__13576 < count__13575)){
var vec__13577 = cljs.core._nth.call(null,chunk__13574,i__13576);
var name = cljs.core.nth.call(null,vec__13577,(0),null);
var map__13578 = cljs.core.nth.call(null,vec__13577,(1),null);
var map__13578__$1 = ((((!((map__13578 == null)))?((((map__13578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13578):map__13578);
var doc = cljs.core.get.call(null,map__13578__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__13578__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13605 = seq__13573;
var G__13606 = chunk__13574;
var G__13607 = count__13575;
var G__13608 = (i__13576 + (1));
seq__13573 = G__13605;
chunk__13574 = G__13606;
count__13575 = G__13607;
i__13576 = G__13608;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__13573);
if(temp__4425__auto__){
var seq__13573__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13573__$1)){
var c__5031__auto__ = cljs.core.chunk_first.call(null,seq__13573__$1);
var G__13609 = cljs.core.chunk_rest.call(null,seq__13573__$1);
var G__13610 = c__5031__auto__;
var G__13611 = cljs.core.count.call(null,c__5031__auto__);
var G__13612 = (0);
seq__13573 = G__13609;
chunk__13574 = G__13610;
count__13575 = G__13611;
i__13576 = G__13612;
continue;
} else {
var vec__13580 = cljs.core.first.call(null,seq__13573__$1);
var name = cljs.core.nth.call(null,vec__13580,(0),null);
var map__13581 = cljs.core.nth.call(null,vec__13580,(1),null);
var map__13581__$1 = ((((!((map__13581 == null)))?((((map__13581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13581):map__13581);
var doc = cljs.core.get.call(null,map__13581__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__13581__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13613 = cljs.core.next.call(null,seq__13573__$1);
var G__13614 = null;
var G__13615 = (0);
var G__13616 = (0);
seq__13573 = G__13613;
chunk__13574 = G__13614;
count__13575 = G__13615;
i__13576 = G__13616;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map