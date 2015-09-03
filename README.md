# MKT Processor

## Intro

Process messages from the Job Queue sent by consumer. Each instance of this module is called Worker.

The messages are processed (just a new flag is created in the object - processed = true) and sent to a MongoDB database. Messages should be validated before processing. If heavy processing is required Node.js is not a good solution, and some more robust language should be used, e.g. Java. To atenuate it and in order to process an higher volume of messages, this processor module can be replicated. [Ref 1](http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/)

## Run

```bash
node MKT_CONFIG_FILE="/path/to/config.json" mkt-processor/index.js
```

## Configurations

The configurations file is shared among all the projects and is located in the [mkt-portal](https://github.com/mcmartins/mkt-portal) | [config.json](https://github.com/mcmartins/mkt-portal/blob/master/config.json)
