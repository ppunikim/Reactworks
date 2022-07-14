//List로 보여질 항목들이다.
const Item = ({ addr }) => {
  return (
    <tr>
      <td>{addr.ad_name}</td>
      <td>{addr.ad_tel}</td>
      <td>{addr.ad_addr}</td>
    </tr>
  );
};
export default Item;
