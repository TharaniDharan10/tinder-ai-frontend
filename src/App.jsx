import { useState } from "react";
import "./App.css";
import { User, MessageCircle, X, Heart } from "lucide-react"; //icon for profile and chat

const ProfileSelector = () => {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-lg">
      <div className="relative">
        <img src="http://169.254.196.227:8080/18667376-a68b-48d1-8331-a78f26caaea1.jpg" />
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

const MatchesList = ({ onSelectMatch }) => {
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
              "http://169.254.196.227:8080/0eaa5932-be8c-48b0-b2b1-8dfe41002995.jpg",
          },
          {
            id: 2,
            firstName: "Foo",
            lastName: "Black",
            imageUrl:
              "http://169.254.196.227:8080/182ce9d7-f65c-4754-8340-8090f383f535.jpg",
          },
        ].map((match) => (
          <li key={match.id} className="mb-2">
            <button
              onClick={onSelectMatch}
              className="flex w-full hover:bg-gray-100 rounded items-center"
            >
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

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const handleSend = () => {
    if (input.trim()) {
      console.log(input);
      setInput("");
    }
  };
  return (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Chat with Foo Bar</h2>
      <div className="h-[50vh] border rounded overflow-y-auto mb-4 p-2">
        {/* h-[50vh] ensures that that chat screen size in vertical height doesnot stretch out as convo increases */}
        {[
          "HI",
          "How are you?",
          "How are you?",
          "How are you?",
          "How are you?",
          "How are you?",
          "How are you?",
          "How are you?",
          "How are you?",
          "How are you?",
          "How are you?",
          "How are you?",
          "How are you?",
        ].map((message, index) => (
          <div key={index}>
            <div className="mb-4 p-2 rounded bg-gray-200">{message}</div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="border flex-1 rounded p-2 mr-2"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded p-2"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

function App() {
  const [currentScreen, setCurrentScreen] = useState("profile");

  const renderScreen = () => {
    switch (currentScreen) {
      case "profile":
        return <ProfileSelector />;
      case "matches":
        return <MatchesList onSelectMatch={() => setCurrentScreen("chat")} />;
      case "chat":
        return <ChatScreen />;
    }
  };
  return (
    <div className="max-w-md mx-auto p-4">
      <nav className="flex justify-between mb-4">
        <User onClick={() => setCurrentScreen("profile")} />
        <MessageCircle onClick={() => setCurrentScreen("matches")} />
      </nav>

      {renderScreen()}
    </div>
  );
}

export default App;

// cli imports we have made
// npm install -D tailwindcss postcss autoprefixer    (command to install tailwind) (-D -> adds these in dev dependencies in package.json )
// npm install lucide-react  (library for icons)
// npx tailwindcss init -p   (to initialise tailwind.config.js & postcss.config.js)
