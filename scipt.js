function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// 🔴 REQUIRED
const API_KEY = "YOUR_YOUTUBE_API_KEY";
const CHANNEL_ID = "YOUR_CHANNEL_ID";

// Fetch normal videos
fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`)
.then(res => res.json())
.then(data => {
  const grid = document.getElementById("videoGrid");
  data.items.forEach(item => {
    if (item.id.videoId) {
      grid.innerHTML += `
        <iframe src="https://www.youtube.com/embed/${item.id.videoId}" allowfullscreen></iframe>
      `;
    }
  });
});

// Fetch Shorts (vertical videos)
fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`)
.then(res => res.json())
.then(data => {
  const grid = document.getElementById("shortsGrid");
  data.items.forEach(item => {
    if (item.id.videoId) {
      grid.innerHTML += `
        <iframe src="https://www.youtube.com/embed/${item.id.videoId}" allowfullscreen></iframe>
      `;
    }
  });
});
