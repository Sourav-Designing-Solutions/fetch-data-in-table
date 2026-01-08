const selectId = document.getElementById.bind(document);
const log = console.log;
const container = selectId("container");
function generateTable(data = []) {
  const table = document.createElement("table");
  table.classList.add(
    "w-10/12",
    "mx-auto",
    "divide-gray-200",
    "divide-y",
    "shadow-xl"
  );
  const thead = document.createElement("thead");
  thead.classList.add("bg-gray-50");
  table.appendChild(thead);

  const tr = document.createElement("tr");
  thead.appendChild(tr);
  for (let i in data[0]) {
    const th = document.createElement("th");
    th.classList.add(
      "px-4",
      "py-3",
      "text-left",
      "text-xs",
      "font-medium",
      "border-r",
      "border-gray-200",
      "text-gray-500",
      "uppercase"
    );
    th.innerText = i;
    tr.appendChild(th);
  }
  const tbody = document.createElement("tbody");
  tbody.classList.add("bg-white", "divide-y", "divide-gray-200");
  table.appendChild(tbody);
  data.map((el) => {
    const tr = document.createElement("tr");
    tr.classList.add("hover:bg-gray-50");
    for (let i in el) {
      const td = document.createElement("td");
      td.classList.add(
        "px-4",
        "py-3",
        "text-sm",
        "text-gray-700",
        "border-r",
        "border-gray-200"
      );
      td.innerText = el[i];
      tr.appendChild(td);
    }
    tbody.append(tr);
  });
  container.appendChild(table);
}

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  log("data", data);
  generateTable(data);
}

fetchData();
