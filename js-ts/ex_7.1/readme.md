## Nota: Apenas a pasta `frontend` contém a solução!

Vamos utilizar a tabela do exercício 5.1, mas desta vez vamos construí-la através de dados remotos obtidos através de um pedido fetch.

Desta vez, temos um servidor remoto a armazenar os nossos dados. Podemos aceder à sua documentação em:

```
http://116.203.151.6:3000/api
```

1. Queremos agora construír a nossa tabela com base nas encomendas armazenadas neste servidor. Obtém esta lista remota.
2. Cada encomenda apenas tem o nome do produto e a sua quantidade. Obtém o preço de cada produto através do endpoint `/products` e junta-o a cada encomenda.
3. O preço do produto e da encomenda podem ter moedas diferentes. Vamos utilizar o utilitário que construímos no exercício 2.6 para converter o preço do produto para a moeda da encomenda.
4. Vamos agora criar um formulário para submeter um nova encomenda. Este formulário deve conter um campo para a moeda da encomenda, e um botão que podemos utilizar para adicionar mais produtos. Cada produto deve conter um nome e uma quantidade.
5. Finalmente, vamos criar um rodapé para a nossa tabela. O rodapé deve conter o número total de encomendas e a soma total dos preços. Nota que como as encomendas têm moedas diferentes, apenas podemos somar grupos da mesma moeda. Adiciona um select que nos permite trocar entre o tipo de moeda recebida.
