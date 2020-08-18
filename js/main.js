const name = [
  {
    name: "stawberry cake",
    price: "$15",
    category: "cakes",
    img: "./images/cake1.jpg",
  },
  {
    name: "chocolate cake",
    price: "$19",
    category: "cakes",
    img: "./images/cake2.jpg",
  },
  {
    name: "caramel cake",
    price: "$20",
    category: "cakes",
    img: "./images/cake3.jpg",
  },
  {
    name: "redvelvet cupcake",
    price: "$11",
    category: "cupcake",
    img: "./images/cup1.jpg",
  },
  {
    name: "dark choco cupcake",
    price: "$19",
    category: "cupcake",
    img: "./images/cup2.jpg",
  },
  {
    name: "vanilla cupcake",
    price: "$22",
    category: "cupcake",
    img: "./images/cup3.jpg",
  },
  {
    name: "powder donut",
    price: "$15",
    category: "donut",
    img: "./images/donut1.jpg",
  },
  {
    name: "gazed donut",
    price: "$17",
    category: "donut",
    img: "./images/donut2.jpg",
  },
  {
    name: "rasberry jelly donut",
    price: "$27",
    category: "donut",
    img: "./images/donut3.jpg",
  },
  {
    name: "icecream rolls",
    price: "$32",
    category: "sweet",
    img: "./images/sweet1.jpg",
  },
  {
    name: "macrons",
    price: "$24",
    category: "sweet",
    img: "./images/sweet2.jpg",
  },
  {
    name: "nutella waffles",
    price: "$34",
    category: "sweet",
    img: "./images/sweet3.jpg",
  },
];
var cakes = [];
var cupcake = [];
var donut = [];
var sweet = [];
var todo = [];
/*main*/
var ul = document.getElementById("myUL");
name.map((item) => {
  var li = document.createElement("div");
  li.setAttribute("class", "col-sm-3");
  li.style =
    "background-color:lightgrey;border-radius:25px;margin :1px 1px 1px 1px";

  var para_name = document.createElement("span");
  para_name.appendChild(document.createTextNode(item.name.toUpperCase()));
  para_name.style = "font-weight:bold";
  var break_tag = document.createElement("br");
  var price_value = document.createElement("span");
  price_value.style = "float:right;font-style: italic;font-weight:bold;";
  price_value.appendChild(document.createTextNode(item.price));
  price_value.setAttribute("class", "badge");

  li.innerHTML =
    "<img src=" +
    item.img +
    ' width=250 height=150 class="img_profile" style="margin-top:20px;margin-bottom:20px">';
  li.appendChild(break_tag);
  li.appendChild(break_tag);
  li.appendChild(para_name);
  li.appendChild(price_value);

  ul.appendChild(li);
});

/*all categories*/
function allcategory() {
  location.reload();
}

/*cakes*/
function onlycakes() {
  ul = document.getElementById("myULCAKES");
  document.getElementById("myULCAKES").style.display = "";
  cakes = [...name.filter((todo) => todo.category === "cakes")];
  document.getElementById("myUL").style.display = "none";
  cakes.map((item) => {
    var li = document.createElement("div");
    li.setAttribute("class", "col-sm-3");
    li.style =
      "background-color:lightgrey;border-radius:25px;margin :1px 1px 1px 1px";

    var para_name = document.createElement("span");
    para_name.appendChild(document.createTextNode(item.name.toUpperCase()));
    para_name.style = "font-weight:bold";
    var break_tag = document.createElement("br");
    var price_value = document.createElement("span");
    price_value.style = "float:right;font-style: italic;font-weight:bold;";
    price_value.appendChild(document.createTextNode(item.price));
    price_value.setAttribute("class", "badge");

    li.innerHTML =
      "<img src=" +
      item.img +
      ' width=250 height=150 style="margin-top:20px;margin-bottom:20px">';
    li.appendChild(break_tag);
    li.appendChild(break_tag);
    li.appendChild(para_name);
    li.appendChild(price_value);

    ul.appendChild(li);
  });
  document.getElementById("myInput").value = "";
  if (true) {
    document.getElementById("myUL").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("myULCUPCAKE").style.display = "none";
    document.getElementById("myULSWEET").style.display = "none";
    document.getElementById("myULDONUT").style.display = "none";
  }
}

/*cupcakes*/
function onlycupcake() {
  document.getElementById("myULCUPCAKE").style.display = "";
  ul = document.getElementById("myULCUPCAKE");
  cupcake = [...name.filter((todo) => todo.category === "cupcake")];
  document.getElementById("myUL").style.display = "none";
  cupcake.map((item) => {
    var li = document.createElement("div");
    li.setAttribute("class", "col-sm-3");
    li.style =
      "background-color:lightgrey;border-radius:25px;margin :1px 1px 1px 1px";

    var para_name = document.createElement("span");
    para_name.appendChild(document.createTextNode(item.name.toUpperCase()));
    para_name.style = "font-weight:bold";
    var break_tag = document.createElement("br");
    var price_value = document.createElement("span");
    price_value.style = "float:right;font-style: italic;font-weight:bold;";
    price_value.appendChild(document.createTextNode(item.price));
    price_value.setAttribute("class", "badge");

    li.innerHTML =
      "<img src=" +
      item.img +
      ' width=250 height=150 style="margin-top:20px;margin-bottom:20px">';
    li.appendChild(break_tag);
    li.appendChild(break_tag);
    li.appendChild(para_name);
    li.appendChild(price_value);

    ul.appendChild(li);
  });
  document.getElementById("myInput").value = "";
  if (true) {
    document.getElementById("myUL").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("myULCAKES").style.display = "none";
    document.getElementById("myULSWEET").style.display = "none";
    document.getElementById("myULDONUT").style.display = "none";
  }
}

/*SWEET*/
function onlysweet() {
  document.getElementById("myULSWEET").style.display = "";
  ul = document.getElementById("myULSWEET");
  sweet = [...name.filter((todo) => todo.category === "sweet")];
  document.getElementById("myUL").style.display = "none";
  sweet.map((item) => {
    var li = document.createElement("div");
    li.setAttribute("class", "col-sm-3");
    li.style =
      "background-color:lightgrey;border-radius:25px;margin :1px 1px 1px 1px";

    var para_name = document.createElement("span");
    para_name.appendChild(document.createTextNode(item.name.toUpperCase()));
    para_name.style = "font-weight:bold";
    var break_tag = document.createElement("br");
    var price_value = document.createElement("span");
    price_value.style = "float:right;font-style: italic;font-weight:bold;";
    price_value.appendChild(document.createTextNode(item.price));
    price_value.setAttribute("class", "badge");

    li.innerHTML =
      "<img src=" +
      item.img +
      ' width=250 height=150 style="margin-top:20px;margin-bottom:20px">';
    li.appendChild(break_tag);
    li.appendChild(break_tag);
    li.appendChild(para_name);
    li.appendChild(price_value);

    ul.appendChild(li);
  });
  document.getElementById("myInput").value = "";
  if (true) {
    document.getElementById("myUL").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("myULCAKES").style.display = "none";
    document.getElementById("myULCUPCAKE").style.display = "none";
    document.getElementById("myULDONUT").style.display = "none";
  }
}

/*donut*/
function onlydonut() {
  document.getElementById("myULDONUT").style.display = "";
  ul = document.getElementById("myULDONUT");
  donut = [...name.filter((todo) => todo.category === "donut")];
  document.getElementById("myUL").style.display = "none";
  donut.map((item) => {
    var li = document.createElement("div");
    li.setAttribute("class", "col-sm-3");
    li.style =
      "background-color:lightgrey;border-radius:25px;margin :1px 1px 1px 1px";

    var para_name = document.createElement("span");
    para_name.appendChild(document.createTextNode(item.name.toUpperCase()));
    para_name.style = "font-weight:bold";
    var break_tag = document.createElement("br");
    var price_value = document.createElement("span");
    price_value.style = "float:right;font-style: italic;font-weight:bold;";
    price_value.appendChild(document.createTextNode(item.price));
    price_value.setAttribute("class", "badge");

    li.innerHTML =
      "<img src=" +
      item.img +
      ' width=250 height=150 style="margin-top:20px;margin-bottom:20px">';
    li.appendChild(break_tag);
    li.appendChild(break_tag);
    li.appendChild(para_name);
    li.appendChild(price_value);

    ul.appendChild(li);
  });
  document.getElementById("myInput").value = "";
  if (true) {
    document.getElementById("myUL").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("myULCAKES").style.display = "none";
    document.getElementById("myULCUPCAKE").style.display = "none";
    document.getElementById("myULSWEET").style.display = "none";
  }
}

function myFunction() {
  var ul = document.getElementById("search");
  var input = document.getElementById("myInput");

  todo = [...name.filter((todo) => todo.name.includes(input.value))];
  document.getElementById("myUL").style.display = "none";
  todo.map((item) => {
    var li = document.createElement("div");
    li.setAttribute("class", "col-sm-3");
    li.style =
      "background-color:lightgrey;border-radius:25px;margin :1px 1px 1px 1px";

    var para_name = document.createElement("span");
    para_name.appendChild(document.createTextNode(item.name.toUpperCase()));
    para_name.style = "font-weight:bold";
    var break_tag = document.createElement("br");
    var price_value = document.createElement("span");
    price_value.style = "float:right;font-style: italic;font-weight:bold;";
    price_value.appendChild(document.createTextNode(item.price));
    price_value.setAttribute("class", "badge");

    li.innerHTML =
      "<img src=" +
      item.img +
      ' width=250 height=150 style="margin-top:20px;margin-bottom:20px">';
    li.appendChild(break_tag);
    li.appendChild(break_tag);
    li.appendChild(para_name);
    li.appendChild(price_value);

    ul.appendChild(li);
  });

  if (input.value === "") {
    document.getElementById("myUL").style.display = "";
    document.getElementById("search").style.display = "none";
    document.getElementById("myULCAKES").style.display = "none";
    document.getElementById("myULSWEET").style.display = "none";
    document.getElementById("myULCUPCAKE").style.display = "none";

    location.reload();
  }
}
