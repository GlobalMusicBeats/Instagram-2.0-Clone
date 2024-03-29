import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  //const USERS: User[] = [];
  /*
  function createRandomUser() {
    return {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }

  Array.from({ length: 20 }).forEach(() => {
    USERS.push(createRandomUser());
  });
*/

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="
    flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm 
    overflow-x-scroll scrollbar-thin
    scrollbar-thumb-black"
    >
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
      ;{/* stories */}
      {/* stories */}
      {/* stories */}
      {/* stories */}
      {/* stories */}
      {/* stories */}
      {/* stories */}
    </div>
  );
}

export default Stories;
