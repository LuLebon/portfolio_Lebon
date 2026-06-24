function SetMenu(currentPage)
{
    document.querySelector("header").innerHTML =`
        <nav>
            <a href="index.html" ${currentPage == 'index' ? 'class="current"' : ''}>Accueil</a>
            <a href="series.html" ${currentPage == 'series' ? 'class="current"' : ''}>Les Series</a>
            <a href="games.html" ${currentPage == 'games' ? 'class="current"' : ''}>Les Jeux</a>
            <a href="projets.html" ${currentPage == 'projets' ? 'class="current"' : ''}>Les Projets</a>
        </nav>
    `;
}

function SetFooter()
{
    document.getElementById("footer").innerHTML = `
        <div class="inner">
            <h2 class="major">Contact</h2>
            <p>  Pour parler temps réel ou pour le travail, n’hésitez pas à me contacter via LinkedIn.</p>
            <div style="text-align: center;">
                <a target="_blank" href="https://www.linkedin.com/in/lucielebon" class="button primary">Contacter</a>
            </div>
            <ul class="copyright">
                <li>&copy; Lucie Lebon's portfolio </li><li>Design based on HTML5 UP solid state : <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    `
}