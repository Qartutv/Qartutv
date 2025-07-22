document.getElementById('seriesSelector').addEventListener('change', function () {
    const selectedValue = this.value;

    if (selectedValue === "1") {
        document.getElementById('iframedisplay').src = "https://filemoon.to/e/haffk9k3ozyc/All_Out!!_Ep__1.mp4";
    } else if (selectedValue === "2") {
        // ✅ Redirect the entire page
        document.getElementById('iframedisplay').src = "https://filemoon.to/e/lxwed6j76ed9/All_Out!!_Ep__2.mp4";
    } else if (selectedValue == "3") {
        document.getElementById('iframedisplay').src = "https://filemoon.to/e/9xglya0rvejt/All_Out!!_Ep__3.mp4"
    }
});