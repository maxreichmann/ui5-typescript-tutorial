sap.ui.define(["sap/ui/model/json/JSONModel","./BaseController"],function(e,t){function n(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const o=n(t);const i=o.extend("com.myorg.myapp.controller.IncidenceDetail",{onInit:function t(){const n=new e("https://api.corona-zahlen.org/states/history/incidence/100");this.setModel(n,"incidenceHistory");this.getRouter().getRoute("IncidenceDetailRoute").attachMatched(this.onRouteMatched.bind(this))},onRouteMatched:function e(t){this.getView().bindElement({path:"/data/"+t.getParameter("arguments").id,model:"incidenceHistory"})}});return i});