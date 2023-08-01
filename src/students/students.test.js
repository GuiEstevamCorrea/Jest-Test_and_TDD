const student = require('./student')

describe('Testes para alunos', () => {
  test('Deve retornar 10 quando as notas forem 5, 3 e 2', () => {
    const notes = [5, 3, 2]
    expect(student.sum(notes)).toEqual(10)
  })

  test('Deve retornar zero quando uma das notas for zero', () => {
    const notes = [1, 2, 3, 0]
    expect(student.sum(notes)).toEqual(0)
  })

  test('Deve dobrar a nota quando o aluno tiver mais de cinco notas', () => {
    const notes = [1,2,3,4,5,6,7]
    expect(student.sum(notes)).toEqual(56)
  })

  test('Deve dobrar a nota quando for maior que 9', () => {
    const notes = [10,5,3]
    expect(student.sum(notes)).toEqual(28)
  })
})