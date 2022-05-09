exports.ids = [5];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=7d2d1262&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-7d2d1262>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-7d2d1262>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-7d2d1262>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-7d2d1262>"+_vm._ssrEscape("\n          "+_vm._s(_vm.isLogin ? 'Sign in ' : 'Sign up')+"\n        ")+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-7d2d1262>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-7d2d1262><li data-v-7d2d1262>"+_vm._ssrEscape(_vm._s(_vm.errors))+"</li></ul> <form data-v-7d2d1262>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-7d2d1262><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-7d2d1262></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-7d2d1262><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-7d2d1262></fieldset> <fieldset class=\"form-group\" data-v-7d2d1262><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-7d2d1262></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-7d2d1262>"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? 'Sign in ' : 'Sign up')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=7d2d1262&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/user.js
 // 登录

const login = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; // 注册

const register = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users',
    data
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'notAuth',
  name: 'loginIndex',
  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },

  data() {
    return {
      errors: '',
      user: {
        username: null,
        email: null,
        password: null
      }
    };
  },

  methods: {
    async onSubmit() {
      try {
        const {
          data
        } = this.isLogin ? await login({
          user: this.user
        }) : await register({
          user: this.user
        });
        this.$store.commit('setUser', data.user);
        Cookie.set('user', JSON.stringify(data.user));
        this.$router.push('/');
      } catch (error) {
        this.errors = error.response.data.errors.message;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7d2d1262",
  "1da7b2e6"
  
)

/* harmony default export */ var pages_login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map