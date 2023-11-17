(function () {
  let params = {};
  const results = [];

  const form = document.getElementById("equation-form");
  const btn = document.getElementById("search-btn");

  form.addEventListener("change", function (e) {
    const { value, name } = e.target;
    params = { ...params, [name]: value };
    if (params.equation && params.category) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });

  btn.addEventListener("click", async function (e) {
    const result = await getEquationResults(params);
    results.push(result);
  });

  const getEquationResults = async (params) => {
    try {
      const { equation, category } = params;
      if (!equation || !category) {
        return Promise.reject(new Error("Params are not correct"));
      }
      const url = `https://newton.now.sh/api/v2/${category}/${equation}`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };
})();
