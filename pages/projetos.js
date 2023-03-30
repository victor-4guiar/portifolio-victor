function criar(){
	projetos = {
		nomes: [
		"Sign Up", 
		"Discord Profile", 
		"JavaScript Clock", 
		"Twitter Profile",
		"Pokéquiz",
		"Calculadora"],
		
		caminhos: [
		"https://victor-front.github.io/signup/", 
		"https://victor-front.github.io/Discord-Profile/", 
		"https://victor-front.github.io/clock/", 
		"https://victor-front.github.io/Twitter-Profile/",
		"https://victor-front.github.io/pokequiz/",
		"https://victor-front.github.io/calculadora/"],
		
		thumbs: [
		"../images/thumbs/signup.png", 
		"../images/thumbs/discord-profile.png", 
		"../images/thumbs/clock.png", 
		"../images/thumbs/twitter.png",
		"../images/thumbs/pokequiz.png",
		"../images/thumbs/calculadora.png"]
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