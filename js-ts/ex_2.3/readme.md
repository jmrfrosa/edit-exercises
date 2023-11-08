Para verificarmos a utilização prática dos números em Javascript, vamos utilizá-los de forma a manipular datas.

Por detrás do objecto `Date`, que representa uma data em JS, está um número inteiro que representa a quantidade de milisegundos desde 1 de Janeiro de 1970.

Trabalhamos numa empresa que desenvolve calendários, e precisamos de uma funcionalidade que consiga avisar o utilizador acerca de eventos que vão acontecer na próxima semana, daí a exactamente 7 dias.

1. A equipa de frontend já tem tudo preparado, e precisam apenas que programemos uma função:
   1. A função deve chamar-se `addWeek`
   2. `addWeek` deve opcionalmente receber uma data
   3. `addWeek` deve obrigatoriamente retornar uma data, 7 dias após a data inicial
   4. Caso `addWeek` não receba uma data, utilizar por defeito a data do momento presente
2. A nossa equipa precisa de duas novas funcionalidades:
   1. Afinal nem sempre vamos querer calcular datas na próxima semana. Precisamos de uma função `addDays` que nos permita calcular datas um número de dias à escolha no futuro.
   2. Vamos querer mostrar uma pequena notificação no calendário caso o evento que estejamos a ler aconteça no futuro. Precisamos de uma função `isFuture` que retorne um valor `boolean` consoante a data escolhida aconteça no futuro.

---

> Exemplo 1: se chamar a função `addWeek(new Date("2023/10/10"))` a data devolvida deverá ser *17 de Outubro de 2023*

> Exemplo 2.1: `addDays(new Date('2023/11/01'), 1)` deve devolver *2 de Novembro de 2023*

> Exemplo 2.2: `isFuture(new Date('2023/11/01'))` deve devolver `false`, mas `isFuture(new Date('2024/01/01'))` deve devolver `true`

### Useful links:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
- https://en.wikipedia.org/wiki/Millisecond
