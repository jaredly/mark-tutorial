// Compiled by ClojureScript 1.7.58 {}
goog.provide('app.view');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('app.handlers');
goog.require('app.subs');
goog.require('app.views.helpers');
app.view.styles = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre-wrap"], null),new cljs.core.Keyword(null,"repl-items","repl-items",847159361),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(1)], null),new cljs.core.Keyword(null,"repl-item","repl-item",152498044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 5px"], null),new cljs.core.Keyword(null,"input-item","input-item",-1524386460),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"output-item","output-item",-243378432),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"input-caret","input-caret",-1491147666),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10)], null),new cljs.core.Keyword(null,"output-caret","output-caret",-1406552955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10)], null),new cljs.core.Keyword(null,"repl-input","repl-input",-1430642169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 10px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3em"], null)], null);
app.view.view = cljs.core.partial.call(null,app.views.helpers.view,app.view.styles);
app.view.text = cljs.core.partial.call(null,app.views.helpers.text,app.view.styles);
app.view.str_QMARK_ = (function app$view$str_QMARK_(val){
return cljs.core._EQ_.call(null,String,cljs.core.type.call(null,val));
});
app.view.pprint_str = (function app$view$pprint_str(val){
return pprint.write.call(null,val,new cljs.core.Keyword(null,"stream","stream",1534941648),null);
});
if(typeof app.view.repl_item !== 'undefined'){
} else {
app.view.repl_item = (function (){var method_table__5141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"app.view","repl-item"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5145__auto__,method_table__5141__auto__,prefer_table__5142__auto__,method_cache__5143__auto__,cached_hierarchy__5144__auto__));
})();
}
cljs.core._add_method.call(null,app.view.repl_item,new cljs.core.Keyword(null,"input","input",556931961),(function (p__17231){
var map__17232 = p__17231;
var map__17232__$1 = ((((!((map__17232 == null)))?((((map__17232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17232):map__17232);
var text = cljs.core.get.call(null,map__17232__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-item","repl-item",152498044),new cljs.core.Keyword(null,"input-item","input-item",-1524386460)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.Keyword(null,"input-caret","input-caret",-1491147666),">"], null),text], null);
}));
cljs.core._add_method.call(null,app.view.repl_item,new cljs.core.Keyword(null,"log","log",-1595516004),(function (p__17234){
var map__17235 = p__17234;
var map__17235__$1 = ((((!((map__17235 == null)))?((((map__17235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17235):map__17235);
var value = cljs.core.get.call(null,map__17235__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-item","repl-item",152498044),new cljs.core.Keyword(null,"log-item","log-item",-1168302303)], null)], null),(cljs.core.truth_(app.view.str_QMARK_.call(null,value))?value:app.view.pprint_str.call(null,value))], null);
}));
cljs.core._add_method.call(null,app.view.repl_item,new cljs.core.Keyword(null,"output","output",-1105869043),(function (p__17237){
var map__17238 = p__17237;
var map__17238__$1 = ((((!((map__17238 == null)))?((((map__17238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17238):map__17238);
var value = cljs.core.get.call(null,map__17238__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-item","repl-item",152498044),new cljs.core.Keyword(null,"output-item","output-item",-243378432)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.Keyword(null,"output-caret","output-caret",-1406552955),"<"], null),cljs.core.pr_str.call(null,value)], null);
}));
app.view.repl_items = (function app$view$repl_items(items){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.Keyword(null,"repl-items","repl-items",847159361)], null),cljs.core.map.call(null,app.view.repl_item,items));
});
app.view.repl_input = (function app$view$repl_input(submit){
var text = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-text","current-text",-1258129925)], null));
var keydown = ((function (text){
return (function (evt){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),(function (){var G__17242 = evt.keyCode;
switch (G__17242) {
case (13):
return submit.call(null,cljs.core.deref.call(null,text));

break;
case (38):
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-up","go-up",-783282342)], null));

break;
case (40):
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-down","go-down",-1002511595)], null));

break;
default:
return new cljs.core.Keyword(null,"none","none",1333468478);

}
})())){
return null;
} else {
return evt.preventDefault();
}
});})(text))
;
return ((function (text,keydown){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (text,keydown){
return (function (p1__17240_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-text","set-text",1346789745),p1__17240_SHARP_.target.value], null));
});})(text,keydown))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"ClojureScript REPL",new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),keydown,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"repl-input","repl-input",-1430642169).cljs$core$IFn$_invoke$arity$1(app.view.styles),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,text)], null)], null);
});
;})(text,keydown))
});
app.view.repl = (function app$view$repl(execute){
var items = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null));
var submit = ((function (items){
return (function (text){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-input","add-input",-994386222),text], null));

return execute.call(null,text,((function (items){
return (function (p1__17244_SHARP_,p2__17245_SHARP_){
console.log("Got result",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17244_SHARP_,p2__17245_SHARP_], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-result","add-result",1382794315),p2__17245_SHARP_], null));
});})(items))
);
});})(items))
;
return ((function (items,submit){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.repl_items,cljs.core.deref.call(null,items)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.repl_input,submit], null)], null);
});
;})(items,submit))
});
app.view.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178),(0),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null);
app.view.init = (function app$view$init(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",-1875481434),app.view.initial_state], null));
});
app.view.log = (function app$view$log(val){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",715813891),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"value","value",305978217),val], null)], null));
});
app.view.set_print_BANG_ = (function app$view$set_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17246__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return app.view.log.call(null,cljs.core.first.call(null,args));
} else {
return app.view.log.call(null,args);
}
};
var G__17246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17247__i = 0, G__17247__a = new Array(arguments.length -  0);
while (G__17247__i < G__17247__a.length) {G__17247__a[G__17247__i] = arguments[G__17247__i + 0]; ++G__17247__i;}
  args = new cljs.core.IndexedSeq(G__17247__a,0);
} 
return G__17246__delegate.call(this,args);};
G__17246.cljs$lang$maxFixedArity = 0;
G__17246.cljs$lang$applyTo = (function (arglist__17248){
var args = cljs.core.seq(arglist__17248);
return G__17246__delegate(args);
});
G__17246.cljs$core$IFn$_invoke$arity$variadic = G__17246__delegate;
return G__17246;
})()
;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17249__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return app.view.log.call(null,cljs.core.first.call(null,args));
} else {
return app.view.log.call(null,args);
}
};
var G__17249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17250__i = 0, G__17250__a = new Array(arguments.length -  0);
while (G__17250__i < G__17250__a.length) {G__17250__a[G__17250__i] = arguments[G__17250__i + 0]; ++G__17250__i;}
  args = new cljs.core.IndexedSeq(G__17250__a,0);
} 
return G__17249__delegate.call(this,args);};
G__17249.cljs$lang$maxFixedArity = 0;
G__17249.cljs$lang$applyTo = (function (arglist__17251){
var args = cljs.core.seq(arglist__17251);
return G__17249__delegate(args);
});
G__17249.cljs$core$IFn$_invoke$arity$variadic = G__17249__delegate;
return G__17249;
})()
;
});

//# sourceMappingURL=view.js.map