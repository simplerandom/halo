(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b64bf"],{"1d0f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-view",[a("div",{staticClass:"card-container"},[a("a-tabs",{attrs:{type:"card"}},[a("a-tab-pane",{key:"1",attrs:{tab:"文章"}},[a("comment-tab",{attrs:{type:"posts"}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"页面"}},[a("comment-tab",{attrs:{type:"sheets"}})],1)],1)],1)])},n=[],o=a("680a"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-tab-wrapper"},[a("a-card",{attrs:{bordered:!1,bodyStyle:{padding:0}}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"关键词"}},[a("a-input",{model:{value:t.queryParam.keyword,callback:function(e){t.$set(t.queryParam,"keyword",e)},expression:"queryParam.keyword"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"评论状态"}},[a("a-select",{attrs:{placeholder:"请选择评论状态"},on:{change:t.handleQuery},model:{value:t.queryParam.status,callback:function(e){t.$set(t.queryParam,"status",e)},expression:"queryParam.status"}},t._l(Object.keys(t.commentStatus),function(e){return a("a-select-option",{key:e,attrs:{value:e}},[t._v(t._s(t.commentStatus[e].text))])}),1)],1)],1),a("a-col",{attrs:{md:12,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons"},[a("a-button",{attrs:{type:"primary"},on:{click:t.handleQuery}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.handleResetParam}},[t._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-dropdown",{directives:[{name:"show",rawName:"v-show",value:null!=t.queryParam.status&&""!=t.queryParam.status,expression:"queryParam.status!=null && queryParam.status!=''"}]},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},["AUDITING"===t.queryParam.status?a("a-menu-item",{key:"1"},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:t.handlePublishMore}},[t._v("\n              通过\n            ")])]):t._e(),"PUBLISHED"===t.queryParam.status||"AUDITING"===t.queryParam.status?a("a-menu-item",{key:"2"},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:t.handleRecycleMore}},[t._v("\n              移到回收站\n            ")])]):t._e(),"RECYCLE"===t.queryParam.status?a("a-menu-item",{key:"3"},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:t.handleDeleteMore}},[t._v("\n              永久删除\n            ")])]):t._e()],1),a("a-button",[t._v("\n          批量操作\n          "),a("a-icon",{attrs:{type:"down"}})],1)],1)],1),a("div",{staticStyle:{"margin-top":"15px"}},[a("a-table",{attrs:{rowKey:function(t){return t.id},rowSelection:{onChange:t.onSelectionChange,getCheckboxProps:t.getCheckboxProps},columns:t.columns,dataSource:t.formattedComments,loading:t.loading,pagination:!1},scopedSlots:t._u([{key:"author",fn:function(e,s){return[s.isAdmin?a("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{type:"user"}}):t._e(),s.authorUrl?a("a",{attrs:{href:s.authorUrl,target:"_blank"}},[t._v(t._s(e))]):a("span",[t._v(t._s(e))])]}},{key:"content",fn:function(e){return a("p",{staticClass:"comment-content-wrapper",domProps:{innerHTML:t._s(e)}})}},{key:"status",fn:function(t){return a("span",{},[a("a-badge",{attrs:{status:t.status,text:t.text}})],1)}},{key:"post",fn:function(e){return"posts"===t.type?a("a",{attrs:{href:t.options.blog_url+"/archives/"+e.url,target:"_blank"}},[t._v(t._s(e.title))]):t._e()}},{key:"sheet",fn:function(e){return"sheets"===t.type?a("a",{attrs:{href:t.options.blog_url+"/s/"+e.url,target:"_blank"}},[t._v(t._s(e.title))]):t._e()}},{key:"createTime",fn:function(e){return a("span",{},[t._v(t._s(t._f("timeAgo")(e)))])}},{key:"action",fn:function(e,s){return a("span",{},["AUDITING"===s.status?a("a-dropdown",{attrs:{trigger:["click"]}},[a("a",{staticClass:"ant-dropdown-link",attrs:{href:"javascript:void(0);"}},[t._v("通过")]),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1"},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.handleEditStatusClick(s.id,"PUBLISHED")}}},[t._v("通过")])]),a("a-menu-item",{key:"2"},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.handleReplyAndPassClick(s)}}},[t._v("通过并回复")])])],1)],1):"PUBLISHED"===s.status?a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.handleReplyClick(s)}}},[t._v("回复")]):"RECYCLE"===s.status?a("a-popconfirm",{attrs:{title:"你确定要还原该评论？",okText:"确定",cancelText:"取消"},on:{confirm:function(e){return t.handleEditStatusClick(s.id,"PUBLISHED")}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("还原")])]):t._e(),a("a-divider",{attrs:{type:"vertical"}}),"PUBLISHED"===s.status||"AUDITING"===s.status?a("a-popconfirm",{attrs:{title:"你确定要将该评论移到回收站？",okText:"确定",cancelText:"取消"},on:{confirm:function(e){return t.handleEditStatusClick(s.id,"RECYCLE")}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("回收站")])]):"RECYCLE"===s.status?a("a-popconfirm",{attrs:{title:"你确定要永久删除该评论？",okText:"确定",cancelText:"取消"},on:{confirm:function(e){return t.handleDeleteClick(s.id)}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("删除")])]):t._e()],1)}}],null,!0)}),a("div",{staticClass:"page-wrapper"},[a("a-pagination",{staticClass:"pagination",attrs:{total:t.pagination.total,pageSizeOptions:["1","2","5","10","20","50","100"],showSizeChanger:""},on:{showSizeChange:t.handlePaginationChange,change:t.handlePaginationChange}})],1)],1)]),t.selectComment?a("a-modal",{attrs:{title:"回复给："+t.selectComment.author,destroyOnClose:""},on:{close:t.onReplyClose},model:{value:t.replyCommentVisible,callback:function(e){t.replyCommentVisible=e},expression:"replyCommentVisible"}},[a("template",{slot:"footer"},[a("a-button",{key:"submit",attrs:{type:"primary"},on:{click:t.handleCreateClick}},[t._v("\n        回复\n      ")])],1),a("a-form",{attrs:{layout:"vertical"}},[a("a-form-item",[a("a-input",{attrs:{type:"textarea",autosize:{minRows:8}},model:{value:t.replyComment.content,callback:function(e){t.$set(t.replyComment,"content",e)},expression:"replyComment.content"}})],1)],1)],2):t._e()],1)},r=[],l=(a("55dd"),a("cebc")),c=a("2f62"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:"评论详情",width:t.isMobile()?"100%":"460",closable:"",visible:t.visible,destroyOnClose:""},on:{close:t.onClose}},[a("a-row",{attrs:{type:"flex",align:"middle"}},[a("a-col",{attrs:{span:24}},[a("a-skeleton",{attrs:{active:"",loading:t.detailLoading,paragraph:{rows:8}}},[a("a-list",{attrs:{itemLayout:"horizontal"}},[a("a-list-item",[a("a-list-item-meta",{attrs:{description:t.comment.author}},[a("span",{attrs:{slot:"title"},slot:"title"},[t._v("评论者昵称：")])])],1),a("a-list-item",[a("a-list-item-meta",{attrs:{description:t.comment.email}},[a("span",{attrs:{slot:"title"},slot:"title"},[t._v("评论者邮箱：")])])],1),a("a-list-item",[a("a-list-item-meta",{attrs:{description:t.comment.ipAddress}},[a("span",{attrs:{slot:"title"},slot:"title"},[t._v("评论者 IP：")])])],1),a("a-list-item",[a("a-list-item-meta",[a("a",{attrs:{slot:"description",target:"_blank",href:t.comment.authorUrl},slot:"description"},[t._v(t._s(t.comment.authorUrl))]),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("评论者网址：")])])],1),a("a-list-item",[a("a-list-item-meta",[a("span",{attrs:{slot:"description"},slot:"description"},[a("a-badge",{attrs:{status:t.comment.statusProperty.status,text:t.comment.statusProperty.text}})],1),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("评论状态：")])])],1),a("a-list-item",[a("a-list-item-meta",["posts"==this.type?a("a",{attrs:{slot:"description",target:"_blank",href:t.options.blog_url+"/archives/"+t.comment.post.url},slot:"description"},[t._v(t._s(t.comment.post.title))]):"sheets"==this.type?a("a",{attrs:{slot:"description",target:"_blank",href:t.options.blog_url+"/s/"+t.comment.sheet.url},slot:"description"},[t._v(t._s(t.comment.sheet.title))]):t._e(),"posts"==this.type?a("span",{attrs:{slot:"title"},slot:"title"},[t._v("评论文章：")]):"sheets"==this.type?a("span",{attrs:{slot:"title"},slot:"title"},[t._v("评论页面：")]):t._e()])],1),a("a-list-item",[a("a-list-item-meta",[t.editable?a("template",{slot:"description"},[a("a-input",{attrs:{type:"textarea",autosize:{minRows:5}},model:{value:t.comment.content,callback:function(e){t.$set(t.comment,"content",e)},expression:"comment.content"}})],1):a("span",{attrs:{slot:"description"},domProps:{innerHTML:t._s(t.comment.content)},slot:"description"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("评论内容：")])],2)],1)],1)],1)],1)],1),a("a-divider",{staticClass:"divider-transparent"}),a("div",{staticClass:"bottom-control"},[t.editable?t._e():a("a-button",{staticStyle:{marginRight:"8px"},attrs:{type:"dashed"},on:{click:t.handleEditComment}},[t._v("编辑")]),t.editable?a("a-button",{staticStyle:{marginRight:"8px"},attrs:{type:"primary"},on:{click:t.handleUpdateComment}},[t._v("保存")]):t._e(),a("a-popconfirm",{attrs:{title:"你确定要将此评论者加入黑名单？",okText:"确定",cancelText:"取消"}},[a("a-button",{attrs:{type:"danger"}},[t._v("加入黑名单")])],1)],1)],1)},d=[],u=a("ac0d"),p=a("063c"),h={name:"CommentDetail",mixins:[u["a"],u["b"]],components:{},data:function(){return{detailLoading:!0,editable:!1,commentStatus:p["a"].commentStatus,options:[],keys:["blog_url"]}},model:{prop:"visible",event:"close"},props:{comment:{type:Object,required:!0},visible:{type:Boolean,required:!1,default:!0},type:{type:String,required:!1,default:"posts",validator:function(t){return-1!==["posts","sheets","journals"].indexOf(t)}}},created:function(){this.loadSkeleton()},computed:Object(l["a"])({},Object(c["c"])(["options"])),watch:{visible:function(t,e){this.$log.debug("old value",e),this.$log.debug("new value",t),t&&this.loadSkeleton()}},methods:{loadSkeleton:function(){var t=this;this.detailLoading=!0,setTimeout(function(){t.detailLoading=!1},500)},handleEditComment:function(){this.editable=!0},handleUpdateComment:function(){var t=this;p["a"].update(this.type,this.comment.id,this.comment).then(function(e){t.$log.debug("Updated comment",e.data.data),t.$message.success("评论修改成功！")}),this.editable=!1},onClose:function(){this.$emit("close",!1)}}},y=h,f=a("2877"),g=Object(f["a"])(y,m,d,!1,null,null,null),v=g.exports,C=a("0e54"),b=a.n(C),_=[{title:"昵称",dataIndex:"author",scopedSlots:{customRender:"author"}},{title:"内容",dataIndex:"content",scopedSlots:{customRender:"content"}},{title:"状态",className:"status",dataIndex:"statusProperty",width:"100px",scopedSlots:{customRender:"status"}},{title:"评论文章",dataIndex:"post",width:"200px",scopedSlots:{customRender:"post"}},{title:"日期",dataIndex:"createTime",width:"170px",scopedSlots:{customRender:"createTime"}},{title:"操作",dataIndex:"action",width:"180px",scopedSlots:{customRender:"action"}}],k=[{title:"昵称",dataIndex:"author",scopedSlots:{customRender:"author"}},{title:"内容",dataIndex:"content",scopedSlots:{customRender:"content"}},{title:"状态",className:"status",dataIndex:"statusProperty",width:"100px",scopedSlots:{customRender:"status"}},{title:"评论页面",dataIndex:"sheet",width:"200px",scopedSlots:{customRender:"sheet"}},{title:"日期",dataIndex:"createTime",width:"150px",scopedSlots:{customRender:"createTime"}},{title:"操作",dataIndex:"action",width:"180px",scopedSlots:{customRender:"action"}}],w={name:"CommentTab",components:{CommentDetail:v},props:{type:{type:String,required:!1,default:"posts",validator:function(t){return-1!==["posts","sheets","journals"].indexOf(t)}}},data:function(){return{columns:"posts"===this.type?_:k,replyCommentVisible:!1,pagination:{current:1,pageSize:10,sort:null},queryParam:{page:0,size:10,sort:null,keyword:null,status:null},selectedRowKeys:[],selectedRows:[],comments:[],selectComment:{},replyComment:{},loading:!1,commentStatus:p["a"].commentStatus,commentDetailVisible:!1}},created:function(){this.loadComments()},computed:Object(l["a"])({formattedComments:function(){var t=this;return this.comments.map(function(e){return e.statusProperty=t.commentStatus[e.status],e.content=b()(e.content,{sanitize:!0}),e})}},Object(c["c"])(["options"])),methods:{loadComments:function(){var t=this;this.loading=!0,this.queryParam.page=this.pagination.current-1,this.queryParam.size=this.pagination.pageSize,this.queryParam.sort=this.pagination.sort,p["a"].queryComment(this.type,this.queryParam).then(function(e){t.comments=e.data.data.content,t.pagination.total=e.data.data.total,t.loading=!1})},handleQuery:function(){this.queryParam.page=0,this.pagination.current=1,this.loadComments()},handleEditStatusClick:function(t,e){var a=this;p["a"].updateStatus(this.type,t,e).then(function(t){a.$message.success("操作成功！"),a.loadComments()})},handleDeleteClick:function(t){var e=this;p["a"].delete(this.type,t).then(function(t){e.$message.success("删除成功！"),e.loadComments()})},handleReplyAndPassClick:function(t){this.handleReplyClick(t),this.handleEditStatusClick(t.id,"PUBLISHED")},handleReplyClick:function(t){this.selectComment=t,this.replyCommentVisible=!0,this.replyComment.parentId=t.id,"posts"===this.type?this.replyComment.postId=t.post.id:this.replyComment.postId=t.sheet.id},handleCreateClick:function(){var t=this;this.replyComment.content?p["a"].create(this.type,this.replyComment).then(function(e){t.$message.success("回复成功！"),t.replyComment={},t.selectComment={},t.replyCommentVisible=!1,t.loadComments()}):this.$notification["error"]({message:"提示",description:"评论内容不能为空！"})},handlePaginationChange:function(t,e){this.$log.debug("Current: ".concat(t,", PageSize: ").concat(e)),this.pagination.current=t,this.pagination.pageSize=e,this.loadComments()},handleResetParam:function(){this.queryParam.keyword=null,this.queryParam.status=null,this.loadComments()},handlePublishMore:function(){var t=this;if(this.selectedRowKeys.length<=0)this.$message.success("请至少选择一项！");else for(var e=function(e){var a=t.selectedRowKeys[e];p["a"].updateStatus(t.type,a,"PUBLISHED").then(function(e){t.$log.debug("commentId: ".concat(a,", status: PUBLISHED")),t.selectedRowKeys=[],t.loadComments()})},a=0;a<this.selectedRowKeys.length;a++)e(a)},handleRecycleMore:function(){var t=this;if(this.selectedRowKeys.length<=0)this.$message.success("请至少选择一项！");else for(var e=function(e){var a=t.selectedRowKeys[e];p["a"].updateStatus(t.type,a,"RECYCLE").then(function(e){t.$log.debug("commentId: ".concat(a,", status: RECYCLE")),t.selectedRowKeys=[],t.loadComments()})},a=0;a<this.selectedRowKeys.length;a++)e(a)},handleDeleteMore:function(){var t=this;if(this.selectedRowKeys.length<=0)this.$message.success("请至少选择一项！");else for(var e=function(e){var a=t.selectedRowKeys[e];p["a"].delete(t.type,a).then(function(e){t.$log.debug("delete: ".concat(a)),t.selectedRowKeys=[],t.loadComments()})},a=0;a<this.selectedRowKeys.length;a++)e(a)},onReplyClose:function(){this.replyComment={},this.selectComment={},this.replyCommentVisible=!1},onSelectionChange:function(t){this.selectedRowKeys=t,this.$log.debug("SelectedRowKeys: ".concat(t))},getCheckboxProps:function(t){return{props:{disabled:"RECYCLE"===t.status,name:t.author}}},handleShowDetailDrawer:function(t){this.selectComment=t,this.commentDetailVisible=!0}}},S=w,x=Object(f["a"])(S,i,r,!1,null,null,null),P=x.exports,R={components:{PageView:o["b"],CommentTab:P}},I=R,E=Object(f["a"])(I,s,n,!1,null,null,null);e["default"]=E.exports}}]);