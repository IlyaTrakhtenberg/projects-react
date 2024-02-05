const AddCurrency = (props) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-light dropdown-toggle w-100 h-100"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Add More Currencies
      </button>
      <ul
        className="dropdown-menu"
        style={{ height: "30vh", overflowY: "auto", cursor: "pointer" }}
      >
        {props.list.map((currency) => (
          <li key={currency}>
            <a
              className="dropdown-item"
              onClick={() => props.onClick(currency)}
              href="#"
            >
              {currency}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AddCurrency;
