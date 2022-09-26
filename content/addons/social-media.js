/* Copy FontAwesome library link in your html head
for social media icons*/


function Social(name, url, icon){
    this.name = name; 
    this.url = url;
    this.icon = icon;
}


let facebook = new Social('Facebook', 'https://www.facebook.com/sharer/sharer.php?u=https://micapa.net/','')
let whatsapp = new Social('Facebook', 'https://api.whatsapp.com/send?text=%C3%9Anete%20a%20la%20mejor%20radio%20del%20mundo%20|%20La%20Radio%20de%20Camino%20|%20MICAPA','')
let instagram = new Social('Facebook', 'https://www.facebook.com/sharer/sharer.php?u=https://micapa.net/','')

console.log(facebook.name)




//  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />





// // Facebook Button
// <a href="https://www.facebook.com/sharer/sharer.php?u=micapa.net%2F&amp;src=sdkpreparse" class="facebook-btn btn">
//   <span class= "icon-sl" >
//      <i  class="fab fa-facebook-f"></i>
//   </span>
//   </a>



// // Twitter Button
// <a href="https://twitter.com/intent/tweet?url=micapa.net&text=Únete a la mejor radio del mundo | La radio del camino" class="twitter-btn btn">
//   <span class= "icon-sl" >
//      <i  class="fab fa-twitter"></i>
//   </span>
//   </a>



// // Pinterest Button
// <a href="http://pinterest.com/pin/create/button/?url=micapa.net&media=content/svg/micapa@LOGO.svg&description=Únete a la mejor radio del mundo | La radio del camino" class="pinterest-btn btn">
//   <span class= "icon-sl" >
//      <i  class="fab fa-pinterest-p"></i>
//   </span>
//   </a>



// // Linkedin Button
// <a href="https://www.linkedin.com/sharing/share-offsite/?url=micapa.net&title=Únete a la mejor radio del mundo | La radio del camino" class="linkedin-btn btn">
//   <span class= "icon-sl" >
//      <i  class="fab fa-linkedin-in"></i>
//   </span>
//   </a>



// // Reddit Button
// <a href="https://www.reddit.com/submit?url=micapa.net" class="reddit-btn btn">
//   <span class= "icon-sl" >
//      <i  class="fab fa-reddit-alien"></i>
//   </span>
//   </a>



// // Tumblr Button
// <a href="http://www.tumblr.com/share?v=3&u=micapa.net&t=Únete a la mejor radio del mundo | La radio del camino" class="tumblr-btn btn">
//   <span class= "icon-sl" >
//      <i  class="fab fa-tumblr"></i>
//   </span>
//   </a>



// // Google+ Button
// <a href="https://plus.google.com/share?url=micapa.net" class="google-plus-btn btn">
//   <span class= "icon-sl" >
//      <i  class="fab fa-google-plus-g"></i>
//   </span>
//   </a>



// // Buffer Button
// <a href="http://bufferapp.com/add?text=Únete a la mejor radio del mundo | La radio del camino&url=micapa.net" class="buffer-btn btn">
//   <span class= "icon-sl" >
//      <i  class="fab fa-buffer"></i>
//   </span>
//   </a>



// // Email Button
// <a href="mailto:info@example.com?&subject=&cc=&bcc=&body=micapa.net%0AÚnete a la mejor radio del mundo | La radio del camino" class="email-btn btn">
//   <span class= "icon-sl" >
//      <i  class="fas fa-envelope"></i>
//   </span>
//   </a>