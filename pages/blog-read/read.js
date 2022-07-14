import * as firebase from "../../services/firebase.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

console.log(params);

let ID = params.blogID;

console.log(ID);

async function fillText() {
  const querySnapshot = await firebase.firestore.getDocs(
    firebase.firestore.collection(firebase.db, "blogPost")
  );

  querySnapshot.forEach((doc) => {
    const blogPost = doc.data();
    
    if(blogPost.id == ID)
    {
      const title = document.getElementById("title");
      const author = document.getElementById("author");
      const description = document.getElementById("description");
      const header = document.getElementById("header");
      const content = document.getElementById("content");

      
      title.innerText = blogPost.title;
      author.innerText = blogPost.author;
      description.innerText = blogPost.description;
      header.innerText = blogPost.header;
      content.innerText = blogPost.content;
    }
  });
} 

fillText();



//const title = document.getElementById("title");
//title.innerText = "test" ;


