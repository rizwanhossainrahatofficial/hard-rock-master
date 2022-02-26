// const searchSongs = async () => {
//     const searchText = document.getElementById('search-field').value;
//     const url = `https://api.lyrics.ovh/suggest/${searchText}`
//     // load data
//     const res = await fetch(url);
//     const data = await res.json();
//     displaySongs(data.data);
// }

// enter pressing code
// document.getElementById("search-song")
// .addEventListener("keypress",function(event){
//     if(event.key=='Enter'){
//         document.getElementById("search-button").click();
//     }
// });


// enter key

// document.getElementById("search-song")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("search-button").click();
//     }
// });




function searchSongs() {
    const searchText = document.getElementById('search-song').value;
    const url = `https://api.lyrics.ovh/suggest/:${searchText}`

    // toggleSpinner(true)

    // toggleSpinner()

    fetch(url)
        .then(res => res.json())
        .then(data => displaySong(data.data))
        .catch(error=>"something went wrong!")
}
const displaySong = songs => {
    const songContainer = document.getElementById('song-container')
    songContainer.innerHTML="";
    songs.forEach(song => {
        console.log(song.artist.name);
        const songDiv = document.createElement('div')
        songDiv.className = 'single-result row align-items-center my-3 p-3'
        songDiv.innerHTML = `
        <div class="col-md-9">
        <h3 class="lyrics-name">${song.title}</h3>
        <p class="author lead">Album by <span>${song.artist.name}</span></p>
        <audio controls>
            <source src='${song.preview} 'type="audio/ogg">
        </audio>
    </div>
    
    <div class="col-md-3 text-md-right text-center">
        <button onclick="getLyrics('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
    </div>
        `;
        songContainer.appendChild(songDiv);
        // toggleSpinner(false)
        // toggleSpinner()
    });
}

const  getLyrics=(artist,title)=>{
    const url=`https://api.lyrics.ovh/v1/${artist}/${title}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayLyrics(data.lyrics))
    console.log(data);

}
const displayLyrics=lyrics=>{
    const displayLyricsDiv=document.getElementById('display-lyrics');
    displayLyricsDiv.innerText=lyrics;

}

const toggleSpinner=()=>{
    const spinner=document.getElementById('loading-spinner');
    const songs=document.getElementById('song-container');
    spinner.classList.toggle('d-none')
    songs.classList.toggle('d-none')

//     if(show){
//         spinner.classList.remove('d-none')
//     }
//   else{
//     spinner.classList.add('d-none')
//   }
    
}