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
      },
      2: {
        1: "https://adjaranets.xyz/video/1843e35d41ccf6e63273495ba42df3c1",
        2: "https://adjaranets.xyz/video/32b991e5d77ad140559ffb95522992d0",
        3: "https://adjaranets.xyz/video/227f6afd3b7f89b96c4bb91f95d50f6d",
        4: "https://adjaranets.xyz/video/182e6c2d3d78eef40e5dac7da77a748f",
        5: "https://adjaranets.xyz/video/28acfe2da49d2b9a7f177458256f2540",
        6: "https://adjaranets.xyz/video/aee92f16efd522b9326c25cc3237ac15",
        7: "https://adjaranets.xyz/video/0172d289da48c48de8c5ebf3de9f7ee1"
      },
      3: {
        1: "https://adjaranets.xyz/video/55b34fd73727d9b19698835c7d5302ae",
        2: "https://adjaranets.xyz/video/b5507f51b88a3ae4a99ba87e4877ab57",
        3: "https://adjaranets.xyz/video/df7ee89b6f8ec5827a19ecbaff5d4cd2",
        4: "https://adjaranets.xyz/video/ac8a9143597891fc2fc2ded41a9a9ec7",
        5: "https://adjaranets.xyz/video/ec1093fe1626f25b1845d04dd6f55dd2",
        6: "https://adjaranets.xyz/video/e334fd9dac68f13fa1a57796148cf812",
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
    