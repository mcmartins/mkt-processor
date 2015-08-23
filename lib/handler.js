"use strict";

var DAO = require('./database'),
  MessagesDAO = new DAO();

/**
 * Handles Jobs. Handles messages by process them and insert into MongoDB
 *
 * @param job
 * @param done
 */
module.exports.processMessage = function (job, done) {
  job.reportProgress(30);
  // TODO process the message
  job.data.processed = true;
  MessagesDAO.insert(job.data, function(err){
    job.reportProgress(80);
    if (err) {
      console.error(err);
    } else {
      job.reportProgress(100);
    }
    return done(err);
  });
};