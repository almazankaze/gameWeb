import { useSelector } from "react-redux";
import {
  selectUser,
  selectUserIsLoading,
} from "../../store/user/user-selector";

import MyAccount from "./MyAccount";
import SettingsMenu from "./SettingsMenu";
import Spinner from "../../components/spinner/Spinner";

const Account = () => {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectUserIsLoading);

  if (!user) return null;

  if (isLoading) return <Spinner />;

  return (
    <section className="container settings">
      <div className="settings-grid">
        <SettingsMenu />
        <MyAccount />
      </div>
    </section>
  );
};

export default Account;
