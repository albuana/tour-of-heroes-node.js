<h2 align="center"> 
	 tour-of-heroes-node.js 💻 DONE ✅
</h2>

<h2 id="yui_3_17_2_1_1616526000284_20">Node + Express + Mongoose + Mongo</h2>
<ul>
<li>Ler o tutorial disponibilizado em <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs">https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs</a><br>
<ul>
<li>Ler até à parte 5 (inclusive)</li>
<li>Não é preciso prestar muita atenção à construção das views. Num full stack essa parte é da responsabilidade do front-end (Angular no nosso caso). O mais importante é perceber:
<ul>
<li>A organização de uma solução Node</li>
<li>Como receber e responder a pedidos HTTP</li>
<li>A ligação à base de dados Mongo através de mongoose</li>
</ul>
</li>
</ul>
</li>
<li>Documentação oficial (para consulta quando necessário):
<ul>
<li>Express: <a href="https://expressjs.com">https://expressjs.com</a></li>
<li>Mongoose: <a href="https://mongoosejs.com/docs/guide.html">https://mongoosejs.com/docs/guide.html</a></li>
<li>MongoDB: <a href="https://docs.mongodb.com/manual/">https://docs.mongodb.com/manual/</a></li>
</ul>
</li>
</ul>
<h2>Preparação para o Exercício</h2>
<ol>
<li>Completar o tutorial Local Library até ao final da parte 5</li>
<li>Aprender a usar o POSTMAN (<a href="https://www.postman.com/">https://www.postman.com/</a>) para enviar pedidos HTTP e consultar as respostas.</li>
</ol>
<h2>Exercício</h2>
<ul>
<li>Preparar um servidor Node e um servidor Mongo para dar suporte ao front-end do Tour of Heroes preparado na semana anterior. Em particular, os seguintes end-points devem estar a funcionar
<ul>
<li>/heroes - GET - devolve uma resposta JSON com a informação de todos os heroes&nbsp;</li>
<li>/hero/id - GET - devolve uma resposta JSON com os detalhes do hero especificado pelo id</li>
<li>/hero - POST - recebe os dados em formato JSON de um hero, cria esse hero na base de dados e retorna uma resposta JSON com os detalhes do hero (o id deve ser gerado na base de dados)</li>
<li>/hero/id - PUT - recebe os dados em formato JSON do hero especificado pelo id, e atualiza os dados desse hero na base de dados</li>
<li>/hero/id - DELETE - apaga da base de dados o hero especificado pelo id</li>
<li>/pets - GET - devolve uma resposta JSON com os ids de todos os pets&nbsp;</li>
<li>/pet/id - GET - devolve uma resposta JSON com os detalhes do pet especificado pelo id</li>
</ul>
</li>
<li>Deve ser criado um endpoint adicional (/init - GET) que deve apagar o conteúdo da base de dados e inicializar as coleções que guardam os heroes e o pets com alguns valores.</li>
</ul>

## Como correr o exercicio?
- É necessário tem o angular cli instalado. Consultar em https://cli.angular.io;
- Abrir um terminal na pasta ```tour-of-heroes-node.js/``` e executar os seguintes comandos nessa mesma pasta
- npm install;
- npm i express mongoose;
- npm i nodemon -D 
- npm run dev;
- Abrir o browser o Postman desktop e fazer pedidos.
