(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{217:function(e,a,t){"use strict";var l=t(77);t.n(l).a},226:function(e,a,t){"use strict";t.r(a);var l={name:"KFormDemo",data:function(){return{singleCheckbox:!1,checkboxGrpValues:[],inputCardValue:"",inputNickName:"",switchItem:!1,radioValue:1}},methods:{handleChange:function(){console.log(this.checkboxGrpValues)},singleCheckboxHandler:function(){console.log(this.singleCheckbox)},raidoChange:function(){console.log(this.radioValue)},inputChange:function(){console.log(this.inputValue)}}},n=(t(217),t(0)),o=Object(n.a)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("KView",{staticClass:"page form js_show"},[t("KView",{staticClass:"page__hd"},[t("h1",{staticClass:"page__title"},[e._v("Form")]),e._v(" "),t("p",{staticClass:"page__desc"},[e._v("form 表单内容")])]),e._v(" "),t("KCells",{attrs:{checkbox:"",title:"Checkbox"}},[t("KCheckboxGroup",{on:{change:e.handleChange},model:{value:e.checkboxGrpValues,callback:function(a){e.checkboxGrpValues=a},expression:"checkboxGrpValues"}},[t("KCheckbox",{attrs:{value:"零度的田"}},[e._v("零度的田")]),e._v(" "),t("KCheckbox",{attrs:{value:"小程序开发"}},[e._v("小程序开发")])],1)],1),e._v(" "),t("KCells",{attrs:{title:"Switch"}},[t("KSwitch",{attrs:{label:"Switch文本"},model:{value:e.switchItem,callback:function(a){e.switchItem=a},expression:"switchItem"}})],1),e._v(" "),t("KCells",{attrs:{title:"Radio"}},[t("KRadioGroup",{on:{change:e.raidoChange},model:{value:e.radioValue,callback:function(a){e.radioValue=a},expression:"radioValue"}},[t("KRadio",{attrs:{value:1}},[e._v("微信")]),e._v(" "),t("KRadio",{attrs:{value:2}},[e._v("微信支付")]),e._v(" "),t("KRadio",{attrs:{value:3}},[e._v("小程序")])],1)],1),e._v(" "),t("KCells",{attrs:{title:"表单输入"}},[t("KInput",{attrs:{label:"卡号",placeholder:"填写本人卡号",clearable:""},on:{change:e.inputChange},model:{value:e.inputCardValue,callback:function(a){e.inputCardValue=a},expression:"inputCardValue"}}),e._v(" "),t("KInput",{attrs:{label:"昵称",placeholder:"填写本人微信号的昵称",clearable:""},on:{change:e.inputChange},model:{value:e.inputNickName,callback:function(a){e.inputNickName=a},expression:"inputNickName"}})],1)],1)}),[],!1,null,null,null);a.default=o.exports},77:function(e,a,t){}}]);