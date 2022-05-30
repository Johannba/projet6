
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
      titre_affiche = document.querySelectorAll("h1 ");
      titre_affiche[0].innerHTML = `${genres[0].title}`;

};
film_tete_affiche();
const film_mieux_noté = async () => {
      await fetch_meilleurs();
      await modale_details_url();
      // await modale_genre();
      section1 = document.querySelectorAll("#section1 img");
      for (var i = 0; i < section1.length; i++) {
            section1[i].src = `${genres[i].image_url}`;

      }

      section2 = document.querySelectorAll("#section2 img");
      for (var i = 0; i < section2.length; i++) {
            section2[i].src = `${genres[i + 3].image_url}`;
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
      }
      section4 = document.querySelectorAll("#section4 img");
      for (var i = 0; i < section4.length; i++) {
            section4[i].src = `${genres[i + 3].image_url}`;
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
      }
      section6 = document.querySelectorAll("#section6 img");
      for (var i = 0; i < section6.length; i++) {
            section6[i].src = `${genres[i + 3].image_url}`;
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
      }
      section8 = document.querySelectorAll("#section8 img");
      for (var i = 0; i < section8.length; i++) {
            section8[i].src = `${genres[i + 3].image_url}`;
      }
};
film_Drama();


const modale_details_url = async () => {
      await fetch_meilleurs();
      var details_url = `${genres[0].url}`;
      fetch(details_url)
            .then((resp) => resp.json())
            .then((promise) => {
                  details = promise;
                  return details;
            });
};
modale_details_url();

const modale_tete_affiche = async () => {
      await fetch_meilleurs();
      await modale_details_url();
      // Get modal element
      var modal = document.getElementById('simpleModal');

      // Get open modal button
      var modalBtn = document.getElementById('modalBtn');
      // Get close button
      var closeBtn = document.getElementsByClassName('closeBtn')[0];
      var image_affiche = document.querySelectorAll(".modal-body img");
      image_affiche[0].src = `${genres[0].image_url}`;
      var modale_details = document.querySelectorAll(".modal-body p");
      modale_details[0].innerHTML = `<p><strong>TITRE :</strong> ${genres[0].title}<br></br><strong>GENRES : </strong> ${genres[0].genres}<br></br><strong> DATE DE SORTIE :</strong> ${details.date_published} <br></br><strong> SCORE :</strong> ${genres[0].imdb_score}<br></br><strong> REALISATEUR : </strong> ${genres[0].directors}<br></br><strong> ACTEUR :</strong> ${genres[0].actors}<br></br><strong> RATED : </strong> ${details.rated}<br></br><strong> DUREE :</strong> ${details.duration} min<br></br><strong> RESULTAT BOX OFFICE : </strong> ${details.worldwide_gross_income}<br></br><strong> PAYS ORIGINE :</strong> ${details.countries}<br></br><strong> RESUME :</strong> ${details.long_description}  </p></p>`;


      // Listen for open click
      modalBtn.addEventListener('click', openModal);
      // Listen for close click
      closeBtn.addEventListener('click', closeModal);
      // Listen for outside click
      window.addEventListener('click', outsideClick);

      // Open modal
      function openModal() {

            modal.style.display = 'block';
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
      // section1 = document.querySelectorAll("#section1 img");

      const body = document.querySelector('body');

      // closes modal on clicking anywhere and adds overflow back
      document.addEventListener('click', () => {
            body.style.overflow = 'auto';
            modalPopup.style.display = 'none';
      });
      const modalPopup = document.querySelector('.image-modal-popup');
      //loops over each modal content img and adds click event functionality
      lightboxImages.forEach(img => {
            console.log(img);
            const data = img.dataset;
            img.addEventListener('click', e => {
                  body.style.overflow = 'hidden';
                  e.stopPropagation();
                  modalPopup.style.display = 'block';
                  modalElement('h1').innerHTML = details.title;
                  console.log(modalElement('h1'))
                  modalElement('p').innerHTML = `<br><strong>GENRES : </strong></br>${details.genres}<br></br><strong> DATE DE SORTIE :</strong> ${details.date_published} <br></br><strong> SCORE :</strong> ${genres[0].imdb_score}<br></br><strong> REALISATEUR : </strong> ${genres[0].directors}<br></br><strong> ACTEUR :</strong> ${genres[0].actors}<br></br><strong> RATED : </strong> ${details.rated}<br></br><strong> DUREE :</strong> ${details.duration} min<br></br><strong> RESULTAT BOX OFFICE : </strong> ${details.worldwide_gross_income}<br></br><strong> PAYS ORIGINE :</strong> ${details.countries}<br></br><strong> RESUME :</strong> ${details.long_description}  </p></p>`;
                  // modalElement('a').href = data.url;
                  // modalElement('.secondary-link').href = data.repo;
                  modalElement('img').src = img.src;
            });
      });
}

modale_genre();