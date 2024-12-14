import "./App.css";
import { User, MessageCircle, X, Heart } from "lucide-react"; //icon for profile and chat

const ProfileSelector = () => {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-lg">
      <div className="relative">
        <img src="http://169.254.196.227:8080/07fb670f-f051-43d2-a0e7-227ae8ba2fa4.jpg" />
        <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
          <h2 className="text-3xl font-bold ">Foo Bar, 30 </h2>
        </div>
      </div>
      <div className="p4">
        <p className="text-gray-600 mb-4">I am an Engineer</p>
      </div>
      <div className="p-4 flex justify-center space-x-4">
        <button
          className="bg-red-500 rounded-full p-4 text-white  hover:bg-red-700 "
          onClick={() => {
            console.log("left");
          }}
        >
          <X size={24} />
        </button>
        <button
          className="bg-green-500 rounded-full p-4 text-white hover:bg-green-700"
          onClick={() => {
            console.log("right");
          }}
        >
          <Heart size={24} />
        </button>
      </div>
    </div>
  );
};

const MatchesList = () => {
  return (
    <div className="rounded-lg shadow-lg p-4 ">
      <h2 className="text-2xl font-bold mb-4">Matches</h2>
      <ul>
        {[
          {
            id: 1,
            firstName: "Foo",
            lastName: "Bar",
            imageUrl:
              "http://169.254.196.227:8080/06fe0dc9-0915-4ede-9674-db77e54540e8.jpg",
          },
          {
            id: 2,
            firstName: "Foo",
            lastName: "Black",
            imageUrl:
              "http://169.254.196.227:8080/0efd4353-dd34-42bb-b26f-0ee85278e099.jpg",
          },
        ].map((match) => (
          <li key={match.id} className="mb-2">
            <button className="flex w-full hover:bg-gray-100 rounded items-center">
              <img
                src={match.imageUrl}
                className="w-16 h-16 rounded-full mr-3 object-cover"
              />
              <span>
                <h3 className="font-bold">
                  {match.firstName} {match.lastName}
                </h3>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="max-w-md mx-auto p-4">
      <nav className="flex justify-between mb-4">
        <User />
        <MessageCircle />
      </nav>
      <ProfileSelector />
      {/* <MatchesList /> */}
    </div>
  );
}

export default App;

// cli imports we have made
// npm install -D tailwindcss postcss autoprefixer    (command to install tailwind) (-D -> adds these in dev dependencies in package.json )
// npm install lucide-react  (library for icons)
// npx tailwindcss init -p   (to initialise tailwind.config.js & postcss.config.js)
