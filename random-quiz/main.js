document.getElementById("btn").addEventListener("click", quizMark);

function quizMark() {
  let name1 = document.getElementById("input1").value;
  let name2 = document.getElementById("input2").value;
  let name3 = document.getElementById("input3").value;
  name = name.toLowerCase();

  if (name1 == "trump" || name1 == "donald trump") {
    document.getElementById("bruh1").innerHTML = "CORRECTTTTT";

    document.getElementById("bruh1").style.color = "green";
  } else if (name1 != "trump" || name1 != "donald trump") {
    document.getElementById("bruh1").innerHTML = "WRONGGGGGGGGGGG";

    document.getElementById("bruh1").style.color = "red";
  } else if (name2 == "iron man" || name2 == "ironman") {
    document.getElementById("bruh2").innerHTML = "CORRECTTTTT";

    document.getElementById("bruh2").style.color = "green";
  } else if (name2 != "iron man" || name2 != "ironman") {
    document.getElementById("bruh2").innerHTML = "WRONGGGGGGGGGGG";

    document.getElementById("bruh2").style.color = "red";
  } else if (name3 == "john cena" || name2 == "johncena") {
    document.getElementById("bruh3").innerHTML = "CORRECTTTTT";

    document.getElementById("bruh3").style.color = "green";
  } else if (name3 != "john cena" || name2 != "johncena") {
    document.getElementById("bruh3").innerHTML = "WRONGGGGGGGGGGG";

    document.getElementById("bruh3").style.color = "red";
  } else if (
    name1 == "trump" ||
    (name1 == "donald trump" && name2 == "ironman") ||
    (name2 == "iron man" && name3 == "john cena") ||
    name3 == "johncena"
  ) {
    document.getElementById("ans").innerHTML = "3/3";
  } else if (
    name1 == "trump" ||
    (name1 == "donald trump" && name2 == "iron man") ||
    (name2 == "ironman" && name3 != "john cena") || 
    "johncena"
  ) {
    document.getElementById("ans").innerHTML = "2/3";
  }
}
