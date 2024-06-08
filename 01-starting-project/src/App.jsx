import reactImg from './assets/react-core-concepts.png'
const reactDescription =['funDamentals','core'];
import  componentsImg from './assets/components.png';

 function getrandom(max){
  return Math.floor(Math.random()*(max+1))
 }
function Header() {
  return(<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>custom component</h1>
    <p>{reactDescription[getrandom(1)]}</p>

  </header>)
}

function CoreConcept(props){
  return (<li>
  <img src={props.image} alt={props.title} />
  <h3>{props.title}</h3>
  <p>{props.Description}</p>
  </li>)
}



function App() {
  return (
    
    <div>
     <Header />
      {/* <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>Fundamental React concepts you will need for almost any app you are going to build! </p>
      </header> */}


      <main>
        <section id='core-concept'>
        <h2>Core concept</h2>
        <ul>
          <CoreConcept  
          title="Components"
          Description="The core UI Building Blocks"
          image={componentsImg}
          />
         
          <CoreConcept />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
