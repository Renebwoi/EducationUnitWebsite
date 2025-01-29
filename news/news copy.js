// let news = [
//     {
//         id: 1,
//         image: "../otherImages/OIP.jfif",
//         headlines: "The Innovation Unit celebrates another year of progress",
//         body: "ultrices hendrerit laoreet scelerisque tincidunt sapien orci sodales. odio non sed Lorem efficitur. odio odio Nunc elit maximus ex amet, Praesent tortor. Praesent sit efficitur. ultrices leo. dignissim, sed Quisque elit id non. fringilla ipsum laoreet at, Lorem viverra Donec sapien maximus vehicula, lacus vitae vehicula, viverra diam consectetur In maximus quam ullamcorper Nam Nam non ex odio id Nam placerat. tempor ex elementum malesuada ex in Lorem urna urna odio lacus",
//         datePublished: "Fri Jan 10 2025 03:54:01 GMT+0100 (West Africa Standard Time)"
//     },
//     {
//         id: 2,
//         image: "../otherImages/R.jfif",
//         headlines: "The Innovation Unit prepares for another year of progress",
//         body: "ultrices hendrerit laoreet scelerisque tincidunt sapien orci sodales. odio non sed Lorem efficitur. odio odio Nunc elit maximus ex amet, Praesent tortor. Praesent sit efficitur. ultrices leo. dignissim, sed Quisque elit id non. fringilla ipsum laoreet at, Lorem viverra Donec sapien maximus vehicula, lacus vitae vehicula, viverra diam consectetur In maximus quam ullamcorper Nam Nam non ex odio id Nam placerat. tempor ex elementum malesuada ex in Lorem urna urna odio lacus",
//         datePublished: "Fri Jan 10 2025 04:13:19 GMT+0100 (West Africa Standard Time)"
//     },
//     {
//         id: 3,
//         image: "../otherImages/R.jfif",
//         headlines: "The Innovation Unit anticipates another year of progress",
//         body: "ultrices hendrerit laoreet scelerisque tincidunt sapien orci sodales. odio non sed Lorem efficitur. odio odio Nunc elit maximus ex amet, Praesent tortor. Praesent sit efficitur. ultrices leo. dignissim, sed Quisque elit id non. fringilla ipsum laoreet at, Lorem viverra Donec sapien maximus vehicula, lacus vitae vehicula, viverra diam consectetur In maximus quam ullamcorper Nam Nam non ex odio id Nam placerat. tempor ex elementum malesuada ex in Lorem urna urna odio lacus",
//         datePublished: "Sun Nov 10 2024 04:36:52 GMT+0100 (West Africa Standard Time)"
//     }
// ] 

// // function to exclude news items that are older than a month and place the excluded items in a new array
// let currentNews = []
// let oldNews = [] 
// let currentDate = new Date()
// for(let i = 0; i < news.length; i++){
//     let newsDate = new Date(news[i].datePublished)
//     let difference = currentDate - newsDate
//     let days = difference/(1000*60*60*24)
//     if(days < 30){
//         currentNews.push(news[i])
//     }else{
//         oldNews.push(news[i])
//     }
// }
// console.log(oldNews)

// // console.log(new Date())
// let picture = document.querySelector(".newsbox>img")
// let headline = document.querySelector(".newsbox>h2")
// let body = document.querySelector(".newsbox>p")

// // function to cycle through the news array. anytime the function is called, it will display the next news item in the array
// let i = 0  // this variable will be used to keep track of the current news item being displayed
// function nextNews(){
//     picture.src = currentNews[i].image
//     headline.textContent = currentNews[i].headlines
//     body.textContent = currentNews[i].body
//     i++
//     if(i == currentNews.length){
//         i = 0
//     }
// }
// // another function to cycle through the news array. anytime the function is called, it will display the previous news item in the array
// function previousNews(){
//     i--
//     if(i < 0){
//         i = currentNews.length - 1
//     }
//     picture.src = currentNews[i].image
//     headline.textContent = currentNews[i].headlines
//     body.textContent = currentNews[i].body
// }

// let oldImg = document.querySelector(".moreNews>img")
// let oldHeadline = document.querySelector(".news>h2")
// let oldBody = document.querySelector(".news>p")
// let main = document.querySelector("main")

// //         <section class="moreNews">
// // <!-- an image and a div containing a heading and paragraph -->
// // <img src="../otherImages/Rr.jfif" alt="news">
// // <div class="news">
// //    <h2>News 2</h2>
// //    <p>
// //        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
// //        ultrices hendrerit laoreet scelerisque tincidunt sapien orci sodales. odio non 
// //        sed Lorem efficitur. odio odio Nunc elit maximus ex amet, Praesent tortor. 
// //        Praesent sit efficitur. ultrices leo. dignissim, sed Quisque elit id non. fringilla
// //    </p>
// // </div>
// // </section>

// // cycle through the oldNews array. for each news item, create a new section element, an image element and a div element. append the image and div elements to the section element. append the section element to main element
// for(let i = 0; i < oldNews.length; i++){
//     let section = document.createElement("section")
//     // assign the section element a class name of moreNews
//     section.className = "moreNews"
//     let img = document.createElement("img")
//     let div = document.createElement("div")
//     div.className = "news"
//     let h2 = document.createElement("h2")
//     let p = document.createElement("p")
//     img.src = oldNews[i].image
//     h2.textContent = oldNews[i].headlines
//     p.textContent = oldNews[i].body
//     div.appendChild(h2)
//     div.appendChild(p)
//     section.appendChild(img)
//     section.appendChild(div)
//     main.appendChild(section)
// }

// function to get all news items and display it.
function showNews(){
   
    // upload user details
    // var user = JSON.parse(localStorage.getItem('userLoginDetails'));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3003/api/getNews', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({email:"email@gmail.com"}));
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            // code from here
            

        }
    }
    

}
showNews()
