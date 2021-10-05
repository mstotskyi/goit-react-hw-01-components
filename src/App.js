import './App.css';
import {Profile} from './components/Profile/Profile';
import {Statistics} from './components/Statistics/Statistics'
import {FriendList} from './components/Friend-list/FriendList'
import {TransactionHistory} from './components/Transaction-history/TransactionHistory'
import statisticalData from './components/Statistics/statistical-data.json';
import user from './components/Profile/user.json'
import friends from './components/Friend-list/friends.json'
import transactions from './components/Transaction-history/transactions.json'


function App() {
  return (
    <div className="App">
     <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />;

<FriendList friends={friends} />

<TransactionHistory items={transactions} />;

    </div>
  );
}

export default App;
