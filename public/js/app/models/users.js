var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var userSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    cName: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phno: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    },
    token: {
        type: String,
        required: true
    },
    eventsRegistered: {
        e11: {
            type: Boolean,
            required: true,
            default: false
        },
        e12: {
            type: Boolean,
            required: true,
            default: false
        },
        e13: {
            type: Boolean,
            required: true,
            default: false
        },
        e21: {
            type: Boolean,
            required: true,
            default: false
        },
        e22: {
            type: Boolean,
            required: true,
            default: false
        },
        e23: {
            type: Boolean,
            required: true,
            default: false
        },
        e24: {
            type: Boolean,
            required: true,
            default: false
        },
        e25: {
            type: Boolean,
            required: true,
            default: false
        },
        e26: {
            type: Boolean,
            required: true,
            default: false
        },
        e31: {
            type: Boolean,
            required: true,
            default: false
        },
        e32: {
            type: Boolean,
            required: true,
            default: false
        },
        e33: {
            type: Boolean,
            required: true,
            default: false
        },
        e34: {
            type: Boolean,
            required: true,
            default: false
        },
        e35: {
            type: Boolean,
            required: true,
            default: false
        },
        e36: {
            type: Boolean,
            required: true,
            default: false
        }
    }
});
userSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', userSchema);
