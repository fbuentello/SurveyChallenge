if (!global.hasOwnProperty('db')) {
    var Sequelize = require('sequelize');
    var config = require('./database');
    var dev = config.development;


    var sequelize = new Sequelize(dev.host, dev.options);

    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        User: sequelize.import('../models/user')
            // add your other models here
    };

    /*
      Associations can be defined here. E.g. like this:
      global.db.User.hasMany(global.db.SomethingElse)
    */
}

module.exports = global.db