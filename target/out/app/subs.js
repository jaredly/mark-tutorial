// Compiled by ClojureScript 1.7.58 {}
goog.provide('app.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('app.views.helpers');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"items","items",1031954938),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"current-text","current-text",-1258129925),(function (db,_){
var idx = reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
var history = reagent.ratom.make_reaction.call(null,((function (idx){
return (function (){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(idx))
);
return reagent.ratom.make_reaction.call(null,((function (idx,history){
return (function (){
var items = cljs.core.deref.call(null,history);
var pos = ((cljs.core.count.call(null,items) - cljs.core.deref.call(null,idx)) - (1));
return cljs.core.get.call(null,items,pos);
});})(idx,history))
);
}));

//# sourceMappingURL=subs.js.map