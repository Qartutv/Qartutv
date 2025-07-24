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
        1: "https://mykadricdn.online/v/1t6sdakckk09",
        2: "https://mykadricdn.online/v/ztb5wtt259l0",
        3: "https://mykadricdn.online/v/2w8e2fc36a6u",
        4: "https://mykadricdn.online/v/wnbm4975bxzg",
        5: "https://mykadricdn.online/v/gg0oqkfry143",
        6: "https://mykadricdn.online/v/djh4zzw64xr8",
        7: "https://mykadricdn.online/v/kaxthn6ks0v7",
        8: "https://mykadricdn.online/v/lzm8zk6vt7au",
        9: "https://mykadricdn.online/v/k5ea6oru1a2p",
        10: "https://mykadricdn.online/v/0vaodnjl4t7c",
        11: "https://mykadricdn.online/v/lfy4pax0jmc7",
        12: "https://mykadricdn.online/v/lfy4pax0jmc7",
        13: "https://mykadricdn.online/v/squxcejhbwpl",
        14: "https://mykadricdn.online/v/cdgam1q7mug0",
        15: "https://mykadricdn.online/v/8pp7r0z6uovi",
        16: "https://mykadricdn.online/v/fnshy7sskf15",
        17: "https://mykadricdn.online/v/vl0om5zcqrzc",
        18: "https://mykadricdn.online/v/6o36g4qp8wsf",
        19: "https://mykadricdn.online/v/pivwb1vrgy2w",
        20: "https://mykadricdn.online/v/7c2o397yhnhz",
        21: "https://mykadricdn.online/v/7c2o397yhnhz",
        22: "https://mykadricdn.online/v/fybfmeeffqdy",
        23: "https://mykadricdn.online/v/fjepkaircn8c",
        24: "https://mykadricdn.online/v/cjty0nalfc5y",
        25: "https://mykadricdn.online/v/nkpcb47skoaj",
        26: "https://mykadricdn.online/v/t3dl4yk55yli"
      },
      2: {
        1: "https://mykadricdn.online/v/5uvh12fqjcxp",
        2: "https://mykadricdn.online/v/hozx8my345ri",
        3: "https://mykadricdn.online/v/lf0wt3x66ptq",
        4: "https://mykadricdn.online/v/pzmojyt60lwu",
        5: "https://mykadricdn.online/v/gmf4hgzxlfbt",
        6: "https://mykadricdn.online/v/34cf6kq1onja",
        7: "https://mykadricdn.online/v/hov2jhjyvld6",
        8: "https://mykadricdn.online/v/5986rrba52ec",
        9: "https://mykadricdn.online/v/u6vgm2sw82r5",
        10: "https://mykadricdn.online/v/ckx9pcl5sieh",
        11: "https://mykadricdn.online/v/5nhnq6him3w5",
        12: "https://mykadricdn.online/v/2lcfbusr312r",
        13: "https://mykadricdn.online/v/gieyslllebcq",
        14: "https://mykadricdn.online/v/sl7sxgnazl6t",
        15: "https://mykadricdn.online/v/6b9uk78ngcb4",
        16: "https://mykadricdn.online/v/wvere5h9ko7q",
        17: "https://mykadricdn.online/v/47jh303b7i1o",
        18: "https://mykadricdn.online/v/4zee390wqfm4",
      },
      3: {
        1: "https://mykadricdn.online/v/pyeem1bpin0v",
        2: "https://mykadricdn.online/v/d3y7qvvjgs6l",
        3: "https://mykadricdn.online/v/ggp90gbx02nl",
        4: "https://mykadricdn.online/v/5ib9k1p68vke",
        5: "https://mykadricdn.online/v/8kucvrlkpe10",
        6: "https://mykadricdn.online/v/qseuppvmo0c9",
        7: "https://mykadricdn.online/v/y6cewyoy9ns5",
        8: "https://mykadricdn.online/v/3qb8f6e5nshm",
        9: "https://mykadricdn.online/v/03k03b0scb0p",
        10: "https://mykadricdn.online/v/c0wtuefr82lb",
        11: "https://mykadricdn.online/v/7bk6fb8ysp0h",
      },
      4: {
        1: "https://mykadricdn.online/embed/kmhefjo92wcm",
        2: "https://mykadricdn.online/embed/shxbcr8c4zha",
        3: "https://mykadricdn.online/embed/ftbhk1iy5e66",
        4: "https://mykadricdn.online/embed/3lbkuwm6rcdc",
        5: "https://mykadricdn.online/embed/mylo0wq9sui7",
        6: "https://mykadricdn.online/embed/lnpoqlktdn9b",
        7: "https://mykadricdn.online/embed/zv860cznnbd9",
        8: "https://mykadricdn.online/embed/m4lk2ll0oef6",
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
    