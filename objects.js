var playlist = {
  
  artist:'song'
  
};

function updatePlaylist(playlist,artistName,songTitle){
return Object.assign({},playlist,{[artistName]:songTitle})
 
}
function removeFromPlaylist(playlist,artistName){
   playlist.artistName=[''];
   delete playlist.artistName;
  return playlist;
}