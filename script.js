const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll(".price");
  let totalPrice = 0;
  priceElements.forEach((priceElement) => {
    totalPrice += parseFloat(priceElement.textContent) || 0;
  });
  const existingTotalRow = document.querySelector(".total-row");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  newRow.className = "total-row";
  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.setAttribute("id", "ans");
  totalCell.textContent = `Total Price: Rs ${totalPrice}`;
  totalCell.style.fontWeight = "bold";
  totalCell.style.textAlign = "center";
  newRow.appendChild(totalCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
