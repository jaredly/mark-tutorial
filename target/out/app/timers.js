// Compiled by ClojureScript 1.7.58 {}
goog.provide('app.timers');
goog.require('cljs.core');
app.timers.num_timers = (function app$timers$num_timers(state){
return cljs.core.count.call(null,new cljs.core.Keyword("app.timers","timers","app.timers/timers",-1987063220).cljs$core$IFn$_invoke$arity$1(state));
});
app.timers.new_timer = (function app$timers$new_timer(time,handler){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),Date.now(),new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null);
});
app.timers.add_timer = (function app$timers$add_timer(state,time,handler){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.timers","timers","app.timers/timers",-1987063220)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),app.timers.new_timer.call(null,time,handler));
});
app.timers.add_ival = (function app$timers$add_ival(state,name,time,handler){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.timers","ivals","app.timers/ivals",1607402351)], null),cljs.core.assoc,name,app.timers.new_timer.call(null,time,handler));
});
app.timers.remove_ival = (function app$timers$remove_ival(state,name){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.timers","ivals","app.timers/ivals",1607402351)], null),cljs.core.dissoc,name);
});
app.timers.timer_ready = (function app$timers$timer_ready(timer){
return ((Date.now() - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(timer)) >= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(timer));
});
app.timers.check_timer = (function app$timers$check_timer(state,timer){
if(cljs.core.not.call(null,app.timers.timer_ready.call(null,timer))){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.timers","timers","app.timers/timers",-1987063220)], null),cljs.core.conj,timer);
} else {
var or__4247__auto__ = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(timer).call(null,state);
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return state;
}
}
});
app.timers.check_ival = (function app$timers$check_ival(state,p__17434){
var vec__17436 = p__17434;
var name = cljs.core.nth.call(null,vec__17436,(0),null);
var timer = cljs.core.nth.call(null,vec__17436,(1),null);
if(cljs.core.not.call(null,app.timers.timer_ready.call(null,timer))){
return state;
} else {
var or__4247__auto__ = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(timer).call(null,state);
if(cljs.core.truth_(or__4247__auto__)){
return or__4247__auto__;
} else {
return state;
}
}
});
app.timers.update_timers = (function app$timers$update_timers(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("app.timers","timers","app.timers/timers",-1987063220).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
return cljs.core.reduce.call(null,app.timers.check_timer,cljs.core.assoc.call(null,state,new cljs.core.Keyword("app.timers","timers","app.timers/timers",-1987063220),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("app.timers","timers","app.timers/timers",-1987063220).cljs$core$IFn$_invoke$arity$1(state));
}
});
app.timers.update_ivals = (function app$timers$update_ivals(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("app.timers","ivals","app.timers/ivals",1607402351).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
return cljs.core.reduce.call(null,app.timers.check_ival,state,new cljs.core.Keyword("app.timers","ivals","app.timers/ivals",1607402351).cljs$core$IFn$_invoke$arity$1(state));
}
});
app.timers.update_fn = (function app$timers$update_fn(orig,state){
return app.timers.update_ivals.call(null,app.timers.update_timers.call(null,orig.call(null,state)));
});
app.timers.middleware = (function app$timers$middleware(options){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"update","update",1045576396),(function (p1__17437_SHARP_){
return app.timers.update_fn.call(null,new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(options),p1__17437_SHARP_);
}));
});

//# sourceMappingURL=timers.js.map