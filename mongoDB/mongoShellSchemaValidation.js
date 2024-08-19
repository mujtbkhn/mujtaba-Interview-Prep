db.createCollection('nonfiction', {
    validator: {
        $jsonSchema:{
            required: ['name', 'price'],
            properties: {
                name: {
                    bsonType:'string',
                    description: 'must be a string and required'
                },
                price: {
                    bsonType: 'number',
                    description: 'must be a number and required'
                }
            }
        }
    },
    validationAction: 'error'
})

db.runCommand({
    collMod: 'nonfiction',
    validator: {
        $jsonSchema:{
            required: ['name', 'price', 'author'],
            properties: {
                name: {
                    bsonType:'string',
                    description: 'must be a string and required'
                },
                price: {
                    bsonType: 'number',
                    description: 'must be a number and required'
                },
                author: {
                    bsonType: 'array',
                    description: 'must be a array and required',
                    items: {
                        bsonType: 'object',
                        required: ['name','email'],
                        properties: {
                            name: {
                                bsonType: 'string',
                                description: 'must be a string and required'
                            },
                            email: {
                                bsonType: 'string',
                                description: 'must be a email(string) and required'
                            }
                        }
                    }
                },
            }
        }
    },
    validationAction: 'error'
})