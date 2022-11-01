window.alert('Aviso! Esta página está em ajustes.');

let likist = { //Dados gerais dos elementos.
	nomes: ['Rozavick#7866', 'victor-4guiar', 'victoraguiarrosa397@gmail.com'],
	atalhos: ['../images/discord.png', '../images/discord.png','../images/discord.png'],
	mouse: ['discord', 'github', 'gmail'],
	alt: ['Discord', 'GitHub', 'Gmail']
}

function apresentar(valor){ //Verificação de qual valor de contato a exibir.
	if(valor == likist.mouse[0]){
		document.getElementById('msg').innerHTML = `<p class="textli">${likist.nomes[0]}</p>`;
	}else if(valor == likist.mouse[1]){
		document.getElementById('msg').innerHTML = `<p class="textli">${likist.nomes[1]}</p>`;
	}else if(valor == likist.mouse[2]){
		document.getElementById('msg').innerHTML = `<p class="textli">${likist.nomes[2]}</p>`;
	}
}

function copy(nome){
	navigator.clipboard.writeText(nome);
	document.getElementById('msg').innerHTML = `<p class="textli">Copiado!</p>`;
	document.getElementById('return').classList.add('green');
}

function revert(){
	document.getElementById('return').classList.remove('green');
}

function org(){ //Organizar os elementos.
	let list = document.createElement('div');
	list.classList.add('list-container');
	list.innerHTML = `
		<div class="link-container">
			<div id="container-list" class="container-list">
			</div>
			<div id="return" class="return">
				<p id="msg" class="textli">Clique em uma das opções para copiar o contato.</p>
			</div>
		</div>
	`;
	document.getElementById('cont-body').appendChild(list);
	for(c=0;c<likist.nomes.length;c++){
		let links = document.createElement('div');
		links.innerHTML = `
			<div class="link">
				<div class="link-header" onclick="copy('${likist.nomes[c]}')" onmouseover="apresentar('${likist.mouse[c]}')" onmouseout="revert()">
					<img src="${likist.atalhos[c]}" alt="${likist.alt[c]}">
				</div>
			</div>
		`;
		document.getElementById('container-list').appendChild(links);
	}
}