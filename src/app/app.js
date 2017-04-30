function getInputs() {
  return {
    title: document.getElementById('input-title').value,
    body: document.getElementById('input-body').value,
    id: Date.now(),
  };
}

function buildCard(obj) {
  return `
  <article id=${obj.id} class="card">
    <section class="primary-info">
      <button class="complete" type="button" name="complete"></button>
      <section class="card-text">
        <h2 class="card-title">${obj.title}</h2>
        <p class="card-body">Enter ${obj.body}</p>
      </section>
      <button class="delete" type="button" name="button"></button>
    </section>
    <section class="rating">
      <button class="upvote" type="button" name="button"></button>
      <button class="downvote" type="button" name="button"></button>
      <p class="quality">quality: <span>Swill</span></p>
    </section>
  </article>
  `;
}

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('card-container').innerHTML += buildCard(getInputs());
});
