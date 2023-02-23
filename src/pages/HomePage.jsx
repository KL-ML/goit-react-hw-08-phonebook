const HomePage = () => {
  // const [trigger, { isLoading, data }] = useLazyGetPostsQuery();
  // console.log(isLoading, data);

  return (
    <>
      <div>
        <div>
          <h1>Wellcome to your Phonebook</h1>
          <p>
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap.
          </p>
          <button
            // onClick={() => trigger({ page: 1 })}
            type="button"
          >
            Marketing info
          </button>
        </div>
      </div>

      
    </>
  );
};

export default HomePage;