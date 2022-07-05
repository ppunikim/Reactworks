const onKeyDown = (e) => {
  console.log(e.target.value);
};
const BucketInput = () => {
  return (
    <>
      <input onKeyDown={onKeyDown} placeholder="BUCKET" className="w3-input" />
    </>
  );
};

export default BucketInput;
