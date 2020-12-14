import{BaseBadge as e,BaseNumber as t}from"@growthbunker/vuedarkmode";import{format as i}from"timeago.js";var n={components:{BaseBadge:e,BaseNumber:t},mixins:[{props:{theme:{type:String,default:null,validator:function(e){return["dark","light"].includes(e)}}},computed:{computedTheme:function(){return this.theme?this.theme:this.$gb.vuetimeline.theme}}}],props:{animation:{type:Boolean,default:!0},animationContainer:{type:String,default:null},animationDuration:{type:Number,default:1500},category:{type:String,default:null},color:{type:String,default:"blue",validator:function(e){return["black","blue","green","orange","purple","red","turquoise","white"].includes(e)}},date:{type:Date,required:!0},dateString:{type:String,default:null},description:{type:String,default:null},icon:{type:String,required:!0},isLast:{type:Boolean,default:!1},thumbnail:{type:String,default:null},title:{type:String,required:!0}},computed:{ago:function(){return this.dateString||i(this.date)}},mounted:function(){this.animation&&(0,require("scrollreveal").default)().reveal(this.$el,{container:this.animationContainer,duration:this.animationDuration})},methods:{onContentClick:function(e){this.$emit("click",e)},onThumbnailClick:function(e){this.$emit("click:thumbnail",e)},onTitleClick:function(e){this.$emit("click:title",e)}}};function a(e,t,i,n,a,u,l,d,o,p){"boolean"!=typeof l&&(o=d,d=l,l=!1);var m,r="function"==typeof i?i.options:i;if(e&&e.render&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns,r._compiled=!0,a&&(r.functional=!0)),n&&(r._scopeId=n),u?(m=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(u)},r._ssrRegister=m):t&&(m=l?function(e){t.call(this,p(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),m)if(r.functional){var g=r.render;r.render=function(e,t){return m.call(t),g(e,t)}}else{var _=r.beforeCreate;r.beforeCreate=_?[].concat(_,m):[m]}return i}var u,l="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function d(e){return function(e,t){return function(e,t){var i=l?t.media||"default":e,n=o[i]||(o[i]={ids:new Set,styles:[]});if(!n.ids.has(e)){n.ids.add(e);var a=t.source;if(t.map&&(a+="\n/*# sourceURL="+t.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),n.element||(n.element=document.createElement("style"),n.element.type="text/css",t.media&&n.element.setAttribute("media",t.media),void 0===u&&(u=document.head||document.getElementsByTagName("head")[0]),u.appendChild(n.element)),"styleSheet"in n.element)n.styles.push(a),n.element.styleSheet.cssText=n.styles.filter(Boolean).join("\n");else{var d=n.ids.size-1,p=document.createTextNode(a),m=n.element.childNodes;m[d]&&n.element.removeChild(m[d]),m.length?n.element.insertBefore(p,m[d]):n.element.appendChild(p)}}}(e,t)}}var o={};var p=a({render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("article",{class:["gb-vue-timeline-update","gb-vue-timeline-update--"+e.computedTheme,"js-vue-timeline-update",{"gb-vue-timeline-update--is-last":e.isLast}]},[i("div",{staticClass:"gb-vue-timeline-update__left"},[i("span",{staticClass:"gb-vue-timeline-update__ago"},[e._v(e._s(e.ago))])]),i("div",{staticClass:"gb-vue-timeline-update__center"},[i("base-number",{staticClass:"gb-vue-timeline-update__bullet",attrs:{color:e.color,icon:e.icon,theme:e.computedTheme,"icon-size":"16px",size:"small"}}),i("span",{staticClass:"gb-vue-timeline-update__line"})],1),i("div",{class:["gb-vue-timeline-update__right",{"gb-vue-timeline-update__right--clickable":e.$listeners.click}],on:{click:e.onContentClick}},[i("div",{staticClass:"gb-vue-timeline-update__information"},[i("div",{staticClass:"gb-vue-timeline-update__meta"},[e.category?i("base-badge",{staticClass:"gb-vue-timeline-update__category",attrs:{color:e.color,filled:!0,theme:e.computedTheme,size:"small"}},[e._v(e._s(e.category))]):e._e(),i("span",{staticClass:"gb-vue-timeline-update__ago"},[e._v(e._s(e.ago))])],1)]),e.thumbnail?i("img",{class:["gb-vue-timeline-update__thumbnail",{"gb-vue-timeline-update__thumbnail--clickable":e.$listeners["click:thumbnail"]}],attrs:{src:e.thumbnail},on:{click:e.onThumbnailClick}}):e._e(),i("div",{class:["gb-vue-timeline-content__right"]},[i("h2",{class:["gb-vue-timeline-update__title",{"gb-vue-timeline-update__title--clickable":e.$listeners["click:title"]}],domProps:{innerHTML:e._s(e.title)},on:{click:e.onTitleClick}}),e.description?i("p",{staticClass:"gb-vue-timeline-update__description",domProps:{innerHTML:e._s(e.description)}}):e._e()]),e.$slots.default?i("div",{staticClass:"gb-vue-timeline-update__slot"},[e._t("default")],2):e._e()])])},staticRenderFns:[]},(function(e){e&&e("data-v-a81849c6_0",{source:'@charset "UTF-8";.gb-vue-timeline-update{display:flex;overflow:hidden;text-align:left;font-family:Heebo,"Helvetica Neue",Source Sans Pro,Helvetica,Arial,sans-serif}.gb-vue-timeline-update a{text-decoration:underline}.gb-vue-timeline-update .gb-vue-timeline-update__left .gb-vue-timeline-update__ago,.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__ago{font-size:14px;user-select:none}.gb-vue-timeline-update .gb-vue-timeline-update__left{display:none}.gb-vue-timeline-update .gb-vue-timeline-update__center{position:relative;flex:0 0 auto;margin-right:30px;margin-left:16px}.gb-vue-timeline-update .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet{position:absolute;top:0;left:50%;transform:translateX(-50%)}.gb-vue-timeline-update .gb-vue-timeline-update__center .gb-vue-timeline-update__line{display:inline-block;margin-top:32px;width:1px;height:100%}.gb-vue-timeline-update .gb-vue-timeline-update__right{flex:1;padding-bottom:40px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__description,.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__title{font-size:16px;line-height:26px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information{display:flex;flex-direction:column;margin-top:4px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta{display:flex;align-items:center;margin-bottom:10px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__category{align-self:flex-start;flex:0 0 auto;margin-right:10px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__ago{line-height:24px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__title{flex:1;margin:0 0 4px;text-transform:uppercase;font-weight:700}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__title--clickable{cursor:pointer}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__description{margin:0}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail{box-sizing:border-box;margin:6px 0 12px;max-width:100%;border-width:1px;border-style:solid;border-radius:6px;transition:all 250ms linear;user-select:none}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail--clickable{cursor:pointer}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__slot{margin-top:20px}.gb-vue-timeline-update .gb-vue-timeline-update__right--clickable{cursor:pointer}.gb-vue-timeline-update--is-last .gb-vue-timeline-update__right{padding-bottom:20px}.gb-vue-timeline-update--dark{color:#fff}.gb-vue-timeline-update--dark a{color:#fff}.gb-vue-timeline-update--dark .gb-vue-timeline-update__left .gb-vue-timeline-update__ago,.gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__ago{color:#a9c7df}.gb-vue-timeline-update--dark .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet{box-shadow:0 1px 5px 0 #18191a}.gb-vue-timeline-update--dark .gb-vue-timeline-update__center .gb-vue-timeline-update__line{background-color:#313d4f}.gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__category{box-shadow:0 1px 5px 0 #18191a}.gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail{border-color:#fff;box-shadow:0 1px 5px 0 #18191a}.gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__description{color:#a9c7df}.gb-vue-timeline-update--dark.gb-vue-timeline-update--is-last .gb-vue-timeline-update__center .gb-vue-timeline-update__line{background:linear-gradient(#313d4f 50%,rgba(49,61,79,0))}.gb-vue-timeline-update--light{color:#2c405a}.gb-vue-timeline-update--light a{color:#2c405a}.gb-vue-timeline-update--light .gb-vue-timeline-update__left .gb-vue-timeline-update__ago,.gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__ago{color:#556c8d}.gb-vue-timeline-update--light .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet{box-shadow:0 1px 5px 0 #eaf6ff}.gb-vue-timeline-update--light .gb-vue-timeline-update__center .gb-vue-timeline-update__line{background-color:#c5d9e8}.gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__category{box-shadow:0 1px 5px 0 #eaf6ff}.gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail{border-color:#3f536e;box-shadow:0 1px 5px 0 #eaf6ff}.gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__description{color:#556c8d}.gb-vue-timeline-update--light.gb-vue-timeline-update--is-last .gb-vue-timeline-update__center .gb-vue-timeline-update__line{background:linear-gradient(#c5d9e8 50%,rgba(197,217,232,0))}@media (min-width:48em){.gb-vue-timeline-update .gb-vue-timeline-update__left{display:block;flex:0 0 auto;width:120px;text-align:right}.gb-vue-timeline-update .gb-vue-timeline-update__left .gb-vue-timeline-update__ago{display:inline-block;line-height:32px}.gb-vue-timeline-update .gb-vue-timeline-update__center{margin-right:40px;margin-left:40px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__description,.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__title{font-size:18px;line-height:28px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information{flex-direction:row}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__ago{display:none}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__title{margin-bottom:8px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail{margin:8px 0 16px}}',map:void 0,media:void 0})}),n,void 0,!1,void 0,!1,d,void 0,void 0);var m={install:function e(t,i){e.installed||(e.installed=!0,t.component("vue-timeline-update",p),t.prototype.$gb||(t.prototype.$gb={}),t.prototype.$gb.vuetimeline={},t.prototype.$gb.vuetimeline.theme=(i||{}).theme||"dark")}},r=null;"undefined"!=typeof window?r=window.Vue:"undefined"!=typeof global&&(r=global.Vue),r&&r.use(m);export default m;
