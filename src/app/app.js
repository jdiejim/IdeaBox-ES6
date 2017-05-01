function getIdeas() {
  if (localStorage.ideas) {
    const ideas = JSON.parse(localStorage.getItem('ideas'));
    let html = '';
    for (let i in ideas) {
      html = buildCard(ideas[i]) + html;
    }
    prepend(html);
  } else {
    localStorage.setItem('ideas', JSON.stringify({}));
  }
}

function storeIdea(newIdea) {
  const ideas = JSON.parse(localStorage.getItem('ideas'));
  ideas[newIdea.id] = newIdea;
  localStorage.setItem('ideas', JSON.stringify(ideas));
}

getIdeas();

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
    <button class="upvote" type="button" name="upvote"></button>
    <button class="downvote" type="button" name="downvote"></button>
    <p class="quality">quality: <span>${obj.quality}</span></p>
  </section>
  `;
}

function buildCard(obj) {
  return `
  <article id=${obj.id} class="card new">
    <button class="complete" type="button" name="complete"></button>
    <main>
      ${renderCardPrimaryInfo(obj)}
      ${renderCardQuality(obj)}
    </main>
    <button class="delete" type="button" name="delete"></button>
  </article>
  `;
}

function addNewItemClass() {
  document.getElementById('card-container').querySelector('article').className = 'card cardVisible';
}

function prepend(element) {
  document.getElementById('card-container').innerHTML = element + document.getElementById('card-container').innerHTML;
}

function saveIdea(e) {
  const newCard = getInputs();
  e.preventDefault();
  prepend(buildCard(newCard));
  storeIdea(newCard);
  clearInputs();
  setTimeout(() => addNewItemClass(), 500);
}

function addRemovedClass(e) {
  e.target.parentElement.className = 'card removed';
}

function removeIdea(e) {
  const ideas = JSON.parse(localStorage.getItem('ideas'));
  delete ideas[e.target.parentElement.id];
  localStorage.setItem('ideas', JSON.stringify(ideas));
  return e.target.className !== 'delete'
         || addRemovedClass(e)
         || setTimeout(() => this.removeChild(e.target.parentElement), 500);
}

document.getElementById('submit').addEventListener('click', saveIdea);
document.getElementById('card-container').addEventListener('click', removeIdea);
