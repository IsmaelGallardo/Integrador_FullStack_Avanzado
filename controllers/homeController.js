exports.index = function(req, res) {
    res.render('home', { title: 'Final BackEnd', body: 'Contenido de mi página' });
};