// Movie
const movie = `
<div class="hidden">
<img src="{poster_image}"/> 
<p class="themoviedb-synopsis"></p>
</div>

<!-- TITULO - GENEROS

{title}
{genres},Movie

-->

<!-- VINCULO DE REDIFUCIÓN - TRAILER

http://c.co/data
{duration: "{runtime}", quality: "HD", cat: "Movie", cover: "{backdrop_image}"}
https://www.youtube.com/embed/{trailer_id}

-->

<!-- Información para la api de películas themoviedb e feed do blogger -->
<div class='cv-obj'
data-themoviedb-category="Movie"
data-themoviedb-genres="{genres}"
data-themoviedb-id="{content}"
data-themoviedb-type="movie"
data-themoviedb-quality="HD"
data-themoviedb-duration="{runtime}"
data-themoviedb-cover="{backdrop_image}"></div>
<!-- Lista de servidores -->
<script>
{server}{download}
</script>
<!-- Agrega código  adicional en la siguiente línea -->
<!-- link de descargas -->
<!-- link de descargas -->

    <div style="display: flex; gap: 20px; margin-top: 20px; overflow-x: auto; padding-bottom: 10px; background-color: black;">

    <!-- Mega -->
    <a href="https://mega.nz" target="_blank" style="text-decoration: none; flex: 0 0 auto;">
        <div style="background: #333; border: 1px solid #ccc; border-radius: 5px; padding: 20px; font-size: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 15px; justify-content: center; text-align: center; color: white;">
            <img src="https://cdn.worldvectorlogo.com/logos/mega-icon.svg" alt="Mega Logo" style="width: 30px; height: 30px;">
            Mega
        </div>
    </a>

    <!-- Cloud -->
    <a href="https://cloud.google.com" target="_blank" style="text-decoration: none; flex: 0 0 auto;">
        <div style="background: #333; border: 1px solid #ccc; border-radius: 5px; padding: 20px; font-size: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 15px; justify-content: center; text-align: center; color: white;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Cloud Logo" style="width: 30px; height: 30px;">
            Cloud
        </div>
    </a>
<!-- anuncios banner-->
  
  <script type='text/javascript'>
	atOptions = {
		&#39;key&#39; : &#39;674a9359e1c2a6ec5b6355ba799b1fb3&#39;,
		&#39;format&#39; : &#39;iframe&#39;,
		&#39;height&#39; : 50,
		&#39;width&#39; : 320,
		&#39;params&#39; : {}
	};
</script>
<script src='//www.highperformanceformat.com/674a9359e1c2a6ec5b6355ba799b1fb3/invoke.js' type='text/javascript'/>
`;

// Serie
const serie = `

<div class="hidden">
<img src="{poster_image}"/>
<p class="themoviedb-synopsis"></p>
</div>

<!-- TITULO - GENEROS

{title}
{genres},Serie

-->

<!-- VINCULO DE REDIFUCIÓN - TRAILER

http://c.co/data
{duration: "{runtime}", quality: "HD", cat: "Serie", cover: "{backdrop_image}"}
https://www.youtube.com/embed/{trailer_id}

-->

<!-- información para la api de themoviedb -->
<div class='cv-obj'
data-season="1"
data-serie-url=""    
data-themoviedb-category="Serie"
data-themoviedb-genres="{genres}"
data-themoviedb-id="{content}"
data-themoviedb-type="tv"
data-themoviedb-quality="HD"
data-themoviedb-duration="{runtime}"
data-themoviedb-cover="{backdrop_image}"></div>
<script>
    // Obtén la URL de la página actual
    let currentUrl = window.location.href;
    // Selecciona el elemento <div> con la clase "cv-eps-id mb-8"
    let targetDiv1 = document.querySelector('.cv-obj');
    // Inserta la URL en el atributo data-serie-url-s del <div>
    if (targetDiv1) {
        targetDiv1.setAttribute('data-serie-url', currentUrl);
    }
</script>
{download}

<!-- Agrega código  adicional en la siguiente línea -->
<div class="cv-eps-id" expr:data-current-id="data:post.id" data-eps-results="13" expr:data-home="blog.homepageUrl" data-id="id-COLOCAR_ID_POST"></div>
`;

// Episode
const episode = `
<div class="hidden">
<img src="{episode_image}"/>
</div>

<!-- TITULO - GENEROS

{title}
{genres},Episodio
id-___ID_DEL_POST___

-->

<!-- VINCULO DE REDIFUCIÓN

http://c.co/chapter
{name: "{title}", season: "{season}", chapter: "{episode}", duration: "Episodio {episode}", quality: "Temporada {season}", cat: "Episodio", cover: "{episode_image}"}

-->

<!-- información para la api de themoviedb -->
<div class="cv-obj"
data-title-serie="{title}"
data-name="{title} {season}x{episode}"
data-serie-url="{serie_url}"
data-season="{season}"
data-chapter="{episode}"
data-themoviedb-id="{content}"
data-themoviedb-type="tv"
data-themoviedb-quality="HD"
data-themoviedb-duration="COLOCAR_DURACION_DEL_EPISODIO"
data-themoviedb-backdrop="{episode_image}"
data-themoviedb-category="Episodio"></div>
<script>
{server}{download}
</script>
<div class="cv-eps-id" expr:data-current-id="data:post.id" data-eps-results="13" expr:data-home="blog.homepageUrl" data-id="id-COLOCAR_ID_POST_SERIE"></div>
<!--descragras directa-->
 <!-- Mega -->
    <a href="TU_DESCARGA_AQUI" target="_blank" style="text-decoration: none; flex: 0 0 auto;">
        <div style="background: #333; border: 1px solid #ccc; border-radius: 5px; padding: 20px; font-size: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 15px; justify-content: center; text-align: center; color: white;">
            <img src="https://cdn.worldvectorlogo.com/logos/mediafire-1.svg" alt="Mega Logo" style="width: 30px; height: 30px;">
            Mediafire
        </div>
    </a>
<!-- anuncios banner-->
  
  <script type='text/javascript'>
	atOptions = {
		&amp;#39;key&amp;#39; : &amp;#39;674a9359e1c2a6ec5b6355ba799b1fb3&amp;#39;,
		&amp;#39;format&amp;#39; : &amp;#39;iframe&amp;#39;,
		&amp;#39;height&amp;#39; : 50,
		&amp;#39;width&amp;#39; : 320,
		&amp;#39;params&amp;#39; : {}
	};
</script>
<script src='//www.highperformanceformat.com/674a9359e1c2a6ec5b6355ba799b1fb3/invoke.js' type='text/javascript'/>


`;
// 
window['template'] = {
    movie,
    serie,
    episode
}