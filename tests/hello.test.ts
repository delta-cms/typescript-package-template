import greet from '@/src/greet'
import hello from '@/src/hello'

test('hello', () => {
  expect(hello('hoge')).toBe('Hello hoge.')
})

test('greet', () => {
  expect(greet('piyo')).toBe('Hello piyo.How are you?')
})
