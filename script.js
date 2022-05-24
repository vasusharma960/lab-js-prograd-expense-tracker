document.getElementsByClassName("btn")[0].addEventListener("click", function(){
  let text = document.getElementById("text").value;
  let amount = document.getElementById("amount").value;

  if(text === "" || amount.toString() === "" || text.length > 20){
    alert("Please Enter Text and Amount Properly");
  }

  else{
    localStorage.setItem(text, amount);
  }
});

function update(){
  let income = 0, expense = 0;

  if(localStorage.length > 0){
    for(let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      let amt = parseInt(localStorage.getItem(key));

      if(amt < 0){
        expense += Math.abs(amt);
      }else{
        income += amt;
      }

      let list = document.getElementById("list");
      let item = document.createElement("li");
      item.classList.add((amt < 0) ? 'minus' : 'plus');

      let itext = document.createElement("p");
      itext.textContent = key;
      item.appendChild(itext);

      let iamt = document.createElement("p");
      iamt.textContent = ((amt < 0) ? "" : "+") + amt.toFixed(2);
      item.appendChild(iamt);
      list.appendChild(item);

    }
  }
  document.getElementById("money-plus").innerHTML = "+$" + income.toFixed(2);
  document.getElementById("money-minus").innerHTML = "-$" + expense.toFixed(2);
  document.getElementById("balance").innerHTML = "$" + (income - expense).toFixed(2);
}

window.onload = function(){
  update();
};
