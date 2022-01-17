function init() {
    fetch('db.json')
        .then(response => response.json())
        .then(json => loadData(json));
}

function loadData(json) {
    for (const songID of Object.keys(json)) {
        let songData = json[songID];
        let values = [
            songID,
            songData.song_name.replace('(EXIT TUNES)', ''),
            songData.song_name_alt.join('\n'),
            songData.song_artist,
            songData.difficulties[0] || '-',
            songData.difficulties[1] || '-',
            songData.difficulties[2] || '-',
            songData.difficulties[3] || '-',
            songData.difficulties[4] || '-',
            songData.inf_ver === 2 ? 'INF' :
                songData.inf_ver === 3 ? 'GRV' :
                songData.inf_ver === 4 ? 'HVN' :
                songData.inf_ver === 5 ? 'VVD' : '-',
            songData.sdvxin_id || '-',
            songData.ver_path[0] || '-',
            songData.ver_path[1] || '-',
            songData.is_available ? 'True' : 'False'
        ];
        let tableRow = document.createElement('tr')
        values.forEach(function (e) {
            let tableCell = document.createElement('td');
            tableCell.innerText = e.toString();
            tableRow.appendChild(tableCell);
        });
        document.querySelector('#mainTable').appendChild(tableRow);
    }
    setTimeout(function() {
        document.querySelector('.cover').classList.toggle('transparent');
    }, 1000);
    setTimeout(function() {
        document.querySelector('.cover').classList.toggle('hidden');
    }, 1250);
}