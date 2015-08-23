# MKT Processor
Message Processor. Process messages from the Worker Queue sent by consumer.

The messages are processed (just a new flag is created in the object - processed = true) and sent to a MongoDB database.

This processor can be replicated in order to handle an higher volume of messages.

