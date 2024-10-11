import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import { FaAddressBook } from "react-icons/fa";
import css from "./App.module.css";
import "modern-normalize/modern-normalize.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsError, selectIsLoading } from "./redux/contactsSlice.js";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps.js";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        <FaAddressBook className={css.titleIcon} />
        Phonebook
      </h1>
      {isLoading && !isError && <b>Request in progress...</b>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
