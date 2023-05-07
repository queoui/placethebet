function Home(props) {
  const { title } = props;

  return (
    <main className="container">
      <h1 className="text-black">{title}</h1>
    </main>
  );
}

export default Home;
