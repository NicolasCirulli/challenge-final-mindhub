const joi = require ("joi")

const validator = (req, res, next) => {

    const schema = joi.object({
        firstName: joi.string().min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The name must have more than three letters',
            'string.max': 'The name must have less than twelve letters',
            'string.empty':'The name is required',
            'string.pattern.base':'the name can only have letters'
        }),
        lastName: joi.string().min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
           'string.empty' : 'The last name is required',
            'string.min': 'The last name must have more than three letters',
            'string.max': 'The last name must have less than sixteen letters',
            'string.pattern.base':'the last name can only contain letters'
        }),
        userName: joi.string().min(3).trim().pattern(new RegExp('^[a-zA-Z0-9]')).required().messages({
           'string.empty' : 'The user name is required',
            'string.min': 'The user name must have more than three letters or numbers',
            'string.max': 'The user name must have less than eight letters or numbers',
            'string.pattern.base':'the user name can only have letters or numbers'
        }),
        password: joi.string().min(8).trim().pattern(new RegExp('^[a-zA-Z0-9]')).required().messages({
            'string.empty' : 'The password is required',
            'string.min': 'The password must have more than three characters',
            'string.pattern.base':'The password can only have letters or numbers' 
        }),
        mail: joi.string().email().trim().required().messages({
            'string.empty': 'The Email is required',
            'string.email':'The mail requires a valid format',
        }),
        image: joi.required(),
        address: joi.required(),
        
    })

    const validate = schema.validate(req.body, { abortEarly: false })

    if(validate.error) {
        return res.json( { success: false, response: validate.error.details ,error:true} )
    }

    next()
}

module.exports = validator 