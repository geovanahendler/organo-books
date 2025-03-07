import "./Forms.css";
import FieldText from "../FieldText";

const Forms = () => {
  return (
    <section className="forms">
      <form>
        <h2>Fill in the details to create the new book card</h2>
        <FieldText label="Book Title" placeholder="Enter the name of the book"/>
        <FieldText label="Author" placeholder="Enter the name of author" />
        <FieldText label="Book category" placeholder="Enter the book category"/>
        <FieldText label="Book cover" placeholder="Enter the book cover" />
      </form>
    </section>
  );
};

export default Forms;
