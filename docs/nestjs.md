## NestJS

O NestJS é uma estrutura para criação de aplicações escalaveis utilizando as linguagens JavaScript ou TypeScript.

*O Nest fornece uma arquitetura de aplicativo pronta para uso que permite que desenvolvedores e equipes criem aplicativos altamente testáveis, escaláveis, fracamente acoplados e de fácil manutenção. A arquitetura é fortemente inspirada em Angular.*

-----

### Estrutura

**app.controller.ts:** Um controlador básico com uma única rota.

**app.controller.spec.ts:** A unidade testa para o controlador.

**app.module.ts:** O módulo raiz do aplicativo.

**app.service.ts:** Um serviço básico com um único método.

**main.ts:** O arquivo de entrada do aplicativo que usa a função principal NestFactorypara criar uma instância do aplicativo Nest.

### Controllers

São os *controladores* da aplicação que lidam com a acamada externa tratando diretamente as requsições HTTP.

### Providers

São os casos de usos ou *serviços* da aplicação onde normalmente ficam as regras de negócio.
Exemplo: create, update, delete and find.

### Modules

Um módulo é uma classe anotada com um @Module() decorador. O @Module() decorador fornece metadados que o Nest usa para organizar a estrutura do aplicativo.
