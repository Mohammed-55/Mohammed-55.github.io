let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let webtitle = document.getElementById("webtitle");
let webname= document.getElementById("webname");
let home=document.getElementById("Home");
let about= document.getElementById("About");
let resume= document.getElementById("Resume");
let certificate= document.getElementById("Certificates");
let fotterspan=document.getElementById("fotterspan");
let cert=document.getElementById("cert");
let c1=document.getElementById("c1");
let c2=document.getElementById("c2");
let c3=document.getElementById("c3");
let c4=document.getElementById("c4");
let c5=document.getElementById("c5");
let c6=document.getElementById("c6");
let c7=document.getElementById("c7");
let c8=document.getElementById("c8");
let c9=document.getElementById("c9");
let c10=document.getElementById("c10");
let c12=document.getElementById("c12");
let c13=document.getElementById("c13");
let c14=document.getElementById("c14");
let c16=document.getElementById("c16");
let c17=document.getElementById("c17");
let c18=document.getElementById("c18");
let c19=document.getElementById("c19");



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
     fotterspan.innerHTML="محمد بن شيهون";
cert.innerHTML="الشهادات";
    c1.innerHTML=" المعسكر التدريبي لتطوير الويب";
     c2.innerHTML="برمجة أندرويد";
     c3.innerHTML="تقنيات الرسوم المتحركة في تصميم المواقع";
     c4.innerHTML="إخفاء البيانات";
     c5.innerHTML="البيانات الضخمة";
c6.innerHTML="الأمن السيبراني والذكاء الاصطناعي";
c7.innerHTML="المحفوظات الإلكترونية";
c8.innerHTML="Flutter";
c9.innerHTML="انترنت الأشياء";
c10.innerHTML="مقدمة في برمجة Arduino وإنترنت الأشياء";
c12.innerHTML="مقدمة إلى NoSQL و MongoDB";
c13.innerHTML="Linux+";
c14.innerHTML="تطبيقات Microsoft365";
c16.innerHTML="برمجة تطبيقات iOS في Swift";
c17.innerHTML="أساسيات برمجة بايثون";
c18.innerHTML="أمن المعلومات";
c19.innerHTML="IC3";
     



}else if(getLanuage ==="english"){
    document.body.dir ="ltr";
    webtitle.innerHTML = "Mohammed Binshihon Website - Index";
     webname.innerHTML="Mohammed Binshion";
     home.innerHTML="Home";
     about.innerHTML="About";
     resume.innerHTML="Resume";
     certificate.innerHTML="Certificates";
     fotterspan.innerHTML="Mohammed Binshihon";
     cert.innerHTML="Certificates";
     c1.innerHTML=" Web Development Bootcamp";
     c2.innerHTML="Android Programming";
     c3.innerHTML="Animation Techniques in Web Design";
     c4.innerHTML="Anonymization";
     c5.innerHTML="Big Data";
c6.innerHTML="Cyber ​​security and artificial intelligence";
c7.innerHTML="Electronic Archives";
c8.innerHTML="Flutter";
c9.innerHTML="Internet Of Things";
c10.innerHTML="introduction to Arduino and IOT";
c12.innerHTML="introduction to NoSQL and MongoDB";
c13.innerHTML="Linux+";
c14.innerHTML="Microsoft365 applications";
c16.innerHTML="Programming iOS applications in Swift";
c17.innerHTML="Python Programming basics";
c18.innerHTML="Information Security";
c19.innerHTML="IC3";


    

}


}
