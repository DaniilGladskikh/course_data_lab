/* 
	Реализовать функцию findUsersWithRole, которая принимает XML-документ xmlDoc и строку targetRole, которая представляет роль пользователя. Функция должна возвращать массив пользователей с заданной ролью.

	Пример XML:
<users>
  <user id="1">
    <profile>
      <personal>
        <roles>
          <role>admin</role>
          <role>user</role>
        </roles>
      </personal>
    </profile>
  </user>
  <user id="2">
    <profile>
      <personal>
        <roles>
          <role>user</role>
        </roles>
      </personal>
    </profile>
  </user>
</users>	
*/

export interface UserWithRole {
  id: string;
  profile: {
    personal: {
      roles: string[];
    };
  };
}

export function findUsersWithRole(xmlDoc: Document, targetRole: string): Element[] {
	// Получаем массив всех элементов <user>
	const users = Array.from(xmlDoc.getElementsByTagName('user'));
	
	// Фильтруем пользователей, у которых есть хотя бы одна роль, совпадающая с искомой
	return users.filter(user => {
		const roles = Array.from(user.getElementsByTagName('role'));
		return roles.some(role => role.textContent === targetRole);
	});
}