(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{283:function(t,e,n){"use strict";var o=n(144);n(47),n(48),n(197),n(45),n(27),n(46);e.a={head:function(){var t=this,e="https://example.com",n={ja:"備蓄ナビえちぜん",en:"Stockpiling Navi Echizen"},c="/ogp",head={meta:[],link:[]},r=this.$route.path.includes("/en");if(head.meta.push({hid:"og:site_name",property:"og:site_name",content:n[this.$i18n.locale]}),this.bodyAttrs&&(head.bodyAttrs=this.bodyAttrs),this.link&&(head.link=[].concat(Object(o.a)(head.link),Object(o.a)(this.link))),r?head.meta.push({hid:"og:site_name",property:"og:site_name",content:n.en}):head.meta.push({hid:"og:site_name",property:"og:site_name",content:n.ja}),this.meta.title&&"/"!==this.$route.path&&"/en"!==this.$route.path){var title=function(){var title=t.meta.title;return"".concat(title," | ").concat(n[t.$i18n.locale])}();head.title=title,head.meta.push({hid:"og:title",property:"og:title",content:title})}else{var l=n[t.$i18n.locale];head.title=l,head.meta.push({hid:"og:title",property:"og:title",content:l})}this.meta.description&&(head.meta.push({hid:"description",name:"description",content:this.meta.description}),head.meta.push({hid:"og:description",property:"og:description",content:this.meta.description})),"/"===this.$route.path?head.meta.push({hid:"og:type",property:"og:type",content:"website"}):head.meta.push({hid:"og:type",property:"og:type",content:"article"});var h="".concat(e).concat(this.$router.history.base).concat(this.$route.path);if(head.meta.push({hid:"og:url",property:"og:url",content:h}),this.meta.image){var m="".concat(e).concat(this.$router.history.base).concat(c).concat(this.meta.image);head.meta.push({hid:"og:image",property:"og:image",content:m})}else head.meta.push({hid:"og:image",property:"og:image",content:"".concat(e).concat(c,"/common1.jpg")});return head}}},288:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"meta":{"description":"ご覧のWebページについて文字のサイズ、色合いを設定することができます。設定した内容は、全てのページおよび次回からご利用の際も適用されます。"},"title01":"文字サイズ・色合い変更","title02":"文字サイズ変更","title03":"色合い変更","text01":"ご覧のWebページについて文字のサイズ、色合いを設定することができます。設定した内容は、全てのページおよび次回からご利用の際も適用されます。","text02":"標準","text03":"中","text04":"大","text05":"特大","text06":"青","text07":"黃","text08":"黒"},"en":{"meta":{"description":"You can set the font size and color for the web page you are viewing. The settings will be applied to all pages and the next time you use it."},"title01":"Change font size/color","title02":"The size of the character is changed.","title03":"The shade is changed.","text01":"You can set the font size and color for the web page you are viewing. The settings will be applied to all pages and the next time you use it.","text02":"Normal","text03":"Medium","text04":"Large","text05":"Extra-large","text06":"Blue","text07":"Yellow","text08":"Black"}}'),delete t.options._Ctor}},377:function(t,e,n){"use strict";var o=n(288),c=n.n(o);e.default=c.a},464:function(t,e,n){"use strict";n.r(e);var o={name:"Settings",mixins:[n(283).a],data:function(){return{bodyAttrs:{class:"PageSettings"},meta:{title:this.$getTitle("settings",this.$i18n.locale),description:this.$i18n.t("meta.description")}}},methods:{setFontSize:function(t){this.$cookies.set("fontSize",t),document.querySelector("html").dataset.fontSize=t},setTheme:function(t){this.$cookies.set("theme",t),document.querySelector("html").dataset.theme=t}}},c=n(13),r=n(377),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"PageBlock"},[n("section",{staticClass:"Container -s"},[n("h1",{staticClass:"PageBlock__title"},[t._v(t._s(t.$t("title01")))]),t._v(" "),n("div",{staticClass:"Container -xs"},[n("p",{staticClass:"PageBlock__text"},[t._v("\n          "+t._s(t.$t("text01"))+"\n        ")])])]),t._v(" "),n("div",{staticClass:"Container -xs"},[n("section",{staticStyle:{"margin-top":"56px"}},[n("h2",[t._v(t._s(t.$t("title02")))]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.setFontSize("")}}},[t._v("\n          "+t._s(t.$t("text02"))+"\n        ")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.setFontSize("m")}}},[t._v("\n          "+t._s(t.$t("text03"))+"\n        ")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.setFontSize("l")}}},[t._v("\n          "+t._s(t.$t("text04"))+"\n        ")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.setFontSize("xl")}}},[t._v("\n          "+t._s(t.$t("text05"))+"\n        ")])]),t._v(" "),n("section",{staticStyle:{"margin-top":"56px"}},[n("h2",[t._v(t._s(t.$t("title03")))]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.setTheme("")}}},[t._v("\n          "+t._s(t.$t("text02"))+"\n        ")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.setTheme("blue")}}},[t._v("\n          "+t._s(t.$t("text06"))+"\n        ")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.setTheme("yellow")}}},[t._v("\n          "+t._s(t.$t("text07"))+"\n        ")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.setTheme("black")}}},[t._v("\n          "+t._s(t.$t("text08"))+"\n        ")])])])])])}),[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(component);e.default=component.exports}}]);