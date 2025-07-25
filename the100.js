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
        13: "https://adjaranets.xyz/video/fc394e9935fbd62c8aedc372464e1965",
      },
      2: {
        1: "https://adjaranets.xyz/video/185e48a43c7f63acf74b1bd58827b510",
        2: "https://adjaranets.xyz/video/4b55df75e2e804bab559aa885be40310",
        3: "https://adjaranets.xyz/video/0c836be97564457619349887cf51b3ba",
        4: "https://adjaranets.xyz/video/9ecff5455677b38d19f49ce658ef0608",
        5: "https://adjaranets.xyz/video/4bb236de7787ceedafdff83bb8ea4710",
        6: "https://adjaranets.xyz/video/6e01383fd96a17ae51cc3e15447e7533",
        7: "https://adjaranets.xyz/video/af0a59d77edf6e178ec25cb090df864b",
        8: "https://adjaranets.xyz/video/42e9fb755426f19231217afb43e1aec1",
        9: "https://adjaranets.xyz/video/525b8410cc8612283c9ecaf9a319f8ed",
        10: "https://adjaranets.xyz/video/8860a4e27cbbe4c63821b429211684a3",
        11: "https://adjaranets.xyz/video/7dd3ed2e12d7967b656d156d50308263",
        12: "https://adjaranets.xyz/video/1349b36b01e0e804a6c2909a6d0ec72a",
        13: "https://adjaranets.xyz/video/2f52dc78dbbc843b19cf2f260b04812f",
        14: "https://adjaranets.xyz/video/1627164498da566c0eb500803f9b5f4a",
        15: "https://adjaranets.xyz/video/19f01591b6ca3ba03f1aedc8db12cdb9",
        16: "https://adjaranets.xyz/video/456048afb7253926e1fbb7486e699180"
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
    