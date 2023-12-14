import { Profile } from "components/Profile/Profile";
import user from "user.json";
import { Statistic } from "components/Statistics/Statistics";
import data from "data.json";
import { FriendList } from "components/FriendList/FriendList";
import friends from "friends.json";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import transactions from "transactions.json";

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
      <Statistic
        title="Upload stats"
        stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
