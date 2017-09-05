const { validate } = require('jsonschema');
const jsonDefaults = require('json-schema-defaults');
const defaultsDeep = require('lodash.defaultsdeep');


/**
 * valid first check valid options and then add defailt property 
 * 
 * @param {any} validateObj the object you wish to check  
 * @param {any} jsonschema valid json schema 
 * @returns if valid returns the schema with it's defaults  if not return jsonschema error 
 */
module.exports.validator = (validateObj,jsonschema ) => {

    let isValid = validate(validateObj, jsonschema);
    if (isValid.valid) {
        return defaultsDeep(validateObj, jsonDefaults(jsonschema));
    }
    else return isValid;
}

