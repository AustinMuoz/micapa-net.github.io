const InsertCol = (anchor, navDiv) => {
    let content = "";

    navDiv.innerHTML = `
    <link rel="stylesheet" href="../css/nav-bar.css">

    <div class="nav-bar">
            <div class="row">`;

    for(let i = 0; i < anchor.length; i++){
        navDiv.innerHTML += `
            <div class="col">
                <div class="content-link">
                    <a class="link" href="#anchor-${i+1}">${i+1}</a>
                </div>
            </div>
        `
        // = content;
    }
    navDiv.innerHTML += `         
            </div>
    </div>

`;
    console.log(content)
    return content;
}

const navDiv = document.querySelector(".menu-bar")



let anchor = [];

anchor.push(document.getElementById('anchor-1'));
anchor.push(document.getElementById('anchor-2'));
anchor.push(document.getElementById('anchor-3'));
anchor.push(document.getElementById('anchor-4'));
anchor.push(document.getElementById('anchor-5'));


// <div class="col">
// <div class="content-link">
//     <a class="link" href="#">${i+1}</a>
// </div>
// </div>

// console.log(anchor);

anchor = anchor.filter(e => e !== null);
console.log(anchor);

let titles = anchor.length; 

let content1 = `
<link rel="stylesheet" href="../css/nav-bar.css">
    <div class="nav-bar">
        <div class="row">

`
let content2 = ``;

let content3 = ``;


  for(let i = 0; i < titles; i++){
       content2 += `
           <div class="col">
               <div class="content-link">
                   <a class="link" href="#anchor-${i+1}">${i+1}</a>
               </div>
           </div>
       `
   }

   console.log(content2);

   content3 = `
        </div>
   </div>
   
   `
   let contentF = content1 + content2 + content3;
   console.log(contentF)

   navDiv.innerHTML = contentF;
  




