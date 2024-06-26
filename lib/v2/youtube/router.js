module.exports = (router) => {
    router.get('/c/:username/:embed?', require('./custom'));
    router.get('/channel/:id/:routeParams?', require('./channel'));
    router.get('/charts/:category?/:country?/:embed?', require('./charts'));
    router.get('/community/:handle', require('./community'));
    router.get('/live/:username/:embed?', require('./live'));
    router.get('/playlist/:id/:embed?', require('./playlist'));
    router.get('/subscriptions/:embed?', require('./subscriptions'));
    router.get('/user/:username/:embed?', require('./user'));
};
