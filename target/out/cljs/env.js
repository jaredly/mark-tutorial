// Compiled by ClojureScript 1.7.58 {}
goog.provide('cljs.env');
goog.require('cljs.core');
cljs.env._STAR_compiler_STAR_ = null;
cljs.env.default_compiler_env = (function cljs$env$default_compiler_env(){
var args9925 = [];
var len__5286__auto___9928 = arguments.length;
var i__5287__auto___9929 = (0);
while(true){
if((i__5287__auto___9929 < len__5286__auto___9928)){
args9925.push((arguments[i__5287__auto___9929]));

var G__9930 = (i__5287__auto___9929 + (1));
i__5287__auto___9929 = G__9930;
continue;
} else {
}
break;
}

var G__9927 = args9925.length;
switch (G__9927) {
case 0:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9925.length)].join('')));

}
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.env.default_compiler_env.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1 = (function (options){
return cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null)], null),new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),options], null)));
});

cljs.env.default_compiler_env.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=env.js.map