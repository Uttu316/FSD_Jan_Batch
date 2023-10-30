const showLoader = () => {
  const loaderEl = document.querySelector(".loader");
  loaderEl.classList.remove("hide");
};
const hideLoader = () => {
  const loaderEl = document.querySelector(".loader");
  loaderEl.classList.add("hide");
};

const showPosts = (posts) => {
  posts.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item.title;
    const ul = document.querySelector("ul");
    ul.append(li);
  });
};

const getPosts = async () => {
  try {
    showLoader();
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    showPosts(data);
  } catch (e) {
    console.log(e);
  } finally {
    hideLoader();
  }
};

getPosts();
