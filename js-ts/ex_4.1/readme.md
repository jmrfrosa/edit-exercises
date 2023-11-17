Finalmente fomos promovidos na nossa empresa que programa calendários. Juntámo-nos agora à equipa dos eventos.

1. Vamos criar uma class `CalendarEvent` que deve ter 3 campos: nome, data inicial e data final.
2. Adiciona um _getter_ a esta class que deve mostrar a data formatada, separada por um travessão. Exemplo: `17/11/2023, 13:13:12 - 17/11/2023, 13:23:12`
3. Adiciona agora dois _setters_, `fromDate` e `toDate`, que nos permitem definir novas datas para as propriedades from e to a partir de strings. Caso a data inicial fique após a final, a aplicação deve impedir a operação e emitir um erro.
4. Cria agora um método `postpone` que vai receber um número de minutos, e adiar o evento.
