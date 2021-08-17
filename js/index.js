document.getElementById("kuakata-plus").addEventListener("click", () => {
  ticketCount("kuakata-tour", 'plus')
});
document.getElementById("kuakata-minus").addEventListener("click", () => {
  ticketCount("kuakata-tour", 'minus')
});
document.getElementById("coxbazar-plus").addEventListener("click", () => {
  ticketCount("coxbazar-tour", 'plus')
});
document.getElementById("coxbazar-minus").addEventListener("click", () => {
  ticketCount("coxbazar-tour", 'minus')
});

function ticketCount(where, isAdd){
  let destination = document.getElementById(where + "-ticket");
  let currentTicket = parseInt(destination.value);
  let tickektNo = 0;
  if(isAdd == "plus"){
    tickektNo = currentTicket + 1;
  }else if(currentTicket){
    tickektNo = currentTicket - 1;
  }
  destination.value = tickektNo;

  let destinationTotal = document.getElementById(where + "-total");
  if(tickektNo >= 0 && where == "kuakata-tour"){
    destinationTotal.innerText = tickektNo * 3000;
    totalCosts();
  }else{
    destinationTotal.innerText = tickektNo * 5000;
    totalCosts();
  }
  
}

function totalCosts(){
  let totalTourCost = document.getElementById("total-costs");
  let kuakataCost = document.getElementById("kuakata-tour-total").innerText;
  let cosBazarCost = document.getElementById("coxbazar-tour-total").innerText;
  totalTourCost.innerText =  parseInt(kuakataCost) + parseInt(cosBazarCost);
}