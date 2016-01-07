// Compiled by ClojureScript 1.7.58 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('app.timers');
goog.require('quil.core');
goog.require('cljs.js');
goog.require('cljs.analyzer');
goog.require('quil.middleware');
goog.require('devtools.core');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.mode.clojure');
goog.require('cljsjs.codemirror.mode.javascript');
goog.require('cljsjs.codemirror.addon.edit.matchbrackets');
goog.require('cljsjs.codemirror.addon.edit.closebrackets');
goog.require('cljsjs.codemirror.keymap.vim');
devtools.core.install_BANG_.call(null);
app.core.WIDTH = (300);
app.core.HEIGHT = (300);
app.core.convert = cljs.core.clj__GT_js;
app.core.default_code = "\n(defn change-color [state]\n  (assoc state :color (rand 255)))\n\n(defn clamp [val mx]\n  (max (min val mx) (- mx)))\n\n(defn bounce [{:keys [x y dx dy width height] :as state}]\n  (let [dx (clamp dx 7)\n        dy (clamp dy 7)\n        [x dx] (cond\n                 (< x 0) [0 (- dx)]\n                 (> x (- WIDTH width)) [(- WIDTH width) (- dx)]\n                 :default [(+ x dx) dx])\n        [y dy] (cond\n                 (< y 0) [0 (- dy)]\n                 (> y (- HEIGHT height)) [(- HEIGHT height) (- dy)]\n                 :default [(+ y dy) (+ dy 0.2)])]\n    (merge state {:x x :y y :dx dx :dy dy})))\n\n(defn update-color [state]\n  (when (= 0 (t/num-timers state))\n    (t/add-timer state 500 change-color)))\n\n(def update-functions\n  [update-color bounce])\n\n(defn draw [{:keys [x y color]}]\n  (q/background color)\n  (q/rect x y 10 10))\n";
app.core.default_state = "\n{:color 0\n :x 0\n :y 0\n :dx (rand 5)\n :dy (rand 5)\n :width 10\n :height 10}";
app.core.funcs = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"update-functions","update-functions",-1367313486),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),null,new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){
return cljs.core.PersistentArrayMap.EMPTY;
}),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),null,new cljs.core.Keyword(null,"draw","draw",1358331674),null], null);
if(typeof app.core.setup_mirror !== 'undefined'){
} else {
app.core.setup_mirror = (new CodeMirror(document.getElementById("state"),{"lineNumbers": true, "matchBrackets": true, "value": app.core.default_state, "autoCloseBrackets": true, "mode": "clojure"}));
}
if(typeof app.core.code_mirror !== 'undefined'){
} else {
app.core.code_mirror = (new CodeMirror(document.getElementById("text"),{"lineNumbers": true, "matchBrackets": true, "value": app.core.default_code, "autoCloseBrackets": true, "mode": "clojure"}));
}
app.core.current_state = document.getElementById("current-state");
Inlet(app.core.setup_mirror);
Inlet(app.core.code_mirror);
app.core.pprint_str = (function app$core$pprint_str(val){
return cljs.pprint.write.call(null,val,new cljs.core.Keyword(null,"stream","stream",1534941648),null);
});
app.core.log_el = document.getElementById("log");
app.core.reload_button = document.getElementById("button");
document.getElementById("clear").addEventListener("click",(function (){
return (app.core.log_el["innerHTML"] = "");
}));
app.core.str_QMARK_ = (function app$core$str_QMARK_(val){
return cljs.core._EQ_.call(null,String,cljs.core.type.call(null,val));
});
app.core.log = (function app$core$log(val){
var el = document.createElement("div");
var val__$1 = ((cljs.core.not.call(null,app.core.str_QMARK_.call(null,val)))?app.core.pprint_str.call(null,val):val);
(el["textContent"] = val__$1);

return app.core.log_el.appendChild(el);
});
app.core.debug = (function app$core$debug(){
var args__5293__auto__ = [];
var len__5286__auto___8737 = arguments.length;
var i__5287__auto___8738 = (0);
while(true){
if((i__5287__auto___8738 < len__5286__auto___8737)){
args__5293__auto__.push((arguments[i__5287__auto___8738]));

var G__8739 = (i__5287__auto___8738 + (1));
i__5287__auto___8738 = G__8739;
continue;
} else {
}
break;
}

var argseq__5294__auto__ = ((((0) < args__5293__auto__.length))?(new cljs.core.IndexedSeq(args__5293__auto__.slice((0)),(0))):null);
return app.core.debug.cljs$core$IFn$_invoke$arity$variadic(argseq__5294__auto__);
});

app.core.debug.cljs$core$IFn$_invoke$arity$variadic = (function (val){
var val__$1 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,val)))?cljs.core.first.call(null,val):val);
return console.log(val__$1);
});

app.core.debug.cljs$lang$maxFixedArity = (0);

app.core.debug.cljs$lang$applyTo = (function (seq8736){
return app.core.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8736));
});
app.core.log_error = (function app$core$log_error(err){
return app.core.log.call(null,err);
});
app.core.compiler_state = cljs.js.empty_state.call(null);
if(typeof app.core.compnumber !== 'undefined'){
} else {
app.core.compnumber = cljs.core.atom.call(null,(0));
}
app.core.ns_str = (function app$core$ns_str(id){
return [cljs.core.str("(ns eval.main"),cljs.core.str(id),cljs.core.str("  (:require [quil.core :as q]"),cljs.core.str("            [app.timers :as t]))")].join('');
});
app.core.header = [cljs.core.str("(declare update-functions draw mouse-moved key-pressed)"),cljs.core.str("(def WIDTH "),cljs.core.str(app.core.WIDTH),cljs.core.str(")(def HEIGHT "),cljs.core.str(app.core.HEIGHT),cljs.core.str(")")].join('');
app.core.footer = "\n{:draw draw\n :update-functions update-functions\n :mouse-moved mouse-moved\n :key-pressed key-pressed\n}";
app.core.wrap_fn = (function app$core$wrap_fn(kwd,arg){
var func = kwd.call(null,app.core.funcs);
if(cljs.core.truth_(func)){
try{return func.call(null,arg);
}catch (e8741){if((e8741 instanceof Error)){
var e = e8741;
app.core.log_error.call(null,[cljs.core.str("Unable to execute "),cljs.core.str(kwd),cljs.core.str(" "),cljs.core.str(e)].join(''));

return arg;
} else {
throw e8741;

}
}} else {
return null;
}
});
app.core.try_wrap = (function app$core$try_wrap(f,arg){
try{return f.call(null,arg);
}catch (e8743){if((e8743 instanceof Error)){
var e = e8743;
app.core.log_error.call(null,e);

return arg;
} else {
throw e8743;

}
}});
app.core.make_app = (function app$core$make_app(){
app.core.example = (function app$core$make_app_$_example(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"output",new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),cljs.core.partial.call(null,app.core.wrap_fn,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310)),new cljs.core.Keyword(null,"update","update",1045576396),(function (state){
console.log("update",state);

var functions = new cljs.core.Keyword(null,"update-functions","update-functions",-1367313486).cljs$core$IFn$_invoke$arity$1(app.core.funcs);
var state__$1 = cljs.core.reduce.call(null,((function (functions){
return (function (p1__8745_SHARP_,p2__8744_SHARP_){
var or__4247__auto__ = app.core.try_wrap.call(null,p2__8744_SHARP_,p1__8745_SHARP_);
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return p1__8745_SHARP_;
}
});})(functions))
,state,functions);
(app.core.current_state["textContent"] = app.core.pprint_str.call(null,state__$1));

console.log("updated",state__$1,functions);

return state__$1;
}),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.WIDTH,app.core.HEIGHT], null),new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){
console.log("first thing or what",app.core.result);

app.core.sketch = quil.sketch.current_applet.call(null);

var result = (function (){var or__4247__auto__ = app.core.wrap_fn.call(null,new cljs.core.Keyword(null,"setup","setup",1987730512));
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
console.log("resulting setup",result);

return result;
}),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode,app.timers.middleware], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),cljs.core.partial.call(null,app.core.wrap_fn,new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364)),new cljs.core.Keyword(null,"draw","draw",1358331674),cljs.core.partial.call(null,app.core.wrap_fn,new cljs.core.Keyword(null,"draw","draw",1358331674)));
});
goog.exportSymbol('app.core.example', app.core.example);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7811__7812__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7811__7812__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.core.example,new cljs.core.Keyword(null,"host-id","host-id",742376279),"output"], null));
}
});
app.core.reset_setup = (function app$core$reset_setup(){
if(cljs.core.truth_(app.core.sketch)){
return cljs.core.reset_BANG_.call(null,app.core.sketch.quil,app.core.wrap_fn.call(null,new cljs.core.Keyword(null,"setup","setup",1987730512)));
} else {
return null;
}
});
app.core.eval = (function app$core$eval(source,file_name,callback){
return cljs.js.eval_str.call(null,app.core.compiler_state,source,file_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",-1103567905),(function (val,cb){
return cljs.js.js_eval.call(null,val,cb);
})], null),callback);
});
app.core.run_setup = (function app$core$run_setup(){
var next_num = cljs.core.swap_BANG_.call(null,app.core.compnumber,cljs.core.inc);
var source = [cljs.core.str(app.core.ns_str.call(null,next_num)),cljs.core.str(app.core.setup_mirror.getValue())].join('');
app.core.debug.call(null,"setup",source);

return app.core.eval.call(null,source,[cljs.core.str("eval-setup-"),cljs.core.str(next_num),cljs.core.str(".cljs")].join(''),((function (next_num,source){
return (function (p__8749){
var map__8750 = p__8749;
var map__8750__$1 = ((((!((map__8750 == null)))?((((map__8750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8750):map__8750);
var full = map__8750__$1;
var initial_state = cljs.core.get.call(null,map__8750__$1,new cljs.core.Keyword(null,"value","value",305978217));
console.log(full,initial_state);

app.core.funcs = cljs.core.assoc.call(null,app.core.funcs,new cljs.core.Keyword(null,"setup","setup",1987730512),((function (map__8750,map__8750__$1,full,initial_state,next_num,source){
return (function (){
return initial_state;
});})(map__8750,map__8750__$1,full,initial_state,next_num,source))
);

return app.core.reset_setup.call(null);
});})(next_num,source))
);
});
app.core.run_code = (function app$core$run_code(){
var next_num = cljs.core.swap_BANG_.call(null,app.core.compnumber,cljs.core.inc);
var source = [cljs.core.str(app.core.ns_str.call(null,next_num)),cljs.core.str(app.core.header),cljs.core.str(app.core.code_mirror.getValue()),cljs.core.str(app.core.footer)].join('');
return app.core.eval.call(null,source,[cljs.core.str("eval-code-"),cljs.core.str(next_num),cljs.core.str(".cljs")].join(''),((function (next_num,source){
return (function (p__8755){
var map__8756 = p__8755;
var map__8756__$1 = ((((!((map__8756 == null)))?((((map__8756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8756):map__8756);
var new_funcs = cljs.core.get.call(null,map__8756__$1,new cljs.core.Keyword(null,"value","value",305978217));
app.core.funcs = cljs.core.merge.call(null,app.core.funcs,new_funcs);
});})(next_num,source))
);
});
app.core.throttle = (function app$core$throttle(f,time){
var last = cljs.core.atom.call(null,null);
return ((function (last){
return (function() { 
var G__8758__delegate = function (args){
clearTimeout(cljs.core.deref.call(null,last));

return cljs.core.reset_BANG_.call(null,last,setTimeout(((function (last){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(last))
,time));
};
var G__8758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8759__i = 0, G__8759__a = new Array(arguments.length -  0);
while (G__8759__i < G__8759__a.length) {G__8759__a[G__8759__i] = arguments[G__8759__i + 0]; ++G__8759__i;}
  args = new cljs.core.IndexedSeq(G__8759__a,0);
} 
return G__8758__delegate.call(this,args);};
G__8758.cljs$lang$maxFixedArity = 0;
G__8758.cljs$lang$applyTo = (function (arglist__8760){
var args = cljs.core.seq(arglist__8760);
return G__8758__delegate(args);
});
G__8758.cljs$core$IFn$_invoke$arity$variadic = G__8758__delegate;
return G__8758;
})()
;
;})(last))
});
if(typeof app.core._setup !== 'undefined'){
} else {
app.core._setup = (function (){
app.core.setup_mirror.on("change",app.core.run_setup);

app.core.code_mirror.on("change",app.core.throttle.call(null,app.core.run_code,(400)));

return null;
})()
;
}
(app.core.reload_button["onclick"] = (function (){
app.core.run_setup.call(null);

app.core.run_code.call(null);

return app.core.reset_setup.call(null);
}));
app.core.main = (function app$core$main(){
app.core.debug.call(null,"wat");

return console.log("www");
});
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,new cljs.core.Symbol(null,"quil.core","quil.core",1790300883,null));
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,new cljs.core.Symbol(null,"app.timers","app.timers",624605603,null));
app.core.set_print_BANG_ = (function app$core$set_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8761__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return app.core.log.call(null,cljs.core.first.call(null,args));
} else {
return app.core.log.call(null,args);
}
};
var G__8761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8762__i = 0, G__8762__a = new Array(arguments.length -  0);
while (G__8762__i < G__8762__a.length) {G__8762__a[G__8762__i] = arguments[G__8762__i + 0]; ++G__8762__i;}
  args = new cljs.core.IndexedSeq(G__8762__a,0);
} 
return G__8761__delegate.call(this,args);};
G__8761.cljs$lang$maxFixedArity = 0;
G__8761.cljs$lang$applyTo = (function (arglist__8763){
var args = cljs.core.seq(arglist__8763);
return G__8761__delegate(args);
});
G__8761.cljs$core$IFn$_invoke$arity$variadic = G__8761__delegate;
return G__8761;
})()
;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8764__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return app.core.log.call(null,cljs.core.first.call(null,args));
} else {
return app.core.log.call(null,args);
}
};
var G__8764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8765__i = 0, G__8765__a = new Array(arguments.length -  0);
while (G__8765__i < G__8765__a.length) {G__8765__a[G__8765__i] = arguments[G__8765__i + 0]; ++G__8765__i;}
  args = new cljs.core.IndexedSeq(G__8765__a,0);
} 
return G__8764__delegate.call(this,args);};
G__8764.cljs$lang$maxFixedArity = 0;
G__8764.cljs$lang$applyTo = (function (arglist__8766){
var args = cljs.core.seq(arglist__8766);
return G__8764__delegate(args);
});
G__8764.cljs$core$IFn$_invoke$arity$variadic = G__8764__delegate;
return G__8764;
})()
;
});
app.core.set_print_BANG_.call(null);
app.core.run_setup.call(null);
app.core.run_code.call(null);
app.core.make_app.call(null);
setTimeout(app.core.set_print_BANG_,(100));

//# sourceMappingURL=core.js.map