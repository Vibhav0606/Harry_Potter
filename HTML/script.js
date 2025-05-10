function startSorting() {
  document.getElementById("sortingModal").style.display = "flex";
}

function sortUser() {
  let q1 = document.getElementById("q1").value.toLowerCase();
  let q2 = document.getElementById("q2").value.toLowerCase();
  let q3 = document.getElementById("q3").value.toLowerCase();

  let houseData = {
    Gryffindor: {
      image: "https://i.pinimg.com/originals/79/71/8c/79718c4a978bfa756ca6aafd8387c220.jpg",
      desc: "Bravery, daring, nerve, and chivalry."
    },
    Hufflepuff: {
      image: "https://cdn.unifiedcommerce.com/content/product/media/large/840391145573.jpg",
      desc: "Loyalty, patience, fair play, and hard work."
    },
    Ravenclaw: {
      image: "https://m.media-amazon.com/images/I/61kz9OPkvTL.jpg",
      desc: "Wisdom, wit, creativity, and learning."
    },
    Slytherin: {
      image: "https://sw6.elbenwald.de/media/01/2b/a5/1670024341/E1073991_2.jpg",
      desc: "Ambition, cunning, leadership, and resourcefulness."
    }
  };

  let house = "Hufflepuff";

  if (q1.includes("brave") || q3.includes("courage")) {
    house = "Gryffindor";
  } else if (q1.includes("intelligent") || q2.includes("strategy")) {
    house = "Ravenclaw";
  } else if (q1.includes("ambition") || q2.includes("power")) {
    house = "Slytherin";
  }

  document.getElementById("houseName").textContent = house;
  document.getElementById("houseImage").src = houseData[house].image;
  document.getElementById("houseDesc").textContent = houseData[house].desc;

  document.getElementById("houseDisplay").style.display = "block";
  document.getElementById("sortingModal").style.display = "none";
}
