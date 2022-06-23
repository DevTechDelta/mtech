/* 
NO NEED FOR JSON BECAUSE WE KNOW ITS 57 IMAGES AND THEIR NAMES ARE NUMBER FROM 1-57 AND THEY ALL HAVE THE SAME FILE EXTENTION. JUST CREATE A HACK FOR LOOP. 
AND PRESENT IT
var allbg = [
    {"pi":"1","prm": "1.jfif","prf": ""},
  ]; */
  reaidavatar();
  function reaidavatar(){
    var w = window.innerWidth;
      //alert(w)
    var tmailt = document.getElementById("tmailt");
    if(w < 400){
      tmailt.style.marginLeft = "-25px";
      tmailt.style.fontSize = "8px";
    }else if(w < 480){
      tmailt.style.marginLeft = "-25px";
    }
  }
var allprod = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
var productlength = 57;
productlist();
function productlist() {
    var TEXT = "";
      for (let i = 0; i < allprod.length; i++) {
          var pri = allprod[i];
          //console.log(products)  
          TEXT += `<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div class="property-item mb-30">
          <a href="javascript:;" class="img">
          <img src="images/products/${pri}.jfif" alt="multi-tech design" class="img-fluid" style="width: 100%; height: 220px;">
          </a>
          <div class="property-content">
          <div class="price mb-2"><span>MT 00${pri}</span></div>
          
          </div>
          </div> 
          </div>`;
      }
      document.getElementById("fpitem").innerHTML = TEXT;
  }