// AIzaSyDwAFNySnJeFWvHI891LsavRjEX13rUOEA
const videoCardContainer = document.querySelector('.video-container');

let api_key = 'AIzaSyAvbDSfifX4ePbWPmLKC5d0hNNdeMdvUo4';
let video_http = 'https://www.googleapis.com/youtube/v3/videos?';
let channel_http = 'https://www.googleapis.com/youtube/v3/channels?';

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'IN'
}))
    .then(res => res.json())
    .then(data => {
        console.log('Data : ', data);
        data.items.forEach((item) => {
            getChannelIcon(item);
        });
    })
    .catch(err => { console.error(err) })


const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
        .then(res => res.json())
        .then(data => {
            video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
            makeVideoCard(video_data);
        })
}

const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if (searchInput.value.length) {
        location.href = searchLink + searchInput.value;
    }
})


// filter
const filterOptions = document.querySelectorAll('.filter-options');
filterOptions.forEach(filterOption => {
    filterOption.addEventListener('click', () => {
        const filter = filterOption.textContent.toLowerCase(); // Get the text content of the filter option
        location.href = searchLink + filter;
    });
});

////////////////////////////////////////////////////////////////
//                      profile-menu
////////////////////////////////////////////////////////////////

let subMenu = document.getElementById('subMenu');

function toggleMenu() {
    subMenu.classList.toggle('open-menu');
}