// import React from 'react'
import User from "../../../assets/user.png"

const CommentSection = () => {
 var Comments =[
    {
      name: "John",
      message: "Hi there!",
      reply: [
        { 
          name: "Alice", 
          message: "Hello John!",
          reply: [
            { name: "Alice", message: "Hello John!" },
            { name: "Bob", message: "Hi, how are you?" },
          ]
        },
        { name: "Bob", message: "Hi, how are you?" },
      ],
    },
    {
      name: "Emma",
      message: "I love coding!",
      reply: [
        { name: "James", message: "That's awesome!" },
        { name: "Olivia", message: "Me too!" },
      ],
    },
    {
      name: "Charlie",
      message: "What's for lunch?",
      reply: [
        { name: "Sophia", message: "Pizza!" },
        { name: "Mia", message: "Burger sounds good!" },
      ],
    },
    {
      name: "Ethan",
      message: "Anyone watching a movie tonight?",
      reply: [
        { name: "Ava", message: "I'm in!" },
        { name: "Noah", message: "Sure, what movie?" },
      ],
    },
    {
      name: "Lily",
      message: "Happy birthday!",
      reply: [
        { name: "Jackson", message: "Thank you!" },
        { name: "Grace", message: "Have a great day!" },
      ],
    },
    {
      name: "Sophie",
      message: "Coffee or tea?",
      reply: [
        { name: "Liam", message: "Coffee, please!" },
        { name: "Ella", message: "Tea for me!" },
      ],
    },
    {
      name: "Henry",
      message: "Let's go for a hike this weekend!",
      reply: [
        { name: "Chloe", message: "Sounds like a plan!" },
        { name: "Mason", message: "Count me in!" },
      ],
    },
    {
      name: "Zoe",
      message: "Just finished reading a great book!",
      reply: [
        { name: "Lucas", message: "Tell me more about it!" },
        { name: "Aria", message: "Recommend it to me!" },
      ],
    },
    {
      name: "Jackson",
      message: "Coding all night long!",
      reply: [
        { name: "Harper", message: "You're dedicated!" },
        { name: "Benjamin", message: "Good luck!" },
      ],
    },
    {
      name: "Evelyn",
      message: "Ready for the weekend!",
      reply: [
        { name: "Logan", message: "Let's party!" },
        { name: "Mila", message: "Movie night?" },
      ],
    },
    {
      name: "Aiden",
      message: "New project started today!",
      reply: [
        { name: "Scarlett", message: "Exciting times ahead!" },
        { name: "Leo", message: "Wishing you success!" },
      ],
    },
    {
      name: "Mia",
      message: "Trying out a new recipe for dinner!",
      reply: [
        { name: "Elijah", message: "Hope it turns out delicious!" },
        { name: "Amelia", message: "Share the recipe!" },
      ],
    },
    {
      name: "Lucas",
      message: "Weekend getaway planned!",
      reply: [
        { name: "Abigail", message: "Where are you going?" },
        { name: "Carter", message: "Have a great time!" },
      ],
    },
    {
      name: "Aria",
      message: "Listening to my favorite music!",
      reply: [
        { name: "Mason", message: "What's on your playlist?" },
        { name: "Eli", message: "Recommend some songs!" },
      ],
    },
    {
      name: "Oliver",
      message: "Learning a new programming language!",
      reply: [
        { name: "Ava", message: "Which language?" },
        { name: "Sophia", message: "Impressive!" },
      ],
    },
    {
      name: "Grace",
      message: "Hiking in the mountains!",
      reply: [
        { name: "Liam", message: "Enjoy the views!" },
        { name: "Emma", message: "Stay safe!" },
      ],
    },
    {
      name: "William",
      message: "Game night at my place!",
      reply: [
        { name: "Charlotte", message: "Count me in!" },
        { name: "Jackson", message: "What games?" },
      ],
    },
    {
      name: "Lily",
      message: "Binge-watching my favorite TV show!",
      reply: [
        { name: "Ethan", message: "Which show?" },
        { name: "Amelia", message: "I need a new series!" },
      ],
    },
    {
      name: "Logan",
      message: "Celebrating a milestone at work!",
      reply: [
        { name: "Evelyn", message: "Congratulations!" },
        { name: "Luna", message: "Cheers to your success!" },
      ],
    },
    {
      name: "Harper",
      message: "Weekend project: DIY furniture!",
      reply: [
        { name: "Elijah", message: "That's ambitious!" },
        { name: "Aiden", message: "Share pictures!" },
      ],
    },
    {
      name: "Ella",
      message: "Late-night studying for exams!",
      reply: [
        { name: "Oliver", message: "You've got this!" },
        { name: "Noah", message: "Take breaks too!" },
      ],
    },
    {
      name: "Mason",
      message: "New workout routine started!",
      reply: [
        { name: "Sophie", message: "Stay motivated!" },
        { name: "Liam", message: "Fitness goals!" },
      ],
    },
    {
      name: "Ava",
      message: "Just adopted a pet!",
      reply: [
        { name: "Olivia", message: "What kind of pet?" },
        { name: "Lucas", message: "So cute!" },
      ],
    },
    {
      name: "Liam",
      message: "Planning a road trip!",
      reply: [
        { name: "Emma", message: "Road trip playlist ready?" },
        { name: "Aria", message: "Visit exciting places!" },
      ],
    },
  ]

var getCommentsJxs = (type,item,index)=>{
  return (<ul key={index} className="p-0">
  <div style={{fontSize: type === "comment" ? "0.8rem" : "0.7rem"}} className={type === "comment" ? "d-flex custom-bg-color-dark" : "d-flex mb-1 pb-1 custom-bg-color-light"}>
    <img className= {type === "comment" ? "p-1" : null} 
    style={{
      width:type === "comment" ?"6%": "5%",
      padding: type !== "comment" ? "0.2rem" : null 
      }} 
      src={User} alt="user"/>
    <div className="d-flex flex-column">
      <span style={{fontWeight: '500'}} className="px-1">{item.name}</span>
      <span className="px-2">{item.message}</span>
    </div>
  </div>
  {item?.reply && (<li style={{borderLeft : "1px solid grey"}} className="mx-2 my-3 px-2">
    {item?.reply?.map(getCommentsJxs.bind(null,"list"))}
  </li>)}
</ul>)
}
  return (
<>
  <div className="pb-2"
  style={{ fontWeight: 'bold', fontSize: "1.3rem" }}
  >
    Comments
  </div>
  {Comments.map(getCommentsJxs.bind(null,"comment"))}
</>
  )
}

export default CommentSection