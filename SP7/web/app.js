angular.module('examApp', [])
        .factory('dataService', function () {
            var studentsInfo = {};
            studentsInfo.allCourses = [
                {courseId: 1000, courseName: "Basic Programming"},
                {courseId: 1001, courseName: "Advanced Programming"},
                {courseId: 1003, courseName: "DataBase Intro"}];
            studentsInfo.students = [];
            studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
            studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
            studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
            studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});

            return {
                studentsInfo: studentsInfo
            };
        })
        .controller('ExamController', function (dataService) {
                    var model = this;
                    model.studentsInfo = dataService.studentsInfo;

        })
        .filter('averageGrade', function () {
            return function (grades) {
                var sum = 0;
                var count = 0;
                for (i = 0; i < grades.length; i++) {
                    if (grades[i].grade != null) {
                        count++;
                        sum = sum + Number(grades[i].grade);
                    }
                }
                return sum / count;
            };
        })
        .directive('studentGrades', function () {
            return {
                templateUrl: 'studentGrades.html',
                controllerAs: 'ctrl',
                controller: 'ExamController'
            };
        });
