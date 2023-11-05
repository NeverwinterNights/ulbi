import { classNames } from './classNames'

describe('classNames', () => {
  test('with one params', () => {
    expect(classNames('someClass')).toBe('someClass')
  })
  test('with additional class', () => {
    expect(classNames('someClass', {}, ['firstClass', 'secondClass'])).toBe(
      'someClass firstClass secondClass'
    )
  })
  test('with mods and additional class', () => {
    expect(
      classNames('someClass', { disabled: true, hovered: true }, ['firstClass', 'secondClass'])
    ).toBe('someClass firstClass secondClass disabled hovered')
  })
  test('with mods false and additional class', () => {
    expect(
      classNames('someClass', { disabled: false, hovered: true }, ['firstClass', 'secondClass'])
    ).toBe('someClass firstClass secondClass hovered')
  })
  test('with mods undefined and additional class', () => {
    expect(
      classNames('someClass', { disabled: undefined, hovered: true }, ['firstClass', 'secondClass'])
    ).toBe('someClass firstClass secondClass hovered')
  })
})
