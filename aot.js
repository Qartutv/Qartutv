document.getElementById('seriesSelector').addEventListener('change', function () {
    const selectedValue = this.value;

    if (selectedValue === "1") {
        document.getElementById('iframedisplay').src = "https://mykadricdn.online/v/tqe3y32l94aw";
    } else if (selectedValue === "2") {
        // ✅ Redirect the entire page
        document.getElementById('iframedisplay').src = "https://mykadricdn.online/v/6m83fcyeb7r5";
    } else if (selectedValue == "3") {
        document.getElementById('iframedisplay').src = "https://mykadricdn.online/v/gh5iz7btc0dr";
    } else if (selectedValue == "4") {
        document.getElementById('iframedisplay').src = "https://mykadricdn.online/v/2ajoh2dv4hhg";
    } else if (selectedValue == "5") {
        document.getElementById('iframedisplay').src = "https://mykadricdn.online/v/9heapfh0hdnd";
    } else if (selectedValue == "6") {
        document.getElementById('iframedisplay').src = "https://mykadricdn.online/v/f5hiyymlew5x";
    }
});