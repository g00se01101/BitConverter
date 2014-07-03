function funcConv() {

  var btcValue = document.getElementById("txtBTC").value;
  var bitValue = document.getElementById("txtBit").value;

  document.getElementById("alertBoxWarning").style.display = 'none';
  document.getElementById("alertBoxNotNumeric").style.display = 'none';
  document.getElementById("alertBoxNull").style.display = 'none';

  if (bitValue != ""){
      if (btcValue !=""){ 
            document.getElementById("alertBoxWarning").style.display = 'block';
            document.getElementById("txtBit").value = "";
            document.getElementById("txtBTC").value = "";
      } else {
          if (isNumeric(bitValue) == true) {
            document.getElementById("txtBTC").value = bitValue / 1000000;
          } else {
            document.getElementById("alertBoxNotNumeric").style.display = 'block';
            document.getElementById("txtBit").value = "";
            return;
          }
      }
  } else {
       if (btcValue !=""){
          if (isNumeric(btcValue) == true){
            document.getElementById("txtBit").value = btcValue * 1000000;
          } else {
            document.getElementById("alertBoxNotNumeric").style.display = 'block';
            document.getElementById("txtBTC").value = "";
            return;
          }

       } else {
          document.getElementById("alertBoxNull").style.display = 'block';
       }
  }

}


function removeBTC() {
  document.getElementById("txtBTC").value = "";
}
function removeBits() {
  document.getElementById("txtBit").value = "";
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}