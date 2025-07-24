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
        1: "https://adjaranets.xyz/video/581b41df0cd50ace849e061ef74827fc",
        2: "https://adjaranets.xyz/video/348a38cd25abeab0e440f37510e9b1fa",
        3: "https://adjaranets.xyz/video/817c99c4861918e518dca75d712983eb",
        4: "https://adjaranets.xyz/video/914101ec47c52b48a7b6ccc6f5a76f1f",
        5: "https://adjaranets.xyz/video/f5aa4bd09c07d8b2f65bad6c7cd3358f",
        6: "https://adjaranets.xyz/video/380a2d63cef1d5d702278e2b561e2e51",
        7: "https://adjaranets.xyz/video/f6b6d2a114a9644419dc8d2315f22401",
        8: "https://adjaranets.xyz/video/b2005ea31710de47466d9e53068edc71",
        9: "https://adjaranets.xyz/video/219d0a315520ccbbb971bba8f5d455fe",
        10: "https://adjaranets.xyz/video/251c5ffd6b62cc21c446c963c76cf214",
        11: "https://adjaranets.xyz/video/16f852a6d01b6065c8ff5cc11caae9c6",
        12: "https://adjaranets.xyz/video/c20bb2d9a50d5ac1f713f8b34d9aac5a",
        13: "https://adjaranets.xyz/video/fc394e9935fbd62c8aedc372464e1965"
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
    