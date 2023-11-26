//execute callback function when document is ready
// $(document).ready(() => {
//   console.log("Hey");
// });

const details = {
  name: "Munendra",
  email: "munenedra@scac.com",
};

//shorter way of above function
$(() => {
  //work here
  //   const h1el = document.querySelector("h1");
  //   h1el.style.background = "yellow";

  const h1El = $("h1");
  h1El.css("color", "red");

  const h2El = $("h2");
  h2El.text("I am awesome");

  const pEl = $("<p>I am from JQuery</p>");
  h2El.append(pEl);

  //   pEl.remove();

  pEl.css({
    color: "red",
    backgroundColor: "yellow",
    fontSize: "32px",
    fontWeight: 700,
  });

  $("#list").css({
    backgroundColor: "salmon",
    padding: "20px",
    borderRadius: "8px",
  });

  const firstEl = $("#list li").first();
  firstEl.css({
    color: "blue",
  });
  const lastEl = $("#list li").last();
  lastEl.css({
    color: "green",
  });

  $("#list li").odd().css({
    color: "brown",
  });
  $("#list li").even().css({
    color: "pink",
  });

  //   const el = $("<li>").text("Utkarsh");

  //   $("#list").prepend(el);

  $("<li>").text("Utkarsh").appendTo($("#list"));

  const createCard = (details) => {
    const { name, email } = details;

    const cardEl = $(`
    <div class="card">
        <p class="card-title">${name}</p>
        <p class="card-subTitle">${email}</p>
    </div>
    `);

    $("#users").append(cardEl);
  };

  //   $("#addBtn").click(() => {
  //     createCard(details);
  //   });

  $("#addBtn").on({
    click: function () {
      createCard(details);
    },
    mouseenter: function () {
      $("#users").slideUp();
    },
    mouseleave: function () {
      $("#users").slideDown();
    },
  });

  const getUsers = async () => {
    try {
      const users = await $.get("https://jsonplaceholder.typicode.com/users");
      users.forEach((user) => {
        createCard({
          name: user.name,
          email: user.email,
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
  getUsers();
});
