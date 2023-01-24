import icon from '../../assets/icons-monkey/full-monkey.webp';
import './home.page.css';

function Home() {
  return (
    <div>
      <section className="Home">
          <div>
            <img src={icon} alt='It is an emoji. It shows a sitting monkey.'/>
          </div>
          <div>
            <h1>This site is under constrution.</h1>
          </div>
      </section>
    </div>
  );
}

export default Home;
