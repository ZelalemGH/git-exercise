let button = document.getElementById("btn");
      let paragraph = document.querySelector(".para1");
      let data = document.getElementById("data");

      let header = document.querySelector("#header");

      button.addEventListener("click", function () {
        //console.log(`you clicked a button, congrats!`)
        //paragraph.style.border = "1px solid red";
        //console.log(data.value);
        //if the length of the data is more than five then have green border
        //if less have red border.
        if (data.value.length > 5) {
          paragraph.style.border = "1px solid green";
        } else {
          paragraph.style.border = "1px solid red";
        }

        //let the user add the color and use that color on click to change
        //the header color.
        header.style.color = data.value;
      });

      //mouseover
      header.addEventListener("mouseover", function () {
        console.log(`you mouseover on header, congrats!`);
      });
      header.style.color = "blue";
      header.style.backgroundColor = "yellow";

      //on a click of a button, I want to have the red 1px solid border on
      //paragraph