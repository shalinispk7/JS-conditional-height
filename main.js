let height=parseInt(prompt("Enter your height"));
if((height>30)&&(height<150)){
document.write("Height of the person is "+height+" so, The person is Small");
}
else if((height>=150) && (height<165 )){
document.write("Height of the person is "+height+" so, The person is average height");
}
else if((height>=165) && (height<=195 )) {
document.write("Height of the person is "+height+" so, The person is taller");
}
else{
document.write("Height of the person is "+height+" so, The person is abnormal");
}