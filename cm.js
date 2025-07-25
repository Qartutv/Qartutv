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
        1: "https://adjaraneti.xyz/v/p40ajevs021e",
        2: "https://adjaraneti.xyz/v/ilp4q6zw26h2",
        3: "https://adjaraneti.xyz/v/u9r5tb8a2ihu",
        4: "https://adjaraneti.xyz/v/737v976vbqhd",
        5: "https://adjaraneti.xyz/v/c2ql1c5340eh",
        6: "https://adjaraneti.xyz/v/oaxxpowcyg30",
        7: "https://adjaraneti.xyz/v/uc4ec975k0bn",
        8: "https://adjaraneti.xyz/v/jyob73xub9jz",
        9: "https://adjaraneti.xyz/v/rnh8z1rf8fxr",
        10: "https://adjaraneti.xyz/v/x8jrtidwvwqr",
        11: "https://adjaraneti.xyz/v/geucnkbg0w1p",
        12: "https://adjaraneti.xyz/v/nd21zr6cyeo2",
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
        li.textContent = `სერია ${epNum}`;
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
          episodeToggle.textContent = `სერია ${episode}`;
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
  