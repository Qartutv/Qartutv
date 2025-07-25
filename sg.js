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
        1: "https://adjaranets.xyz/video/86e78499eeb33fb9cac16b7555b50767",
        2: "https://adjaranets.xyz/video/6e5025ccc7d638ae4e724da8938450a6",
        3: "https://adjaranets.xyz/video/c3e4035af2a1cde9f21e1ae1951ac80b",
        4: "https://adjaranets.xyz/video/8929c70f8d710e412d38da624b21c3c8",
        5: "https://adjaranets.xyz/video/32e05616c8ed659463f9af00b142dd6f",
        6: "https://adjaranets.xyz/video/2596a54cdbb555cfd09cd5d991da0f55",
        7: "https://adjaranets.xyz/video/41e7637e7b6a9f27a98b84d3a185c7c0",
        8: "https://adjaranets.xyz/video/bd0cc810b580b35884bd9df37c0e8b0f",
        9: "https://adjaranets.xyz/video/88a839f2f6f1427879fc33ee4acf4f66"
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
    