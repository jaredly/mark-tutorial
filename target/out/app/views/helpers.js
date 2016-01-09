// Compiled by ClojureScript 1.7.58 {}
goog.provide('app.views.helpers');
goog.require('cljs.core');
goog.require('reagent.core');
app.views.helpers.text_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null);
app.views.helpers.view_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null);
app.views.helpers.button_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),"transparent",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5)], null);
app.views.helpers.get_styles = (function app$views$helpers$get_styles(styles,style_prop){
if((style_prop instanceof cljs.core.Keyword)){
return styles.call(null,style_prop);
} else {
if(cljs.core.sequential_QMARK_.call(null,style_prop)){
return cljs.core.reduce.call(null,(function (a,b){
return cljs.core.merge.call(null,a,app$views$helpers$get_styles.call(null,styles,b));
}),cljs.core.PersistentArrayMap.EMPTY,style_prop);
} else {
return style_prop;

}
}
});
app.views.helpers.parse_props = (function app$views$helpers$parse_props(styles,default_style,props){
if((props instanceof cljs.core.Keyword)){
return app$views$helpers$parse_props.call(null,styles,default_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),props], null));
} else {
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,default_style,app.views.helpers.get_styles.call(null,styles,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(props)))], null),cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"style","style",-496642736)));
}
});
app.views.helpers.better_el = (function app$views$helpers$better_el(){
var args__5293__auto__ = [];
var len__5286__auto___17444 = arguments.length;
var i__5287__auto___17445 = (0);
while(true){
if((i__5287__auto___17445 < len__5286__auto___17444)){
args__5293__auto__.push((arguments[i__5287__auto___17445]));

var G__17446 = (i__5287__auto___17445 + (1));
i__5287__auto___17445 = G__17446;
continue;
} else {
}
break;
}

var argseq__5294__auto__ = ((((4) < args__5293__auto__.length))?(new cljs.core.IndexedSeq(args__5293__auto__.slice((4)),(0))):null);
return app.views.helpers.better_el.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5294__auto__);
});

app.views.helpers.better_el.cljs$core$IFn$_invoke$arity$variadic = (function (dom_el,default_style,styles,props,children){
var vec__17443 = ((((props instanceof cljs.core.Keyword)) || (cljs.core.map_QMARK_.call(null,props)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [props], null),children)], null));
var props__$1 = cljs.core.nth.call(null,vec__17443,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__17443,(1),null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_el,app.views.helpers.parse_props.call(null,styles,default_style,props__$1)], null),children__$1));
});

app.views.helpers.better_el.cljs$lang$maxFixedArity = (4);

app.views.helpers.better_el.cljs$lang$applyTo = (function (seq17438){
var G__17439 = cljs.core.first.call(null,seq17438);
var seq17438__$1 = cljs.core.next.call(null,seq17438);
var G__17440 = cljs.core.first.call(null,seq17438__$1);
var seq17438__$2 = cljs.core.next.call(null,seq17438__$1);
var G__17441 = cljs.core.first.call(null,seq17438__$2);
var seq17438__$3 = cljs.core.next.call(null,seq17438__$2);
var G__17442 = cljs.core.first.call(null,seq17438__$3);
var seq17438__$4 = cljs.core.next.call(null,seq17438__$3);
return app.views.helpers.better_el.cljs$core$IFn$_invoke$arity$variadic(G__17439,G__17440,G__17441,G__17442,seq17438__$4);
});
app.views.helpers.view = cljs.core.partial.call(null,app.views.helpers.better_el,new cljs.core.Keyword(null,"div","div",1057191632),app.views.helpers.view_style);
app.views.helpers.text = cljs.core.partial.call(null,app.views.helpers.better_el,new cljs.core.Keyword(null,"span","span",1394872991),app.views.helpers.text_style);
app.views.helpers.button = cljs.core.partial.call(null,app.views.helpers.better_el,new cljs.core.Keyword(null,"button","button",1456579943),app.views.helpers.button_style);
app.views.helpers.hoverable = (function app$views$helpers$hoverable(){
var args__5293__auto__ = [];
var len__5286__auto___17452 = arguments.length;
var i__5287__auto___17453 = (0);
while(true){
if((i__5287__auto___17453 < len__5286__auto___17452)){
args__5293__auto__.push((arguments[i__5287__auto___17453]));

var G__17454 = (i__5287__auto___17453 + (1));
i__5287__auto___17453 = G__17454;
continue;
} else {
}
break;
}

var argseq__5294__auto__ = ((((1) < args__5293__auto__.length))?(new cljs.core.IndexedSeq(args__5293__auto__.slice((1)),(0))):null);
return app.views.helpers.hoverable.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5294__auto__);
});

app.views.helpers.hoverable.cljs$core$IFn$_invoke$arity$variadic = (function (config,children){
var hovered = reagent.core.atom.call(null,false);
return ((function (hovered){
return (function() { 
var G__17455__delegate = function (p__17449,children__$1){
var map__17450 = p__17449;
var map__17450__$1 = ((((!((map__17450 == null)))?((((map__17450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17450):map__17450);
var style = cljs.core.get.call(null,map__17450__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var hover_style = cljs.core.get.call(null,map__17450__$1,new cljs.core.Keyword(null,"hover-style","hover-style",976094077));
var el = cljs.core.get.call(null,map__17450__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var props = cljs.core.get.call(null,map__17450__$1,new cljs.core.Keyword(null,"props","props",453281727));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cljs.core.deref.call(null,hovered))?cljs.core.merge.call(null,style,hover_style):style),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (map__17450,map__17450__$1,style,hover_style,el,props,hovered){
return (function (){
cljs.core.reset_BANG_.call(null,hovered,true);

return null;
});})(map__17450,map__17450__$1,style,hover_style,el,props,hovered))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (map__17450,map__17450__$1,style,hover_style,el,props,hovered){
return (function (){
cljs.core.reset_BANG_.call(null,hovered,false);

return null;
});})(map__17450,map__17450__$1,style,hover_style,el,props,hovered))
)], null),children__$1);
};
var G__17455 = function (p__17449,var_args){
var children__$1 = null;
if (arguments.length > 1) {
var G__17456__i = 0, G__17456__a = new Array(arguments.length -  1);
while (G__17456__i < G__17456__a.length) {G__17456__a[G__17456__i] = arguments[G__17456__i + 1]; ++G__17456__i;}
  children__$1 = new cljs.core.IndexedSeq(G__17456__a,0);
} 
return G__17455__delegate.call(this,p__17449,children__$1);};
G__17455.cljs$lang$maxFixedArity = 1;
G__17455.cljs$lang$applyTo = (function (arglist__17457){
var p__17449 = cljs.core.first(arglist__17457);
var children__$1 = cljs.core.rest(arglist__17457);
return G__17455__delegate(p__17449,children__$1);
});
G__17455.cljs$core$IFn$_invoke$arity$variadic = G__17455__delegate;
return G__17455;
})()
;
;})(hovered))
});

app.views.helpers.hoverable.cljs$lang$maxFixedArity = (1);

app.views.helpers.hoverable.cljs$lang$applyTo = (function (seq17447){
var G__17448 = cljs.core.first.call(null,seq17447);
var seq17447__$1 = cljs.core.next.call(null,seq17447);
return app.views.helpers.hoverable.cljs$core$IFn$_invoke$arity$variadic(G__17448,seq17447__$1);
});

//# sourceMappingURL=helpers.js.map