$(document).ready(function () {

    // GALERÍA
    function setImages(firstImg, secondImg, thridImg) {
        imgs = [
            {
                src: `./img/${firstImg}.jpg`,
                title: `${firstImg}`
            },
            {
                src: `./img/${secondImg}.jpg`,
                title: `${secondImg}`
            },
            {
                src: `./img/${thridImg}.jpg`,
                title: `${thridImg}`
            },
        ];
    
        imgs.forEach(image => {
            const img = `
            <div class="img-div">
                <img src=${image.src} title=${image.title}>
            </div>
            `
            $('.galeria').append(img);
        }); 
    }

    // ACTIVAR SLIDER 
    function enableSlider() {     
            $('.galeria').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1200
            });     
    }

    let isFirstEntry = true;
    let arrayColors = ['green', 'red', 'blue']

    if (isFirstEntry) {
        localStorage.setItem('backgroundColor', 'green');
        isFirstEntry = false;
    }
    
    let localStorageColor = localStorage.getItem('backgroundColor');
    
    const filteredColor = arrayColors.filter((color) => color !== localStorageColor)

    setImages(localStorageColor, filteredColor[0], filteredColor[1])
    enableSlider()

    // POSTS
      const posts = [
        {
            id: "Noticia_1",
            title: "Contaminación causa 9 millones de muertos cada año en todo el mundo",
            date: "Publicado 27/01/2023 por Forbes Staff",
            content: "Expertos advirtieron que la contaminación durante el primer año de vida y la infancia afecta a la inteligencia, rendimiento y cognición.",
            link: "https://www.forbes.com.mx/contaminacion-causa-9-millones-de-muertos-cada-ano-en-todo-el-mundo/" 
        },
        {
            id: "Noticia_2",
            title: "¿Son ecológicos los autos eléctricos, aun con su batería? Esto dice Audi",
            date: "Publicado 30/05/2022 por Mónica Valladolid",
            content: "Preguntamos si las baterías de los autos eléctricos son un desecho contaminante; esta es la respuesta de los especialistas.",
            link: "https://www.forbes.com.mx/son-ecologicos-los-autos-electricos-aun-con-su-bateria-esto-dice-audi/" 
        },
        {
            id: "Noticia_3",
            title: "El novedoso sistema en Islandia para capturar CO2 de la atmósfera que resulta 3 veces más eficiente que el actual",
            date: "Publicado 9/03/2023 por Matt McGrath",
            content: "Un nuevo sistema para extraer el dióxido de carbono de la atmósfera y guardarlo en el océano está siendo delineado por los científicos que lo desarrollaron. Los autores dicen que el novedoso sistema atrapa el CO2 del aire hasta tres veces más eficientemente que los métodos actuales.",
            link: "https://www.bbc.com/mundo/noticias-64900557"
        },
        {
            id: "Noticia_4",
            title: "Cómo la saliva de un gusano puede ayudar a descomponer el plástico y combatir la contaminación",
            date: "Publicado 7/10/2022 por Matt McGrath",
            content: "El plástico es uno de los peores contaminantes en la actualidad. Sin embargo, un pequeño gusano y su saliva pueden terminar ofreciendo una solución para lidiar con este problema.",
            link: "https://www.bbc.com/mundo/noticias-63162741"
        },
      ];

      posts.forEach(article => {
        const post = `
        <article class="post">
            <h2>${article.title}</h2>
            <span class="date">${article.date}</span>
            <p>${article.content}</p>
            <a href="${article.link}" class="read-more">Leer más en el sitio oficial</a>
        </article>
        `;

        $('#posts').append(post);

      });

    //   SLECTOR DE TEMA
    const theme = $('#theme');
    var backgroundColor = 'green';

    $('#to-green').click(function () {
        theme.attr('href', './css/green.css');
        backgroundColor = 'green';
        localStorage.setItem('backgroundColor', backgroundColor);

        // $('.img-div').remove();

        // setImages('green', 'red', 'blue');
    });

    $('#to-red').click(function () { 
        theme.attr('href', './css/red.css');
        backgroundColor = 'red';
        localStorage.setItem('backgroundColor', backgroundColor);

        // $('.img-div').remove();

        // setImages('red', 'green', 'blue');
    });

    $('#to-blue').click(function blue() { 
        theme.attr('href', './css/blue.css');
        backgroundColor = 'blue';
        localStorage.setItem('backgroundColor', backgroundColor);

        // $('.img-div').remove();

        // setImages('blue', 'green', 'red');
        // enableSlider()
    });
    
    // HACER QUE EL COLOR ELEGIDO SE QUEDE ALMACENADO EN EL LOCAL STORAGE
    theme.attr('href', `./css/${localStorageColor}.css`);

    // SCROLL ARRIBA DE LA WEB
    $('.up').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0,
        }, 500);
    });

});