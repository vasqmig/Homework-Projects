import styles from "./Home.module.css";

function Home ()
{
  return (
      // todo
      <>
      <section className={styles["section__container"]}>
        <h1>Space Travel</h1>
      </section>

      <section className={styles["section__container"]}>
        <h2>🌌 The Future</h2>
      </section>

      <section className={styles["section__container"]}>
        <h2>🌍 From Neglect to Innovation</h2>
      </section>

      <section className={styles["section__container"]}>
        <h2>🚀 Enter Space Travel: Where Dreams Take Flight</h2>
      </section>

      <section className={styles["section__container"]}>
        <h2>🔧 Engineer, Explorer, Leader</h2>
      </section>

      <section className={styles["section__container"]}>
        <h2>🌠 A Universe of Possibilities Awaits</h2>

      </section>
      </>
  );
}

export default Home;
