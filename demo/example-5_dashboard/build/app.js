webpackJsonp([0],[function(e,t,n){"use strict";n(1);var i=n(3),l=n(8);i.publish("navigation:show",{container:"#container",content:n(9),options:l.activePage()})},function(e,t,n){n(2)},function(e,t,n){"use strict";var i=n(3),l=n(5),s=n(7);i.utils.ITemplate.registerHelper("i-NavItem",function(e,t){var n=l.history.fragment===e.href,i="active";s({href:e.href,className:n?e["class"]+" "+i:e["class"],content:t})})},,,,,function(e,t,n){e.exports=function(e,t){var i=function(e,t,n,i,l){var s=t.elementOpen,a=t.elementClose,r=(t.elementVoid,t.text,{});return l=l||function(e,t,n){return e(t,n)},s("a",null,null,"href","#/"+(void 0===e.href?"":e.href),"class",void 0===e.className?"":e.className),e.content(),a("a"),r};return i.call(this,e,n(3).utils.IncrementalDOM,n(3).utils.ITemplate.helpers,t,n(3).utils.binder)}},function(e,t,n){"use strict";var i=n(5),l=n(3),s=i.Router.extend({routes:{"":"home","*pages":"notFound"},initialize:function(){i.history.start()},home:function(){this.publishRoute("home")},notFound:function(){this.publishRoute("404")},publishRoute:function(e){this.storeActivePage(e),l.publish("route:change",this.activePage())},storeActivePage:function(e){this.pageName=e,this.fragment=i.history.fragment},activePage:function(){return{pageName:this.pageName,urlFragment:this.fragment}}}),a=new s;e.exports=a},function(e,t,n){"use strict";var i=n(3),l=i.View.extend({template:n(10),initialize:function(){this.subscribe("route:change",this.setActivePage,this)},setActivePage:function(e){this.props.set(e)}});e.exports=new l},function(e,t,n){e.exports=function(e,t){var i=function(e,t,i,l,s){var a=t.elementOpen,r=t.elementClose,o=t.elementVoid,c=t.text,u={};s=s||function(e,t,n){return e(t,n)};var d=n(11),h=n(23);return a("div",null,null,"class","content"),a("header",null,null,"class","header"),s(d,{},function(e){}.bind(this)),r("header"),a("main",null,null,"class","main"),"home"===e.props.pageName?s(h,{},function(e){}.bind(this)):(a("h1",null),c("Ooops: 404 Page not found!!!"),r("h1")),r("main"),r("div"),a("div",null,null,"class","sidebar"),a("nav",null),i["i-NavItem"]({"class":"link--logo",href:""},function(e){o("span",null,null,"class","icon icon--logo s-center-abs")}.bind(this)),i["i-NavItem"]({"class":"link--sidebar",href:""},function(e){o("span",null,null,"class","icon icon--speed s-center-abs"),o("span",null,null,"class","icon icon--speed-active s-center-abs")}.bind(this)),i["i-NavItem"]({"class":"link--sidebar",href:"details"},function(e){o("span",null,null,"class","icon icon--workflow s-center-abs"),o("span",null,null,"class","icon icon--workflow-active s-center-abs")}.bind(this)),i["i-NavItem"]({"class":"link--sidebar",href:"calendar"},function(e){o("span",null,null,"class","icon icon--calendar s-center-abs"),o("span",null,null,"class","icon icon--calendar-active s-center-abs")}.bind(this)),r("nav"),r("div"),u};return i.call(this,e,n(3).utils.IncrementalDOM,n(3).utils.ITemplate.helpers,t,n(3).utils.binder)}},function(e,t,n){"use strict";var i=n(3),l=i.View.extend({className:"panel panel--header",template:n(12)});e.exports=new l},function(e,t,n){e.exports=function(e,t){var i=function(e,t,i,l,s){var a=t.elementOpen,r=t.elementClose,o=t.elementVoid,c=t.text,u={};s=s||function(e,t,n){return e(t,n)};var d=n(13);return s(d,{"class":"form form--search",action:"#"},function(e){}.bind(this)),a("div",null,null,"class","notification-hold"),a("a",null,null,"class","notification link","href","#/notifications"),o("span",null,null,"class","icon icon--bell"),a("span",null,null,"class","indicator"),c("0"),r("span"),r("a"),r("div"),a("div",null,null,"class","avatar-hold"),a("a",null,null,"class","avatar link","href","#/profile"),o("img",null,null,"class","avatar-img","src","assets/images/ava.png","alt","Avatar"),r("a"),r("div"),u};return i.call(this,e,n(3).utils.IncrementalDOM,n(3).utils.ITemplate.helpers,t,n(3).utils.binder)}},function(e,t,n){"use strict";var i=n(6);n(14);var l=(n(4),n(3)),s=n(19),a=l.View.extend({tagName:"form",template:n(22),className:function(){return this.props.get("class")},onAttach:function(){this.initAutoComplete()},onDetach:function(){this.$searchField.autocomplete("destroy")},initAutoComplete:function(){this.$searchField=this.$("#search"),this.$searchField.autocomplete({source:this.search.bind(this)}),this.$searchField.data("uiAutocomplete")._renderItem=function(e,t){var n=new RegExp("("+this.term+")","gi"),l="<span class='highlight'>$1</span>",s="<a>"+t.label.replace(n,l)+"</a>";return i("<li>").append(s).appendTo(e)}},search:function(e,t){t(s.filterByName(e.term).map(function(e){return{value:e.get("name")}}))}});e.exports=a},,,,,,function(e,t,n){"use strict";var i=n(5),l=n(20),s=i.Collection.extend({model:n(21),localStorage:new l("Clients"),filterByName:function(e){return e?(e=e.toLowerCase(),this.filter(function(t){var n=t.get("name").toLowerCase();return n.indexOf(e)>-1})):[]}}),a=new s;e.exports=a},function(e,t,n){!function(t,i){e.exports=i(n(5))}(this,function(e){function t(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function n(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}function i(e){return e===Object(e)}function l(e,t){for(var n=e.length;n--;)if(e[n]===t)return!0;return!1}function s(e,t){for(var n in t)e[n]=t[n];return e}function a(e,t){if(null!=e){var n=e[t];return"function"==typeof n?e[t]():n}}return e.LocalStorage=window.Store=function(e,t){if(!this.localStorage)throw"Backbone.localStorage: Environment does not support localStorage.";this.name=e,this.serializer=t||{serialize:function(e){return i(e)?JSON.stringify(e):e},deserialize:function(e){return e&&JSON.parse(e)}};var n=this.localStorage().getItem(this.name);this.records=n&&n.split(",")||[]},s(e.LocalStorage.prototype,{save:function(){this.localStorage().setItem(this.name,this.records.join(","))},create:function(e){return e.id||0===e.id||(e.id=n(),e.set(e.idAttribute,e.id)),this.localStorage().setItem(this._itemName(e.id),this.serializer.serialize(e)),this.records.push(e.id.toString()),this.save(),this.find(e)},update:function(e){this.localStorage().setItem(this._itemName(e.id),this.serializer.serialize(e));var t=e.id.toString();return l(this.records,t)||(this.records.push(t),this.save()),this.find(e)},find:function(e){return this.serializer.deserialize(this.localStorage().getItem(this._itemName(e.id)))},findAll:function(){for(var e,t,n=[],i=0;i<this.records.length;i++)e=this.records[i],t=this.serializer.deserialize(this.localStorage().getItem(this._itemName(e))),null!=t&&n.push(t);return n},destroy:function(e){this.localStorage().removeItem(this._itemName(e.id));for(var t=e.id.toString(),n=0;n<this.records.length;n++)this.records[n]===t&&this.records.splice(n,1);return this.save(),e},localStorage:function(){return localStorage},_clear:function(){var e=this.localStorage(),t=new RegExp("^"+this.name+"-");e.removeItem(this.name);for(var n in e)t.test(n)&&e.removeItem(n);this.records.length=0},_storageSize:function(){return this.localStorage().length},_itemName:function(e){return this.name+"-"+e}}),e.LocalStorage.sync=window.Store.sync=e.localSync=function(t,n,i){var l,s,r=a(n,"localStorage")||a(n.collection,"localStorage"),o=e.$?e.$.Deferred&&e.$.Deferred():e.Deferred&&e.Deferred();try{switch(t){case"read":l=void 0!=n.id?r.find(n):r.findAll();break;case"create":l=r.create(n);break;case"update":l=r.update(n);break;case"delete":l=r.destroy(n)}}catch(c){s=22===c.code&&0===r._storageSize()?"Private browsing is unsupported":c.message}return l?(i&&i.success&&("0.9.10"===e.VERSION?i.success(n,l,i):i.success(l)),o&&o.resolve(l)):(s=s?s:"Record Not Found",i&&i.error&&("0.9.10"===e.VERSION?i.error(n,s,i):i.error(s)),o&&o.reject(s)),i&&i.complete&&i.complete(l),o&&o.promise()},e.ajaxSync=e.sync,e.getSyncMethod=function(t,n){var i=n&&n.ajaxSync;return i||!a(t,"localStorage")&&!a(t.collection,"localStorage")?e.ajaxSync:e.localSync},e.sync=function(t,n,i){return e.getSyncMethod(n,i).apply(this,[t,n,i])},e.LocalStorage})},function(e,t,n){"use strict";var i=n(5),l=i.Model.extend({defaults:{name:"",position:"",company:"",salary:0,stage:1,date:Date.now()},validate:function(e){return e.name.trim()?void 0:"Client name cannot be blank"}});e.exports=l},function(e,t,n){e.exports=function(e,t){var i=function(e,t,n,i,l){var s=t.elementOpen,a=t.elementClose,r=t.elementVoid,o=(t.text,{});return l=l||function(e,t,n){return e(t,n)},r("input","search",null,"id","search","class","input input--search","type","text","placeholder","Search..."),s("button",null,null,"class","btn btn--search","type","submit"),r("span",null,null,"class","icon icon--search"),a("button"),o};return i.call(this,e,n(3).utils.IncrementalDOM,n(3).utils.ITemplate.helpers,t,n(3).utils.binder)}},function(e,t,n){"use strict";var i=n(3),l=n(19),s=i.View.extend({template:n(24),events:{submit:"preventSubmit","submit #add-client":"addClient"},initialize:function(){l.fetch(),this.bindRender(l,"add remove")},preventSubmit:function(e){e.preventDefault()},addClient:function(e){var t=e.target.elements.clientName,n=t.value;t.value="",l.create({name:n},{validate:!0,wait:!0})}});e.exports=s},function(e,t,n){e.exports=function(e,t){var i=function(e,t,i,l,s){var a=t.elementOpen,r=t.elementClose,o=t.elementVoid,c=t.text,u={};s=s||function(e,t,n){return e(t,n)};var d=n(25);return a("div",null,null,"class","panel panel--new-leads"),a("div",null,null,"class","title-hold"),a("h1",null),c("Clients"),r("h1"),a("p",null,null,"class","text--new-leads"),c("Ipsum dolor sit amet, consectetuer adipiscing elit"),r("p"),r("div"),r("div"),a("div",null,null,"class","panel panel--add-client"),a("h2",null,null,"class","h2--add-client"),c("Add Client"),r("h2"),a("form",null,null,"id","add-client","action","#","class","form form--add-client"),o("input",null,null,"class","input input--add-client","type","text","name","clientName","placeholder","Type Client Name"),a("button",null,null,"class","btn btn--add-client","type","submit"),o("span",null,null,"class","icon icon--plus s-center-abs"),r("button"),r("form"),r("div"),a("div",null,null,"class","panel panel--stages"),a("div",null,null,"class","stages"),s(d,{"stage-id":"1"},function(e){}.bind(this)),s(d,{"stage-id":"2"},function(e){}.bind(this)),s(d,{"stage-id":"3"},function(e){}.bind(this)),s(d,{"stage-id":"4"},function(e){}.bind(this)),s(d,{"stage-id":"5"},function(e){}.bind(this)),r("div"),r("div"),u};return i.call(this,e,n(3).utils.IncrementalDOM,n(3).utils.ITemplate.helpers,t,n(3).utils.binder)}},function(e,t,n){"use strict";var i=n(3),l=n(26),s=n(19),a=i.View.extend({template:n(29),className:"stage js-sortable",events:{sortreceive:"onCardReceive"},initialize:function(e){var t=parseInt(this.props.get("stage-id"),10);this.props.set("clients",s.where({stage:t}))},onAttach:function(){this.sortable=new l(this.el)},onCardReceive:function(e,t){var n=parseInt(this.props.get("stage-id"),10),i=t.item.attr("id"),l=s.get(i);l.save({stage:n},{silent:!0})}});e.exports=a},function(e,t,n){"use strict";function i(e,t){this.$el=l(e),this.$el.hasClass("ui-sortable")?this.refresh():this.init(l.extend({},s,t))}var l=n(6);n(27);var s={activeClass:"tile--active",items:".tile",cancel:".stage-header",connectWith:".js-sortable",placeholder:"tile-placeholder"};i.prototype.init=function(e){this.$el.sortable({items:e.items,cancel:e.cancel,connectWith:e.connectWith,placeholder:e.placeholder,zIndex:2,revert:150,forcePlaceholderSize:!0,start:function(t,n){n.item.addClass(e.activeClass)},stop:function(t,n){window.setTimeout(function(){n.item.removeClass(e.activeClass)},100)}})},i.prototype.refresh=function(){this.$el.sortable("refresh")},i.prototype.destroy=function(){this.$el.sortable("destroy")},e.exports=i},,,function(e,t,n){e.exports=function(e,t){var i=function(e,t,i,l,s){var a=t.elementOpen,r=t.elementClose,o=(t.elementVoid,t.text),c={};s=s||function(e,t,n){return e(t,n)};var u=n(30);return a("div",null,null,"class","stage-header"),a("h2",null,null,"class","h2--stage"),o("Stage "+(void 0===e.props["stage-id"]?"":e.props["stage-id"])),r("h2"),a("p",null,null,"class","text--stage"),o("$182.000.00"),r("p"),r("div"),_.each(e.props.clients,function(e){s(u,{client:e.toJSON(),key:e.get("id"),id:e.get("id")},function(e){}.bind(this))}),c};return i.call(this,e,n(3).utils.IncrementalDOM,n(3).utils.ITemplate.helpers,t,n(3).utils.binder)}},function(e,t,n){"use strict";var i=n(3),l=i.View.extend({template:n(31),className:"tile"});e.exports=l},function(e,t,n){e.exports=function(e,t){var i=function(e,t,n,i,l){var s=t.elementOpen,a=t.elementClose,r=t.elementVoid,o=t.text,c={};l=l||function(e,t,n){return e(t,n)};var u=e.props.client;return s("h3",null,null,"class","h2--tile"),o(void 0===u.name?"":u.name),a("h3"),s("p",null,null,"class","text--tile"),o(void 0===u.company?"":u.company),a("p"),s("p",null,null,"class","text--amount"),o(void 0===u.salary?"":u.salary),a("p"),s("span",null,null,"class","date date--tile"),o(void 0===new Date(u.date).toDateString()?"":new Date(u.date).toDateString()),a("span"),s("a",null,null,"class","link--social link--facebook","href","#"),r("span",null,null,"class","icon icon--facebook s-center-abs"),a("a"),c};return i.call(this,e,n(3).utils.IncrementalDOM,n(3).utils.ITemplate.helpers,t,n(3).utils.binder)}}]);
//# sourceMappingURL=app.js.map