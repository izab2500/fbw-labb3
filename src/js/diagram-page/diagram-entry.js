//still för sidan diagram.html
import "../../scss/pages/diagram.scss";

//js
import getData from "./getData";
import barChart from "./barChart";
import pieChart from "./piechart";

//hämta sex mest sökta kurserna och fem mest sökta programmen (Mittuniversitetet HT25)
const url = 'https://mallarmiun.github.io/Frontend-baserad-webbutveckling/Moment%205%20-%20Dynamiska%20webbplatser/statistik_sokande_ht25.json';
const obj = await getData(url);
//array med objekt
const top6Courses = obj.top6Courses;
const top5Programs = obj.top5Programs;

//Skapa stapeldiagram
const canvasBarChart = document.querySelector("#barChart");
barChart(canvasBarChart, top6Courses);

//skapa cirkeldiagram
const canvasPiechart = document.querySelector("#pieChart");
pieChart(canvasPiechart, top5Programs);