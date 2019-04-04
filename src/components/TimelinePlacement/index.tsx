export default function* templatePlacement() {
  const placement = ['right', 'left']
  for (let i = 0; true; i = i + 1) {
    yield placement[i % 2]
  }
}
