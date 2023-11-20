class LS {
  constructor() {}
  get(key) {
    try {
      var val = localStorage.getItem(key);
      return JSON.parse(val);
    } catch (e) {
      return val;
    }
  }
  set(key, value) {
    if (typeof value !== "string") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }
}

(function () {
  const ls = new LS();
  let params = {};
  let results = ls.get("results") || [];

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
    ls.set("results", results);
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
      loaderStart();
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
    } finally {
      loaderStop();
    }
  };

  const createHistoryList = () => {
    const historyListEl = document.getElementById("history-list");
    results.forEach((item, index) => {
      const article = createResultItem(item, true, index);
      historyListEl.append(article);
    });
  };

  const createResultItem = (result, isHistory, index) => {
    const article = document.createElement("article");
    const operationEl = document.createElement("h3");
    const expressionEl = document.createElement("p");
    const resultEl = document.createElement("h4");

    if (isHistory) {
      var dltBtn = document.createElement("button");
      dltBtn.innerHTML = "Delete";
      dltBtn.addEventListener("click", function (e) {
        results.splice(index, 1);
        ls.set("results", results);
        this.parentElement.remove();
      });
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

  const loaderStart = () => {
    const loader = document.getElementById("loader");
    loader.style.display = "block";
  };
  const loaderStop = () => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  };
})();

/*


localStorage

//setItem('key')




*/
