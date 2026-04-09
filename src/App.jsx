import Navbar from "./components/Navbar";
import Section from "./components/Section";

const App = () => {
  const usersD = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Here, you will get the best service tailored just for you.",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Here, you will get the best service tailored just for you.",
      tag: "Happy Client",
    },
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Here, you will get the best service tailored just for you.",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1545184180-25d471fe75eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Here, you will get the best service tailored just for you.",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Here, you will get the best service tailored just for you.",
      tag: "Delighted",
    },
    {
      img: "https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "The quality is great, but faster delivery would make it even better.",
      tag: "Needs Improvement",
    },
    {
      img: "https://images.unsplash.com/photo-1571365689578-618663443bd7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Their professionalism truly impressed me.",
      tag: "Highly Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1705091982079-d8bb61603cc2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Here, you will get the best service tailored just for you.",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Here, you will get the best service tailored just for you.",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1622151834625-66296f9f0e96?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Here, you will get the best service tailored just for you.",
      tag: "Loyal Customer",
    },
  ];
  return (
    <div className="app_layout">
      <Navbar />
      <Section usersD={usersD} />
    </div>
  );
};

export default App;
