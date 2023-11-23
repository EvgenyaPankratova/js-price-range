const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 100;

priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

    if(e.target.className === "input-min"){
        if(minPrice < 0){
            minPrice = 0; 
        }
        
        if(minPrice > maxPrice){
            minPrice = maxPrice;
            rangeInput[0].value = maxPrice - priceGap;
            range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        }
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";

    }else{
        if(maxPrice < minPrice){
            minPrice = maxPrice;
            rangeInput[1].value = maxPrice + priceGap;
        }
        if(maxPrice > 1500){
            maxPrice = 1500;
            rangeInput[1].value = 1500;
        }
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";

    }

    });
  });
  
  
  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
  
      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });

