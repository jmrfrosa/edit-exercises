Vamos criar uma caixa em que o browser pode receber ficheiros através de drag-and-drop.

Para tal, vamos utilizar não só a API de leitura de ficheiros do browser, como os eventos relacionados.

1. Cria, na tua página web, uma caixa com uma _border_ CSS.
2. Nesta caixa, quando arrastamos um ficheiro para cima, a _border_ deve ficar vermelha, e voltar ao normal ao retirar o ficheiro.
3. Ao deixar cair o ficheiro na caixa, vamos impedir o comportamento _default_ do browser, ou seja, impedir a abertura do ficheiro.
4. Vamos utilizar a API de leitura de ficheiros para ler o ficheiro enviado pelo utilizador.
5. Se for um texto, vamos mostrar o texto na página. Se for uma imagem, vamos mostrar a imagem.
6. Caso o tipo de ficheiro não seja nenhum destes, vamos mostrar uma mensagem de erro ao utilizador.
