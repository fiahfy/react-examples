jest.autoMockOff()

import React from 'react'
import TestUtils from 'react-addons-test-utils'

const App = require('../app').default

describe('TestApp', () => {
  it('check root node', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(
      <App />
    )
    const output = renderer.getRenderOutput()

    expect(output.type).toBe('div')
  })
})
