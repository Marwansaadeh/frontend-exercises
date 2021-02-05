
var Box1 = {
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
var arr = [Box1, Box2, Box3, Box4];
for (var index = 0; index < arr.length; index++) {
    arr[index].display();
    console.log('test');
}


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) { return response.json(); })
    .then(function (data) {
        for (var index = 0; index < data.length; index++) {
            if (index == 4) {
                break;
            }
            let h3 = document.createElement("h3");
            h3.innerText = data[index]["id"];
            h3.className="postbox"
           document.getElementsByClassName('post-boxes')[0].appendChild(h3);
           let p1 = document.createElement("p");
           p1.innerHTML = data[index]["title"];
           
           p1.className="postbox"
          document.getElementsByClassName('post-boxes')[0].appendChild(p1);
          let p2 = document.createElement("p");
          p2.innerHTML = data[index]["body"].replace(/[<]br[^>]*[>]/gi,"")
          p2.className="postbox"
         document.getElementsByClassName('post-boxes')[0].appendChild(p2);
        }
});


console.log('typescripe works');
//# sourceMappingURL=app.js.map