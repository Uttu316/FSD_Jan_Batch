const displayData = (userData) => {
  const img = document.querySelector(".userImg");
  img.setAttribute("src", userData.userImg);

  const name = document.getElementById("userName");
  name.innerText = userData.first + " " + userData.last;

  const btns = document.querySelectorAll(".userActions button");
  const userInfoEl = document.getElementById("userInfo");
  userInfoEl.innerText = "";
  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const attr = this.dataset.attr;
      const value = userData[attr];
      userInfoEl.innerText = value;
    });
  });
};

const showUserInfo = (userInfo) => {
  const { results } = userInfo;
  const userDetails = results[0];
  const {
    name: { first, last },
    picture: { large: userImg },
    phone,
    email,
    dob: { age },
  } = userDetails;
  const userData = {
    first,
    last,
    age,
    userImg,
    email,
    phone,
  };

  displayData(userData);
};

const getUserInfo = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    showUserInfo(data);
  } catch (e) {
    console.log(e);
  }
};
getUserInfo();

const anotherUserBtn = document.getElementById("getUser");
anotherUserBtn.addEventListener("click", function () {
  getUserInfo();
});

//https://my.newtonschool.co/playground/markup/a7l8s9fmjcsj?lecture_hash=nsyou0rdxvxo

//typing game solution
//https://my.newtonschool.co/playground/markup/hadkhin8sqa1?lecture_hash=nsyou0rdxvxo
