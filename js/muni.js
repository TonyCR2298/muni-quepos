/* boton to top */

document.addEventListener("DOMContentLoaded", function(event) {
    //código a ejecutar cuando el DOM está listo para recibir acciones

    const toTop = document.querySelector(".totop");

    window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
    })
});

/* CODIGO DE GALERIA */

// vamos a acceder al contanedor
const objImagenes = document.querySelectorAll(".galeria .contenedor-imagen");

// vamos a aaceder a la imagen de la ventana
const objImgModal = document.getElementById("imagen-modal");

// vamos a hacer un ciclo conmla imagenes de la galeria

objImagenes.forEach((imagen) => {
    // escuchamos a la imagen
    imagen.addEventListener("click", () => {
        '/* alert("hola") */'
        const objRuta = imagen.querySelector("img").src;
        objImgModal.src = objRuta;
    });
});


/* tema oscuro */

/* const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-brightness-high-fill");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}

const cambiarTema = () => {
    document.querySelector("body").setAttribute("data-bs-theme") === "light"? temaOscuro() : temaClaro();
} */



/* CODIGO DE PORTAFOLIO CON FILTRO */

/* Easy selector helper function*/

const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}



/* Easy event listener function */
    const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
    if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
        selectEl.addEventListener(type, listener)
    }
    }
}

/* Porfolio isotope and filter*/

window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
    });

        let portfolioFilters = select('#portfolio-flters li', true);

        on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
        el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
        filter: this.getAttribute('data-filter')
        });
    }, true);
    }

    });

    /* Portfolio details slider */
    new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false
    },
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
    }
});




