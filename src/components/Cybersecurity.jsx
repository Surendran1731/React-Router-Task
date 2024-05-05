import React from 'react'
import Card from './Card'
function Cybersecurity() {
  const cyber=[
      {
        id:1,
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
        title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
        description:
          "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
        date: "4 December 2023",
        content: "Cyber Security",
      },
      
      {
        id:2,
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
        title: "What Is Hacking? Types of Hacking & More",
        description:
          "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
        date: "25 September 2023",
        content: "Cyber Security",
      },
    
      {
        id:3,
        img: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
        title: "The Ultimate Cybersecurity Roadmap for Beginners",
        description:
          "Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,",
        date: "1 March 2021",
        content: "Cyber Security",
      },
    
  ]
  return (
   <>
   <div className="row">
    {
      cyber.map((e,i)=>(
        <Card key={i.id} details={e}/>
      ))
    }
   </div>
   </>
  )
}

export default Cybersecurity
