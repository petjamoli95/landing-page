export async function fetchPageData() {
  const res = await fetch(`http://35.179.72.232/api/v2/pages/7/`);
  const data = await res.json();
   
  return data;
}

export async function fetchRoomData() {
  const res = await fetch(`http://35.179.72.232/api/v2/pages/?type=rooms.RoomsPage&fields=*`);
  const data = await res.json();
   
  return data;
}
