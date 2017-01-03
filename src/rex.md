# Rex

Cansado de estudar um novo **Framework** e/ou **Superset** a cada mes! Tenho como visao que frameworks JavaScript existem apenas com objetivo de organizar codigo e/ou padronizar solucoes - *"A busca por uma bala de prata"*.

Sou entusiasta por **Design de Software**, sempre procuro um novo padrao catalogado, desenvolver abaixo de um framework é estar preso a um padrao generico.

Por dois longos anos, incansavelmente tentei desenvolver meu proprio **Framework JavaScript**, inumeras vezes foi um fracasso por nunca estar satisfeito com os padroes genericos tentando resolver possiveis problemas imaginaveis.

Neste tempo de tentativas frustradas notei que apenas a organizacao do meu codigo faria sentido ser padronizado, atraves desta percepcao que nasceu o **Rex, o fiel amigo do programador**.

> Rex, uma homenagem ao meu cachorro

Para aquele que conhece o padrao **Sandbox** entendera o conceito deste **Micro Organizador de Codigo**. Isso mesmo que voce leu - *Micro*, com menos de um **1kb**.

*./dist/rex.min.js (174 bytes)*

```javascript
!function(a,b){Object.assign(window,{Rex(c,d){d?b[c]=d:a.push(c)},onload(){a.forEach(a=>a(b))}})}([],new Proxy({"@":{}},{get(a,b,c){return a["@"][b]||(a["@"][b]=a[b](c))}}));
```

O codigo acima prova o poder da **Linguagem orientada a prototipo**, prefiro chama-la - *Desenvolvimento Multiparadigma*. Como **Desenvolvedor JavaScript** aceito o paradigma da linguagem, nao tento melhora-la ou prego um **Padrao**.

## Não crie problema para resolver problemas

Na busca incansavel por novos conhecimento, principalmente por ter uma sensacao que meus codigos nao sao organizados, inicio o curso *Organizando o JavaScript*.

Termos como **Design Pattern**, **Code Pattern** e **Anti Pattern** me foram apresentados, acompanhado de solucoes como **Namespace** e desenvolvimento **Modular**. Mas que na verdade sao - *novos problemas para reolver antigos problemas*.

Constantemente reestruturamos nossos arquivos por causa de novas Implementacoes e/ou Refatoracoes, onde nos deparamos com a **Alta Aclopagem** gerada pelo **Namespace** ao Compor e/ou Agregar nossos **Modulos**.

Se falarmos de **Boas Praticas** nao deveriamos alterar outros **Modulos** - *Entao, violamos o principio da Responsabilidade Unica*.

## Não sei porque, so sei que é assim

Nunca gostei de utilizar uma implementacao sem conhecer como tudo funciona por tras das cortinas, por isso vamos entender os truques que o **Rex** sabe fazer.

*rex.js*

```javascript
(function (modules, proxy) {

  /**
   * 2. Extendo o objeto window, com o modulo 'Rex' e subscrevo
   *    o evento onload
   */
  Object.assign(window, {

    /**
     * 3. Principal Funcao responsavel por registrar e consumir
     *    Modulos, utilizando-se da sobrecarga
     */
    Rex(nameOrModule, module) {
      module ? (proxy[nameOrModule] = module) : modules.push(nameOrModule);
    },

    /**
     * 4. Inicializacao dos Modulos aguarda o evento onload, permitindo
     *    hoisting dos Modulos registrado
     */
    onload() {
      modules.forEach(module => module(proxy));
    }

  });

/**
 * 1. Inicializa o Modulo passando como parametro, um Array Literal e
 *    um Proxy que faz todo o trabalho de Injecao de Dependencia
 */
})([], new Proxy({ '@': {} }, {
  
  /**
   * 5. Intermedeia as chamadas dos Modulos, memoizando o retorno da Funcao
   *    construtora
   */
  get(target, name, receiver) {
    return target['@'][name] || (target['@'][name] = target[name](receiver));
  }
  
}));
```

Espero que a simplicidade do **Rex** lhe agrade, mas que no futuro este Modulo nao se torne um Framework em que voce possa baixar pelo **Bower** ou **Npm**, mas que se torne um novo **Pattern** catalogado - *Entenda a proposta e implemente da forma que faca sentido para voce*.

## GG Easy

Para nosso primeiro exemplo faremos o mais simples e nao menos importante *hello world*.

```
 examples/hello_world/
 ├── dist/
 |   └── bundle.js
 ├── src/
 |   └── modules/
 |   |   └── hello.ts
 |   └── rex.ts
 ├── index.html
 └── tsconfig.json
```

Para o desenvolvimento dos meus codigos, utilizo o superset **TypeScript** para manter a compatibilidade e melhor traducao.

*./tsconfig.json*

```json
{
  "compilerOptions": {
    "module": "system",
    "target": "ES6",
    "outFile": "dist/bundle.js"
  }
}
```

De forma muito simples o proprio *index.html* sera nosso **Entry Point**.

*./index.html*

```html
<!DOCTYPE html>
<html>
<head>
  <title>Rex</title>
</head>
<body>
  <script type="text/javascript" src="dist/bundle.js"></script>
</body>
</html>
```

Pronto, vamos para o codigo que fara a exibicao da mensagem *Hello world!!!* no console do Browser. Nao se preocupe com a estrutura do **Rex** neste momento, ainda faremos uma passo a passo de como criar (*Setters*) e consumir (*Getters*) Modulos.

*./src/modules/hello.ts*

```javascript
Rex(function () {
  console.log('Hello world!!!');
});
```

Execute o comando **tsc** no terminal, apos o termino do build abra o *index.html*.

## Setters

*./src/modules/soma.ts*

```javascript
Rex('soma', function () {

  return function (a, b) {
    return a + b;
  };

});
```

*./src/modules/calcula.ts*

```javascript
Rex('calcula', function () {

  return function (operador, a, ...b) {
    return b.reduce(operador, a);
  };

});
```

## Getters

*./src/modules/bootstrap.ts*

```javascript
Rex(function (r) {
  console.log(r.calcula(r.soma, 1, 2, 3, 4, 5)); // 15
});
```

*Operador de acesso*(.), quando executado, o **Proxy** intermedeia a chamada ao Modulo realizando a execucao da funcao Construtora, **memoizando** o retorno para futuras chamadas; desta forma ganhamos o **Lazy Loading**.

## Shorthand Value

*./src/modules/bootstrap.ts*

```javascript
Rex(function ({ calcula, soma }) {
  console.log(calcula(soma, 1, 2, 3, 4, 5)); // 15
});
```

O contrario do exemplo acima, **Shorthand** facilita a digitacao das instrucoes, mas de contra partida ele força o **Eager loading**.

## Licença
### The MIT License (MIT)

Copyright (c) 2016 [cleber.programmer](https://github.com/cleber-programmer)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.