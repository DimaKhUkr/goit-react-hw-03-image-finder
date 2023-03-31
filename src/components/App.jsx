import { Profile } from './Profile/Profile';
import { Statistics } from './Stat/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './Trans/TransactionHistory';

import user from '../Data/user.json';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList prop={friends} />
      <TransactionHistory prop={transactions} />
    </div>
  );
};
