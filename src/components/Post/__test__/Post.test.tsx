import { render, screen } from '@testing-library/react'
import Post from '..'

describe('Testando o componente Post', () => {
  test('Deve renderizar corretamente', () => {
    const { debug } = render(
      <Post children={'Ana gostou do post.'} imageUrl={'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg'}>
        Ana gostou do post.
      </Post>
    )
    debug()
    expect(screen.getByText('Ana gostou do post.')).toBeInTheDocument()
  })

})