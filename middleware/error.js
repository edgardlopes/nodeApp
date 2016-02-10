// more middleware (executes after routes)
exports.notFound = function(req, res, next) {
    res.status(404).render('not-found');
};
// error handling middleware
exports.serverError = function(err, req, res, next) {
    res.status(500).render('error', {err: err});
};
