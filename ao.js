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
        2: "https://filemoon.to/e/lxwed6j76ed9/All_Out!!_Ep__2.mp4",
        3: "https://filemoon.to/e/9xglya0rvejt/All_Out!!_Ep__3.mp4",
        4: "https://filemoon.to/e/zwumxaa284w2/All_Out!!_Ep__4.mp4",
        5: "https://filemoon.to/e/q4dnnj755xgo/All_Out!!_Ep__5.mp4",
        6: "https://filemoon.to/e/xmp6x40ghdog/All_Out!!_Ep__6.mp4",
        7: "https://filemoon.to/e/ghum3v75p4uz/All_Out!!_Ep__7.mp4",
        8: "https://filemoon.to/e/oifldh3vi50q/All_Out!!_Ep__8.mp4",
        9: "https://filemoon.to/e/f9joi0z8ihlm/All_Out!!_Ep__9.mp4"
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
  