document.getElementById('seriesSelector').addEventListener('change', function () {
    const selectedValue = this.value;

    if (selectedValue === "1") {
        document.getElementById('iframedisplay').src = "https://vkvideo.ru/video_ext.php?oid=824626030&id=456239020&hd=2&autoplay=1";
    } else if (selectedValue === "2") {
        // ✅ Redirect the entire page
        window.location.href = "index.html";
    }
});