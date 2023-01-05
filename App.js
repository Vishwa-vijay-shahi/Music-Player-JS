const key = "MWM2NzFiYjktNWI2YS00MGU2LWJlN2YtYWM2NjExZTJiNmI3"
let api = `https://api.napster.com/v2.1/tracks/top?apikey=${key}`

fetchTopTracks()

const tracksContainer = document.getElementById("track-container")

async function fetchTopTracks() {
    try {
    let response = await fetch(api)
    response = await response.json()
    response.tracks.forEach((track) => {
        console.log(track.name)
        const trackBox = document.createElement("div")
        trackBox.innerHTML = track.name
        tracksContainer.appendChild(trackBox)
    })
} catch (error) {
    console.log(error)
}
}


