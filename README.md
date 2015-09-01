# MKT Processor

## Intro

Process messages from the Worker Queue sent by consumer.

The messages are processed (just a new flag is created in the object - processed = true) and sent to a MongoDB database. If heavy processing is required Node.js is not a good solution, and some more robust language should be used, e.g. Java.

This processor can be replicated in order to process an higher volume of messages.

