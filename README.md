# Basic Web Development Code

> Programa simples para cobrir conceitos básico de programação em JavaScript.

Primeiro: Um programa que armazena uma array com propriedades de usuários (objetos), cada usuário tem um _nome_ e as _tecnologias_ que trabalham. O programa também tem um método para buscar uma tecnologia específica em cada usuário do _array_.

## Exemplo de uso do programa

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

## Meta

Made by: Manfrinne Ferreira – [@Manfrinne_R00t](https://twitter.com/Manfrinne_r00t) – m4nfrinne@gmail.com

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
[https://github.com/Manfrinne/bootcamp-des_1-3](https://github.com/Manfrinne/bootcamp-des_1-3/)

[w3schools]: https://www.w3schools.com/js/
