import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const page = searchParams.get("page");
  return (
    // <>
    //   <h1>Product Details</h1>
    //   <h3>Category : {category}</h3>
    //   <h3>Page :{page}</h3>
    // </>

    <>
      <button
        onClick={() =>
          setSearchParams({
            category: "React",
            page: "1",
          })
        }
      >
        React Books
      </button>
    </>
  );
}
export default Products;
