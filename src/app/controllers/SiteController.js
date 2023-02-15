const Course = require('../models/Course');
const { multiMongooseToObj } = require('../../util/mongoose');

class SiteController {
  //[GET] /
  index(req, res, next) {
    // not use multiMongooseToObj
    // Course.find({}).lean()
    Course.find({})
      .then((course) => {
        res.render('home', {
          course: multiMongooseToObj(course),
        });
      })
      .catch(next);

    // Course.find({}, function(err, courses) {
    //   if (!err) {
    //     res.json(courses)
    //   } else {
    //     res.status(400).json({error: 'ERROR!'})
    //   }
    // })

    // res.render('home');
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
