import * as firebase from "../../services/firebase.js";




let bagPost = {
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


async function createPosts() {
    // Add a new document with a generated id.
    
    const docRef = await firebase.firestore.addDoc(
      firebase.firestore.collection(firebase.db, 'blogPost'),
      
        blogPost
      
    );
    console.log('Document written with ID: ', docRef.id);
  
  }


 

  function formSubmit() {
  let form = document.getElementById("theform");
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const description = document.getElementById("description");
  const header = document.getElementById("header");
  const content = document.getElementById("content");

  blogPost.title = title.value;
  blogPost.author = author.value;
  blogPost.description = description.value;
  blogPost.header = header.value;
  blogPost.content = content.value;

  title.value = "";
  author.value = "";
  description.value = "";
  header.value = "";
  content.value = "";

  

  createPosts();
  
}



//createPosts();

