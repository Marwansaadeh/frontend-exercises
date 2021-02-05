import { join } from "path";

interface IBOX {  
  title: String,  
  discription: String,  
  display(): void  
}


var Box1 :IBOX= {
  title: "first box",
  discription: "this is discription of the first box",
  display: function () {
      document.getElementsByClassName('boxes-text')[0].children[0].innerHTML = Box1.title.toString();
      document.getElementsByClassName('boxes-text')[0].children[1].innerHTML = Box1.discription.toString();
      console.log(Box1.title);
  }
};
var Box2 = {
  title: "first box",
  discription: "this is discription of the first box",
  display: function () {
      document.getElementsByClassName('boxes-text')[1].children[0].innerHTML = Box2.title.toString();
      document.getElementsByClassName('boxes-text')[1].children[1].innerHTML = Box2.discription.toString();
      console.log(Box2.title);
  }
};
var Box3 = {
  title: "first box",
  discription: "this is discription of the first box",
  display: function () {
      document.getElementsByClassName('boxes-text')[2].children[0].innerHTML = Box3.title.toString();
      document.getElementsByClassName('boxes-text')[2].children[1].innerHTML = Box3.discription.toString();
      console.log(Box1.title);
  }
};
var Box4 = {
  title: "first box",
  discription: "this is discription of the first box",
  display: function () {
      document.getElementsByClassName('boxes-text')[3].children[0].innerHTML = Box4.title.toString();
      document.getElementsByClassName('boxes-text')[3].children[1].innerHTML = Box4.discription.toString();
      console.log(Box1.title);
  }
};

console.log('typescripe works');

var arr = [Box1, Box2, Box3 ,Box4];
for (let index = 0; index < arr.length; index++) {
  arr[index].display()
  console.log('test');
}


var objects;

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    objects=data
  }
    
   );

  for (let index = 0; index < objects.length; index++) {
    if(index==4){
      break;
    }
    let box=JSON.parse(objects[index]);

    let element = document.createElement('div');    
    element.className="postbox";
    document.body.appendChild(element);
    
    let head = document.createElement("h3");
    element.appendChild(head);
    element.innerHTML=box["id"];

    document.getElementsByClassName('post-boxes')[0].appendChild(element);

    console.log('test');
  }

console.log('typescripe works')