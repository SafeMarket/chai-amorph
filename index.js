const arguguard = require('arguguard')
const Validator = require('arguguard/lib/Validator')

const optionalFormValidator = new Validator('OptionalForm', (form) => {
  if (form !== undefined && typeof form !== 'string') {
    throw new Error('Should be either undefined or a string')
  }
})

module.exports = (chai, utils) => {
  utils.addChainableMethod(chai.Assertion.prototype, 'amorphTo', function (form) {
    arguguard('chaiAmorph.amorphTo', ['string'], arguments)
    this._obj = this._obj.to(form)
  })

  utils.addMethod(chai.Assertion.prototype, 'amorphEqual', function (amorph, form) {
    arguguard('chaiAmorph.amorphEqual', ['Amorph', optionalFormValidator], arguments)

    const Amorph = amorph.constructor
    const expected = form ? new Amorph(this._obj.to(form), form) : this._obj
    const actual = form ? new Amorph(amorph.to(form), form) : amorph

    this.assert(
      expected.equals(actual, form),
      `expected ${expected} to equal ${actual}`,
      `expected ${expected} to not equal ${actual}`
    )
  })
}
