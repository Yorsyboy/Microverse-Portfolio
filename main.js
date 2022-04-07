function openNav() {
  document.getElementById('myNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('myNav').style.display = 'none';
}

document.querySelector('.toggle').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);
document.querySelectorAll('.pop-nav').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('myNav').style.display = 'none';
  });
});

const projectname = document.querySelector('.projectname');
const workSections = document.querySelector('.project-section');
const modal = document.querySelector('.modal-example');
const modalImg = document.querySelector('.modal-img');
const company = document.querySelector('.company');
const role = document.querySelector('.role');
const year = document.querySelector('.year');

const projectsList = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'images/project1.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end dev',
    company: 'canopy',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    name: 'Multi-post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'images/project2.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Full Stack Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    name: 'Facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    imageLink: 'images/project3.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    name: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'images/project4.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Lead developer',
    company: 'Uber',
    year: '2018',
    sourceLink: '#',
    demoLink: '#',
  },
];

workSections.innerHTML = '';
for (let i = 0; i < projectsList.length; i += 1) {
  let languages = '';
  projectsList[i].technologies.forEach((language) => {
    languages += `
      <li><a href='' class='skill' title='${language}' >${language}</a></li>
    `;
  });
  workSections.innerHTML += `
      <div class='projects'>
          <div class='img-web'>
            <img src='${projectsList[i].imageLink}' alt='work 1' class='' />
          </div>
          <div class='project-description'>
            <h1 class='title'>${projectsList[i].name}</h1>
            <div class='role'>
              <div class="role-name">${projectsList[i].company}</div>
                <div class="role-dot"></div>
                <div class="role-job">${projectsList[i].role}</div>
                <div class="role-dot"></div>
                <div class="role-year">${projectsList[i].year}</div>
            </div>
            <div class='project-details'>
              <p>
                ${projectsList[i].description}
              </p>

              <ul class='skills'>
                ${languages}
              </ul>
              <div classs="button-click">
                <button type='button' class='btn btn-enabled project-modal-${i}'>See project</button>
              </div>
            </div>
          </div>
    </div>
  `;
}

for (let i = 0; i < projectsList.length; i += 1) {
  document.querySelector(`.project-modal-${i}`).addEventListener('click', () => {
    projectname.innerHTML = projectsList[i].name;
    modalImg.src = projectsList[i].imageLink;
    company.innerHTML = projectsList[i].company;
    role.innerHTML = projectsList[i].role;
    year.innerHTML = projectsList[i].year;

    document.querySelector('.project-section').classList.add('blur');
    document.querySelector('.header').classList.add('blur');
    document.querySelector('.content').classList.add('blur');
    document.querySelector('.about').classList.add('blur');
    document.querySelector('.contact-me').classList.add('blur');
    modal.classList.add('show');
  });
}
document.querySelector('.closeModal').addEventListener('click', () => {
  modal.style.display = 'none';
  window.location.reload();
  document.querySelector('.header').classList.remove('blur');
  document.querySelector('.showcase').classList.remove('blur');
});

const email = document.querySelector('#useremail');
const validationAlert = document.querySelector('.alert');
const contactForm = document.querySelector('.contact-me');
contactForm.addEventListener('submit', (event) => {
  const regex = /[A-Z]/;
  const emailContent = email.value;
  if (regex.test(emailContent)) {
    validationAlert.innerHTML = 'Your email address should not contain uppercase letters';
    event.preventDefault();
  }
});

const nameField = document.querySelector('#username')
const emailAddressField = document.querySelector('#useremail');
const messageField = document.querySelector('#usermessage');

contactForm.addEventListener('input', () => {
  const userData = {
    name: nameField.value,
    email: emailAddressField.value,
    message: messageField.value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
});
const userDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
nameField.value = userDataFromLocalStorage.name;
// console.log(userDataFromLocalStorage);
emailAddressField.value = userDataFromLocalStorage.email;
messageField.value = userDataFromLocalStorage.message;