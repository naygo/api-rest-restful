# API, REST e RESTFUL


Usando a ideia de um restaurante para entender API, REST e RESTFUL.
| Restaurante | Programação |
| ------ | ----------- |
| Cliente  | Client |
| Garçom | API |
| Cozinha    | Servidor |


## API 
##### Application Programming Interface (Interface de Programação de Aplicações)
É basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

+ Responsável por estabelecer comunicação entre diferentes serviços.
+ Meio de campo entre as tecnologias.
+ Intermediador para troca de informações.

## REST
##### Representational State Transfer (Transferência de Estado Representativo)

Voltando ao exemplo do restaurante para melhor entendimento...

Clientes querem um restaurante:
+ Limpo
+ Com bom atendimento
+ Te entregue o que foi pedido

Para isso clientes não podem:
+ Gritar
+ Xingar
+ Sujar

```diff
Resumindo: boas práticas.
```

Será feita a transferência de dados de uma maneira simbólica, figurativa, representativa, de maneira didática.

O rest determina obrigações nessas transferências de dados, geralmente, usando <cite>protocolo HTTP</cite>.

Dados no rest são chamados de **resources**. 
Resources seriam, então, uma entidade ou um objeto.

## RESTFUL

RESTful é a aplicação dos padrões REST.

### 6 NECESSIDADES (constraints) para ser RESTful

+ **Client-server:** separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para o smartphone, por exemplo.

+ **Stateless** _(sem estado)_**:** cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). 
_Exemplo:_ A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior.

+ **Cacheable:** As respostas para uma requisição, deverão ser explicitas ao dizer se aquela resquição, pode ou não ser cacheada pelo cliente.

+ **Layered System:** O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.
_Exemplo:_ cliente pede um prato, mas não interessa para ele como o garçom vai enviar para o cozinheiro, qual o caminho, o que vai ser preciso; ele só precisa receber.

+ **Uniform Interface:** Manter uma uniformidade, uma constância, um padrão na construção da interface. Nossa API precisa ser coerente para quem vai consumi-lá. Precisa fazer sentido para o cliente e não ser confusa. Logo, coisas como: o uso correto dos verbos HTTP; endpoints coerentes (todos os endpoints no plural, por exemplo); usar somente uma linguagem de comunicação (json) e não várias ao mesmo tempo; sempre enviar respostas aos clientes; são exemplos de aplicação de uma interface uniforme.

+ **Code on demand** _(optional)_**:** Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.


## BOAS PRÁTICAS

+ Utilizar verbos HTTP para nossas requisições.
+ Não deixar barra no final do endpoint.
+ Utilizar plural ou singular na criação dos endpoints? _Não importa!_ **Use um padrão!**
+ Nunca deixe o cliente sem resposta! Respostas claras.

### VERBOS HTTP
+ _GET_ - recebe dados de um resource
+ _POST_ - envia dados ou informações para serem processados por um resource
+ _PUT_ - atualiza dados de um resource
+ _DELETE_ - deleta um resource

### STATUS DAS RESPOSTAS

+ 1xx: Informação 
+ 2xx: Sucesso
    - 200: OK
    - 201: CREATED
    - 204: Não tem conteúdo PUT POST DELETE
+ 3xx: Redirection
+ 4xx: Client Error
    - 400: Bad request
    - 404: Not Found!
+ 5xx: Server Error 500: Internal Server Erro
