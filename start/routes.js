'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('/', ({ view }) => {
  return view.render('home_page')
});

Route.group(() => {
  Route.post('/register', 'AuthController.register');
  Route.post('/login', 'AuthController.login');
}).prefix('api/v1');

Route.group(() => {
  Route.resource('gig', 'GigController').validator(new Map([
    [['gig.store'], ['StoreGig']],
    [['gig.update'], ['StoreGig']]
  ])).apiOnly();
  Route.resource('category', 'CategoryController').apiOnly();
  Route.resource('gig_category', 'GigCategoryController').apiOnly();
  Route.resource('gig_package', 'GigPackageController').apiOnly();
  Route.resource('gig_requirement', 'GigRequirementController').apiOnly();
}).prefix('api/v1');//.middleware('auth');
