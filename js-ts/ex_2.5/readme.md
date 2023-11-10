O nosso site de e-commerce está finalmente pronto, e acabámos de receber uma encomenda. Esta encomenda tem:

- um código: `001`
- um cliente
	- com um nome (opcional): `"Carlos Silva"`
   - e um email: `"carlos_silva13@gmail.com"`
- um preço
  - com um valor: `11.23`
  - e uma moeda: `"€"`
- uma flag que indica se a encomenda já foi ou não expedida: `false`
- uma lista com os nomes dos produtos na encomenda: `["T-Shirt Branca"]`

Vamos processar esta encomenda através do nosso código:

1. Criem o object que descreve esta encomenda, utilizando os valores do último slide. Podem utilizar chaves à vossa escolha.
2. Acabámos de ir ao correio enviar esta encomenda. Vamos marcar a nossa encomenda como expedida.
3. Vamos formatar o preço da nossa encomenda. Imprimam na consola a string formatada: `"€ 11,23"`
4. Enganámo-nos a preencher a encomenda, vamos adicionar o item `"T-Shirt Preta"` aos produtos.
5. Escrever a declaração do tipo da nossa encomenda em Typescript.
6. Criar uma função que receba uma encomenda e imprima a seguinte etiqueta para utilizarmos no email:


> Olá `<nome do cliente>`,
>
> Obrigado pela tua encomenda de: `<produtos separados por vírgula>` pelo valor de `<preço formatado>`.
