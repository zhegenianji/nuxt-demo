exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticleInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getComments; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 列表数据

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 获取文章详情

const getArticleInfo = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; //用户点赞文章列表

const getFeedArticles = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed'
  });
}; // 文章点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消文章点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 添加评论

const addComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`
  });
}; // 获取评论列表

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=b2829002&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\" data-v-b2829002>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-b2829002>","</div>",[_vm._ssrNode("<h1 data-v-b2829002>"+_vm._ssrEscape(_vm._s(_vm.articleInfo.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.articleInfo}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-b2829002>","</div>",[_vm._ssrNode("<div class=\"row article-content\" data-v-b2829002><div class=\"col-md-12\" data-v-b2829002>"+(_vm._s(_vm.articleInfo.body))+"</div></div> <hr data-v-b2829002> "),_vm._ssrNode("<div class=\"article-actions\" data-v-b2829002>","</div>",[_c('article-meta',{attrs:{"article":_vm.articleInfo}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-b2829002>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-b2829002>","</div>",[_c('article-comments',{attrs:{"article":_vm.articleInfo}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=b2829002&scoped=true&

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=871e8f4e&scoped=true&
var article_metavue_type_template_id_871e8f4e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_vm._ssrNode("<div class=\"article-meta\" data-v-871e8f4e>","</div>",[_c('nuxt-link',{attrs:{"to":{name: 'profile',params:{username:_vm.article.author.username}}}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-871e8f4e>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{name: 'profile',params:{username:_vm.article.author.username}}}},[_c('span',{staticClass:"date"},[_vm._v(_vm._s(_vm._f("date")(_vm.article.createdAt,'MMM DD, YYYY')))])])],1),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active : _vm.article.author.following}))+" data-v-871e8f4e><i class=\"ion-plus-round\" data-v-871e8f4e></i>\n         \n        Follow Eric Simons <span class=\"counter\" data-v-871e8f4e>(10)</span></button>\n        \n      <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active : _vm.article.author.favorited}))+" data-v-871e8f4e><i class=\"ion-heart\" data-v-871e8f4e></i>\n         \n        Favorite Post <span class=\"counter\" data-v-871e8f4e>(29)</span></button>")],2)])}
var article_metavue_type_template_id_871e8f4e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=871e8f4e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: 'article-meta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {}
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_871e8f4e_scoped_true_render,
  article_metavue_type_template_id_871e8f4e_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "871e8f4e",
  "79f94dec"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=f9f18e36&scoped=true&
var article_commentsvue_type_template_id_f9f18e36_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\" data-v-f9f18e36><div class=\"card-block\" data-v-f9f18e36><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-f9f18e36></textarea></div> <div class=\"card-footer\" data-v-f9f18e36><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\" data-v-f9f18e36> <div class=\"btn btn-sm btn-primary\" data-v-f9f18e36>\n        Post Comment\n      </div></div></form> "),_vm._l((_vm.comments),function(item){return _vm._ssrNode("<div class=\"card\" data-v-f9f18e36>","</div>",[_vm._ssrNode("<div class=\"card-block\" data-v-f9f18e36><p class=\"card-text\" data-v-f9f18e36>With supporting text below as a natural lead-in to additional content.</p></div> "),_vm._ssrNode("<div class=\"card-footer\" data-v-f9f18e36>","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{ name: 'profile' }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":item.author.image}})]),_vm._ssrNode("\n       \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{ name: 'profile' }}},[_vm._v(_vm._s(item.author.username))]),_vm._ssrNode(" <span class=\"date-posted\" data-v-f9f18e36>"+_vm._ssrEscape(_vm._s(_vm._f("date")(item.createdAt,'MMM YY, DD')))+"</span>")],2)],2)})],2)}
var article_commentsvue_type_template_id_f9f18e36_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=f9f18e36&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: 'article-comments',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      comments: [] //评论列表

    };
  },

  mounted() {
    console.log(this.article);
    this.loadList();
  },

  methods: {
    // 获取评论列表
    async loadList() {
      const {
        data
      } = await Object(articles["f" /* getComments */])(this.article.slug);
      console.log(data);
      this.comments = data.comments;
    },

    // 添加评论
    async updateComments() {
      const {
        data
      } = await Object(articles["a" /* addComments */])(this.article.slug);
      this.loadList();
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_f9f18e36_scoped_true_render,
  article_commentsvue_type_template_id_f9f18e36_scoped_true_staticRenderFns,
  false,
  article_comments_injectStyles,
  "f9f18e36",
  "3a795a0e"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'hmePage',
  components: {
    articleMeta: article_meta,
    articleComments: article_comments
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(articles["d" /* getArticleInfo */])(params.slug);
    const md = new external_markdown_it_default.a();
    data.article.body = md.render(data.article.body);
    return {
      articleInfo: data.article
    };
  },

  head() {
    return {
      title: this.articleInfo.title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.articleInfo.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "b2829002",
  "d1bd4b4c"
  
)

/* harmony default export */ var article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map