import logo from './SVG/salad1.png';
/*import logo from './logo.svg';*/
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header-wrap">
        <header className="App-header">
          <h1>PERFECTION SALAD</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      
      
      
      
      <div class="wrapper">
          <div class="ingred">            
            <h2>Ingredients</h2>          
            <ul>
              <li><p><em>2 envelopes</em> unflavored gelatine</p></li>
              <li><p><em>1/2 cup</em> sugar</p></li>
              <li><p><em>1 teaspoon</em> salt</p></li>
              <li><p><em>1 can (12 oz)</em> apple juice</p></li>
              <li><p><em>1/2 cup</em> lemon juice</p></li>
              <li><p><em>2 tablespoons</em> vinegar</p></li>
              <li><p><em>1 cup</em> shredded carrot</p></li>
              <li><p><em>1 cup</em> sliced celery</p></li>
              <li><p><em>1 cup</em> finely shredded cabbage</p></li>
              <li><p><em>1/2 cup</em> chopped green pepper</p> </li>
              <li><p><em>1 can (4 oz)</em> chopped pimiento</p></li>       
            </ul>
          </div>

          
          <div class="prep">
            <h2>Preparation</h2>
            <ol>
              <li>In small saucepan, <strong>combine gelatine, sugar, and salt</strong>; mix well.</li>
              <li>
                <p>Add 1 cup <strong>water</strong>.</p>
                <p>Heat over low heat, stirring constantly, until <strong>sugar and gelatine</strong> are dissolved.</p>
                <p>Remove from heat.</p>
              </li>
              <li>
                <p>Stir in <strong>apple juice, lemon juice, vinegar</strong>, and 1/4 cup cold <strong>water</strong>.</p>
                <p>Pour into medium bowl.</p>
                <p>Refrigerate 1 hour, or until mixture is consistency of unbeaten <strong>egg white</strong>.</p>
              </li>
              <li>Add <strong>carrot, celery, cabbage, green pepper, and pimiento</strong>; stir until well combined.</li>
              <li>
                <p>Turn into decorative, 1 1/2-quart mold. </p>
                <p>Refrigerate 4 hours,or until firm.</p>
              </li>
              <li>
                <p> To unmold: Run small spatula around edge of mold; invert onto serving plate.</p>
                <p>Place hot dishcloth over mold; shake gently to release.</p>
                <p>Repeat, if necessary.</p>
                <p>Lift off mold.</p>
                <p>Refrigerate until ready to serve</p>
              </li>        
            </ol>
          </div>
      </div>
      <p>Makes 8 servings.</p>
    </div>
  );
}

export default App;
