//still för sidan stats10.html
import "../../scss/pages/stats10.scss";

//js-moduler
import min from './min.js'
import max from './max.js'
import range from './range.js'
import count from './count.js'
import sum from './sum.js'
import mean from './mean.js'
import median from './median.js'
import mode from './mode.js'
import standardDeviation from './standardDeviation.js'
import variance from './variance.js'

//räkna statistik
  const form = document.querySelector("form");
  const inputs = form.querySelector("textarea");
  const stats = document.querySelector("#stats");
  const error = document.querySelector("#error")
  const arrStatsNames = ["minimum", "maximum", "variationsbredd", "antal värden", "summa", "medelvärde", "median", "typvärde", "varians", "standardavvikelse"];
  const pattern = /^-?\d+(\.\d+)?(,-?\d+(\.\d+)?)+$/;

  function initStats(evt) {
    const clickedBtn = evt.target.id
    if (!(clickedBtn === "delete" || clickedBtn === "calculate")) return
    //radera
    if (clickedBtn === "delete") {
      inputs.value = "";
      stats.innerHTML = "";
      return
    }
    /*input får bara innehålla kommaseparerade 
    positiva eller negativa heltal eller decimaltal*/
    const values = pattern.test(inputs.value.trim())
    //visa felmeddelanden om fel inputtyp
    if (!values) {
      error.classList.remove("hidden")
      return
    }
    //ta bort felmeddelande
    error.classList.add("hidden")
    //sorterad array
    const sortedArr = inputs.value.split(",").map(str => Number(str)).sort((a, b) => a - b)
    //visa innan beräkningar
    stats.innerHTML = `<p>Räknar...</p>`
    setTimeout(() => {
      //minimum
      const minVal = min(sortedArr);
      //max
      const maxVal = max(sortedArr);
      //variationsbredd
      const rangeVal = range(maxVal, minVal);
      //antal värden
      const countVal = count(sortedArr);
      //summa
      const sumVal = sum(sortedArr);
      //medelvärde
      const meanVal = mean(sumVal, sortedArr);
      //median
      const medianVal = median(sortedArr);
      //typvärde
      const modeVal = mode(sortedArr);
      //varians
      const varianceVal = variance(meanVal, sortedArr);
      //standardavvikelse
      const sdVal = standardDeviation(varianceVal);
      //stats värden
      const arrStats = [minVal, maxVal, rangeVal, countVal, sumVal, meanVal, medianVal, modeVal, varianceVal, sdVal]
      //lägg till värden i DOM
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < arrStatsNames.length; i++) {
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.textContent = arrStatsNames[i];
        const output = document.createElement("output");
        output.textContent = typeof arrStats[i] === "number"
          ? arrStats[i].toFixed(2)
          : arrStats[i];
        div.append(p, output)
        fragment.appendChild(div)
      }
      //radera p-element:räknar... innan värden lägg till i DOM
      stats.innerHTML = "";
      stats.appendChild(fragment);
    }, 500)

  }

  form.addEventListener("click", initStats)
