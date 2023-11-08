Neste exercício vamos instalar o Typescript e verificar que tudo funciona correctamente:

1. Instalar Node.js caso não tenham ainda instalado
2. Instalar Typescript seguindo as instruções do site oficial
3. Instalar `ts-node` seguindo as instruções do site oficial
4. Criar uma função que pode receber uma string ou um número, e que apenas imprime esse número na consola quando chamada. Executar a função com um valor à escolha.
5. Vamos converter a função para Javascript através do `tsc`, e executar o ficheiro JS resultante
6. Vamos executar directamente o ficheiro TS através do `ts-node`

Execução de `tsc` e `ts-node`:

```powershell
# Transforms app.ts into app.js
$ npx tsc app.ts

# Keeps transforming app.ts everytime we save
$ npx tsc app.ts --watch

# Executes app.ts without having to transform it first
$ npx ts-node app.ts
```
