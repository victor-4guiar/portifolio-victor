function criar(){
	projetos = {
		nomes: ["JavaScript Tests", "Em breve", "Em breve"],
		caminhos: ["https://github.com/victor-4guiar/JavaScript-Tests", "#", "#"],
		thumbs: ["../images/thumbs/javascript-tests.png", "../images/thumbs/beta.png", "../images/thumbs/beta.png"]
	}
	
	for(let c=0; c<projetos.nomes.length;c++){
		let projectsContainer = document.getElementById('projects-container');
		
		let project = document.createElement('div');
		project.classList.add('project');
		project.innerHTML = 
		`<div class="project">
			<a href="${projetos.caminhos[c]}" rel="extenal" target="_blank">
				<div class="ph">
					<h1>${projetos.nomes[c]}</h1>
				</div>
				<div class="pb">
					<img src="${projetos.thumbs[c]}" alt="${projetos.nomes[0]}">
				</div>
			</a>
		</div>`
		projectsContainer.appendChild(project);
	}
}