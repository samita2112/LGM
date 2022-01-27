
import UserList from "./UserList";
import Loading from "./Loader";

import useFetch from "./useFetch";

const Home = (getuser) => {
  const { error, isPending, data: users } = useFetch('https://reqres.in/api/users?page=1')

  return (
    <div className="home" style={{maxWidth:'600px'}}>
      { error && <div>{ error }</div> }
      { isPending && <Loading /> }
      {getuser && users && <UserList users={users} /> }
      
      
      
    </div>
  );
}
 
export default Home;
