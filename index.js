//model to store current cat data and all cats data
var model={
  curCat: null,
  
  cats:[
    {
      name: "Mars",
      src:"http://hdimagesnew.com/wp-content/uploads/2015/11/cute-kittens-free-animal-wallpaper.jpeg",
      clicksCount:0
    },
    {
      name: "June",
      src:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-lKp1clQ9gv5ZMPZ6b1oUY_xNVOFKTjIdMtyTr0cUO6GfW1kikQ",
      clicksCount:0
    },
    {
      name: "Tommy",
      src:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqrYNQ4Mt92GfR4YgHdAkQhfekKrn8CEu26nvUpZNrsBwF-CPfFA",
      clicksCount:0
    },
    
 ]
}

// controller
var controller={
  init:function(){
    model.curCat=model.cats[0];
    catView.init();
    catListView.init();
  },
  
  getCats:function(){
  return model.cats;
  },
  
  getCurCat:function(){
  return model.curCat;
},
  
  setCurCat:function(catParam){
     model.curCat=catParam;
  },
  
  incrementCounter:function(){
    model.curCat.clicksCount++;
    catView.render();
  }
}

//view to render cat name,image n clicks count
var catView={
  
  init:function(){
    // get element by ids
    this.elemCatName= document.getElementById("cat-name");
    this.elemCatImage= document.getElementById("cat-image");
    this.elemClickCount= document.getElementById("clicks-count");
    
    // add eventlistener to the cat
    this.elemCatImage.addEventListener("click", function(){
      controller.incrementCounter();
    })
    
    this.render();
  },
  
  render:function(){
    var currentCat= controller.getCurCat();
    this.elemCatName.textContent=currentCat.name;
    this.elemCatImage.src=currentCat.src;
 this.elemClickCount.textContent=currentCat.clicksCount;
  
  }
}

// view to create list of cats
var catListView={
  
  init:function(){
    this.catList=document.getElementById("catList");
    this.render();
  },
  
  render:function(){
    var cattemp;
    var allCats= controller.getCats();
    allCats.forEach(function(cattemp){
      elem = document.createElement("li");
      elem.textContent = cattemp.name;
     elem.addEventListener("click", (function(cattempcopy){
        return function(){
          controller.setCurCat(cattempcopy);
          catView.render();
        };
      })(cattemp));
      this.catList.appendChild(elem);
    })
  }
}

controller.init();


