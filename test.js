const chai = require('chai')
const chaiAmorph = require('./')
const Amorph = require('amorph')
const amorphNumber = require('amorph-number')
const amorphBignumber = require('amorph-bignumber')
const Bignumber = require('bignumber.js')

const expect = chai.expect
chai.use(chaiAmorph)

describe('chai amorph', () => {
  const oneNumber = Amorph.from(amorphNumber.unsigned, 1)
  const oneBignumber = Amorph.from(amorphBignumber.unsigned, new Bignumber(1))
  const twoNumber = Amorph.from(amorphNumber.unsigned, 2)
  const twoBignumber = Amorph.from(amorphBignumber.unsigned, new Bignumber(2))

  it('oneNumber should amorphTo number equal 1', () => {
    expect(oneNumber).amorphTo(amorphNumber.unsigned).to.equal(1)
  })

  it('oneBignumber should amorphTo number equal 1', () => {
    expect(oneBignumber).amorphTo(amorphNumber.unsigned).to.equal(1)
  })

  it('oneBignumber should amorphTo number equal 1', () => {
    expect(oneBignumber).amorphTo(amorphNumber.unsigned).to.equal(1)
  })

  it('oneNumber should amorphEqual oneNumber', () => {
    expect(oneNumber).to.amorphEqual(oneNumber)
  })

  it('oneNumber should NOT amorphEqual twoNumber', () => {
    expect(oneNumber).to.not.amorphEqual(twoNumber)
  })

  it('twoBignumber should amorphEqual twoBignumber', () => {
    expect(twoBignumber).to.amorphEqual(twoBignumber)
  })

  it('twoBignumber should amorphEqual twoNumber (bignnmber)', () => {
    expect(twoBignumber).to.amorphEqual(twoNumber)
  })

})
