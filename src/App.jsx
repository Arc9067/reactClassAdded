// import Reactangle from "./Reactangle";

import Book from "./Components/Book";

function App() {
  return (
    <div>
      <Book author="samuel doh" bookName="The Act of love" publish={2020} />
      <Book
        author="gabriel soon"
        bookName="How i make my first billion naira"
        publish={2019}
      />
      <Book author="nav don" bookName="reactjs tutorial" publish={2017} />
    </div>
  );
}

export default App;
