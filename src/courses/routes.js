var classroom = require('./classroom/functions');
var config = require('./classroom/config');
var URI = require("uri-js");

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.send("Api execution success!");
    });

    app.get('/courses/create/:name/:description', function(req, res) {
        var url = classroom.getAuthUrl(URI.serialize(URI.parse(config.redirectionalUrls.creation+'/'+ req.params.name + '/' + req.params.description)));
        res.send({ url: url });
    });

    app.get('/creation/:name/:description', function(req, res) {
        var oauth2Client = classroom.getOAuthClient(URI.serialize(URI.parse(config.redirectionalUrls.creation+'/'+ req.params.name + '/' + req.params.description)));
        var code = req.query.code;
        var name = req.params.name;
        var description = req.params.description;
        oauth2Client.getToken(code, function(err, tokens) {
            if(!err) {
                oauth2Client.setCredentials(tokens);
                classroom.createCourse(oauth2Client, name, description).then(resp => {
                    res.send('<script>window.close()</script>');
                });
            } else{
                res.send(false);
            }
        });
    });

    app.get('/courses/students/add/:email/:name/:description', function(req, res) {
        var url = classroom.getAuthUrl(URI.serialize(URI.parse(config.redirectionalUrls.suscription+'/'+ req.params.email +'/'+ req.params.name + '/' + req.params.description)));
        res.send({ url: url });
    });

    app.get('/suscription/:email/:name/:description', function(req, res) {
        var oauth2Client = classroom.getOAuthClient(URI.serialize(URI.parse(config.redirectionalUrls.suscription+'/'+ req.params.email +'/'+ req.params.name + '/' + req.params.description)));
        var email = req.params.email;
        var name = req.params.name;
        var description = req.params.description;
        var code = req.query.code;
        oauth2Client.getToken(code, function(err, tokens) {
            if(!err) {
                oauth2Client.setCredentials(tokens);
                classroom.addStudentToClassroom(oauth2Client, email, name, description);
                res.send('<script>window.close()</script>');
            } else{
                res.send('Error');
            }
        });
    });

}