// Compiled by ClojureScript 1.7.58 {}
goog.provide('app.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('app.views.helpers');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"clear-items","clear-items",524826180),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),(function (db,p__17468){
var vec__17469 = p__17468;
var _ = cljs.core.nth.call(null,vec__17469,(0),null);
var data = cljs.core.nth.call(null,vec__17469,(1),null);
return cljs.core.merge.call(null,db,data);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891),(function (db,p__17470){
var vec__17471 = p__17470;
var _ = cljs.core.nth.call(null,vec__17471,(0),null);
var item = cljs.core.nth.call(null,vec__17471,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,item);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-items","add-items",-1048325681),(function (db,p__17472){
var vec__17473 = p__17472;
var _ = cljs.core.nth.call(null,vec__17473,(0),null);
var items = cljs.core.nth.call(null,vec__17473,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.concat,items);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-input","add-input",-994386222),(function (db,p__17474){
var vec__17475 = p__17474;
var _ = cljs.core.nth.call(null,vec__17475,(0),null);
var input = cljs.core.nth.call(null,vec__17475,(1),null);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178),(0)),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,""),new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"text","text",-1790561697),input], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-result","add-result",1382794315),(function (db,p__17476){
var vec__17477 = p__17476;
var _ = cljs.core.nth.call(null,vec__17477,(0),null);
var error_QMARK_ = cljs.core.nth.call(null,vec__17477,(1),null);
var value = cljs.core.nth.call(null,vec__17477,(2),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(error_QMARK_)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"value","value",305978217),value], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-text","set-text",1346789745),(function (db,p__17478){
var vec__17479 = p__17478;
var _ = cljs.core.nth.call(null,vec__17479,(0),null);
var text = cljs.core.nth.call(null,vec__17479,(1),null);
var history = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(db);
var pos = new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178).cljs$core$IFn$_invoke$arity$1(db);
var idx = ((cljs.core.count.call(null,history) - pos) - (1));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178),(0)),new cljs.core.Keyword(null,"history","history",-247395220),((cljs.core._EQ_.call(null,pos,(0)))?cljs.core.assoc.call(null,history,idx,text):cljs.core.conj.call(null,history,text)));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"go-up","go-up",-783282342),(function (db,_){
var pos = new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178).cljs$core$IFn$_invoke$arity$1(db);
var len = cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(db));
var new_pos = (((pos >= (len - (1))))?(0):(pos + (1)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178),new_pos);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"go-down","go-down",-1002511595),(function (db,_){
var pos = new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178).cljs$core$IFn$_invoke$arity$1(db);
var new_pos = (((pos <= (0)))?(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(db)) - (1)):(pos - (1)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178),new_pos);
}));

//# sourceMappingURL=handlers.js.map