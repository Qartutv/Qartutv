document.addEventListener("DOMContentLoaded", function () {
    const seasonToggle = document.getElementById("seasonToggle");
    const episodeToggle = document.getElementById("episodeToggle");
    const seasonList = document.getElementById("seasonList");
    const episodeList = document.getElementById("episodeList");
    const iframe = document.getElementById("iframedisplay");
  
    let currentSeason = 1;
  
    // Replace with your real links
    const episodeSources = {
      1: {
        1: "https://filemoon.to/e/haffk9k3ozyc/All_Out!!_Ep__1.mp4",
      },
      2: {
        1: "https://mykadricdn.online/v/568dkmstrztr"
      }
    };
  
    function populateEpisodes(season) {
      episodeList.innerHTML = "";
      const episodes = episodeSources[season];
      if (!episodes) return;
  
      Object.keys(episodes).forEach((epNum) => {
        const li = document.createElement("li");
        li.textContent = `თრეილერი`;
        li.dataset.episode = epNum;
        episodeList.appendChild(li);
      });
  
      episodeToggle.textContent = "აირჩიე სერია";
    }
  
    // Toggle dropdown visibility
    seasonToggle.addEventListener("click", () => {
      seasonList.style.display = seasonList.style.display === "block" ? "none" : "block";
      episodeList.style.display = "none";
    });
  
    episodeToggle.addEventListener("click", () => {
      episodeList.style.display = episodeList.style.display === "block" ? "none" : "block";
      seasonList.style.display = "none";
    });
  
    // Handle season selection
    seasonList.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        const season = e.target.dataset.season;
        currentSeason = season;
        seasonToggle.textContent = `სეზონი ${season}`;
        seasonList.style.display = "none";
        populateEpisodes(season);
      }
    });
  
    // Handle episode selection
    episodeList.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        const episode = e.target.dataset.episode;
        const url = episodeSources[currentSeason][episode];
        if (url) {
          iframe.src = url;
          episodeToggle.textContent = `თრეილერი`;
        }
        episodeList.style.display = "none";
      }
    });
  
    // Close if clicked outside
    document.addEventListener("click", (e) => {
      if (!document.querySelector(".custom-dropdowns").contains(e.target)) {
        seasonList.style.display = "none";
        episodeList.style.display = "none";
      }
    });
  
    // Initialize default season
    populateEpisodes(currentSeason);
  });
  