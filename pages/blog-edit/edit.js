import * as firebase from "../../services/firebase.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

//console.log(params);

let ID = params.blogID;



async function fillText() {
    const querySnapshot = await firebase.firestore.getDocs(
      firebase.firestore.collection(firebase.db, "blogPost")
    );
  
    querySnapshot.forEach((doc) => {
      const blog = doc.data();
      
      if(blog.id == ID)
      {
        const title = document.getElementById("title");
        const author = document.getElementById("author");
        const description = document.getElementById("description");
        const header = document.getElementById("header");
        const content = document.getElementById("content");
  
        
        title.value = blog.title;
        author.value = blog.author;
        description.value = blog.description;
        header.value = blog.header;
        content.value = blog.content;
      }
    });
  } 

  

  /*async function getHash() {
    const querySnapshot = await firebase.firestore.getDocs(
      firebase.firestore.collection(firebase.db, "blogPost")
    );
  
    querySnapshot.forEach((doc) => {
      const blog = doc.data();
      
      if(blog.id == ID)
      {
        hash = doc.id;
        console.log('hashman' + hash);
        console.log('idman'+doc.id);
      }
    });
  } */

  


  const blogz = {
    id: 1,
    title: "title",
    author: "author",
    description: "desc",
    dateCreated: new Date(),
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/todo-app-a2a71.appspot.com/o/javascript.png?alt=media&token=70cb3000-1233-471e-8b67-6a0fa1a66505",
    header: "header",
    content: "text",
  }; 


  async function updateblogz()
  {

    let hashy;

    const querySnapshot = await firebase.firestore.getDocs(
      firebase.firestore.collection(firebase.db, "blogPost")
    );
  
    querySnapshot.forEach((doc) => {
      const blog = doc.data();
      
      if(blog.id == ID)
      {
        hashy = doc.id;
        //console.log('hashman' + hash);
        console.log('idman'+doc.id);
      }
    });

    


    try{
        const docRef = firebase.firestore.doc(firebase.db, "blogPost", hashy)
        await firebase.firestore.updateDoc(docRef, blogz);
        console.log("document updated with ID: ", docRef.id);
    } catch(e){
        console.log("error");
    }


  }

  function formSubmit() {
  
   // getHash();


  console.log("start");
  

  
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const description = document.getElementById("description");
  const header = document.getElementById("header");
  const content = document.getElementById("content");

  blogz.title = title.value;
  blogz.author = author.value;
  blogz.description = description.value;
  blogz.header = header.value;
  blogz.content = content.value;
  
  blogz.id = ID;
  

  title.value = "";
  author.value = "";
  description.value = "";
  header.value = "";
  content.value = "";

 // console.log('hashy' + hash);

  
  updateblogz();
  

  

 
  
 
}


fillText();

const form = document.getElementById("theform");
form.addEventListener("submit", async (event) => {
  
    
  
    event.preventDefault();
    formSubmit();
    var popup = document.getElementById("myPop");
    popup.classList.toggle("show");
  

  
});



