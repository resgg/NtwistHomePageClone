import './App.css';
import Leftside from "./Components/Leftside";
import Navbar from './Components/Navbar';
import Rightside from "./Components/Rightside";
import Home from './Components/Home';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <Navbar 
    l1= "الصفحة الرئيسية"
    l2= "الصناعات"
    l3= "برامج الذكاء الاصطناعي"
    l4="المدونة"
    l5= "اتصل بنا"
    />
    <Home
    homeTitleOne="حلاول مدعومة بالبيانات"
    homeTitleTwo="للتميز الصناعي"
    homeLink="اقرأ المزيد"
    href="#"
    />
    <Rightside 
     imgSrcRight="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-scaled.jpg"
     imgAltRight="صورة المنجم"
     headingRight="تحسين منجم إلى مطحنة ثم إلى منجم"
     paragraphRight="أحدث منتج لشركة NTWIST يفتح قيمة تصل إلى 250 دولارًا للأوقية في مناجم الذهب مفتوحة المصدر بشكل غير قابل للوصول مسبقًا من خلال ربط مصادر البيانات المعزولة مثل نماذج الكتل وأنظمة إدارة الأسطول ومسح التخزين وأجهزة المصنع. وهذا يتيح لشركتك تتبع تدفق المواد وخصائص التغذية والتعرف على تباينات الخطة/الإنتاج وتصحيح نماذج الموارد وخطط الإنتاج."
     linkRight="اقرأ المزيد"
     href="##"
/>

   <Leftside 
    imgSrcLeft="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg "
    imgAltLeft="صورة الاستدامة"
    headingLeft="الاستدامة"
    paragraphLeft=" يتم استخدام الانبعاثات أو الأهداف البيئية جنبًا إلى جنب مع أهداف الإنتاج لتحديد نجاح عملائنا. مع زيادة أهمية محاسبة الكربون وتتبع الانبعاثات، تقدم NTWIST مجموعة من الأدوات لزيادة الرؤية في الأداء البيئي ومساعدة مصانع المعالجة في تتبع وإدارة وتحسين وإبلاغ عن المؤشرات الرئيسية."
    linkLeft="Read More"
    href="##"
/>
<Rightside 
     imgSrcRight="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg"
     imgAltRight="صورة المنجم"
     headingRight="تحسين منجم إلى مطحنة ثم إلى منجم"
     paragraphRight="أحدث منتج لشركة NTWIST يفتح قيمة تصل إلى 250 دولارًا للأوقية في مناجم الذهب مفتوحة المصدر بشكل غير قابل للوصول مسبقًا من خلال ربط مصادر البيانات المعزولة مثل نماذج الكتل وأنظمة إدارة الأسطول ومسح التخزين وأجهزة المصنع. وهذا يتيح لشركتك تتبع تدفق المواد وخصائص التغذية والتعرف على تباينات الخطة/الإنتاج وتصحيح نماذج الموارد وخطط الإنتا"
     linkRight="اقرأ المزيد"
     href="##"
/>
<Leftside 
    imgSrcLeft="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png"
    imgAltLeft="ورة الاستدام"
    headingLeft="دام"
    paragraphLeft="يتم استخدام الانبعاثات أو الأهداف البيئية جنبًا إلى جنب مع أهداف الإنتاج لتحديد نجاح عملائنا. مع زيادة أهمية محاسبة الكربون وتتبع الانبعاثات، تقدم NTWIST مجموعة من الأدوات لزيادة الرؤية في الأداء البيئي ومساعدة مصانع المعالجة في تتبع وإدارة وتحسين وإبلاغ عن المؤشرات الرئيسية."
    linkLeft="اقرأ المزيد"
     href="##"
/>
<Footer 
 a1="الصفحة الرئيسية"
 a2 ="الصناعات"
 a3 ="برمجيات الذكاء الاصطناعي"
 a4 ="المدونة"
 a5 ="اتصل بنا"
 />
  </div>

  );
}

export default App;
