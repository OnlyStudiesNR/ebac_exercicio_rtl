import { render, screen, fireEvent, getByAltText, getByTestId } from "@testing-library/react";
import PostComment from "..";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve adicionar dois comentário corretamente", () => {
    render(<PostComment />);
    //Selecionar o textarea
    const textarea = screen.getByTestId('comment-input')

    //Seleciona o botão
    const commentButton = screen.getByTestId('comentar')

    // Adiciona o primeiro comentário
    fireEvent.change(textarea, {target: {value: 'Que post legal!'}} )
    fireEvent.click(commentButton)
    expect(screen.getByText("Que post legal!")).toBeInTheDocument();

    // Adiciona o primeiro comentário
    fireEvent.change(textarea, {target: {value: 'Que post engraçado kkkkk.'}} )
    fireEvent.click(commentButton)
    expect(screen.getByText("Que post engraçado kkkkk.")).toBeInTheDocument();
  });
});
