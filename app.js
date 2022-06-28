fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    let html = "";
    for (let post of postsArr) {
      html += `
      <div class='blog-post'>
        <h2>${post.title}</h2>
        <p class='blog-post-body'>${post.body}</p>
      </div>
      `;
    }
    document.getElementById("blog-posts").innerHTML = html;
  });
