projetos = {
	nomes: [
	"Sign Up", 
	"Discord Profile", 
	"ClockJS", 
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

const project = (nome, caminho, thumb, projeto) => `
	<div class="project">
			<a href="${caminho}" rel="extenal" target="_blank">
				<div class="ph">
					<h1>${nome}</h1>
				</div>
			<div class="pb">
				<img src="${thumb}" alt="${projeto}">
			</div>
		</a>
	</div>
`

for(let c=0; c<projetos.nomes.length;c++){
	document.getElementById('projects-container').innerHTML += project(projetos.nomes[c], projetos.caminhos[c], projetos.thumbs[c], projetos.nomes[c]);
}