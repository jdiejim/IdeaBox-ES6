function getInputs() {
  return {
    title: document.getElementById('input-title').value,
    body: document.getElementById('input-body').value,
    id: Date.now(),
    quality: 'Swill',
  };
}

function clearInputs() {
  document.getElementById('input-title').value = '';
  document.getElementById('input-body').value = '';
  console.log('ari');
}

function renderCardPrimaryInfo(obj) {
  return `
  <section class="primary-info">

    <section class="card-text">
      <h2 class="card-title">${obj.title}</h2>
      <p class="card-body">${obj.body}</p>
    </section>

  </section>
  `;
}

function renderCardQuality(obj) {
  return `
  <section class="rating">
    <button class="upvote" type="button" name="button"></button>
    <button class="downvote" type="button" name="button"></button>
    <p class="quality">quality: <span>${obj.quality}</span></p>
  </section>
  `;
}

function buildCard(obj) {
  return `
  <article id=${obj.id} class="card">
    <button class="complete" type="button" name="complete"></button>
    <main>
      ${renderCardPrimaryInfo(obj)}
      ${renderCardQuality(obj)}
    </main>
    <button class="delete" type="button" name="button"></button>
  </article>
  `;
}

function saveIdea(e) {
  e.preventDefault();
  document.getElementById('card-container').innerHTML += buildCard(getInputs());
  clearInputs();
}

document.getElementById('card-container').innerHTML += buildCard({
  title: 'Enter Title',
  body: 'Enter description',
  id: Date.now(),
  quality: 'Swill',
});

document.getElementById('submit').addEventListener('click', saveIdea);
