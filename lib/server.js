"use strict";

var config = require(process.env.MKT_CONFIG_FILE),
  jobQueue = require('./queue').init(),
  handler = require('./handler');

/**
 * Creates the Processor Server
 *
 * @constructor
 */
function Server() {}

/**
 * Starts the Server
 */
Server.prototype.start = function () {
  jobQueue.process(config.PROCESSOR.CONCURRENT, handler.processMessage);
  console.info('MKT Processor started...');
};

module.exports = Server;