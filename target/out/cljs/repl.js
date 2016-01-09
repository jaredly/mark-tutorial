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
var seq__13583_13597 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13584_13598 = null;
var count__13585_13599 = (0);
var i__13586_13600 = (0);
while(true){
if((i__13586_13600 < count__13585_13599)){
var f_13601 = cljs.core._nth.call(null,chunk__13584_13598,i__13586_13600);
cljs.core.println.call(null,"  ",f_13601);

var G__13602 = seq__13583_13597;
var G__13603 = chunk__13584_13598;
var G__13604 = count__13585_13599;
var G__13605 = (i__13586_13600 + (1));
seq__13583_13597 = G__13602;
chunk__13584_13598 = G__13603;
count__13585_13599 = G__13604;
i__13586_13600 = G__13605;
continue;
} else {
var temp__4425__auto___13606 = cljs.core.seq.call(null,seq__13583_13597);
if(temp__4425__auto___13606){
var seq__13583_13607__$1 = temp__4425__auto___13606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13583_13607__$1)){
var c__5031__auto___13608 = cljs.core.chunk_first.call(null,seq__13583_13607__$1);
var G__13609 = cljs.core.chunk_rest.call(null,seq__13583_13607__$1);
var G__13610 = c__5031__auto___13608;
var G__13611 = cljs.core.count.call(null,c__5031__auto___13608);
var G__13612 = (0);
seq__13583_13597 = G__13609;
chunk__13584_13598 = G__13610;
count__13585_13599 = G__13611;
i__13586_13600 = G__13612;
continue;
} else {
var f_13613 = cljs.core.first.call(null,seq__13583_13607__$1);
cljs.core.println.call(null,"  ",f_13613);

var G__13614 = cljs.core.next.call(null,seq__13583_13607__$1);
var G__13615 = null;
var G__13616 = (0);
var G__13617 = (0);
seq__13583_13597 = G__13614;
chunk__13584_13598 = G__13615;
count__13585_13599 = G__13616;
i__13586_13600 = G__13617;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13618 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4247__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13618);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13618)))?cljs.core.second.call(null,arglists_13618):arglists_13618));
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
var seq__13587 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13588 = null;
var count__13589 = (0);
var i__13590 = (0);
while(true){
if((i__13590 < count__13589)){
var vec__13591 = cljs.core._nth.call(null,chunk__13588,i__13590);
var name = cljs.core.nth.call(null,vec__13591,(0),null);
var map__13592 = cljs.core.nth.call(null,vec__13591,(1),null);
var map__13592__$1 = ((((!((map__13592 == null)))?((((map__13592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13592):map__13592);
var doc = cljs.core.get.call(null,map__13592__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__13592__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13619 = seq__13587;
var G__13620 = chunk__13588;
var G__13621 = count__13589;
var G__13622 = (i__13590 + (1));
seq__13587 = G__13619;
chunk__13588 = G__13620;
count__13589 = G__13621;
i__13590 = G__13622;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__13587);
if(temp__4425__auto__){
var seq__13587__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13587__$1)){
var c__5031__auto__ = cljs.core.chunk_first.call(null,seq__13587__$1);
var G__13623 = cljs.core.chunk_rest.call(null,seq__13587__$1);
var G__13624 = c__5031__auto__;
var G__13625 = cljs.core.count.call(null,c__5031__auto__);
var G__13626 = (0);
seq__13587 = G__13623;
chunk__13588 = G__13624;
count__13589 = G__13625;
i__13590 = G__13626;
continue;
} else {
var vec__13594 = cljs.core.first.call(null,seq__13587__$1);
var name = cljs.core.nth.call(null,vec__13594,(0),null);
var map__13595 = cljs.core.nth.call(null,vec__13594,(1),null);
var map__13595__$1 = ((((!((map__13595 == null)))?((((map__13595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13595):map__13595);
var doc = cljs.core.get.call(null,map__13595__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__13595__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13627 = cljs.core.next.call(null,seq__13587__$1);
var G__13628 = null;
var G__13629 = (0);
var G__13630 = (0);
seq__13587 = G__13627;
chunk__13588 = G__13628;
count__13589 = G__13629;
i__13590 = G__13630;
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