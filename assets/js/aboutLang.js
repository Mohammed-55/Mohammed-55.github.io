let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let mainhtml=document.getElementById("mainhtmlgg");
let webtitle = document.getElementById("webtitle");
let webname= document.getElementById("webName");
let home=document.getElementById("Home");
let about= document.getElementById("About");
let resume= document.getElementById("Resume");
let certificate= document.getElementById("Certificates");
let fotterspan=document.getElementById("fotterspan");
let degree=document.getElementById("degree");
let birthday=document.getElementById("birthday");
let mywebsite=document.getElementById("mywebsite");
let city=document.getElementById("city");
let age=document.getElementById("age");
let mail=document.getElementById("mail");
let aboutme=document.getElementById("aboutme");
let summary=document.getElementById("summary");
let myskill=document.getElementById("mainskills");

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
    webtitle.innerHTML="موقع محمد بن شيهون - عني";
    home.innerHTML="الصفحة الرئيسية";
     about.innerHTML="عني";
     resume.innerHTML="السيرة الذاتية";
     certificate.innerHTML="الشهادات";
     fotterspan.innerHTML="محمد بن شيهون";
     degree.innerHTML= "الشهادة: بكالوريوس"
birthday.innerHTML="تاريخ الميلاد: 25 صفر 1419";
city.innerHTML="المدينة: المدينة: جدة ، المملكة العربية السعودية";
age.innerHTML="العمر: 23";
mywebsite.innerHTML="الموقع: mohammed-cv.ga";
mail.innerHTML="البريد الالكتروني: m7mdmyb@gmail.com";
aboutme.innerHTML="عني";
summary.innerHTML="خريج علوم الكمبيوتر ومهتم بتطوير الويب ، أبحث عن دور يمكنني من خلاله أن أنمو وأتعلم منه أعضاء الفريق ذوي الخبرة أثناء استخدام المهارات التي قمت بتحسينها لمساعدتهم";
myskill.innerHTML="المهارات" ;    
     



}else if(getLanuage ==="english"){
    document.body.dir ="ltr";
    webtitle.innerHTML = "Mohammed Binshihon Website - About";
     webname.innerHTML="Mohammed Binshion";
     home.innerHTML="Home";
     about.innerHTML="About";
     resume.innerHTML="Resume";
     certificate.innerHTML="Certificates";
    fotterspan.innerHTML="Mohammed Binshihon";
    degree.innerHTML= "Degree: Bachelor"
birthday.innerHTML="Birthday: 19 Jun 1998";
city.innerHTML="City: Jeddah, KSA";
age.innerHTML="Age: 23";
mywebsite.innerHTML="Website: mohammed-cv.ga";
mail.innerHTML="Email: m7mdmyb@gmail.com";
aboutme.innerHTML="About me";
summary.innerHTML="Graduate of computer science intrested in web development, Looking for a role where I can grow and learn from experienced team members while using the skills that I improved to help them.";
myskill.innerHTML="Skills" ;
     

    

}


}
