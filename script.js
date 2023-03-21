const applyBtns = document.querySelectorAll('.apply-btn');
const applyForm = document.querySelector('.apply-form');

applyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    applyForm.style.display = 'block';
  });
});

applyForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Application submitted!');
  applyForm.style.display = 'none';
}); 

const jobList = document.querySelector('.job-list');

fetch('jobs.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(job => {
      if (job.featured) {
        const li = document.createElement('li');
        li.innerHTML = `
          <h3>${job.title}</h3>
          <p>${job.description}</p>
          <button class="apply-btn">Apply Now</button>
        `;
        jobList.appendChild(li);
      }
    });
  });

