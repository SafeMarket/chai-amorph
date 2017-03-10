const chai = require('chai')
const chaiAmorph = require('../')
const Amorph = require('amorph')
const bignumberPlugin = require('amorph-bignumber')
const Bignumber = require('bignumber.js')

const expect = chai.expect
chai.use(chaiAmorph)

Amorph.loadPlugin(bignumberPlugin)
Amorph.ready()

describe('chai amorph', () => {
  const oneNumber = new Amorph(1, 'number')
  const oneBignumber = new Amorph(new Bignumber(1), 'bignumber')
  const twoNumber = new Amorph(2, 'number')
  const twoBignumber = new Amorph(new Bignumber(2), 'bignumber')

  it('oneNumber should amorphTo number equal 1', () => {
    expect(oneNumber).amorphTo('number').to.equal(1)
  })

  it('oneBignumber should amorphTo number equal 1', () => {
    expect(oneBignumber).amorphTo('number').to.equal(1)
  })

  it('oneBignumber should amorphTo number equal 1', () => {
    expect(oneBignumber).amorphTo('number').to.equal(1)
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
    expect(twoBignumber).to.amorphEqual(twoNumber, 'bignumber')
  })

})
