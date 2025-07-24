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
      1: "https://mykadricdn.online/v/tqe3y32l94aw",
      2: "https://mykadricdn.online/v/6m83fcyeb7r5",
      3: "https://mykadricdn.online/v/gh5iz7btc0dr",
      4: "https://mykadricdn.online/v/2ajoh2dv4hhg",
      5: "https://mykadricdn.online/v/9heapfh0hdnd",
      6: "https://mykadricdn.online/v/f5hiyymlew5x",
      7: "https://mykadricdn.online/v/7hbbd4h3hd1q",
      8: "https://mykadricdn.online/v/es78xefuaj5o",
      9: "https://mykadricdn.online/v/fpfz46yloce6",
      10: "https://mykadricdn.online/v/4yw8msvq5rta",
      11: "https://mykadricdn.online/v/1n4qi3rthyvs",
      12: "https://mykadricdn.online/v/ulnyqczgs9kj",
      13: "https://mykadricdn.online/v/6alpk7e6asdy", 
      14: "https://mykadricdn.online/v/4x24jahjwnpj", 
      15: "https://mykadricdn.online/v/epynydghwtez", 
      16: "https://mykadricdn.online/v/4e40g0nqjg9c", 
      17: "https://mykadricdn.online/v/ss4xyvsf1z11", 
      18: "https://mykadricdn.online/v/zq9a4gs13olb", 
      19: "https://mykadricdn.online/v/8jeutczba8wu", 
      20: "https://mykadricdn.online/v/tiqmxxe365fn", 
      21: "https://mykadricdn.online/v/1f4zgktgxfom", 
      22: "https://mykadricdn.online/v/p0kyr33sa29a", 
      23: "https://mykadricdn.online/v/akr217uujuye", 
      24: "https://mykadricdn.online/v/nzjwjae9x205", 
      25: "https://mykadricdn.online/v/o8ciba90fj32"
    },
    2: {
      1: "https://mykadricdn.online/v/568dkmstrztr",
      2: "https://mykadricdn.online/v/d9itfmsqclg4",
      3: "https://mykadricdn.online/v/zynzpuzrsrs7",
      4: "https://mykadricdn.online/v/49bdrv765lc1",
      5: "https://mykadricdn.online/v/4yl29p1reqda",
      6: "https://mykadricdn.online/v/ahabyijnlthn",
      7: "https://mykadricdn.online/v/7hbbd4h3hd1q",
      8: "https://mykadricdn.online/v/es78xefuaj5o",
      9: "https://mykadricdn.online/v/fpfz46yloce6",
      10: "https://mykadricdn.online/v/4yw8msvq5rta",
      11: "https://mykadricdn.online/v/1n4qi3rthyvs",
      12: "https://mykadricdn.online/v/ulnyqczgs9kj"
    },
    3: {
      1: "https://mykadricdn.online/v/fwgev62axcf3",
      2: "https://mykadricdn.online/v/ilhuq7tgjw9b",
      3: "https://mykadricdn.online/v/sxco24tplnea",
      4: "https://mykadricdn.online/v/nr5dkrfrtidp",
      5: "https://mykadricdn.online/v/kijdp9gpu95e",
      6: "https://mykadricdn.online/v/6ehcf5287dlx",
      7: "https://mykadricdn.online/v/qsf6p94o7wnv",
      8: "https://mykadricdn.online/v/2thn3bx9rjrh",
      9: "https://mykadricdn.online/v/luj8jcf9r04r",
      10: "https://mykadricdn.online/v/1ncxv4ok7px4",
      11: "https://mykadricdn.online/v/8a0c32k35o5r",
      12: "https://mykadricdn.online/v/3nh6xkso90dw",
      13: "https://mykadricdn.online/v/d8f0c7vcmzdq",
      14: "https://mykadricdn.online/v/88lw1idv2hdt",
      15: "https://mykadricdn.online/v/4o1svm4tja62",
      16: "https://mykadricdn.online/v/z0863ecg3c4p",
      17: "https://mykadricdn.online/v/tt1pctci9re4",
      18: "https://mykadricdn.online/v/bmjzfgnd1x0k",
      19: "https://mykadricdn.online/v/99qhs9hv819u",
      20: "https://mykadricdn.online/v/0ecdb66ch5rx",
      21: "https://mykadricdn.online/v/9gblcg6i8202",
      22: "https://mykadricdn.online/v/ledhbe1ejtxd"
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
