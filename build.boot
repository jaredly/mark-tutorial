(set-env!
  :source-paths   #{"src"}
  :resource-paths #{"html"}
  :dependencies
  '[
    [adzerk/boot-cljs            "0.0-3308-0"      :scope "test"]
    [adzerk/boot-cljs-repl       "0.1.10-SNAPSHOT" :scope "test"]
    [adzerk/boot-reload          "0.3.1"           :scope "test"]
    [pandeiro/boot-http          "0.6.3"           :scope "test"]
    [crisptrutski/boot-cljs-test "0.1.0-SNAPSHOT"  :scope "test"]
    [zilti/boot-typed "0.1.1" :scope "test"]

    [binaryage/devtools "0.4.1"]
    [cljsjs/codemirror "5.10.0-0"]
    [quil "2.3.0"]

    [ajchemist/boot-figwheel "0.5.0-0"] ;; latest release
    [com.cemerick/piggieback "0.2.1" :scope "test"]
    [figwheel-sidecar "0.5.0-2" :scope "test"]

    [weasel                  "0.7.0"  :scope "test"]
    [org.clojure/tools.nrepl "0.2.12" :scope "test"]

    [org.clojure/clojure         "1.7.0"]
    [org.clojure/core.typed "0.3.18"]
    [org.clojure/clojurescript   "1.7.58"]])

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload    :refer [reload]]
  '[crisptrutski.boot-cljs-test  :refer [test-cljs]]
  '[pandeiro.boot-http    :refer [serve]])

(require 'boot-figwheel)
(refer 'boot-figwheel :rename '{cljs-repl fw-cljs-repl})

(task-options!
 figwheel {:build-ids  ["dev"]
           :all-builds [{:id "dev"
                         :compiler {:main 'app.core
                                    :output-to "app.js"}
                         :figwheel {:build-id  "dev"
                                    :on-jsload "app.core/main"
                                    :heads-up-display true
                                    :autoload true
                                    :debug false}}]
           :figwheel-options {:repl true
                              :http-server-root "target"
                              :css-dirs ["target"]
                              :open-file-command "emacsclient"}})

(deftask auto-test []
  (set-env! :source-paths #{"src" "test"})
  (comp (watch)
        (speak)
        (test-cljs)))

(deftask dev []
  (set-env! :source-paths #{"src"})
  (comp 
        (serve :dir ".")
        (watch)
        ;(speak)
        (reload :on-jsload 'app.core/main)
        (cljs-repl)
        (cljs :source-map true :optimizations :none)
        (sift :add-jar {'cljsjs/codemirror #"cljsjs/codemirror/development/codemirror.css"})
        (sift :move {#"cljsjs/codemirror/development/codemirror.css" "vendor/codemirror/codemirror.css"})))

(deftask devfw []
  (set-env! :source-paths #(into % ["src"]))
  (comp (repl) (figwheel)))

(deftask build []
  (set-env! :source-paths #{"src"})
  (comp (cljs :compiler-options {:target :nodejs} :optimizations :none)
        (sift :add-jar {'cljsjs/codemirror #"cljsjs/codemirror/development/codemirror.css"})
	(sift :move {#"cljsjs/codemirror/development/codemirror.css" "vendor/codemirror/codemirror.css"})
  ))

