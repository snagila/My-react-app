const Profile = ({ nameOfProp, bio }) => {
  return (
    <div>
      <h1>{nameOfProp}</h1>
      <hr />
      <div>{bio}</div>
    </div>
  );
};
export default Profile;

export const Userbio = () => {
  return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium corrupti omnis aliquam laudantium optio aliquid sunt tempore commodi adipisci!";
};
