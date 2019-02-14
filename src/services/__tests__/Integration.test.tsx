import { path, slug } from '../Integration'

describe('path', () => {
  it('returns the path to an integration presentation page', () => {
    const myPath = path({ id: '123', title: 'My Title' })
    expect(myPath).toMatch('explore/123-my-title')
  })
})

describe('slug', () => {
  it('returns a generated slug', () => {
    const mySlug = slug({ id: '123', title: 'My Title' })
    expect(mySlug).toMatch('123-my-title')
  })
})
