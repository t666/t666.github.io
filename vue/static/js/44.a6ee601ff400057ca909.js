webpackJsonp([44],{C5hr:function(t,a){},IjnK:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"Partner_contract",data:function(){var t=this;return{ajaxHistoryData:[],dataCount:0,pageSize:10,historyData:[],columns1:[{title:this.$t("common.Contract_No"),key:"contract_number",align:"center"},{title:this.$t("common.Cooperative_company"),key:"contract_name",align:"center"},{title:this.$t("common.Contract_name"),key:"contract_type",align:"center"},{title:this.$t("common.Submission_time"),key:"time",align:"center"},{title:this.$t("common.Operate"),key:"operation",align:"center",render:function(a,e){return a("div",[a("Button",{props:{type:"primary",size:"small"},style:{marginRight:"10px"},on:{click:function(){t.$router.push({path:"/Contract_details",name:"Contract_details",params:{name:"editorContent",send_data:t.editorContent}})}}},t.past_btn),a("Button",{props:{type:"error",size:"small"},style:{display:t.show},on:{click:function(){t.remove(e.index)}}},t.reject_btn)])}}],data1:this.mockTableData1(),Personal_info:null,past_btn:this.$t("common.Adopt"),reject_btn:this.$t("common.Overrule"),active:1,show:"inline"}},methods:{wait:function(){this.past_btn=this.$t("common.Adopt"),this.reject_btn=this.$t("common.Overrule"),this.show="inline",this.active=1},past:function(){this.past_btn=this.$t("common.Overrule"),this.show="none",this.active=2},reject:function(){this.past_btn=this.$t("common.Adopt"),this.show="none",this.active=3},Add_contract:function(){this.$router.push("/Add_contract")},handleListApproveHistory:function(){this.ajaxHistoryData=this.data1,this.dataCount=this.data1.length,this.data1.length<this.pageSize?this.historyData=this.ajaxHistoryData:this.historyData=this.ajaxHistoryData.slice(0,this.pageSize)},changepage:function(t){var a=(t-1)*this.pageSize,e=t*this.pageSize;this.historyData=this.ajaxHistoryData.slice(a,e)},mockTableData1:function(){for(var t=[],a=1;a<101;a++)t.push({contract_number:"DG2018031200"+a,contract_name:parseInt(2*Math.random()+0)>0?"深圳怡亚通股份有限公司":"中国能源建设集团有限公司",contract_type:parseInt(2*Math.random()+0)>0?"战略合作协议":"技术入股协议",time:this.formatDate(this.getRandomDateBetween()),operation:""});return t},getRandomDateBetween:function(){var t=new Date,a=+new Date("October 10, 2017 11:13:00"),e=+new Date;return t.setTime(Math.random()*(e-a)+a),t},formatDate:function(t){var a=t.getFullYear(),e=t.getMonth()+1;e=e<10?"0"+e:e;var n=t.getDate();n=n<10?"0"+n:n;var o=t.getHours();o=o<10?"0"+o:o;var s=t.getMinutes();s=s<10?"0"+s:s;var i=t.getSeconds();return a+"-"+e+"-"+n+" "+o+":"+s+":"+(i=i<10?"0"+i:i)},onedata:function(t,a){this.sendParams()},sendParams:function(){this.$router.push({path:"/Contract_details",name:"Contract_details",params:{name:"contract_state",send_data:this.active}})}},created:function(){this.handleListApproveHistory()}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Partner-contract"},[e("Row",{staticClass:"code-row-bg contract-tab",attrs:{type:"flex",justify:"start"}},[e("Col",{attrs:{md:18,lg:20}},[e("div",{staticClass:"clearfix"},[e("div",{staticClass:"contract-btn left",class:{active:1==t.active},on:{click:t.wait}},[t._v(t._s(t.$t("common.Pending_contract")))]),t._v(" "),e("div",{staticClass:"contract-btn left",class:{active:2==t.active},on:{click:t.past}},[t._v(t._s(t.$t("common.Audit_pass_contract")))]),t._v(" "),e("div",{staticClass:"contract-btn left",class:{active:3==t.active},on:{click:t.reject}},[t._v(t._s(t.$t("common.Rejected_contract")))])])]),t._v(" "),e("Col",{attrs:{span:"4"}},[e("div",{staticClass:"contract-btn Add_contract",on:{click:t.Add_contract}},[t._v(t._s(t.$t("common.Add_contract")))])])],1),t._v(" "),e("hr"),t._v(" "),e("Row",{staticClass:"code-row-bg search_criteria",attrs:{type:"flex",justify:"space-around"}},[e("Col",{attrs:{xs:12,sm:12,lg:5}},[e("p",[t._v(t._s(t.$t("common.Contract_No"))+" ")]),t._v(" "),e("Input",{staticStyle:{width:"150px"},attrs:{placeholder:""}})],1),t._v(" "),e("Col",{attrs:{xs:12,sm:12,lg:6}},[e("p",[t._v(t._s(t.$t("common.Contract_name"))+" ")]),t._v(" "),e("Input",{staticStyle:{width:"150px"},attrs:{placeholder:""}})],1),t._v(" "),e("Col",{attrs:{xs:12,sm:12,lg:9}},[e("p",[t._v(t._s(t.$t("common.Cooperative_company_name"))+" ")]),t._v(" "),e("Input",{staticStyle:{width:"150px"},attrs:{placeholder:""}}),t._v(" "),e("Button",{staticClass:"mgl-10",attrs:{type:"primary"}},[t._v(t._s(t.$t("common.Query")))])],1)],1),t._v(" "),e("Table",{style:{marginTop:"20px"},attrs:{"highlight-row":"",columns:t.columns1,data:t.historyData},on:{"on-row-click":t.onedata}}),t._v(" "),e("Row",{staticClass:"code-row-bg page-data",attrs:{type:"flex",justify:"space-around"}},[e("Col",{attrs:{span:"24"}},[e("Page",{attrs:{total:t.dataCount,"page-size":t.pageSize},on:{"on-change":t.changepage}})],1)],1)],1)},staticRenderFns:[]};var s=e("VU/8")(n,o,!1,function(t){e("C5hr")},null,null);a.default=s.exports}});
//# sourceMappingURL=44.a6ee601ff400057ca909.js.map