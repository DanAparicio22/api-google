var config = require('./config');
var { google } = require('googleapis');
var OAuth2 = google.auth.OAuth2;

class GoogleClassroom {

    constructor() {
        
    }

    getOAuthClient (redirectionUrl) {
        return new OAuth2(config.credentials.clientId, config.credentials.client_secret, redirectionUrl);
    }

    getAuthUrl (redirectionUrl) {
        var oauth2Client = this.getOAuthClient(redirectionUrl);
        var url = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: config.scopes
        }); 
        return url;
    }

    createCourse(auth, name, description) {
        const classroom = google.classroom({version: 'v1', auth});
        let newCourse = { name: name, description: description, ownerId: 'me' };
        return classroom.courses.create({ auth, requestBody: newCourse }).then((response) => {
            return response.data;
        });
    }

    addStudentToClassroom(auth, email, name, description) {
        var idCourse;
        const classroom = google.classroom({version: 'v1', auth});
        classroom.courses.list((err, res) => {
            const courses = res.data.courses;
            if (courses && courses.length) {
                courses.forEach((course) => {
                    if (course.name === name && course.description === description && course.courseState === 'ACTIVE') {
                        idCourse = course.id; 
                    }
                });
                let newInvitation = {'courseId': idCourse, 'userId': email, 'role': 'STUDENT'};
                classroom.invitations.create({auth, requestBody: newInvitation});
            }
        });
    }

}

module.exports = new GoogleClassroom();