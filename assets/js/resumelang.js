let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let mainhtml=document.getElementById("mainhtmlgg");
let webtitle = document.getElementById("webtitle");
let webname= document.getElementById("webname");
let home=document.getElementById("Home");
let about= document.getElementById("About");
let resume= document.getElementById("Resume");
let certificate= document.getElementById("Certificates");
let fotterspan=document.getElementById("fotterspan");
let rus=document.getElementById("rus");
let summa=document.getElementById("summa");
let myname=document.getElementById("myname");
let sumary=document.getElementById("sumary");
let prof=document.getElementById("prof");
let intership=document.getElementById("Intership");
let smart=document.getElementById("smart");
let method=document.getElementById("method");
let method1=document.getElementById("method1");
let method2=document.getElementById("method2");
let method3=document.getElementById("method3");
let method4=document.getElementById("method4");
let restitle=document.getElementById("restitle");
let mydegree=document.getElementById("mydegree");
let uni=document.getElementById("uni");
let proj=document.getElementById("proj");
let projname=document.getElementById("projname");
let projtitle=document.getElementById("projtitle");
let projdisc=document.getElementById("projdisc");




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
    webtitle.innerHTML="موقع محمد بن شيهون - السيرة الذاتية";
    home.innerHTML="الصفحة الرئيسية";
     about.innerHTML="عني";
     resume.innerHTML="السيرة الذاتية";
     certificate.innerHTML="الشهادات";
     fotterspan.innerHTML="محمد بن شيهون";
    rus.innerHTML="السيرة ذاتية";
    summa.innerHTML="موجز";
    myname.innerHTML="محمد بن شيهون";
    sumary.innerHTML="خريج علوم الحاسب ومهتم بتطوير الويب ، لدي خبرة في استخدام لغات html و css و java و javascript و sql و php. لدي أيضًا القليل من الخبرة في c # و swift ، أبحث عن دور يمكنني من خلاله النمو والتعلم من أعضاء الفريق ذوي الخبرة أثناء استخدام المهارات التي قمت بتحسينها لمساعدتهم.";
    prof.innerHTML="الخبرة العملية";
    intership.innerHTML="التدريب الداخلي";
    smart.innerHTML="الاساليب الذكية";
    method.innerHTML="شركة الاساليب الذكية هي مؤسسة تجارية وطنية متخصصة في المعدات الآلية والروبوتات والذكاء الاصطناعي. من أجل تدريبي ، عملت كمتخصص IOT حيث أنهيت أربع مهام:";
    method1.innerHTML="لوحة تحكم ذراع الروبوت.";
    method2.innerHTML="لوحة تحكم قاعدة الروبوت.";
    method3.innerHTML="الشات بوت واتسون.";
    method4.innerHTML="تحويل واتسون من كلام صوتي الى كتابة ومن كتابة الى كلام صوتي.";
    restitle.innerHTML="التعليم";
    mydegree.innerHTML="بكالوريوس في علوم الحاسب";
    uni.innerHTML="جامعة الملك عبد العزيز";
    proj.innerHTML="المشروع";
    projname.innerHTML="المكتب الافتراضي";
    projtitle.innerHTML="مشروع التخرج";
    projdisc.innerHTML="طورنا تطبيق سطح المكتب البعيد للوندوز الذي يسمح بإدارة حسابات مختلفة ، وتمكين المؤسسة من العمل عن بعد مع أجهزة الكمبيوتر الموجودة لديها باستخدام RDP.";




}else if(getLanuage ==="english"){
    document.body.dir ="ltr";
    webtitle.innerHTML = "Mohammed Binshihon Website - Resume";
     webname.innerHTML="Mohammed Binshion";
     home.innerHTML="Home";
     about.innerHTML="About";
     resume.innerHTML="Resume";
     certificate.innerHTML="Certificates";
    fotterspan.innerHTML="Mohammed Binshihon";
    rus.innerHTML="Resume";
    summa.innerHTML="Sumary";
    myname.innerHTML="Mohamme Binshihon";
    sumary.innerHTML="Graduate of computer science intrested in web development, I have exprince with html, css, java,javascript, sql, and php langues. also i have little expirince in c# and swift languges, Looking for a role where I can grow and learn from experienced team members while using the skills that I improved to help them.";
    prof.innerHTML="Professional Experience";
    intership.innerHTML="Internship";
    smart.innerHTML="Smart Method";
    method.innerHTML="the Smart Methods company is a national commercial enterprise specialized in automated equipment, robotics, and artificial intelligence. For my training I worked as an IOT specialized where I finished four tasks:";
    method1.innerHTML="Robot arm control panel.";
    method2.innerHTML="Robot base control panel.";
    method3.innerHTML="Watson chatbot.";
    method4.innerHTML="Watson-Speech To Text- and-Text To Speech.";
    restitle.innerHTML="Education";
    mydegree.innerHTML="Bachelor of Computer Science";
    uni.innerHTML="King Abduaziz University";
    proj.innerHTML="Project";
    projname.innerHTML="Virtual Office";
    projtitle.innerHTML="Senior Project";
    projdisc.innerHTML="developed a remote desktop application for windows that allows the administration of different accounts, and enable an organization to work remotely with their existing computers by using the RDP.";

     

    

}


}
