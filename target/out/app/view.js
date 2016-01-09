// Compiled by ClojureScript 1.7.58 {}
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('app.views.helpers');
goog.require('reagent.core');
goog.require('devtools.format');
goog.require('app.handlers');
goog.require('app.subs');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('re_frame.core');
app.view.styles = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"output-item","output-item",-243378432),new cljs.core.Keyword(null,"repl-items","repl-items",847159361),new cljs.core.Keyword(null,"caret","caret",-1275001854),new cljs.core.Keyword(null,"input-item","input-item",-1524386460),new cljs.core.Keyword(null,"error-item","error-item",-13017340),new cljs.core.Keyword(null,"output-caret","output-caret",-1406552955),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"repl-input","repl-input",-1430642169),new cljs.core.Keyword(null,"output-value","output-value",537285708),new cljs.core.Keyword(null,"input-caret","input-caret",-1491147666),new cljs.core.Keyword(null,"clear-button","clear-button",1904608692),new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"value-toggle","value-toggle",-878424841),new cljs.core.Keyword(null,"value-head","value-head",539403224),new cljs.core.Keyword(null,"repl-item","repl-item",152498044)],[cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(1)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#aaa",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(5),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(11),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(2)], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 10px"], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),new cljs.core.Keyword(null,"break-word","break-word",-153550263)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 10px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3em"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),new cljs.core.Keyword(null,"break-word","break-word",-153550263)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#555"], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre-wrap"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(9),new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 5px"], null)]);
app.view.view = cljs.core.partial.call(null,app.views.helpers.view,app.view.styles);
app.view.text = cljs.core.partial.call(null,app.views.helpers.text,app.view.styles);
app.view.button = cljs.core.partial.call(null,app.views.helpers.button,app.view.styles);
app.view.str_QMARK_ = (function app$view$str_QMARK_(val){
return cljs.core._EQ_.call(null,String,cljs.core.type.call(null,val));
});
app.view.pprint_str = (function app$view$pprint_str(val){
return cljs.pprint.write.call(null,val,new cljs.core.Keyword(null,"stream","stream",1534941648),null);
});
app.view.show_str = (function app$view$show_str(val){
if(cljs.core.truth_(app.view.str_QMARK_.call(null,val))){
return val;
} else {
return app.view.pprint_str.call(null,val);
}
});
app.view.js_array_QMARK_ = (function app$view$js_array_QMARK_(val){
return cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,val));
});
app.view.parse_style = (function app$view$parse_style(raw){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (line){
var vec__17246 = clojure.string.split.call(null,line,":");
var k = cljs.core.nth.call(null,vec__17246,(0),null);
var v = cljs.core.nth.call(null,vec__17246,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),clojure.string.split.call(null,raw,";")));
});
app.view.show_el = (function app$view$show_el(val){
var type = cljs.core.first.call(null,val);
var opts = cljs.core.second.call(null,val);
var children = cljs.core.drop.call(null,(2),val);
if(cljs.core._EQ_.call(null,"object",type)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.show_value,opts.object,opts.config], null);
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(opts)?app.view.parse_style.call(null,opts.style):null)], null)], null),cljs.core.map.call(null,((function (type,opts,children){
return (function (p1__17247_SHARP_){
if(cljs.core.not.call(null,app.view.js_array_QMARK_.call(null,p1__17247_SHARP_))){
return p1__17247_SHARP_;
} else {
return app$view$show_el.call(null,p1__17247_SHARP_);
}
});})(type,opts,children))
,children));
}
});
app.view.show_value = (function app$view$show_value(val,config){
if(cljs.core.truth_(cljs.core.var_QMARK_.call(null,val))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,null,app.view.show_str.call(null,val)], null);
} else {
var header = devtools.format.header_api_call.call(null,val,config);
if(cljs.core.not.call(null,header)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,null,app.view.show_str.call(null,val)], null);
} else {
if(cljs.core.not.call(null,devtools.format.has_body_api_call.call(null,val,config))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,null,app.view.show_el.call(null,header)], null);
} else {
var open = reagent.core.atom.call(null,false);
return ((function (open,header){
return (function (_,___$1){
var is_open = cljs.core.deref.call(null,open);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.Keyword(null,"value-with-body","value-with-body",960245150),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.Keyword(null,"value-head","value-head",539403224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (is_open,open,header){
return (function (){
return cljs.core.swap_BANG_.call(null,open,cljs.core.not);
});})(is_open,open,header))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"value-toggle","value-toggle",-878424841)], null),(cljs.core.truth_(is_open)?"\u25BC":"\u25B6")], null),app.view.show_el.call(null,header)], null),(cljs.core.truth_(is_open)?app.view.show_el.call(null,devtools.format.body_api_call.call(null,val,config)):null)], null);
});
;})(open,header))
}
}
}
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
cljs.core._add_method.call(null,app.view.repl_item,new cljs.core.Keyword(null,"input","input",556931961),(function (p__17248){
var map__17249 = p__17248;
var map__17249__$1 = ((((!((map__17249 == null)))?((((map__17249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17249):map__17249);
var text = cljs.core.get.call(null,map__17249__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-item","repl-item",152498044),new cljs.core.Keyword(null,"input-item","input-item",-1524386460)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caret","caret",-1275001854),new cljs.core.Keyword(null,"input-caret","input-caret",-1491147666)], null)], null),">"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),text], null)], null);
}));
cljs.core._add_method.call(null,app.view.repl_item,new cljs.core.Keyword(null,"log","log",-1595516004),(function (p__17251){
var map__17252 = p__17251;
var map__17252__$1 = ((((!((map__17252 == null)))?((((map__17252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17252):map__17252);
var value = cljs.core.get.call(null,map__17252__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-item","repl-item",152498044),new cljs.core.Keyword(null,"log-item","log-item",-1168302303)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.show_value,value,null], null)], null);
}));
cljs.core._add_method.call(null,app.view.repl_item,new cljs.core.Keyword(null,"error","error",-978969032),(function (p__17254){
var map__17255 = p__17254;
var map__17255__$1 = ((((!((map__17255 == null)))?((((map__17255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17255):map__17255);
var value = cljs.core.get.call(null,map__17255__$1,new cljs.core.Keyword(null,"value","value",305978217));
var message = value.message;
var underlying = value.cause;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-item","repl-item",152498044),new cljs.core.Keyword(null,"output-item","output-item",-243378432),new cljs.core.Keyword(null,"error-item","error-item",-13017340)], null)], null),message,(cljs.core.truth_(underlying)?underlying.message:null)], null);
}));
cljs.core._add_method.call(null,app.view.repl_item,new cljs.core.Keyword(null,"output","output",-1105869043),(function (p__17257){
var map__17258 = p__17257;
var map__17258__$1 = ((((!((map__17258 == null)))?((((map__17258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17258):map__17258);
var value = cljs.core.get.call(null,map__17258__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-item","repl-item",152498044),new cljs.core.Keyword(null,"output-item","output-item",-243378432)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caret","caret",-1275001854),new cljs.core.Keyword(null,"output-caret","output-caret",-1406552955)], null)], null),"<"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.Keyword(null,"output-value","output-value",537285708),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.show_value,value,null], null)], null)], null);
}));
app.view.repl_items = (function app$view$repl_items(items){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.Keyword(null,"repl-items","repl-items",847159361)], null),cljs.core.map.call(null,app.view.repl_item,items));
});
app.view.code_mirror = (function app$view$code_mirror(value_atom,p__17260){
var map__17264 = p__17260;
var map__17264__$1 = ((((!((map__17264 == null)))?((((map__17264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17264):map__17264);
var style = cljs.core.get.call(null,map__17264__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var on_change = cljs.core.get.call(null,map__17264__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_eval = cljs.core.get.call(null,map__17264__$1,new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659));
var on_up = cljs.core.get.call(null,map__17264__$1,new cljs.core.Keyword(null,"on-up","on-up",-127496699));
var on_down = cljs.core.get.call(null,map__17264__$1,new cljs.core.Keyword(null,"on-down","on-down",2037743467));
var should_go_up = cljs.core.get.call(null,map__17264__$1,new cljs.core.Keyword(null,"should-go-up","should-go-up",2137977547));
var should_go_down = cljs.core.get.call(null,map__17264__$1,new cljs.core.Keyword(null,"should-go-down","should-go-down",473755082));
var should_eval = cljs.core.get.call(null,map__17264__$1,new cljs.core.Keyword(null,"should-eval","should-eval",-681728538));
var cm = cljs.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (cm,map__17264,map__17264__$1,style,on_change,on_eval,on_up,on_down,should_go_up,should_go_down,should_eval){
return (function (this$){
var el = reagent.core.dom_node.call(null,this$);
var inst = (new CodeMirror(el,{"lineNumbers": false, "viewportMargin": Infinity, "matchBrackets": true, "extraKeys": {"Shift-Enter": "newlineAndIndent"}, "value": cljs.core.deref.call(null,value_atom), "autoCloseBrackets": true, "mode": "clojure"}));
cljs.core.reset_BANG_.call(null,cm,inst);

inst.on("change",((function (el,inst,cm,map__17264,map__17264__$1,style,on_change,on_eval,on_up,on_down,should_go_up,should_go_down,should_eval){
return (function (){
var value = inst.getValue();
if(cljs.core._EQ_.call(null,value,cljs.core.deref.call(null,value_atom))){
return null;
} else {
return on_change.call(null,value);
}
});})(el,inst,cm,map__17264,map__17264__$1,style,on_change,on_eval,on_up,on_down,should_go_up,should_go_down,should_eval))
);

return inst.on("keydown",((function (el,inst,cm,map__17264,map__17264__$1,style,on_change,on_eval,on_up,on_down,should_go_up,should_go_down,should_eval){
return (function (inst__$1,evt){
var G__17266 = evt.keyCode;
switch (G__17266) {
case (13):
var source = inst__$1.getValue();
if(cljs.core.truth_(should_eval.call(null,source,inst__$1,evt))){
evt.preventDefault();

return on_eval.call(null,source);
} else {
return null;
}

break;
case (38):
var source = inst__$1.getValue();
if(cljs.core.truth_(should_go_up.call(null,source,inst__$1))){
evt.preventDefault();

return on_up.call(null);
} else {
return null;
}

break;
case (40):
var source = inst__$1.getValue();
if(cljs.core.truth_(should_go_down.call(null,source,inst__$1))){
evt.preventDefault();

return on_down.call(null);
} else {
return null;
}

break;
default:
return new cljs.core.Keyword(null,"none","none",1333468478);

}
});})(el,inst,cm,map__17264,map__17264__$1,style,on_change,on_eval,on_up,on_down,should_go_up,should_go_down,should_eval))
);
});})(cm,map__17264,map__17264__$1,style,on_change,on_eval,on_up,on_down,should_go_up,should_go_down,should_eval))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (cm,map__17264,map__17264__$1,style,on_change,on_eval,on_up,on_down,should_go_up,should_go_down,should_eval){
return (function (this$,old_argv){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,value_atom),cljs.core.deref.call(null,cm).getValue())){
return null;
} else {
cljs.core.deref.call(null,cm).setValue(cljs.core.deref.call(null,value_atom));

var last_line = cljs.core.deref.call(null,cm).lastLine();
var last_ch = cljs.core.count.call(null,cljs.core.deref.call(null,cm).getLine(last_line));
return cljs.core.deref.call(null,cm).setCursor(last_line,last_ch);
}
});})(cm,map__17264,map__17264__$1,style,on_change,on_eval,on_up,on_down,should_go_up,should_go_down,should_eval))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (cm,map__17264,map__17264__$1,style,on_change,on_eval,on_up,on_down,should_go_up,should_go_down,should_eval){
return (function (_,___$1,___$2){
cljs.core.deref.call(null,value_atom);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null);
});})(cm,map__17264,map__17264__$1,style,on_change,on_eval,on_up,on_down,should_go_up,should_go_down,should_eval))
], null));
});
app.view.is_valid_cljs_QMARK_ = (function app$view$is_valid_cljs_QMARK_(source){
try{cljs.reader.read_string.call(null,source);

return true;
}catch (e17269){if((e17269 instanceof Error)){
var _ = e17269;
return false;
} else {
throw e17269;

}
}});
app.view.cm_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"should-go-up","should-go-up",2137977547),(function (source,inst){
var pos = inst.getCursor();
return cljs.core._EQ_.call(null,(0),pos.line);
}),new cljs.core.Keyword(null,"should-go-down","should-go-down",473755082),(function (source,inst){
var pos = inst.getCursor();
var last_line = inst.lastLine();
return cljs.core._EQ_.call(null,last_line,pos.line);
}),new cljs.core.Keyword(null,"should-eval","should-eval",-681728538),(function (source,inst,evt){
if(cljs.core.truth_(evt.shiftKey)){
return false;
} else {
if(cljs.core.truth_(evt.metaKey)){
return true;
} else {
var lines = inst.lineCount();
var in_place = (function (){var or__4247__auto__ = cljs.core._EQ_.call(null,(1),lines);
if(or__4247__auto__){
return or__4247__auto__;
} else {
var pos = inst.getCursor();
var last_line = (lines - (1));
return (cljs.core._EQ_.call(null,last_line,pos.line)) && (cljs.core._EQ_.call(null,pos.ch,cljs.core.count.call(null,inst.getLine(last_line))));
}
})();
var and__4235__auto__ = in_place;
if(and__4235__auto__){
return app.view.is_valid_cljs_QMARK_.call(null,source);
} else {
return and__4235__auto__;
}
}
}
})], null);
app.view.repl_input = (function app$view$repl_input(submit){
var text = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-text","current-text",-1258129925)], null));
return ((function (text){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.code_mirror,text,cljs.core.merge.call(null,app.view.cm_options,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #eee",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (text){
return (function (p1__17270_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-text","set-text",1346789745),p1__17270_SHARP_], null));
});})(text))
,new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659),((function (text){
return (function (p1__17271_SHARP_){
return submit.call(null,p1__17271_SHARP_);
});})(text))
,new cljs.core.Keyword(null,"on-up","on-up",-127496699),((function (text){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-up","go-up",-783282342)], null));
});})(text))
,new cljs.core.Keyword(null,"on-down","on-down",2037743467),((function (text){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-down","go-down",-1002511595)], null));
});})(text))
], null))], null);
});
;})(text))
});
app.view.repl = (function app$view$repl(execute){
var items = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null));
var submit = ((function (items){
return (function (text){
if(((0) < cljs.core.count.call(null,text.trim()))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-input","add-input",-994386222),text], null));

return execute.call(null,text,((function (items){
return (function (p1__17272_SHARP_,p2__17273_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-result","add-result",1382794315),cljs.core.not.call(null,p1__17272_SHARP_),p2__17273_SHARP_], null));
});})(items))
);
} else {
return null;
}
});})(items))
;
return ((function (items,submit){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.view,new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (items,submit){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-items","clear-items",524826180)], null));
});})(items,submit))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"clear-button","clear-button",1904608692)], null),"Clear"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.repl_items,cljs.core.deref.call(null,items)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.repl_input,submit], null)], null);
});
;})(items,submit))
});
app.view.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178),(0),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{:a 2 {:b 3} 4}"], null)], null);
app.view.init = (function app$view$init(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",-1875481434),app.view.initial_state], null));
});
app.view.log = (function app$view$log(val){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",715813891),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"value","value",305978217),val], null)], null));
});
app.view.set_print_BANG_ = (function app$view$set_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17274__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return app.view.log.call(null,cljs.core.first.call(null,args));
} else {
return app.view.log.call(null,args);
}
};
var G__17274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17275__i = 0, G__17275__a = new Array(arguments.length -  0);
while (G__17275__i < G__17275__a.length) {G__17275__a[G__17275__i] = arguments[G__17275__i + 0]; ++G__17275__i;}
  args = new cljs.core.IndexedSeq(G__17275__a,0);
} 
return G__17274__delegate.call(this,args);};
G__17274.cljs$lang$maxFixedArity = 0;
G__17274.cljs$lang$applyTo = (function (arglist__17276){
var args = cljs.core.seq(arglist__17276);
return G__17274__delegate(args);
});
G__17274.cljs$core$IFn$_invoke$arity$variadic = G__17274__delegate;
return G__17274;
})()
;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17277__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return app.view.log.call(null,cljs.core.first.call(null,args));
} else {
return app.view.log.call(null,args);
}
};
var G__17277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17278__i = 0, G__17278__a = new Array(arguments.length -  0);
while (G__17278__i < G__17278__a.length) {G__17278__a[G__17278__i] = arguments[G__17278__i + 0]; ++G__17278__i;}
  args = new cljs.core.IndexedSeq(G__17278__a,0);
} 
return G__17277__delegate.call(this,args);};
G__17277.cljs$lang$maxFixedArity = 0;
G__17277.cljs$lang$applyTo = (function (arglist__17279){
var args = cljs.core.seq(arglist__17279);
return G__17277__delegate(args);
});
G__17277.cljs$core$IFn$_invoke$arity$variadic = G__17277__delegate;
return G__17277;
})()
;
});

//# sourceMappingURL=view.js.map