import { useState } from "react";
import { useTranslation } from "react-i18next";
import { User } from "../models/User";

export default function UseState() {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);
  
  const addRandomUser = () => {

  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>{t('name')}</th>
            <th>{t('age')}</th>
            <th>{t('married')}</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr>
              <td>{user.name} {user.surname}</td>
              <td>{user.age}</td>
              <td>{user.married}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
