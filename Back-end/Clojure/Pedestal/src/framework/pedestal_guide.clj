(ns framework.pedestal-guide
  (:require
    [ring.adapter.jetty :as jetty]
    [ring.util.response :as resp]))

(defn app
  [req]
  (case (:uri req)
    "/"
    (-> (resp/response (slurp "public/index.html"))
        (resp/content-type "text/html; charset=utf-8"))

    "/api/health"
    (-> (resp/response
         "{\"ok\":true,\"service\":\"framework-back-end-pedestal-guide\",\"note\":\"Ring + Jetty 占位；Pedestal 见 PEDESTAL-Clojure.md\"}")
        (resp/content-type "application/json; charset=utf-8"))

    "/api/info"
    (-> (resp/response
         "{\"message\":\"Pedestal：Clojure 上的服务栈与拦截器模型\",\"doc\":\"https://github.com/pedestal/pedestal\",\"highlights\":[{\"title\":\"本目录\",\"detail\":\"最小 Ring 对齐 /api 形态；完整 Pedestal 见 PEDESTAL-Clojure.md\"}]}")
        (resp/content-type "application/json; charset=utf-8"))

    (resp/not-found "Not Found")))

(defn -main
  [& _]
  (let [port (Integer/parseInt (or (System/getenv "PORT") "3104"))]
    (println (str "Clojure Ring http://127.0.0.1:" port "/"))
    (jetty/run-jetty app {:port port :join? true})))
