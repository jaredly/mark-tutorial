// Compiled by ClojureScript 1.7.58 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('replumb.core');
goog.require('cljs.pprint');
goog.require('app.timers');
goog.require('app.view');
goog.require('quil.core');
goog.require('reagent.core');
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
app.core.default_code = "(ns game.main\n  (:require [quil.core :as q]\n            [app.timers :as t]))\n\n(defn change-color [state]\n  (assoc state :color (rand 255)))\n\n(defn clamp [val mx]\n  (max (min val mx) (- mx)))\n\n(defn bounce [{:keys [x y dx dy width height] :as state}]\n  (let [dx (clamp dx 7)\n        dy (clamp dy 7)\n        [x dx] (cond\n                 (< x 0) [0 (- dx)]\n                 (> x (- WIDTH width)) [(- WIDTH width) (- dx)]\n                 :default [(+ x dx) dx])\n        [y dy] (cond\n                 (< y 0) [0 (- dy)]\n                 (> y (- HEIGHT height)) [(- HEIGHT height) (- dy)]\n                 :default [(+ y dy) (+ dy 0.2)])]\n    (merge state {:x x :y y :dx dx :dy dy})))\n\n(defn update-color [state]\n  (when (= 0 (t/num-timers state))\n    (t/add-timer state 500 change-color)))\n\n; each of these functions will get a state map, and return a new state map\n(def update-functions\n  [update-color bounce])\n\n; the draw function receives the state map and uses quil's drawing functions\n(defn draw [{:keys [x y color]}]\n  (q/background color)\n  (q/rect x y 10 10))\n\n; you can also make mouse-moved and key-pressed functions which receive the state map and an event, and return a new state map\n";
app.core.default_state = "(ns game.state\n  (:require [quil.core :as q]\n            [app.timers :as t]))\n\n; the state @ the start of the animation\n{:color 0\n :x 0\n :y 0\n :dx (rand 5)\n :dy (rand 5)\n :width 10\n :height 10}";
app.core.funcs = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"update-functions","update-functions",-1367313486),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),null,new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){
return cljs.core.PersistentArrayMap.EMPTY;
}),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),null,new cljs.core.Keyword(null,"draw","draw",1358331674),null], null);
if(typeof app.core.setup_mirror !== 'undefined'){
} else {
app.core.setup_mirror = (new CodeMirror(document.getElementById("state"),{"lineNumbers": true, "matchBrackets": true, "value": app.core.default_state, "autoCloseBrackets": true, "mode": "clojure"}));
}
if(typeof app.core.code_mirror !== 'undefined'){
} else {
app.core.code_mirror = (function (){var container = document.getElementById("text");
container.style.height = [cljs.core.str(container.offsetHeight),cljs.core.str("px")].join('');

return (new CodeMirror(container,{"lineNumbers": true, "matchBrackets": true, "value": app.core.default_code, "autoCloseBrackets": true, "mode": "clojure"}));
})();
}
app.core.current_state = document.getElementById("current-state");
Inlet(app.core.setup_mirror);
Inlet(app.core.code_mirror);
app.core.pprint_str = (function app$core$pprint_str(val){
return cljs.pprint.write.call(null,val,new cljs.core.Keyword(null,"stream","stream",1534941648),null);
});
app.core.reload_button = document.getElementById("button");
app.core.str_QMARK_ = (function app$core$str_QMARK_(val){
return cljs.core._EQ_.call(null,String,cljs.core.type.call(null,val));
});
app.core.debug = (function app$core$debug(){
var args__5293__auto__ = [];
var len__5286__auto___10016 = arguments.length;
var i__5287__auto___10017 = (0);
while(true){
if((i__5287__auto___10017 < len__5286__auto___10016)){
args__5293__auto__.push((arguments[i__5287__auto___10017]));

var G__10018 = (i__5287__auto___10017 + (1));
i__5287__auto___10017 = G__10018;
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

app.core.debug.cljs$lang$applyTo = (function (seq10015){
return app.core.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10015));
});
if(typeof app.core.compnumber !== 'undefined'){
} else {
app.core.compnumber = cljs.core.atom.call(null,(0));
}
if(typeof app.core.repl_num !== 'undefined'){
} else {
app.core.repl_num = cljs.core.atom.call(null,(0));
}
app.core.wrap_fn = (function app$core$wrap_fn(kwd,arg){
var func = kwd.call(null,app.core.funcs);
if(cljs.core.not.call(null,func)){
return arg;
} else {
try{return func.call(null,arg);
}catch (e10020){if((e10020 instanceof Error)){
var e = e10020;
app.core.log_error.call(null,[cljs.core.str("Unable to execute "),cljs.core.str(kwd),cljs.core.str(" "),cljs.core.str(e)].join(''));

return arg;
} else {
throw e10020;

}
}}
});
app.core.header = [cljs.core.str("(ns game.main)"),cljs.core.str("(declare update-functions draw mouse-moved key-pressed)"),cljs.core.str("(def WIDTH "),cljs.core.str(app.core.WIDTH),cljs.core.str(")(def HEIGHT "),cljs.core.str(app.core.HEIGHT),cljs.core.str(")")].join('');
app.core.footer = "\n{:draw draw\n :update-functions update-functions\n :mouse-moved mouse-moved\n :key-pressed key-pressed}\n";
app.core.try_wrap = (function app$core$try_wrap(f,arg){
try{return f.call(null,arg);
}catch (e10022){if((e10022 instanceof Error)){
var e = e10022;
app.core.log_error.call(null,e);

return arg;
} else {
throw e10022;

}
}});
app.core.make_app = (function app$core$make_app(){
app.core.example = (function app$core$make_app_$_example(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"output",new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),cljs.core.partial.call(null,app.core.wrap_fn,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310)),new cljs.core.Keyword(null,"update","update",1045576396),(function (state){
var functions = new cljs.core.Keyword(null,"update-functions","update-functions",-1367313486).cljs$core$IFn$_invoke$arity$1(app.core.funcs);
var state__$1 = cljs.core.reduce.call(null,((function (functions){
return (function (p1__10024_SHARP_,p2__10023_SHARP_){
var or__4247__auto__ = app.core.try_wrap.call(null,p2__10023_SHARP_,p1__10024_SHARP_);
if(or__4247__auto__){
return or__4247__auto__;
} else {
return p1__10024_SHARP_;
}
});})(functions))
,state,functions);
(app.core.current_state["textContent"] = app.core.pprint_str.call(null,state__$1));

return state__$1;
}),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.WIDTH,app.core.HEIGHT], null),new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){
quil.core.frame_rate.call(null,(10));

console.log("first thing or what",app.core.result);

app.core.sketch = quil.sketch.current_applet.call(null);

var result = (function (){var or__4247__auto__ = app.core.wrap_fn.call(null,new cljs.core.Keyword(null,"setup","setup",1987730512));
if(or__4247__auto__){
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

if(cljs.core.some.call(null,(function (p1__9124__9125__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__9124__9125__auto__);
}),null)){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.core.example,new cljs.core.Keyword(null,"host-id","host-id",742376279),"output"], null));
}
});
app.core.reset_setup = (function app$core$reset_setup(){
if(app.core.sketch){
return cljs.core.reset_BANG_.call(null,app.core.sketch.quil,app.core.wrap_fn.call(null,new cljs.core.Keyword(null,"setup","setup",1987730512)));
} else {
return null;
}
});
app.core.eval = (function app$core$eval(source,file_name,callback){
return cljs.js.eval_str.call(null,replumb.repl.st,source,file_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",-1103567905),(function (val,cb){
app.core.debug.call(null,"evaling",new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(val));

return cljs.js.js_eval.call(null,val,cb);
})], null),callback);
});
app.core.run_setup = (function app$core$run_setup(){
var next_num = cljs.core.swap_BANG_.call(null,app.core.compnumber,cljs.core.inc);
var source = [cljs.core.str(app.core.setup_mirror.getValue())].join('');
app.core.debug.call(null,"setup",source);

return app.core.eval.call(null,source,[cljs.core.str("eval-setup-"),cljs.core.str(next_num),cljs.core.str(".cljs")].join(''),((function (next_num,source){
return (function (p__10028){
var map__10029 = p__10028;
var map__10029__$1 = ((((!((map__10029 == null)))?((((map__10029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10029):map__10029);
var full = map__10029__$1;
var initial_state = cljs.core.get.call(null,map__10029__$1,new cljs.core.Keyword(null,"value","value",305978217));
console.log(full,initial_state);

app.core.funcs = cljs.core.assoc.call(null,app.core.funcs,new cljs.core.Keyword(null,"setup","setup",1987730512),((function (map__10029,map__10029__$1,full,initial_state,next_num,source){
return (function (){
return initial_state;
});})(map__10029,map__10029__$1,full,initial_state,next_num,source))
);

return app.core.reset_setup.call(null);
});})(next_num,source))
);
});
app.core.run_code = (function app$core$run_code(){
var next_num = cljs.core.swap_BANG_.call(null,app.core.compnumber,cljs.core.inc);
var source = [cljs.core.str(app.core.header),cljs.core.str(app.core.code_mirror.getValue()),cljs.core.str(app.core.footer)].join('');
return app.core.eval.call(null,source,[cljs.core.str("eval-code-"),cljs.core.str(next_num),cljs.core.str(".cljs")].join(''),((function (next_num,source){
return (function (p__10034){
var map__10035 = p__10034;
var map__10035__$1 = ((((!((map__10035 == null)))?((((map__10035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10035):map__10035);
var new_funcs = cljs.core.get.call(null,map__10035__$1,new cljs.core.Keyword(null,"value","value",305978217));
app.core.funcs = cljs.core.merge.call(null,app.core.funcs,new_funcs);
});})(next_num,source))
);
});
app.core.replumb_opts = cljs.core.merge.call(null,replumb.core.browser_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/src/app","/target/out"], null),(function() { 
var G__10037__delegate = function (args){
return app.core.debug.call(null,"replumb load noop",args);
};
var G__10037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10038__i = 0, G__10038__a = new Array(arguments.length -  0);
while (G__10038__i < G__10038__a.length) {G__10038__a[G__10038__i] = arguments[G__10038__i + 0]; ++G__10038__i;}
  args = new cljs.core.IndexedSeq(G__10038__a,0);
} 
return G__10037__delegate.call(this,args);};
G__10037.cljs$lang$maxFixedArity = 0;
G__10037.cljs$lang$applyTo = (function (arglist__10039){
var args = cljs.core.seq(arglist__10039);
return G__10037__delegate(args);
});
G__10037.cljs$core$IFn$_invoke$arity$variadic = G__10037__delegate;
return G__10037;
})()
),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166),true,new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),true], null));
app.core.run_repl = (function app$core$run_repl(text,cb){
return replumb.core.read_eval_call.call(null,app.core.replumb_opts,(function (p1__10040_SHARP_){
return cb.call(null,replumb.core.success_QMARK_.call(null,p1__10040_SHARP_),replumb.core.unwrap_result.call(null,p1__10040_SHARP_));
}),text);
});
app.core.throttle = (function app$core$throttle(f,time){
var last = cljs.core.atom.call(null,null);
return ((function (last){
return (function() { 
var G__10041__delegate = function (args){
clearTimeout(cljs.core.deref.call(null,last));

return cljs.core.reset_BANG_.call(null,last,setTimeout(((function (last){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(last))
,time));
};
var G__10041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10042__i = 0, G__10042__a = new Array(arguments.length -  0);
while (G__10042__i < G__10042__a.length) {G__10042__a[G__10042__i] = arguments[G__10042__i + 0]; ++G__10042__i;}
  args = new cljs.core.IndexedSeq(G__10042__a,0);
} 
return G__10041__delegate.call(this,args);};
G__10041.cljs$lang$maxFixedArity = 0;
G__10041.cljs$lang$applyTo = (function (arglist__10043){
var args = cljs.core.seq(arglist__10043);
return G__10041__delegate(args);
});
G__10041.cljs$core$IFn$_invoke$arity$variadic = G__10041__delegate;
return G__10041;
})()
;
;})(last))
});
if(typeof app.core._setup !== 'undefined'){
} else {
app.core._setup = (function (){
app.core.setup_mirror.on("change",app.core.run_setup);

app.core.code_mirror.on("change",app.core.throttle.call(null,app.core.run_code,(400)));

app.view.init.call(null);

return null;
})()
;
}
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.view.repl,app.core.run_repl], null),document.getElementById("repl"));
(app.core.reload_button["onclick"] = (function (){
app.core.run_setup.call(null);

app.core.run_code.call(null);

return app.core.reset_setup.call(null);
}));
app.core.main = (function app$core$main(){
return console.log("www");
});
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,new cljs.core.Symbol(null,"quil.core","quil.core",1790300883,null));
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,new cljs.core.Symbol(null,"app.timers","app.timers",624605603,null));
app.core.set_print_BANG_ = (function app$core$set_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10044__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return app.core.log.call(null,cljs.core.first.call(null,args));
} else {
return app.core.log.call(null,args);
}
};
var G__10044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10045__i = 0, G__10045__a = new Array(arguments.length -  0);
while (G__10045__i < G__10045__a.length) {G__10045__a[G__10045__i] = arguments[G__10045__i + 0]; ++G__10045__i;}
  args = new cljs.core.IndexedSeq(G__10045__a,0);
} 
return G__10044__delegate.call(this,args);};
G__10044.cljs$lang$maxFixedArity = 0;
G__10044.cljs$lang$applyTo = (function (arglist__10046){
var args = cljs.core.seq(arglist__10046);
return G__10044__delegate(args);
});
G__10044.cljs$core$IFn$_invoke$arity$variadic = G__10044__delegate;
return G__10044;
})()
;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10047__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return app.core.log.call(null,cljs.core.first.call(null,args));
} else {
return app.core.log.call(null,args);
}
};
var G__10047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10048__i = 0, G__10048__a = new Array(arguments.length -  0);
while (G__10048__i < G__10048__a.length) {G__10048__a[G__10048__i] = arguments[G__10048__i + 0]; ++G__10048__i;}
  args = new cljs.core.IndexedSeq(G__10048__a,0);
} 
return G__10047__delegate.call(this,args);};
G__10047.cljs$lang$maxFixedArity = 0;
G__10047.cljs$lang$applyTo = (function (arglist__10049){
var args = cljs.core.seq(arglist__10049);
return G__10047__delegate(args);
});
G__10047.cljs$core$IFn$_invoke$arity$variadic = G__10047__delegate;
return G__10047;
})()
;
});
app.view.set_print_BANG_.call(null);
replumb.core.read_eval_call.call(null,app.core.replumb_opts,(function (p1__10050_SHARP_){
return app.core.debug.call(null,"Replumb ini",p1__10050_SHARP_);
}),"(in-ns 'game.main)");
app.core.run_setup.call(null);
app.core.run_code.call(null);
app.core.make_app.call(null);
setTimeout(app.view.set_print_BANG_,(100));

//# sourceMappingURL=core.js.map