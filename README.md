# LOTERICA
Simulador de loteria baseado em 6 numeros, onde é escolhido 6 numeros e depois é sorteado 6 numeros
e no fim estes dois pares de 6 numeros são comparados para ver quantos são iguais

## Tecnologias utilizadas
- **HTML:** Estrutura do SITE
- **CSS:** Estilos do SITE
- **JS:** Funções do SITE
- ~~BootsStrap~~: Não foi utilizado


### Melhorias Possíveis
1. [x] Subir no github pages
2. [ ] Realizar testes para decobrir bugs🐛 

#### Disponível em:
[GitHubPage](https://matheusvmb.github.io/LOTERICA/)

##### SrcreanShot do WebApp:

| Tela inicial | Primeira Rodada | 
|--------------|-----------------|
| ![Tela_inicial](/img/Tela_1.png)  |     ![Rodada_1](https://raw.githubusercontent.com/Matheusvmb/LOTERICA/master/img/Tela_2.png)    |  

###### Codigo pricipal

```js:
function limpeza(posicionamento) {
    document.getElementById(`numerino${posicionamento}`).value = ''
}
```

