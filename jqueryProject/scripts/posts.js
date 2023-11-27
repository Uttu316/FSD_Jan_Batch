$(() => {
  getPost();

  async function getPost() {
    try {
      let posts = await $.get("https://jsonplaceholder.typicode.com/photos");
      posts = posts.slice(1, 21);
      showPosts(posts);
    } catch (e) {
      console.error(e);
    }
  }
  function showPosts(posts) {
    if (Array.isArray(posts) && posts.length) {
      const allPostItems = posts.map((post) => createPost(post));
      $("#posts").append(allPostItems);
    }
  }
  function createPost(postDetails) {
    const { id, thumbnailUrl, title } = postDetails;

    const postEl = $(`<div class="post-item" data-id=${id}>
    <div class="post-item-img-cover">
        <img class="post-item-img"  src=${thumbnailUrl} alt="xyz"/>
    </div>
    <div class="post-content">
        <p class="post-content-text">
           ${title}
        </p>
    </div>
</div>`);
    return postEl;
  }
});
