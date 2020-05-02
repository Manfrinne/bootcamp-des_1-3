# Basic Web Development Code

> Programa simples para cobrir conceitos básico de programação em JavaScript.

Primeiro Código: Um programa que armazena uma array com propriedades de usuários (objetos), cada usuário tem duas propriedades: um _nome_ e as _tecnologias_ que cada usuário trabalha. O programa também tem um método para buscar uma tecnologia específica em cada objeto do _array_. O output do programa é o nome dos usuários, suas tecnologias e uma tecnologia específica usada por um ou mais usuários.

Segundo Código: Um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

## Exemplo de uso do programa 1

Nesse código exploramos o entendimento dos conceitos de:

- Funções e métodos:

```sh
function checkTECH (user) {
    for (let technology of user.technologies) {
        if (technology == 'CSS') return true 
    }
    return false
} 
```

- Estruturas de repetição:

 ```sh
 for (let i = 0; i < users.length; i++) {
    const userWorkTECH = checkTECH(users[i])

    if (userWorkTECH) {
        console.log(`O usuário ${users[i].name} trabalha com CSS.`)
    }
}
```

_Para mais exemplos, consulte a [W3Schools][[w3schools]]._

## Exemplo de uso do programa 2

Nesse programa exploramos a ideia de que uma função pode ser usada por outra função:

```sh
function calculateBalance (revenue, outgoing) {
    const sumRevenue = sumNumbers(revenue)
    const sumOutgoing = sumNumbers(outgoing)

    return sumRevenue - sumOutgoing
}
```

É importante destacar que a ideia de _'escopo'_ também foi explorada aqui; a função `sumNumbers(numbers)` é utilizada detro da função `calculateBalance(revenue, outgoing)`, mas os valores atribuídos as variáveis dentro da função `sumNumbers(numbers)` estão contidos somente detro dessa função, por isso, e somente por isso (por causa da noção de _escopo_), podemos utilizar a função mais de uma vez dentro da função `calculateBalance(revenue, outgoing)`.

## Meta

Made by Manfrinne Ferreira – [@Manfrinne_R00t](https://twitter.com/Manfrinne_r00t) – m4nfrinne@gmail.com

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
[https://github.com/Manfrinne/bootcamp-des_1-3](https://github.com/Manfrinne/bootcamp-des_1-3/)

[w3schools]: https://www.w3schools.com/js/
