let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let webtitle = document.getElementById("webtitle");
let webname= document.getElementById("webName");
let home=document.getElementById("Home");
let about= document.getElementById("About");
let resume= document.getElementById("Resume");
let certificate= document.getElementById("Certificates");
let myname=document.getElementById("myname");
let mytitle=document.getElementById("mytitle");
let fotterspan=document.getElementById("fotterspan");
let aboutMe=document.getElementById("aboutMe");



arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Langu","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Langu","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Langu"));
};
function setLanugage(getLanuage){
if(getLanuage === "arabic"){
    document.body.dir ="rtl";
    webname.innerHTML = "محمد بن شيهون";
    webtitle.innerHTML="موقع محمد بن شيهون- الصفحه الرئيسيه";
    home.innerHTML="الصفحة الرئيسية";
     about.innerHTML="عني";
     resume.innerHTML="السيرة الذاتية";
     certificate.innerHTML="الشهادات";
     myname.innerHTML="محمد بن شيهون";
     mytitle.innerHTML="خريج جامعة الملك عبدالعزيز بشهادة البكالوريوس تخصص علوم حاسب";
     fotterspan.innerHTML="محمد بن شيهون";
     aboutMe.innerHTML="عني";
     



}else if(getLanuage ==="english"){
    document.body.dir ="ltr";
    webtitle.innerHTML = "Mohammed Binshihon Website - Index";
     webname.innerHTML="Mohammed Binshion";
     home.innerHTML="Home";
     about.innerHTML="About";
     resume.innerHTML="Resume";
     certificate.innerHTML="Certificates";
     myname.innerHTML="Mohammed Binshion";
     mytitle.innerHTML="I'm a computer scinece graduted from King Abdulaziz Univercity";
     fotterspan.innerHTML="Mohammed Binshihon";
     aboutMe.innerHTML="About Me";

    

}


}
