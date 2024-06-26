module.exports = function (router) {
    router.get('/book/latest', require('./other/latest-book'));
    router.get('/book/rank/:type?', require('./book/rank'));
    router.get('/bookstore', require('./other/bookstore'));
    router.get('/celebrity/:id/:sort?', require('./other/celebrity.js'));
    router.get('/channel/:id/subject/:nav', require('./channel/subject.js'));
    router.get('/channel/:id/:nav?', require('./channel/topic.js'));
    router.get('/commercialpress/latest', require('./commercialpress/latest'));
    router.get('/doulist/:id', require('./other/doulist'));
    router.get('/event/hot/:locationId', require('./event/hot'));
    router.get('/explore', require('./other/explore'));
    router.get('/explore/column/:id', require('./other/explore-column'));
    router.get('/group/:groupid/:type?', require('./other/group'));
    router.get('/jobs/:type', require('./other/jobs.js'));
    router.get('/list/:type?/:routeParams?', require('./other/list'));
    router.get('/movie/classification/:sort?/:score?/:tags?', require('./other/classification.js'));
    router.get('/movie/later', require('./other/later'));
    router.get('/movie/playing', require('./other/playing'));
    router.get('/movie/playing/:score', require('./other/playing'));
    router.get('/movie/ustop', require('./other/ustop'));
    router.get('/movie/weekly/:type?', require('./other/weekly-best'));
    router.get('/music/latest/:area?', require('./other/latest-music'));
    router.get('/people/:userid/status/:routeParams?', require('./people/status.js'));
    router.get('/people/:userid/wish/:routeParams?', require('./people/wish.js'));
    router.get('/recommended/:type?/:routeParams?', require('./other/recommended'));
    router.get('/replied/:uid', require('./other/replied'));
    router.get('/replies/:uid', require('./other/replies'));
    router.get('/topic/:id/:sort?', require('./other/topic.js'));
    // Custom
    // TODO: merge book and movie
    router.get('/collection/movie/:type', require('./other/collection_movie'));
    router.get('/collection/book/:type', require('./other/collection_book'));
    router.get('/people/:userid/collect/:routeParams?', require('./people/collect.js'));
    router.get('/:id/discussion', require('./other/discussion.js'));
};
