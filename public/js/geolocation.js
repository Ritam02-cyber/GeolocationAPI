async function getAddress(lat, lng){
    try{
     let resp = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
     resp = await resp.json()
     return resp
    }catch(err){
        return err
    }   
   }
   
   function getLocation() {
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition);
     } else {
       console.log("GeoLocation is not supported by this browser");
     }
   }
   
   function showPosition(position) {
     getAddress(position.coords.latitude, position.coords.longitude).then((res)=>{
       console.log(res);
       document.getElementById('your-address').innerHTML = 'Your Address :' + ' ' + res?.address?.road + ' , ' + res.address?.suburb+ ' , ' + res.address?.county + ' , ' + res.address?.state_district + ' , ' + res.address?.state
     })
   }
   
   window.onload = getLocation()   