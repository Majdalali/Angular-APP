(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>about works!</p>\n<textarea [(ngModel)]=\"enValue\"  rows=\"6\"></textarea>\n<hr>\n<button (click)= \"onSignedUp()\">CLICK</button>\n<hr>\n<p>{{ postArea }}</p> -->\n\n\n<app-post-create (postCreated)=\"onPostadded($event)\"></app-post-create>\n<app-post-list  [posts]=\"storedPost\" ></app-post-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/post-create/post-create.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/post-create/post-create.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form class=\"input\"  (submit)=\"onSignedUp(postForm)\" #postForm=\"ngForm\">\n       \n                        <input ngModel\n                        matInput\n                        type=\"text\"\n                        name=\"title\"\n                        placeholder=\"Title\"\n                        required\n                        \n                        #title=\"ngModel\">\n                        \n                        <textarea [(ngModel)]=\"contantValue\"\n                        placeholder=\"Type Here...\" \n                        ngModel\n                        matInput\n                        rows=\"6\"\n                        name=\"contant\"\n                        required\n                        minlength=\"10\"\n                        ></textarea>                    \n                        \n                        <button \n                        type=\"submit\"  >Post</button>\n         \n                \n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/post-list/post-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/post-list/post-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-accordion *ngIf=\"posts.length > 0\">\n    <mat-expansion-panel *ngFor=\"let post of posts\">\n        <mat-expansion-panel-header>\n            <h1>{{post.title}}</h1>\n        </mat-expansion-panel-header>\n        <p class=\"pmain\">{{post.contant}}</p>\n        <mat-action-row>\n                <button  mat-button color=\"primary\">EDIT</button>\n                <button mat-button color=\"warn\">DELETE</button>\n              </mat-action-row>\n    </mat-expansion-panel>\n</mat-accordion>\n\n<p class=\"pcolor\" *ngIf=\"posts.length <= 0\">There is no posts yet!!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"flash flashhome\"><ng-flash-message></ng-flash-message></div>\r\n\r\n<section>\r\n        <router-outlet></router-outlet>\r\n      </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>contact works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>dashboard works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <!-- Sticky li -->\r\n  <div id=\"sticky\">\r\n    <ul>\r\n      <li><a href=\"#crs\">Subscriptions</a></li>\r\n      <li><a href=\"#srvh1\">Services</a></li>\r\n      <li><a href=\"#workdiv\">Works</a></li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center\" data-aos=\"fade-up\" id=\"main\">\r\n      <div id=\"title\">\r\n        <h2>Welcome to our new website</h2>\r\n        <p>here you will be able to see our new services and news</p>\r\n      </div>\r\n      <div class=\"row align-items-center \">\r\n        <form class=\"form-box\" (submit)=\"onRegisterSubmit()\" id=\"form\">\r\n          <h3>Sign up</h3>\r\n          <input class=\"put input1\" id=\"\" placeholder=\"name\" [(ngModel)]=\"name\" name=\"name\" type=\"text\" />\r\n          <input class=\"put input2\" id=\"\" placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" type=\"text\" />\r\n          <input class=\"put erroremail input3\" id=\"\" placeholder=\"Email Address\" [(ngModel)]=\"email\" name=\"email\" type=\"text\" />\r\n          <input\r\n            class=\"put input4\"\r\n            id=\"\"\r\n            placeholder=\" password\"\r\n            type=\"password\"\r\n            [(ngModel)]=\"password\" name=\"password\"\r\n          />\r\n          <button\r\n            class=\"btn btn-primary btn-pill\"\r\n            id=\"btn11\"\r\n            type=\"submit\"\r\n            value=\"Sign up\"\r\n          >\r\n            Sign up\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Subscriptions -->\r\n  <div id=\"crs\">\r\n    <div class=\"container\">\r\n      <div data-aos=\"fade-up\">\r\n        <H1>Subscriptions </H1>\r\n      </div>\r\n\r\n      <div\r\n        class=\"card card1\"\r\n        data-aos=\"fade-up\"\r\n        id=\"cardf\"\r\n        style=\"width: 18rem;\"\r\n      >\r\n        <div class=\"card-body\">\r\n          <h5>BASIC PLAN</h5>\r\n          <div class=\"price\">\r\n            <h2>\r\n              $10\r\n              <span>/Month</span>\r\n            </h2>\r\n          </div>\r\n            <h5 class=\"card-title\">6 Month subscribe</h5>\r\n            <h5 class=\"card-title\">20 Template</h5>\r\n            <h5 class=\"card-title\">24/7 Support</h5>\r\n\r\n          <a class=\"btn btn-primary\" href=\"#\" target=\"_blank\">GET</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div\r\n        class=\"card card2\"\r\n        data-aos=\"fade-up\"\r\n        id=\"cardf\"\r\n        style=\"width: 18rem;\"\r\n      >\r\n        <div class=\"card-body\">\r\n          <h5>SILVER PLAN</h5>\r\n          <div class=\"price\">\r\n            <h2>\r\n              $20\r\n              <span>/Month</span>\r\n            </h2>\r\n          </div>\r\n            <h5 class=\"card-title\">3 Month subscribe</h5>\r\n            <h5 class=\"card-title\">20 Template</h5>\r\n            <h5 class=\"card-title\">24/7 Support</h5>\r\n            <a class=\"btn btn-primary\" href=\"#\" target=\"_blank\">GET</a>\r\n        </div>\r\n      </div>\r\n      <div\r\n        class=\"card card3\"\r\n        data-aos=\"fade-up\"\r\n        id=\"cardf\"\r\n        style=\"width: 18rem;\"\r\n      >\r\n        <div class=\"card-body\">\r\n          <h5>GOLD PLAN</h5>\r\n          <div class=\"price\">\r\n            <h2>\r\n              $30\r\n              <span>/Month</span>\r\n            </h2>\r\n          </div>\r\n            <h5 class=\"card-title\">Life Time subscibe</h5>\r\n            <h5 class=\"card-title\">20 Template</h5>\r\n            <h5 class=\"card-title\">24/7 Support</h5>\r\n\r\n            <a class=\"btn btn-primary\" href=\"#\" target=\"_blank\">GET</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div data-aos-duration=\"1000\" data-aos=\"fade-left\" id=\"srv\">\r\n    <h1 id=\"srvh1\">Our Services</h1>\r\n  </div>\r\n  <!-- CARDs -->\r\n  <div class=\"container\">\r\n    <div\r\n      class=\"card cardf2\"\r\n      data-aos-duration=\"1000\"\r\n      data-aos=\"zoom-in-right\"\r\n      style=\"width: 18rem;\"\r\n    >\r\n      <img class=\"card-img-top\" src=\"{{ netImage3 }}\" alt=\"Card image cap\" />\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">HTML</h5>\r\n        <p class=\"card-text\">We build your website's code from scratch</p>\r\n      </div>\r\n    </div>\r\n    <div\r\n      class=\"card cardf2 cardf3\"\r\n      data-aos-duration=\"1000\"\r\n      data-aos=\"zoom-in-right\"\r\n      style=\"width: 18rem;\"\r\n    >\r\n      <img class=\"card-img-top\" src=\"{{ netImage4 }}\" alt=\"Card image cap\" />\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">CSS</h5>\r\n        <p class=\"card-text\">You draw it and let us make it real for you</p>\r\n      </div>\r\n    </div>\r\n    <div\r\n      class=\"card cardf2 cardf4\"\r\n      data-aos-duration=\"1000\"\r\n      data-aos=\"zoom-in-right\"\r\n      style=\"width: 18rem;\"\r\n    >\r\n      <img class=\"card-img-top\" src=\"{{ netImage5 }}\" alt=\"Card image cap\" />\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">JS</h5>\r\n        <p class=\"card-text\">\r\n          website without functions like bicycle without wheels\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- OUR WORKS -->\r\n  <div id=\"work\">\r\n    <div class=\"container\">\r\n      <div id=\"workdiv\" data-aos-duration=\"1000\" data-aos=\"fade-right\">\r\n        <h1>Featured Works</h1>\r\n      </div>\r\n      <div data-aos-duration=\"1000\" data-aos=\"zoom-in-left\" class=\"workpho row\">\r\n        <div class=\" col-md-4 col-xs-6 work\">\r\n          <img id=\"myImg\" src=\"{{ netImage6 }}\" alt=\"\" />\r\n          <div class=\"overlay1\">\r\n            <div class=\"n\">\r\n              <h4>Work 1</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\" col-md-4 col-xs-6 work\">\r\n          <img src=\"{{ netImage7 }}\" alt=\"\" />\r\n          <div class=\"overlay1\">\r\n            <div class=\"n\">\r\n              <h4>Work 2</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\" col-md-4 col-xs-6 work\">\r\n          <img src=\"{{ netImage8 }}\" alt=\"\" />\r\n          <div class=\"overlay1\">\r\n            <div class=\"n\">\r\n              <h4>Work 3</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\" col-md-4 col-xs-6 work\">\r\n          <img src=\"{{ netImage9 }}\" alt=\"\" />\r\n          <div class=\"overlay1\">\r\n            <div class=\"n\">\r\n              <h4>Work 4</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\" col-md-4 col-xs-6 work\">\r\n          <img src=\"{{ netImage10 }}\" alt=\"\" />\r\n          <div class=\"overlay1\">\r\n            <div class=\"n\">\r\n              <h4>Work 5</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\" col-md-4 col-xs-6 work\">\r\n          <img src=\"{{ netImage11 }}\" alt=\"\" />\r\n          <div class=\"overlay1\">\r\n            <div class=\"n\">\r\n              <h4>Work 6</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- CITY  -->\r\n  <div id=\"city\">\r\n    <div class=\"overlay2\">\r\n      <div class=\"container\">\r\n        <div class=\"icons\" style=\"text-align:center\">\r\n          <fa-icon [icon]=\"faUsers\"></fa-icon>\r\n          <h1><span class=\"counter\">522</span></h1>\r\n          <h3>clients</h3>\r\n        </div>\r\n\r\n        <div class=\"icons\" style=\"text-align:center\">\r\n          <fa-icon [icon]=\"faCoffee\"></fa-icon>\r\n          <h1><span class=\"counter2\">15.5K</span></h1>\r\n          <h3>Cups of Coffee</h3>\r\n        </div>\r\n\r\n        <div class=\"icons\" style=\"text-align:center\">\r\n          <fa-icon [icon]=\"faFile\"></fa-icon>\r\n          <h1><span class=\"counter3\">320</span></h1>\r\n          <h3>template</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- down -->\r\n  <div>\r\n    <p class=\"down\">.</p>\r\n  </div>\r\n</header>\r\n<footer>\r\n  <div id=\"footer\">\r\n    <div class=\"container\">\r\n      <h1>MYAPP</h1>\r\n      <p>\r\n        <a target=\"_blank\" href=\"https://facebook.com/majdosy\"\r\n          ><img src=\"{{ fa1 }}\" alt=\"\"\r\n        /></a>\r\n        <a target=\"_blank\" href=\"https://instagram.com/3.wz\"\r\n          ><img src=\"{{ fa2 }}\" alt=\"\"\r\n        /></a>\r\n        <a target=\"_blank\" href=\"https://twitter.com/majdosy\"\r\n          ><img src=\"{{ fa3 }}\" alt=\"\"\r\n        /></a>\r\n      </p>\r\n      <h4>\r\n        COPYRIGHT © 2017. ALL RIGHTS RESERVED. DESIGNED BY\r\n        <a target=\"_blank\" href=\"https://facebook.com/majdosy\">Majd Alali</a>\r\n      </h4>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<form (submit)=\"onLoginSubmit()\">\n    <h3>Login :</h3>\n\n  <div class=\"form-group\">\n    <label >Email</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Type your name\">\n    \n  </div>\n  <div class=\"form-group\">\n    <label >Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Type your Password\">\n    \n  </div>\n<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"container\">\n        <div  class=\"nav1\" id=\"nav1\">\n            <nav class=\"black\" id=\"navbar\">\n                <a class=\"white\" id=\"myapp\" routerLink=\"/\">Myapp</a>\n                <ul >\n                        \n                        <div class=\"dropdown\">\n                                <button class=\"dropbtn\"><fa-icon class=\"iconus\" [icon]=\"faUserCircle\"></fa-icon></button>\n                                <div class=\"dropdown-content\">\n                                    <a *ngIf=\"authservices.display()\"  class=\"a a1\"  routerLink=\"./profile\">Profile</a>\n                                        <a *ngIf=\"authservices.display()\"  class=\"a a1\"  routerLink=\"./dashboard\">Dashboard</a>\n                                        <a *ngIf=\"!authservices.display()\"  class=\"a a1\"  routerLink=\"./register\">Register</a>\n                                     <a *ngIf=\"!authservices.display()\"  class=\"a a1\"  routerLink=\"./login\">Login</a>\n                                        <a *ngIf=\"authservices.display()\" class=\"a a1\" (click)=\"onlogOut()\" href=\"#\">Log out</a>\n\n                                       \n                                  \n                                </div>\n                              </div>\n                     \n                <!-- <li>\n                    <a class=\"a a1\" (click)=\"onlogOut()\" href=\"#\">Log out</a>\n                </li>\n                 <li>\n                     <a class=\"a a1\"  routerLink=\"./login\">Login</a>\n                    </li> -->\n               \n                <li>\n                    <a class=\"a a1\" routerLink=\"./contact\">Contact</a>\n                </li>\n                <li>\n                    <a class=\"a a1\" routerLink=\"./about\">About</a>\n                </li>\n                <li>\n                    <a class=\"a \" id=\"home\" routerLink=\"./\">Home</a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n</div></header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li >{{user.email}}</li>\n  </ul>\n\n   "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<form (submit)=\"onRegisterSubmit()\">\n        <h3>Register :</h3>\n    <div class=\"form-group\">\n      <label >Name</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\"  placeholder=\"Type your name\">\n      \n    </div>\n    <div class=\"form-group\">\n        <label >Username</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\"  placeholder=\"Type your Username\">\n        \n      </div>\n      <div class=\"form-group\">\n        <label >Email</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Type your name\">\n        \n      </div>\n      <div class=\"form-group\">\n        <label >Password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Type your Password\">\n        \n      </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    <div class=\"go\">\n            <p>or</p>\n            \n              <h2 class=\"fce\"><a href=\"#\">Login with Facebook</a></h2>\n            <h2 class=\"gg\"> <a href=\"#\">Login with Google+</a>  </h2>\n          \n            \n        </div>\n    \n  </form>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-family: \"Courier New\", Courier, monospace;\n  color: White;\n  font-size: 18px;\n}\n\nh1 {\n  color: white;\n}\n\ntextarea {\n  display: block;\n  margin-top: 5px;\n}\n\nbutton {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXHByb2plY3RzXFxCYWNrZW5kXFxteWFwcDEvc3JjXFxhcHBcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogV2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG50ZXh0YXJlYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5idXR0b24ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59IiwicCB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IFdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmgxIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG50ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.storedPost = [];
    }
    AboutComponent.prototype.onPostadded = function (post) {
        this.storedPost.push(post);
    };
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/post-create/post-create.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/about/post-create/post-create.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  display: block;\n  margin-top: 10px;\n  color: black;\n  width: 50%;\n  margin-left: 25%;\n  border: #eee 1px solid;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px -1px #eee;\n  margin-bottom: 50px;\n}\n\ninput {\n  height: 40px;\n  margin-top: 15vh;\n  width: 50%;\n  margin-left: 25%;\n  border: #eee 1px solid;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px -1px #eee;\n}\n\nbutton {\n  width: 120px;\n  margin-top: 0px;\n  margin-bottom: 2rem;\n  margin-left: 47%;\n  padding: 5px;\n  border: #7971ea solid 1px;\n  border-radius: 10px;\n  background-color: #7971ea;\n}\n\nh5 {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvcG9zdC1jcmVhdGUvRDpcXHByb2plY3RzXFxCYWNrZW5kXFxteWFwcDEvc3JjXFxhcHBcXGFib3V0XFxwb3N0LWNyZWF0ZVxccG9zdC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURFQTtFQUNJLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRleHRhcmVhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgYm9yZGVyOiAjZWVlIDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4ICNlZWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICBib3JkZXI6ICNlZWUgMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggI2VlZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogNDclO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAgIzc5NzFlYSBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NzFlYTtcclxufVxyXG5oNSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgXHJcbn1cclxuIiwidGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBib3JkZXI6ICNlZWUgMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4ICNlZWU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmlucHV0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAxNXZoO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBib3JkZXI6ICNlZWUgMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4ICNlZWU7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBtYXJnaW4tbGVmdDogNDclO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogIzc5NzFlYSBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTcxZWE7XG59XG5cbmg1IHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/post-create/post-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/about/post-create/post-create.component.ts ***!
  \************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent() {
        this.postCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // posts = [
    //   {title:"post title1",contant:"bla bla bla bla bla bla"},
    //   {title:"post title2",contant:"HA HA HA"},
    //   {title:"post title3",contant:"NICE POST BITCH!"}
    // ];
    PostCreateComponent.prototype.onSignedUp = function (form) {
        if (form.invalid) {
            return alert('Please Fill both ');
        }
        var post = {
            title: form.value.title,
            contant: form.value.contant
        };
        this.postCreated.emit(post);
        form.resetForm();
    };
    ;
    PostCreateComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PostCreateComponent.prototype, "postCreated", void 0);
    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-create',
            template: __webpack_require__(/*! raw-loader!./post-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.scss */ "./src/app/about/post-create/post-create.component.scss")]
        })
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/about/post-list/post-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/about/post-list/post-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pmain {\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n  font-size: 18px;\n}\n\n.mat-primary {\n  color: green;\n}\n\n.pcolor {\n  color: white;\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  width: auto;\n  font-size: 18px;\n}\n\nh1 {\n  color: black;\n}\n\nmat-expansion-panel {\n  display: block;\n  width: 50%;\n  margin-left: 25%;\n  margin-top: 2rem;\n}\n\nmat-expansion-panel p {\n  margin: 0 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvcG9zdC1saXN0L0Q6XFxwcm9qZWN0c1xcQmFja2VuZFxcbXlhcHAxL3NyY1xcYXBwXFxhYm91dFxccG9zdC1saXN0XFxwb3N0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L3Bvc3QtbGlzdC9wb3N0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURGQTtFQUNLLGVBQUE7QUNLTCIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L3Bvc3QtbGlzdC9wb3N0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG1haW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLm1hdC1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4ucGNvbG9yIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuaDEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBcclxufVxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHAge1xyXG4gICAgIG1hcmdpbjogMCAwIDAgMDtcclxufVxyXG4iLCIucG1haW4ge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tYXQtcHJpbWFyeSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnBjb2xvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaDEge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCBwIHtcbiAgbWFyZ2luOiAwIDAgMCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/post-list/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/about/post-list/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostListComponent = /** @class */ (function () {
    function PostListComponent() {
        this.posts = [];
    }
    PostListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PostListComponent.prototype, "posts", void 0);
    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.scss */ "./src/app/about/post-list/post-list.component.scss")]
        })
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");











var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0 0 0 0;\n}\n\n.flash {\n  width: 40%;\n  margin: 5% 30% 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHByb2plY3RzXFxCYWNrZW5kXFxteWFwcDEvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gICAgXHJcbn1cclxuLmZsYXNoIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDUlIDMwJSAwO1xyXG59IiwiKiB7XG4gIG1hcmdpbjogMCAwIDAgMDtcbn1cblxuLmZsYXNoIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luOiA1JSAzMCUgMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myapp1';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var countup_js_angular2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! countup.js-angular2 */ "./node_modules/countup.js-angular2/fesm5/countup.js-angular2.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/token-interceptor.service */ "./src/app/services/token-interceptor.service.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _about_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./about/post-create/post-create.component */ "./src/app/about/post-create/post-create.component.ts");
/* harmony import */ var _about_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./about/post-list/post-list.component */ "./src/app/about/post-list/post-list.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.prototype.ngOnInit = function () {
    };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_21__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_23__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"],
                _about_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_24__["PostCreateComponent"],
                _about_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_25__["PostListComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_29__["ProfileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                countup_js_angular2__WEBPACK_IMPORTED_MODULE_10__["CountUpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_15__["NgFlashMessagesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _services_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
                    useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.h1 {\n  text-align: inherit;\n  font-family: \"montserrat\";\n  color: white;\n  font-size: 20px;\n  margin-top: 0;\n  margin-bottom: 50px;\n  margin-left: 10%;\n  margin-right: 80%;\n  float: left;\n}\n\np {\n  margin: 0 0 0 0;\n}\n\n#btn {\n  position: relative;\n}\n\n.dd {\n  margin-top: 500px;\n}\n\n#form {\n  background-color: #fff;\n  border: #fff solid 2px;\n  border-radius: 8px;\n  position: center;\n  margin-left: 60%;\n  margin-top: 40%;\n  padding: 40px 40px 40px 40px;\n  left: 50%;\n  -webkit-box-align: center;\n          align-items: center;\n  display: grid;\n  font-family: \"montserrat\";\n  z-index: 3;\n}\n\n#form h3 {\n  color: black;\n  font-size: 22px;\n}\n\n#form input {\n  color: #495057;\n  font-style: bold;\n  width: 300px;\n  margin-top: 10px;\n  padding: 5px;\n  border: #7971ea solid 1px;\n  border-radius: 4px;\n}\n\n#title {\n  z-index: 3;\n  margin-left: 5%;\n  height: 0px;\n  position: center;\n  color: white;\n  font-style: bold;\n  font-family: \"montserrat\";\n}\n\n#title p {\n  font-size: 14px;\n  font-family: \"montserrat\";\n}\n\n#main {\n  height: 0px;\n}\n\n#btn11 {\n  width: 90px;\n  margin-top: 15px;\n  padding: 5px;\n  border: #7971ea solid 1px;\n  border-radius: 10px;\n  background-color: #7971ea;\n}\n\n#sticky {\n  margin: 10vh 0 0 0;\n}\n\n#sticky ul {\n  position: fixed;\n  z-index: 3;\n  list-style: none;\n  padding: 0;\n}\n\n#sticky ul li {\n  background-color: #3a4572;\n  padding: 5px;\n  margin-top: 10px;\n  border: #3a4572 1px solid;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n#sticky ul li a {\n  text-decoration: none;\n  color: #fff;\n  font-size: 15px;\n  font-family: \"montserrat\";\n  font-style: bold;\n}\n\n#sticky ul li a:hover {\n  color: #ddd3e0;\n}\n\n#crs {\n  margin-top: 81vh;\n  text-align: center;\n  background-color: #7971ea;\n  height: 330px;\n  width: 100%;\n  z-index: 3;\n}\n\n#crs h1 {\n  top: 150px;\n  padding-top: 70px;\n  font-family: \"montserrat\";\n  font-style: bold;\n  color: white;\n}\n\n.facebook {\n  width: 80px;\n  height: 60px;\n}\n\n#cardf {\n  margin-top: 100px;\n  float: left;\n  position: relative;\n  font-family: \"montserrat\";\n  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.3);\n}\n\n.price h2 {\n  color: #7971ea;\n  margin-top: 25%;\n  font-family: \"montserrat\";\n}\n\n.price {\n  border: #6195ff solid 2px;\n  border-radius: 50%;\n  width: 140px;\n  height: 140px;\n  margin: 20px auto 20px;\n}\n\n.card-body h5 {\n  font-family: \"montserrat\";\n}\n\n.price span {\n  font-size: 20px;\n  display: block;\n}\n\n.card1 {\n  margin-left: 20px;\n}\n\n.card2 {\n  margin-left: 10%;\n}\n\n.card3 {\n  margin-left: 10%;\n}\n\n#cardf:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  -webkit-transition: 0.3 ease-in-out;\n  transition: 0.3 ease-in-out;\n  box-shadow: 1px 8px 20px 0px gray;\n}\n\n#cardf img {\n  margin-left: 35%;\n  margin-top: 8px;\n}\n\n.btn {\n  background-color: #7971ea;\n  border: none;\n}\n\n.btn:hover {\n  background-color: #9d5cf2;\n}\n\n.down {\n  margin-top: 500px;\n}\n\n#srvh1 {\n  text-align: center;\n  margin-top: 50vh;\n  font-family: \"montserrat\";\n  padding-top: 120px;\n}\n\n#srvh1:after {\n  content: \"\";\n  display: block;\n  height: 4px;\n  width: 40px;\n  background-color: #6195ff;\n  margin: 20px auto 0;\n}\n\n.cardf2 {\n  float: left;\n  margin-top: 80px;\n  position: relative;\n  font-family: \"montserrat\";\n  box-shadow: 0 1px 1px -1px #eeeeee;\n  text-align: center;\n  border-radius: 0;\n  padding: 10px 10px 10px 10px;\n}\n\n.cardf3 {\n  margin-left: 10%;\n}\n\n.cardf4 {\n  margin-left: 10%;\n}\n\n.cardf2 img {\n  width: 100px;\n  height: 80px;\n  margin: 10px auto 0;\n}\n\n.cardf2::after {\n  content: \"\";\n  background-color: #1c1d21;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0%;\n  z-index: -1;\n  -webkit-transition: 0.2s width;\n  transition: 0.2s width;\n  -webkit-transition-property: width;\n  transition-property: width;\n  -webkit-transition-duration: 0.1s;\n          transition-duration: 0.1s;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.cardf2:hover::after {\n  font-family: \"montserrat\";\n  background-color: #1c1d21;\n  width: 100%;\n  opacity: 1;\n  transition: 500ms;\n  -webkit-transition: 500ms;\n}\n\n.cardf2:hover {\n  color: #fff;\n}\n\n#work {\n  background-color: #f3f3f3;\n  margin-top: 60vh;\n  padding-bottom: 13vh;\n}\n\n#work h1 {\n  text-align: center;\n  padding-top: 13vh;\n  font-family: \"montserrat\";\n  margin-bottom: 5vh;\n}\n\n#work h1:after {\n  content: \"\";\n  display: block;\n  height: 4px;\n  width: 40px;\n  background-color: #6195ff;\n  margin: 20px auto 0;\n}\n\n#work img {\n  padding: 2vh;\n  z-index: 1;\n}\n\n.overlay1 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease;\n  background-color: #0680b9;\n}\n\n.overlay1:hover {\n  opacity: 0.8;\n}\n\n.n {\n  font-family: \"montserrat\";\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n#city {\n  height: 30vh;\n  background: url('city.jpg');\n  background-attachment: fixed;\n  background-position: center center;\n  position: relative;\n  background-size: cover;\n}\n\n.overlay2 {\n  position: absolute;\n  height: 30vh;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0.8;\n  z-index: 1;\n  background: #1c1d21;\n}\n\nfa-icon {\n  color: #7971ea;\n}\n\n.icons {\n  font-size: 40px;\n  color: white;\n  float: left;\n  padding: 2vh;\n  margin-top: 4vh;\n}\n\n.icons:nth-child(1) {\n  margin-left: 21vh;\n}\n\n.icons:nth-child(2) {\n  margin-left: 21vh;\n}\n\n.icons:nth-child(3) {\n  margin-left: 21vh;\n}\n\n#footer {\n  background-color: #080808;\n  height: 340px;\n}\n\n#footer h4 {\n  color: white;\n  text-align: center;\n  padding-top: 5vh;\n  font-size: 10px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#footer h1 {\n  color: #7971ea;\n  text-align: center;\n  padding-top: 10vh;\n  font-size: 22px;\n  font-family: \"montserrat\";\n}\n\n#footer img {\n  height: 50px;\n  width: 50px;\n  margin: 30px 10px 10px 0px;\n}\n\n#footer p {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxccHJvamVjdHNcXEJhY2tlbmRcXG15YXBwMS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBRElBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNESjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBRENBO0VBRUksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBRUEsVUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FES0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBRElBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUNESjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNBSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7RUFFQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtFQUVBLDZDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxzQkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0FDTUo7O0FESkE7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtFQUNBLGlDQUFBO0FDT0o7O0FETEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNRSjs7QUROQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ1NKOztBRFBBO0VBQ0kseUJBQUE7QUNVSjs7QUROQTtFQUNBLGlCQUFBO0FDU0E7O0FETkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBRUEsbUJBQUE7QUNTSjs7QUROQTtFQUlJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFFQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ01KOztBREZBO0VBQ0ksZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDT0o7O0FETEE7RUFDUSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQUEsMEJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7QUNRUjs7QURMQTtFQUVJLHlCQUFBO0VBQ0EseUJBQUE7RUFFQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNNSjs7QURKQTtFQUNJLFdBQUE7QUNPSjs7QUREQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0lKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUVBLG1CQUFBO0FDSUo7O0FEREE7RUFFSyxZQUFBO0VBQ0EsVUFBQTtBQ0dMOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtFQUNBLHlCQUFBO0FDSUo7O0FEREU7RUFDRSxZQUFBO0FDSUo7O0FERkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO0VBRUEsZ0NBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREZFO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNLTjs7QURIRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDTUo7O0FESkE7RUFDRyxjQUFBO0FDT0g7O0FETEE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1FKOztBRE5BO0VBQ0ksaUJBQUE7QUNTSjs7QURQQTtFQUNJLGlCQUFBO0FDVUo7O0FEUkE7RUFDSSxpQkFBQTtBQ1dKOztBRFJBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FDV0o7O0FEVEE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQ1lKOztBRFRBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNZSjs7QURUQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNZSjs7QURWQTtFQUNJLGtCQUFBO0FDYUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIFxyXG59XHJcblxyXG4uaDEge1xyXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdCc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDgwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbnAge1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG59XHJcbiNidG4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MDBweDtcclxufVxyXG4vLyBGT1JNIEFORCBUSVRMRVxyXG4jZm9ybSB7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6ICNmZmYgc29saWQgMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggNDBweCA0MHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBmb250LWZhbWlseTogJ21vbnRzZXJyYXQnO1xyXG4gICAgXHJcbiAgICB6LWluZGV4OiAzO1xyXG5cclxufVxyXG4jZm9ybSBoM3tcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIFxyXG59XHJcbiNmb3JtIGlucHV0IHtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6ICM3OTcxZWEgc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgXHJcbn1cclxuI3RpdGxlIHtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7ICBcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ21vbnRzZXJyYXQnO1xyXG59XHJcbiN0aXRsZSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdCc7XHJcbn1cclxuI21haW4ge1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgXHJcbiAgICBcclxufVxyXG5cclxuI2J0bjExIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogICM3OTcxZWEgc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTcxZWE7XHJcblxyXG59XHJcbi8vIFNUSUNLWVxyXG4jc3RpY2t5IHtcclxuICAgIG1hcmdpbjogMTB2aCAwIDAgMDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuI3N0aWNreSB1bCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuI3N0aWNreSB1bCBsaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E0NTcyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlcjogIzNhNDU3MiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxufVxyXG4jc3RpY2t5IHVsIGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ21vbnRzZXJyYXQnO1xyXG4gICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgIFxyXG59XHJcbiNzdGlja3kgdWwgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2RkZDNlMDtcclxufVxyXG4vLyBTT0NJQUwgTUVESUEgSUNPTlNcclxuI2NycyB7XHJcbiAgICBtYXJnaW4tdG9wOiA4MXZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NzFlYTtcclxuICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuI2NycyBoMSB7XHJcbiAgICB0b3A6IDE1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ21vbnRzZXJyYXQnO1xyXG4gICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZmFjZWJvb2sge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuI2NhcmRmIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0JztcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgXHJcbn1cclxuLnByaWNlIGgyIHtcclxuICAgIGNvbG9yOiAjNzk3MWVhO1xyXG4gICAgbWFyZ2luLXRvcDogMjUlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0JztcclxufVxyXG4ucHJpY2UgIHtcclxuICAgIGJvcmRlcjogIzYxOTVmZiBzb2xpZCAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgXHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4O1xyXG59XHJcbi5jYXJkLWJvZHkgaDUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0JztcclxufVxyXG4ucHJpY2Ugc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY2FyZDEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmNhcmQyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuLmNhcmQzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuI2NhcmRmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjMgIGVhc2UtaW4tb3V0O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDBweCBncmF5O1xyXG59XHJcbiNjYXJkZiBpbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTcxZWE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWQ1Y2YyO1xyXG59XHJcblxyXG5cclxuLmRvd24ge1xyXG5tYXJnaW4tdG9wOiA1MDBweDtcclxufVxyXG4vLyBPVVIgU0VSVklDRVMgQ0FSRFNcclxuI3NydmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwdmg7XHJcbiAgICBmb250LWZhbWlseTogJ21vbnRzZXJyYXQnO1xyXG4gICAgcGFkZGluZy10b3A6IDEyMHB4O1xyXG59XHJcbiNzcnZoMTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxOTVmZjtcclxuICAgIFxyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcclxufVxyXG5cclxuLmNhcmRmMiB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTogJ21vbnRzZXJyYXQnO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggLTFweCAjZWVlZWVlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbi5jYXJkZjMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG4uY2FyZGY0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuLmNhcmRmMiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcclxufVxyXG4uY2FyZGYyOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZDIxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIHdpZHRoO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4ycyB3aWR0aDtcclxuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aDtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xyXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgXHJcbn1cclxuLmNhcmRmMjpob3Zlcjo6YWZ0ZXIge1xyXG4gICBcclxuICAgIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdCc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZDIxO1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiA1MDBtcztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogNTAwbXM7XHJcbn1cclxuLmNhcmRmMjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8vIE9VUiBXT1JLXHJcblxyXG4jd29yayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgbWFyZ2luLXRvcDogNjB2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxM3ZoO1xyXG59XHJcblxyXG4jd29yayBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTN2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdCc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbn1cclxuI3dvcmsgaDE6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTk1ZmY7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDA7XHJcbn1cclxuXHJcbiN3b3JrIGltZyB7XHJcbiAgICBcclxuICAgICBwYWRkaW5nOiAydmg7XHJcbiAgICAgei1pbmRleDogMTtcclxufVxyXG4ub3ZlcmxheTEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgMTI4LCAxODUpO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5vdmVybGF5MTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICB9XHJcbiAgLm4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0JztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgI2NpdHkge1xyXG4gICAgICBoZWlnaHQ6ICAzMHZoO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2l0eS5qcGcnKSA7XHJcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLm92ZXJsYXkyIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgbGVmdDowO1xyXG4gICAgdG9wOjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICBvcGFjaXR5Oi44O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQ6IzFjMWQyMTtcclxuICB9XHJcbmZhLWljb24ge1xyXG4gICBjb2xvcjogIzc5NzFlYTtcclxufVxyXG4uaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAydmg7XHJcbiAgICBtYXJnaW4tdG9wOiA0dmg7XHJcbiAgfVxyXG4uaWNvbnM6bnRoLWNoaWxkKDEpe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxdmg7XHJcbn1cclxuLmljb25zOm50aC1jaGlsZCgyKXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMXZoO1xyXG59XHJcbi5pY29uczpudGgtY2hpbGQoMyl7XHJcbiAgICBtYXJnaW4tbGVmdDogMjF2aDtcclxufVxyXG5cclxuI2Zvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgOCwgOCk7XHJcbiAgICBoZWlnaHQ6IDM0MHB4O1xyXG59XHJcbiNmb290ZXIgaDQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDV2aDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG4jZm9vdGVyIGgxIHtcclxuICAgIGNvbG9yOiAjNzk3MWVhO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwdmg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogJ21vbnRzZXJyYXQnO1xyXG4gICAgXHJcbn1cclxuI2Zvb3RlciBpbWcge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggMTBweCAxMHB4IDBweDtcclxufVxyXG4jZm9vdGVyIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5oMSB7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRcIjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogODAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxucCB7XG4gIG1hcmdpbjogMCAwIDAgMDtcbn1cblxuI2J0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRkIHtcbiAgbWFyZ2luLXRvcDogNTAwcHg7XG59XG5cbiNmb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAjZmZmIHNvbGlkIDJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNjAlO1xuICBtYXJnaW4tdG9wOiA0MCU7XG4gIHBhZGRpbmc6IDQwcHggNDBweCA0MHB4IDQwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdFwiO1xuICB6LWluZGV4OiAzO1xufVxuXG4jZm9ybSBoMyB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4jZm9ybSBpbnB1dCB7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBmb250LXN0eWxlOiBib2xkO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAjNzk3MWVhIHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4jdGl0bGUge1xuICB6LWluZGV4OiAzO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGhlaWdodDogMHB4O1xuICBwb3NpdGlvbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRcIjtcbn1cblxuI3RpdGxlIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRcIjtcbn1cblxuI21haW4ge1xuICBoZWlnaHQ6IDBweDtcbn1cblxuI2J0bjExIHtcbiAgd2lkdGg6IDkwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAjNzk3MWVhIHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NzFlYTtcbn1cblxuI3N0aWNreSB7XG4gIG1hcmdpbjogMTB2aCAwIDAgMDtcbn1cblxuI3N0aWNreSB1bCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuI3N0aWNreSB1bCBsaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTQ1NzI7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAjM2E0NTcyIDFweCBzb2xpZDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbn1cblxuI3N0aWNreSB1bCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG59XG5cbiNzdGlja3kgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjZGRkM2UwO1xufVxuXG4jY3JzIHtcbiAgbWFyZ2luLXRvcDogODF2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk3MWVhO1xuICBoZWlnaHQ6IDMzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMztcbn1cblxuI2NycyBoMSB7XG4gIHRvcDogMTUwcHg7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhY2Vib29rIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuI2NhcmRmIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRcIjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnByaWNlIGgyIHtcbiAgY29sb3I6ICM3OTcxZWE7XG4gIG1hcmdpbi10b3A6IDI1JTtcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdFwiO1xufVxuXG4ucHJpY2Uge1xuICBib3JkZXI6ICM2MTk1ZmYgc29saWQgMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweDtcbn1cblxuLmNhcmQtYm9keSBoNSB7XG4gIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRcIjtcbn1cblxuLnByaWNlIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2FyZDEge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmNhcmQyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmNhcmQzIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuI2NhcmRmOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2l0aW9uOiAwLjMgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IDFweCA4cHggMjBweCAwcHggZ3JheTtcbn1cblxuI2NhcmRmIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAzNSU7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTcxZWE7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZDVjZjI7XG59XG5cbi5kb3duIHtcbiAgbWFyZ2luLXRvcDogNTAwcHg7XG59XG5cbiNzcnZoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTB2aDtcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdFwiO1xuICBwYWRkaW5nLXRvcDogMTIwcHg7XG59XG5cbiNzcnZoMTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTk1ZmY7XG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XG59XG5cbi5jYXJkZjIge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggLTFweCAjZWVlZWVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG59XG5cbi5jYXJkZjMge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uY2FyZGY0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmNhcmRmMiBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcbn1cblxuLmNhcmRmMjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZDIxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMCU7XG4gIHotaW5kZXg6IC0xO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgd2lkdGg7XG4gIHRyYW5zaXRpb246IDAuMnMgd2lkdGg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG59XG5cbi5jYXJkZjI6aG92ZXI6OmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdFwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZDIxO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogNTAwbXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogNTAwbXM7XG59XG5cbi5jYXJkZjI6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI3dvcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBtYXJnaW4tdG9wOiA2MHZoO1xuICBwYWRkaW5nLWJvdHRvbTogMTN2aDtcbn1cblxuI3dvcmsgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxM3ZoO1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbn1cblxuI3dvcmsgaDE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE5NWZmO1xuICBtYXJnaW46IDIwcHggYXV0byAwO1xufVxuXG4jd29yayBpbWcge1xuICBwYWRkaW5nOiAydmg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5vdmVybGF5MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjgwYjk7XG59XG5cbi5vdmVybGF5MTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLm4ge1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NpdHkge1xuICBoZWlnaHQ6IDMwdmg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY2l0eS5qcGdcIik7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm92ZXJsYXkyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDMwdmg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjMWMxZDIxO1xufVxuXG5mYS1pY29uIHtcbiAgY29sb3I6ICM3OTcxZWE7XG59XG5cbi5pY29ucyB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMnZoO1xuICBtYXJnaW4tdG9wOiA0dmg7XG59XG5cbi5pY29uczpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tbGVmdDogMjF2aDtcbn1cblxuLmljb25zOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1sZWZ0OiAyMXZoO1xufVxuXG4uaWNvbnM6bnRoLWNoaWxkKDMpIHtcbiAgbWFyZ2luLWxlZnQ6IDIxdmg7XG59XG5cbiNmb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwODA4O1xuICBoZWlnaHQ6IDM0MHB4O1xufVxuXG4jZm9vdGVyIGg0IHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1dmg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbiNmb290ZXIgaDEge1xuICBjb2xvcjogIzc5NzFlYTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTB2aDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG59XG5cbiNmb290ZXIgaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luOiAzMHB4IDEwcHggMTBweCAwcHg7XG59XG5cbiNmb290ZXIgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var counterup2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! counterup2 */ "./node_modules/counterup2/dist/index.js");
/* harmony import */ var counterup2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterup2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var HomeComponent = /** @class */ (function () {
    function HomeComponent(validateServices, Flashmsg, authservices, router) {
        this.validateServices = validateServices;
        this.Flashmsg = Flashmsg;
        this.authservices = authservices;
        this.router = router;
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCoffee"];
        this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUsers"];
        this.faFile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFile"];
        this.title = 'myapp1';
        this.netImage = "/assets/images/f.png";
        this.netImage1 = "/assets/images/i.png";
        this.netImage2 = "/assets/images/t.png";
        this.netImage3 = "/assets/images/h.png";
        this.netImage4 = "/assets/images/c.png";
        this.netImage5 = "/assets/images/j.png";
        this.netImage6 = "/assets/images/1.jpg";
        this.netImage7 = "/assets/images/2.jpg";
        this.netImage8 = "/assets/images/3.jpg";
        this.netImage9 = "/assets/images/4.jpg";
        this.netImage10 = "/assets/images/5.jpg";
        this.netImage11 = "/assets/images/6.jpg";
        this.fa1 = "/assets/images/f1.png";
        this.fa2 = "/assets/images/f2.png";
        this.fa3 = "/assets/images/f3.png";
    }
    HomeComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_2___default.a.init();
        __webpack_require__(/*! waypoints/lib/noframework.waypoints.js */ "./node_modules/waypoints/lib/noframework.waypoints.js");
        var el2 = document.querySelector('.counter2');
        new Waypoint({
            element: document.querySelector('.counter2'),
            handler: function () {
                counterup2__WEBPACK_IMPORTED_MODULE_4___default()(el2);
                this.destroy();
            },
            offset: 'bottom-in-view',
        });
        __webpack_require__(/*! waypoints/lib/noframework.waypoints.js */ "./node_modules/waypoints/lib/noframework.waypoints.js");
        var el3 = document.querySelector('.counter3');
        new Waypoint({
            element: document.querySelector('.counter3'),
            handler: function () {
                counterup2__WEBPACK_IMPORTED_MODULE_4___default()(el3);
                this.destroy();
            },
            offset: 'bottom-in-view',
        });
        __webpack_require__(/*! waypoints/lib/noframework.waypoints.js */ "./node_modules/waypoints/lib/noframework.waypoints.js");
        var el = document.querySelector('.counter');
        new Waypoint({
            element: document.querySelector('.counter'),
            handler: function () {
                counterup2__WEBPACK_IMPORTED_MODULE_4___default()(el);
                this.destroy();
            },
            offset: 'bottom-in-view',
        });
    };
    // REGISTER
    HomeComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        if (!this.validateServices.validateRegisterName(user)) {
            $('.input1').css("border-color", "red");
            return false;
        }
        if (this.validateServices.validateRegisterName(user)) {
            $('.input1').css("border-color", "#7971ea");
        }
        if (!this.validateServices.validateRegisterUser(user)) {
            $('.input2').css("border-color", "red");
            return false;
        }
        if (!this.validateServices.validateRegisterPass(user)) {
            $('.input4').css("border-color", "red");
            return false;
        }
        if (!this.validateServices.validateRegisterEmail(user)) {
            $('.input3').css("border-color", "red");
            return false;
        }
        if (!this.validateServices.validateEmail(user.email)) {
            $('.input3').css("border-color", "red");
            return false;
        }
        this.authservices.registerUser(user).subscribe(function (data) {
            if (data) {
                _this.Flashmsg.showFlashMessage({
                    messages: ["You are now registered "],
                    dismissible: true,
                    timeout: 1000,
                    type: 'success',
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.Flashmsg.showFlashMessage({
                    messages: ["Something went wrong!"],
                    dismissible: true,
                    timeout: 2000,
                    type: 'danger',
                });
                _this.router.navigate(['/register']);
            }
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"] },
        { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__["NgFlashMessageService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  width: 40%;\n  margin-left: 30%;\n  background-color: #fff;\n  border: #fff solid 2px;\n  border-radius: 8px;\n  padding: 20px 20px 20px 20px;\n  font-family: \"montserrat\";\n}\n\nh3 {\n  margin-left: 5%;\n  font-family: \"montserrat\";\n}\n\nlabel {\n  color: black;\n  margin-left: 5%;\n  padding: 0;\n  position: relative;\n}\n\ninput {\n  width: 90%;\n  margin-left: 5%;\n  border: #7971ea solid 1px;\n  border-radius: 4px;\n}\n\nbutton {\n  position: relative;\n  margin-left: 5%;\n  background-color: #7971ea;\n  border: #7971ea solid 1px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXHByb2plY3RzXFxCYWNrZW5kXFxteWFwcDEvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUM7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNDTDs7QURDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFFSSxVQUFBO0VBRUEsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogI2ZmZiBzb2xpZCAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0JztcclxufVxyXG5cclxuIGgzIHtcclxuICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0JztcclxuIH1cclxubGFiZWwge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5pbnB1dCB7XHJcbiAgICBcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIGJvcmRlcjogIzc5NzFlYSBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTcxZWE7XHJcbiAgICBib3JkZXI6ICAjNzk3MWVhIHNvbGlkIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iLCJmb3JtIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAjZmZmIHNvbGlkIDJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG59XG5cbmgzIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG59XG5cbmxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGJvcmRlcjogIzc5NzFlYSBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTcxZWE7XG4gIGJvcmRlcjogIzc5NzFlYSBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(Flashmsg, authservices, router) {
        this.Flashmsg = Flashmsg;
        this.authservices = authservices;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authservices.authenticateUser(user).subscribe(function (data) {
            if (data) {
                _this.authservices.storeUserData(data['token'], data['user']);
            }
            if (data['user']) {
                _this.Flashmsg.showFlashMessage({
                    messages: ["You logged in "],
                    dismissible: true,
                    timeout: 1000,
                    type: 'success',
                });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.Flashmsg.showFlashMessage({
                    messages: ["Email or Password is wrong!"],
                    dismissible: true,
                    timeout: 2000,
                    type: 'danger',
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,700\");\n* {\n  margin: 0 0 0 0;\n}\nfa-icon {\n  font-size: 18px;\n}\n.dropbtn {\n  font-family: \"montserrat\";\n  color: #fff;\n  background-color: transparent;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  margin-top: 4px;\n}\n.dropbtn::after {\n  content: \"\";\n  display: block;\n  border-bottom: 1.5px solid #7971ea;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: 0.2s width;\n  transition: 0.2s width;\n  -webkit-transition-property: width;\n  transition-property: width;\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n.dropbtn:hover::after {\n  font-family: \"montserrat\";\n  border-bottom: 1.5px solid #7971ea;\n  width: 100%;\n  opacity: 1;\n  transition: 500ms;\n  -webkit-transition: 500ms;\n}\n.dropdown {\n  position: relative;\n  float: right;\n}\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #1c1d21;\n  min-width: 100px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  font-family: \"montserrat\";\n}\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n.dropdown:hover .dropdown-content a {\n  color: black;\n}\n.dropdown:hover .dropbtn {\n  background-color: transparent;\n}\n.container {\n  margin: auto;\n}\nheader {\n  height: 66px;\n}\n#myapp {\n  box-sizing: border-box;\n  float: left;\n  font-style: bold;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  color: white;\n  font-family: \"montserrat\";\n  text-decoration: none;\n  position: fixed;\n  left: 12%;\n  z-index: 3;\n}\n#nav1 {\n  width: 100%;\n  box-sizing: border-box;\n  top: 0px;\n  right: 0%;\n  position: fixed;\n  z-index: 4;\n}\n#navbar ul {\n  margin-right: 12%;\n}\n#navbar li {\n  text-transform: uppercase;\n  list-style-type: none;\n  margin: 0 15px 0 15px;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  float: right;\n  font-size: 15px;\n}\n#navbar a {\n  font-family: \"montserrat\";\n  text-decoration: none;\n  color: white;\n}\n#home {\n  border-bottom: 1.5px solid #7971ea;\n}\n.a1::after {\n  content: \"\";\n  display: block;\n  border-bottom: 1.5px solid #7971ea;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: 0.2s width;\n  transition: 0.2s width;\n  -webkit-transition-property: width;\n  transition-property: width;\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n.a1:hover::after {\n  font-family: \"montserrat\";\n  border-bottom: 1.5px solid #7971ea;\n  width: 100%;\n  opacity: 1;\n  transition: 500ms;\n  -webkit-transition: 500ms;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0Q6XFxwcm9qZWN0c1xcQmFja2VuZFxcbXlhcHAxL3NyY1xcYXBwXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RUFBQTtBQUNSO0VBQ0ksZUFBQTtBQ0NKO0FERUE7RUFDSSxlQUFBO0FDQ0o7QURDQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEQUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFBQSwwQkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQ0dKO0FEQUE7RUFFQSx5QkFBQTtFQUNBLGtDQUFBO0VBRUEsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0E7QURDRTtFQUNFLGtCQUFBO0VBRUEsWUFBQTtBQ0NKO0FERUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNDSjtBREdFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDQUo7QURLRTtFQUFvQyxjQUFBO0FDRHRDO0FERUU7RUFDSSxZQUFBO0FDQ047QURFRTtFQUEwQiw2QkFBQTtBQ0U1QjtBRERBO0VBRUksWUFBQTtBQ0dKO0FEREE7RUFDSSxZQUFBO0FDSUo7QURGQTtFQUVJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSUo7QURBQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNHSjtBRENBO0VBQ0ksaUJBQUE7QUNFSjtBRENBO0VBRUkseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7QURFQTtFQUVJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQUo7QURLQTtFQUNJLGtDQUFBO0FDRko7QURXQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUFBLDBCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDUko7QURXQTtFQUVBLHlCQUFBO0VBQ0Esa0NBQUE7RUFFQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNWQSIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMCcpO1xyXG4qIHtcclxuICAgIG1hcmdpbjogMCAwIDAgMDtcclxuICAgIFxyXG59XHJcbmZhLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5kcm9wYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdCc7XHJcbiAgICBjb2xvcjogICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgfVxyXG4gIC5kcm9wYnRuOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjNzk3MWVhO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4ycyB3aWR0aDtcclxuICAgIHRyYW5zaXRpb246IC4ycyB3aWR0aDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgIFxyXG59XHJcbi5kcm9wYnRuOmhvdmVyOjphZnRlciB7XHJcblxyXG5mb250LWZhbWlseTogJ21vbnRzZXJyYXQnO1xyXG5ib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjNzk3MWVhO1xyXG5cclxud2lkdGg6IDEwMCU7XHJcbm9wYWNpdHk6IDE7XHJcbnRyYW5zaXRpb246IDUwMG1zO1xyXG4td2Via2l0LXRyYW5zaXRpb246IDUwMG1zO1xyXG59XHJcbiAgLmRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWQyMTtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmb250LWZhbWlseTogJ21vbnRzZXJyYXQnO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBcclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQgIHtkaXNwbGF5OiBibG9jazsgfVxyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O31cclxuLmNvbnRhaW5lciB7XHJcblx0XHJcbiAgICBtYXJnaW46IGF1dG87ICBcclxufVxyXG5oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA2NnB4O1xyXG59XHJcbiNteWFwcCB7XHJcbiAgICBcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDsgIFxyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0JztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDEyJTtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcblxyXG4jbmF2MSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgIFxyXG4gICAgXHJcbn1cclxuI25hdmJhciB1bCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEyJTtcclxuICAgIFxyXG59XHJcbiNuYXZiYXIgbGkge1xyXG4gICAgXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyAgXHJcbiAgICBtYXJnaW46IDAgMTVweCAwIDE1cHg7ICAgIFxyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7ICBcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgXHJcbn1cclxuI25hdmJhciBhIHtcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0JztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICBcclxufVxyXG5cclxuXHJcbiNob21lIHtcclxuICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICM3OTcxZWE7XHJcbn1cclxuXHJcbi8vIC5hOm50aC1jaGlsZCgxKTpob3ZlciB7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjNzk3MWVhO1xyXG4vLyB9XHJcbi8vIC5hOm50aC1jaGlsZCgyKTpob3ZlciB7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjNzk3MWVhO1xyXG4vLyB9XHJcbi5hMTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgIzc5NzFlYTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnMgd2lkdGg7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnMgd2lkdGg7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gICBcclxufVxyXG4uYTE6aG92ZXI6OmFmdGVyIHtcclxuXHJcbmZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdCc7XHJcbmJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICM3OTcxZWE7XHJcblxyXG53aWR0aDogMTAwJTtcclxub3BhY2l0eTogMTtcclxudHJhbnNpdGlvbjogNTAwbXM7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogNTAwbXM7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwXCIpO1xuKiB7XG4gIG1hcmdpbjogMCAwIDAgMDtcbn1cblxuZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmRyb3BidG4ge1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmRyb3BidG46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICM3OTcxZWE7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyB3aWR0aDtcbiAgdHJhbnNpdGlvbjogMC4ycyB3aWR0aDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn1cblxuLmRyb3BidG46aG92ZXI6OmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdFwiO1xuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjNzk3MWVhO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogNTAwbXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogNTAwbXM7XG59XG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWQyMTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRcIjtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IGEge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5oZWFkZXIge1xuICBoZWlnaHQ6IDY2cHg7XG59XG5cbiNteWFwcCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXN0eWxlOiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdFwiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMTIlO1xuICB6LWluZGV4OiAzO1xufVxuXG4jbmF2MSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDQ7XG59XG5cbiNuYXZiYXIgdWwge1xuICBtYXJnaW4tcmlnaHQ6IDEyJTtcbn1cblxuI25hdmJhciBsaSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwIDE1cHggMCAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4jbmF2YmFyIGEge1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jaG9tZSB7XG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICM3OTcxZWE7XG59XG5cbi5hMTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgIzc5NzFlYTtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIHdpZHRoO1xuICB0cmFuc2l0aW9uOiAwLjJzIHdpZHRoO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xufVxuXG4uYTE6aG92ZXI6OmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdFwiO1xuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjNzk3MWVhO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogNTAwbXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogNTAwbXM7XG59Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







var NavComponent = /** @class */ (function () {
    function NavComponent(Flashmsg, authservices, router) {
        this.Flashmsg = Flashmsg;
        this.authservices = authservices;
        this.router = router;
        this.faUserCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUserCircle"];
    }
    NavComponent.prototype.onlogOut = function () {
        this.authservices.logOut();
        this.Flashmsg.showFlashMessage({
            messages: ["You logged out"],
            dismissible: true,
            timeout: 2000,
            type: 'success',
        });
        this.router.navigate(['./login']);
        return false;
    };
    NavComponent.prototype.ngOnInit = function () {
        // BLACK NAV SCROLL DOWN
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(window).scroll(function () {
                var scroll = jquery__WEBPACK_IMPORTED_MODULE_2__(window).scrollTop();
                if (scroll > 20) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".nav1").css("background", "	#f4f4f4");
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".nav1").css("color", "	rgb(0, 0, 0)");
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".nav1").css("background", "transparent");
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".nav1").css("color", "	white");
                }
                if (scroll > 100) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".nav1 li").css("padding-bottom", "5px");
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".nav1 li").css("padding-bottom", "20px");
                }
            });
        });
        // WHITE MY APP COLOR
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(window).scroll(function () {
                var scroll = jquery__WEBPACK_IMPORTED_MODULE_2__(window).scrollTop();
                if (scroll > 20) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".white").css("color", "	black");
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".iconus").css("color", "black");
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".dropdown-content").css("background-color", "#6195ff");
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".white").css("color", "	white");
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".iconus").css("color", "white");
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".dropdown-content").css("background-color", "#1c1d21");
                }
                if (scroll > 100) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".white").css("padding-top", "18px");
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".white").css("padding-top", "18px");
                }
            });
        });
        // A COLOR
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(window).scroll(function () {
                var scroll = jquery__WEBPACK_IMPORTED_MODULE_2__(window).scrollTop();
                if (scroll > 20) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".a").css("color", "	black");
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".a").css("color", "	white");
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".a").hover(function () {
                var scroll = jquery__WEBPACK_IMPORTED_MODULE_2__(window).scrollTop();
                if (scroll > 20) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".a").hover(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(this).css("color", "purple");
                    }, function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(this).css("color", "black");
                    });
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".a").hover(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(this).css("color", "purple");
                    }, function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(this).css("color", "white");
                    });
                }
            });
        });
    };
    NavComponent.ctorParameters = function () { return [
        { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxccHJvamVjdHNcXEJhY2tlbmRcXG15YXBwMS9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59IiwiaDEge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile['User'];
        }, function (err) {
            return false;
        });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".go {\n  margin-top: 40px;\n  text-align: center;\n  font-family: \"montserrat\";\n}\n\n.gg {\n  background-color: #DD4B39;\n  margin-top: 10px;\n  font-family: Arial, Helvetica, sans-serif;\n  height: 3rem;\n  padding: 4px;\n  width: 50%;\n  margin-left: 25%;\n  color: #f3f3f3;\n}\n\na {\n  text-decoration: none;\n  color: #f3f3f3;\n  font-family: \"montserrat\";\n}\n\n.fce {\n  background-color: #3b5998;\n  width: 50%;\n  margin-left: 25%;\n  font-family: Arial, Helvetica, sans-serif;\n  height: 3rem;\n  padding: 4px;\n  color: #f3f3f3;\n}\n\nform {\n  width: 40%;\n  margin-left: 30%;\n  background-color: #fff;\n  border: #fff solid 2px;\n  border-radius: 8px;\n  padding: 20px 20px 20px 20px;\n  font-family: \"montserrat\";\n}\n\nh3 {\n  margin-left: 5%;\n  font-family: \"montserrat\";\n}\n\nlabel {\n  color: black;\n  margin-left: 5%;\n  padding: 0;\n  position: relative;\n}\n\ninput {\n  width: 90%;\n  margin-left: 5%;\n  border: #7971ea solid 1px;\n  border-radius: 4px;\n}\n\nbutton {\n  position: relative;\n  margin-left: 5%;\n  background-color: #7971ea;\n  border: #7971ea solid 1px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXHByb2plY3RzXFxCYWNrZW5kXFxteWFwcDEvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUNHSjs7QURBQztFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQ0dMOztBRERBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUVJLFVBQUE7RUFFQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZ28ge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdCc7XHJcbn1cclxuLmdnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERDRCMzk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIGNvbG9yOiAjZjNmM2YzO1xyXG5cclxufVxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZjNmM2YzO1xyXG4gICAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0JztcclxufVxyXG4uZmNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgY29sb3I6ICNmM2YzZjM7XHJcbn1cclxuZm9ybSB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6ICNmZmYgc29saWQgMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdCc7XHJcbn1cclxuXHJcbiBoMyB7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdCc7XHJcbiB9XHJcbmxhYmVsIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuaW5wdXQge1xyXG4gICAgXHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBib3JkZXI6ICM3OTcxZWEgc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk3MWVhO1xyXG4gICAgYm9yZGVyOiAgIzc5NzFlYSBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59IiwiLmdvIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG59XG5cbi5nZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERDRCMzk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDNyZW07XG4gIHBhZGRpbmc6IDRweDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgY29sb3I6ICNmM2YzZjM7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZjNmM2YzO1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG59XG5cbi5mY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAzcmVtO1xuICBwYWRkaW5nOiA0cHg7XG4gIGNvbG9yOiAjZjNmM2YzO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAjZmZmIHNvbGlkIDJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG59XG5cbmgzIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG59XG5cbmxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGJvcmRlcjogIzc5NzFlYSBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTcxZWE7XG4gIGJvcmRlcjogIzc5NzFlYSBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateServices, Flashmsg, authservices, router) {
        this.validateServices = validateServices;
        this.Flashmsg = Flashmsg;
        this.authservices = authservices;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        if (!this.validateServices.validateRegister(user)) {
            this.Flashmsg.showFlashMessage({
                messages: ["Fill all fields please"],
                dismissible: true,
                timeout: 2000,
                type: 'danger',
            });
            return false;
        }
        if (!this.validateServices.validateEmail(user.email)) {
            this.Flashmsg.showFlashMessage({
                messages: ["Enter a valid email please"],
                dismissible: true,
                timeout: 2000,
                type: 'danger'
            });
            return false;
        }
        this.authservices.registerUser(user).subscribe(function (data) {
            if (data) {
                _this.Flashmsg.showFlashMessage({
                    messages: ["You are now registered "],
                    dismissible: true,
                    timeout: 2000,
                    type: 'success',
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.Flashmsg.showFlashMessage({
                    messages: ["Something went wrong!"],
                    dismissible: true,
                    timeout: 2000,
                    type: 'danger',
                });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
        { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authservices, router) {
        this.authservices = authservices;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authservices.display()) {
            return true;
        }
        else {
            this.router.navigate(['./login']);
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: this.authToken
        });
        this.loadToken();
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('profile', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.display = function () {
        return !!localStorage.getItem('id_token');
    };
    AuthService.prototype.checkToken = function () {
        return localStorage.getItem('id_token');
    };
    AuthService.prototype.logOut = function () {
        this.user = null;
        this.authToken = null;
        localStorage.clear();
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authservice = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        var tokenizedreq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authservice.checkToken()
            }
        });
        return next.handle(tokenizedreq);
    };
    TokenInterceptorService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.password == undefined || user.email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateRegisterName = function (user) {
        if (user.name == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateRegisterUser = function (user) {
        if (user.username == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateRegisterPass = function (user) {
        if (user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateRegisterEmail = function (user) {
        if (user.email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\Backend\myapp1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map