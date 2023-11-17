(function () {
  let params = {};
  const results = [];

  const form = document.getElementById("equation-form");
  const btn = document.getElementById("search-btn");
  const historyBtn = document.getElementById("history-btn");

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
    clearSearchResult();
    clearHistoryList();
    const result = await getEquationResults(params);
    results.unshift(result);
    const searchResultEl = document.getElementById("search-result");

    const article = createResultItem(result);
    searchResultEl.append(article);
  });
  historyBtn.addEventListener("click", function (e) {
    clearForm();
    clearSearchResult();
    createHistoryList();
  });

  const clearForm = () => {
    const input = document.getElementById("equation");
    const category = document.getElementById("category");
    input.value = "";
    category.value = "";
    params = {};
  };
  const clearSearchResult = () => {
    const searchResultEl = document.getElementById("search-result");
    searchResultEl.innerHTML = "";
  };
  const clearHistoryList = () => {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = "";
  };

  const getEquationResults = async (params) => {
    try {
      const { equation, category } = params;
      if (!equation || !category) {
        return Promise.reject(new Error("Params are not correct"));
      }
      const expression = encodeURIComponent(equation);
      const url = `https://newton.now.sh/api/v2/${category}/${expression}`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  const createHistoryList = () => {
    const historyListEl = document.getElementById("history-list");
    results.forEach((item) => {
      const article = createResultItem(item, true);
      historyListEl.append(article);
    });
  };

  const createResultItem = (result, isHistory) => {
    const article = document.createElement("article");
    const operationEl = document.createElement("h3");
    const expressionEl = document.createElement("p");
    const resultEl = document.createElement("h4");

    if (isHistory) {
      var dltBtn = document.createElement("button");
      dltBtn.innerHTML = "Delete";
      //   var icon = document.createElement("i");

      //   icon.classList.add("fa-solid fa-trash");
      //   dltBtn.append(icon);
    }

    const { expression, operation, result: answer } = result;

    operationEl.innerHTML = operation;
    expressionEl.innerHTML = expression;
    resultEl.innerHTML = answer;

    article.append(operationEl, expressionEl, resultEl);
    if (isHistory) {
      article.append(dltBtn);
    }
    return article;
  };
})();
