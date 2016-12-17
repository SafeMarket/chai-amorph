const Amorph = require('amorph')

module.exports = (chai, utils) => {
  utils.addChainableMethod(chai.Assertion.prototype, 'amorphTo', function (form) {
    this._obj = this._obj.to(form)
  })

  utils.addMethod(chai.Assertion.prototype, 'amorphEqual', function (amorph, _form) {
    const form = _form || amorph.form
    const expected = amorph.to(form)
    const actual = this._obj.to(form)

    this.assert(
      amorph.equals(this._obj),
      `expected ${expected} to equal ${actual}`,
      `expected ${expected} to not equal ${actual}`
    )
  })
}
