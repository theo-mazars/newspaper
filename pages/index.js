import axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home({ newsfeed }) {
  const colors = [
    { light: "#f7b733", dark: "#fc4a1a" },
    { light: "#ff9068", dark: "#ff4b1f" },
    { light: "#0575E6", dark: "#021B79" },
    { light: "#89fffd", dark: "#ef32d9" },
    { light: "#a8e063", dark: "#56ab2f" },
  ];

  const pickColors = (i) => {
    return `${colors[i].light}, ${colors[i].dark}`;
  };

  return (
    <div className={styles.container}>
      <header>
        <h1>NEWSPAPER</h1>
      </header>
      <main className={styles.main}>
        <h2>Source : {newsfeed.title}</h2>
        <div>
          {newsfeed ? (
            newsfeed.items.map((nf, i) => (
              <a
                href={nf.url}
                target="_blank"
                rel="noopener noreferrer"
                key={nf.url}
              >
                <div
                  className={styles.card}
                  style={{
                    background: `linear-gradient(65deg, ${pickColors(i)})`,
                  }}
                >
                  <div>{nf.title}</div>
                </div>
              </a>
            ))
          ) : (
            <h1>Could not load data</h1>
          )}
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://theomazars.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Newsfeed by Theo Mazars
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(
      `https://rss.app/feeds/zazDfAYNsNdzm0CR.json`
    );
    const items = data.items.reduce(
      (arr, cur) => (arr.length >= 5 ? arr : [...arr, cur]),
      []
    );
    const newsfeed = { ...data, items };
    return {
      props: {
        newsfeed,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
    };
  }
}
