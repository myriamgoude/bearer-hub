import Cookie from "../Cookie"
describe("Cookie", () => {
  const KEY = "foo"
  const VALUE = "my_value"
  it("It provides get/set/erase", () => {
    const expiry = new Date().getTime() / 1000 + 60 * 60
    expect(Cookie.get(KEY)).toBeNull()
    Cookie.set(KEY, VALUE, expiry)
    expect(Cookie.get(KEY)).toEqual(VALUE)
    Cookie.erase(KEY)
    expect(Cookie.get(KEY)).toBeNull()
  })
})
