var hikeDocID = localStorage.getItem("hikeDocID");

function getHikeName(id) {
    db.collection("hikes")
        .doc(id)
        .get()
        .then((thisHike) => {
            var hikeName = thisHike.data().name;
            document.getElementById("hikeName").innerHTML = hikeName;
        });
}

getHikeName(hikeDocID);