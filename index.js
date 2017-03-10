const Amorph = require('amorph')

module.exports = (chai, utils) => {
  utils.addChainableMethod(chai.Assertion.prototype, 'amorphTo', function (form) {
    this._obj = this._obj.to(form)
  })

  utils.addMethod(chai.Assertion.prototype, 'amorphEqual', function (amorph, form) {

    const expected = form ? new Amorph(this._obj.to('form'), form) : this._obj
    const actual = form ? new Amorph(actual.to('form'), form) : amorph

    this.assert(
      expected.equals(actual, form),
      `expected ${expected} to equal ${actual}`,
      `expected ${expected} to not equal ${actual}`
    )
  })
}
