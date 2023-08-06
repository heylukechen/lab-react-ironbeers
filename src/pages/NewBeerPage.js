const NewBeerPage = () => {
  const handleSumit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={(e) => handleSumit(e)}>
      <label htmlFor=""></label>
      </form>
    </div>
  );
};

export default NewBeerPage;
