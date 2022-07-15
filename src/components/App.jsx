import user from "user.json";
import data from "data.json";
import friends from "friends.json";
import transactions from "transactions.json";
import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendList from "components/FriendList/FriendList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";
import 'modern-normalize/modern-normalize.css';



export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'start',
        flexWrap: 'wrap',
        background: 'linear-gradient(to top left, #aaaaaa, #ffffff)',
        color: '#010101'
      }}
    >

      {/* <Profile  {...user}/> */}
      <Profile  
        username = {user.username} 
        tag = {user.tag} 
        location = {user.location} 
        avatar={user.avatar} 
        stats = {user.stats}
      />

      <Statistics title = "Статистика" stats = {data}/>

      <FriendList friends = {friends}/>

      <TransactionHistory items = {transactions}/>

    </div>
  );
};
