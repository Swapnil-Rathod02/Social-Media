function Welcome({ handleclicked }) {
  return (
    <center>
      <h1>Welcome</h1>
      <button type="button" class="btn btn-primary" onClick={handleclicked}>
        getposts
      </button>
    </center>
  );
}
export default Welcome;
