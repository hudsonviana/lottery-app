import Route from '@ioc:Adonis/Core/Route';

Route.get('/', async ({ view }) => {
  return view.render('welcome');
});

Route.get('/home', async ({ inertia }) => {
  return inertia.render('Home', {
    testando: 'Como vai você?',
  });
});

Route.get('/login', async ({ inertia }) => {
  return inertia.render('Auth/Login');
});
