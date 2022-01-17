# sdvx-db

SDVX songs database, used heavily by `pk-bot` and `sdvx-score-viewer`. Contents of the database can be viewed [over here](https://silverhawke.xyz/sdvx-db/).

## Database schema

Records are stored as objects in a key-value pair, where the key is an arbitrary ID -- in practice, it is just a counter incremented for each new song added.

Individual records have the following keys:
| key name | value type | description |
|---|---|---|
song_name | string | Song title
song_name_alt | list[string] | List of transliteration of song title. Must be ASCII. Can be empty.
song_artist | string | Song artist
difficulties | list[int] | Difficulty levels for the song's charts in the following order: NOV, ADV, EXH, MXM, INF.
inf_ver | int | Specifies which name is used for the fourth difficulty. Starting from 2, it corresponds to INF, GRV, HVN, VVD.
sdvxin_id | string | Song ID as given in `sdvx.in`. Defaults to empty string.
ver_path | string, string | Version path in `sdvx.in`, given as a pair. Second element only used for fourth difficulty. Defaults to empty string(s).
is_available | bool | `True` if song is available in-game, `False` otherwise.
