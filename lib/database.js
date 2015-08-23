"use strict";

var MongoDBClient = require('mongodb').MongoClient,
  config = require(process.env.MKT_CONFIG_FILE);

/**
 * MongoDB class
 * @constructor
 */
function Database() {

  var self = this;
  var connectionString = ['mongodb://', config.MONGODB.HOST, ':', config.MONGODB.PORT, '/', config.MONGODB.DB].join('');

  MongoDBClient.connect(connectionString, function (err, database) {
    if (err) {
      console.error('Couldn\'t connect to database using the connection string: ' + connectionString);
      throw err;
    }
    console.info('Successfully connected to MongoDB collection: ' + config.MONGODB.COLLECTION);
    self.database = database;
    self.collection = self.database.collection(config.MONGODB.COLLECTION);
  });
}

Database.prototype.insert = function (object, callback) {
  this.collection.insertOne(object, callback);
};

Database.prototype.find = function (criteria, callback) {
  this.collection.find(criteria).toArray(callback);
};

Database.prototype.count = function (criteria, callback) {
  this.collection.count(criteria, callback);
};

module.exports = Database;