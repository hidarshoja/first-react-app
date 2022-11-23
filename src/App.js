import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import './header/Header.css';
import Content from './Content/content';
import './Content/content.css';
import Fix from './fixHeader/Fix';
import './fixHeader/Fix.css';
import Footer from './footer/footer';
import './footer/footer.css';

function App() {
  const allBook = [
    {id:1 , name:'دلتنگ که باشی' , image : 'img/index1.jpg' , price:122_000 },
    {id:2 , name:'شیمی 3' , image : 'img/index2.jpg' , price:152_000 },
    {id:3 , name:'ویندوز', image : 'img/index3.jpg' , price:222_000 },
    {id:4 , name:'زیست شناسی' , image : 'img/index4.jpg' , price:322_000 },
    {id:5 , name:'بی شعوری' , image : 'img/index5.jpg' , price:120_000 },
    {id:6 , name:'دوشیزگان' , image : 'img/index6.jpg' , price:192_000 },
    {id:7 , name:'نام من سرخ' , image : 'img/index7.jpg' , price:522_000 },
    {id:8 , name:'زندگی های خیلی خوب' , image : 'img/index8.png' , price:422_000 },
    {id:9 , name:'چشمهایش' , image : 'img/index9.jpg' , price:220_000 },
    {id:10 , name:'ملکه جهنم' , image : 'img/index10.jpg' , price:302_000 }
  ]
  return (
    <div>
       <Header></Header>
       <Fix></Fix>
       <div className='ContentApp'>
           <Content {...allBook[0]}><p>off 15%</p></Content>
           <Content {...allBook[1]}></Content>
           <Content {...allBook[2]}></Content>
           <Content {...allBook[3]}></Content>
           <Content {...allBook[4]}></Content>
           <Content {...allBook[5]}></Content>
           <Content {...allBook[6]}></Content>
           <Content {...allBook[7]}></Content>
           <Content {...allBook[8]}></Content>
           <Content {...allBook[9]}></Content>
           <Content {...allBook[1]}></Content>
           <Content {...allBook[2]}></Content>
       </div>
       <Footer></Footer>
    </div>
  );
}

export default App;
