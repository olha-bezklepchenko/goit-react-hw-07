import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import { FaAddressBook } from "react-icons/fa";
import css from "./App.module.css";

const App = () => {
  return (
    <div>
      <h1 className={css.title}>
        <FaAddressBook className={css.titleIcon} size="40" />
        Phonebook
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
