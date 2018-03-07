const defunction = require('defunction')
const getValidateConstructorNamed = require('defunction/lib/validates/getConstructorNamed')
const validateUndefined = require('defunction/lib/validates/undefined')

const validateAmorph = getValidateConstructorNamed('Amorph')
const validateAmorphConverter = getValidateConstructorNamed('AmorphConverter')

module.exports = (chai, utils) => {
  utils.addChainableMethod(chai.Assertion.prototype, 'amorphTo', defunction(
    [validateAmorphConverter],
    validateUndefined,
    function amorphTo(form) {
      validateAmorph('this._obj', this._obj)
      this._obj = this._obj.to(form)
    }
  ))

  utils.addMethod(chai.Assertion.prototype, 'amorphEqual', defunction(
    [validateAmorph],
    validateUndefined,
    function amorphEqual(amorph) {
      this.assert(
        this._obj.equals(amorph)
      , "expected #{this} to be of type #{exp} but got #{act}"
      , "expected #{this} to not be of type #{act}"
      , this._obj  // expected
      , amorph     // actual
    );
    }
  ))
}
