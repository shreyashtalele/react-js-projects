import { useParams } from "react-router-dom";
function Products() {
  //   const { id } = useParams();
  const { userId, postId } = useParams();
  return (
    <>
      <h1>Product Deatil</h1>
      <h3>User Id : {userId}</h3>
      <h3>PostId : {postId}</h3>
    </>
  );
}
export default Products;
