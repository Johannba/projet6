
const fetch_meilleurs = async () => {
      await fetch("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7")
            .then((resp) => resp.json())
            .then((promise) => {
                  genres = promise.results;
                  var details_url = `${genres[0].url}`;
                  return genres, details_url

            });
};

const film_tete_affiche = async () => {
      await fetch_meilleurs();
      tete_affiche = document.querySelectorAll("#contenu-affiche img");
      tete_affiche[0].src = `${genres[0].image_url}`;
      tete_affiche[0].id = `${genres[0].id}`;
      titre_affiche = document.querySelectorAll("h1 ");
      titre_affiche[0].innerHTML = `${genres[0].title}`;

};
film_tete_affiche();
const film_mieux_noté = async () => {
      await fetch_meilleurs();
      section1 = document.querySelectorAll("#section1 img");
      for (var i = 0; i < section1.length; i++) {
            section1[i].src = `${genres[i].image_url}`;
            section1[i].id = `${genres[i].id}`;

      }

      section2 = document.querySelectorAll("#section2 img");
      for (var i = 0; i < section2.length; i++) {
            section2[i].src = `${genres[i + 3].image_url}`;
            section2[i].id = `${genres[i + 3].id}`;
      }

};
film_mieux_noté();

const fetch_action = async () => {
      await fetch("http://127.0.0.1:8000/api/v1/titles/?genre=action&page_size=7")
            .then((resp) => resp.json())
            .then((promise) => {
                  genres = promise.results;
                  return genres
            });
};

const film_action = async () => {
      await fetch_action();
      section3 = document.querySelectorAll("#section3 img");
      for (var i = 0; i < section3.length; i++) {
            section3[i].src = `${genres[i].image_url}`;
            section3[i].id = `${genres[i].id}`;
      }
      section4 = document.querySelectorAll("#section4 img");
      for (var i = 0; i < section4.length; i++) {
            section4[i].src = `${genres[i + 3].image_url}`;
            section4[i].id = `${genres[i + 3].id}`;
      }
};
film_action();

const fetch_Adventure = async () => {
      await fetch("http://127.0.0.1:8000/api/v1/titles/?genre=Adventure&page_size=7")
            .then((resp) => resp.json())
            .then((promise) => {
                  genres = promise.results;
                  return genres
            });
};

const film_Adventure = async () => {
      await fetch_Adventure();
      section5 = document.querySelectorAll("#section5 img");
      for (var i = 0; i < section5.length; i++) {
            section5[i].src = `${genres[i].image_url}`;
            section5[i].id = `${genres[i].id}`;
      }
      section6 = document.querySelectorAll("#section6 img");
      for (var i = 0; i < section6.length; i++) {
            section6[i].src = `${genres[i + 3].image_url}`;
            section6[i].id = `${genres[i + 3].id}`;
      }
};
film_Adventure();

const fetch_Drama = async () => {
      await fetch("http://127.0.0.1:8000/api/v1/titles/?genre=Drama&page_size=7")
            .then((resp) => resp.json())
            .then((promise) => {
                  genres = promise.results;
                  return genres
            });
};

const film_Drama = async () => {
      await fetch_Drama();
      section7 = document.querySelectorAll("#section7 img");
      for (var i = 0; i < section7.length; i++) {
            section7[i].src = `${genres[i].image_url}`;
            section7[i].id = `${genres[i].id}`;
      }
      section8 = document.querySelectorAll("#section8 img");
      for (var i = 0; i < section8.length; i++) {
            section8[i].src = `${genres[i + 3].image_url}`;
            section8[i].id = `${genres[i + 3].id}`;
      }
};
film_Drama();


const modale_details_url = async function (details_url) {
      return fetch(details_url);
};

const modale_tete_affiche = async () => {
      // Get open modal button
      var modalBtn = document.getElementById('modalBtn');
      // Get close button
      var closeBtn = document.getElementsByClassName('closeBtn')[0];
      const body = document.querySelector('body');
      const modalPopup = document.querySelector('.image-modal-popup');
      const modalElement = element =>
            document.querySelector(`.image-modal-popup ${element}`);

      // Listen for open click
      modalBtn.addEventListener('click', openModal);
      // Listen for close click
      closeBtn.addEventListener('click', closeModal);

      // Open modal
      function openModal() {
            var img = document.querySelectorAll(".tete-affiche img");
            console.log(img[0].id);
            var film_url = "http://127.0.0.1:8000/api/v1/titles/" + img[0].id;
            var details_film = modale_details_url(film_url);
            details_film
                  .then((resp) => resp.json())
                  .then((details_film) => {
                        body.style.overflow = 'hidden';
                        modalPopup.style.display = 'block';
                        modalElement('h1').innerHTML = details_film.title;
                        console.log(modalElement('h1'))
                        modalElement('p').innerHTML = `<br><strong>GENRES : </strong></br>${details_film.genres}<br></br><strong> DATE DE SORTIE :</strong> ${details_film.date_published} <br></br><strong> SCORE :</strong> ${genres[0].imdb_score}<br></br><strong> REALISATEUR : </strong> ${genres[0].directors}<br></br><strong> ACTEUR :</strong> ${genres[0].actors}<br></br><strong> RATED : </strong> ${details_film.rated}<br></br><strong> DUREE :</strong> ${details_film.duration} min<br></br><strong> RESULTAT BOX OFFICE : </strong> ${details_film.worldwide_gross_income}<br></br><strong> PAYS ORIGINE :</strong> ${details_film.countries}<br></br><strong> RESUME :</strong> ${details_film.long_description}  </p></p>`;
                        modalElement('img').src = img[0].src;
                  });
      }

      // Close modal
      function closeModal() {
            modal.style.display = 'none';

      }
      // Click outside and close
      function outsideClick(e) {
            if (e.target == modal) {
                  modal.style.display = 'none';
            }
      }
};

modale_tete_affiche();


const modale_genre = async () => {
      await fetch_meilleurs();
      // all images inside the image modal content class
      const lightboxImages = document.querySelectorAll("section img");
      //dynamically selects all elements inside modal popup
      const modalElement = element =>
            document.querySelector(`.image-modal-popup ${element}`);

      const body = document.querySelector('body');

      // closes modal on clicking anywhere and adds overflow back
      document.addEventListener('click', () => {
            body.style.overflow = 'auto';
            modalPopup.style.display = 'none';
      });
      const modalPopup = document.querySelector('.image-modal-popup');
      //loops over each modal content img and adds click event functionality
      lightboxImages.forEach(img => {
            const data = img.dataset;
            img.addEventListener('click', e => {
                  var film_url = "http://127.0.0.1:8000/api/v1/titles/" + img.id;
                  var details_film = modale_details_url(film_url);
                  details_film
                        .then((resp) => resp.json())
                        .then((details_film) => {
                              body.style.overflow = 'hidden';
                              e.stopPropagation();
                              modalPopup.style.display = 'block';
                              modalElement('h1').innerHTML = details_film.title;
                              console.log(modalElement('h1'))
                              modalElement('p').innerHTML = `<br><strong>GENRES : </strong></br>${details_film.genres}<br></br><strong> DATE DE SORTIE :</strong> ${details_film.date_published} <br></br><strong> SCORE :</strong> ${genres[0].imdb_score}<br></br><strong> REALISATEUR : </strong> ${genres[0].directors}<br></br><strong> ACTEUR :</strong> ${genres[0].actors}<br></br><strong> RATED : </strong> ${details_film.rated}<br></br><strong> DUREE :</strong> ${details_film.duration} min<br></br><strong> RESULTAT BOX OFFICE : </strong> ${details_film.worldwide_gross_income}<br></br><strong> PAYS ORIGINE :</strong> ${details_film.countries}<br></br><strong> RESUME :</strong> ${details_film.long_description}  </p></p>`;
                              modalElement('img').src = img.src;
                        });
            });
      });
}
+

      modale_genre();