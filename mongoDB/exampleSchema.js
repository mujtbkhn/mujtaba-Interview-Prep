const mongoose = require('mongoose');

let schemaClass = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'John Doe',
        unique: true,
        index: true,
        sparse: true,
        validate: (value) => value.length > 3,
        alias: 'full_name',
        get: (value) => value.toUpperCase(),
        set: (value) => value.toLowerCase()
    }
});
// creating model from the schema
let Schema = mongoose.model('Schema', schemaClass);

let schema1 = new Schema({
    name: "GeeksForGeeks"
});
// will have a default value of John Doe
let schema2 = new Schema({});

console.log(schema1);
console.log(schema2);