function checknum(){
  var mobileNo = document.getElementById("telno").value;
mobileNo = Math.floor( mobileNo / 1000000000);
  document.getElementById("username").value = mobileNo;
  if(mobileNo <= 6 || mobileNo > 9){
    // alert("Wrong Mobile number");
    document.getElementById("correct").innerHTML = "Please Enter Correct Phone number";
  }

}
