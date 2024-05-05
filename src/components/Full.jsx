import React from 'react'
import Card from './Card'
function Full() {
  const fullstack=[
    {
      id:1,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      description:
        "When you’re hiring a full-stack developer, what are the most important things you look for?",
      date: "15 November 2023",
      content: "Full Stack Development",
    },
    {
      id:2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      description:
        "A Full Stack Developer is a tech all-rounder. They work on both the front and",
      date: "16 February 2024",
      content: "Full Stack Development",
    },
    {
      id:3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      title: "Horizontal vs Vertical Scaling for Efficient System Design",
      description:
        "In the world of system design, envision a digital skyscraper – a multifaceted structure built",
      date: "10 November 2023",
      content: "Full Stack Development",
    },
    {
      id:4,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      title: "Best Books to Learn Full-Stack Development",
      description:
        "Are you interested in becoming a full-stack developer but not sure where to start? In",
      date: "9 November 2023 ",
      content: "Full Stack Development",
    },
    {
      id:5,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      title: "Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      description:
        "In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
      date: "8 November 2023",
      content: "Full Stack Development",
    },
    {
      id:6,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      title: "7 Best Full-Stack Development Online Courses [2024]",
      description:
        "Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
      date: "31 August 2023",
      content: "Full Stack Development",
    },
    {
      id:7,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-2048x1072.webp",
      title: "Best Ways to Learn Full Stack Development in 2024",
      description:
        "Full stack development is and will be a promising and in-demand career in the upcoming",
      date: "4 August 2023",
      content: "Full Stack Development",
    },
    {
      id:8,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
      title: "How Long Would It Take to Be a Full Stack Developer?",
      description:
        "Have you ever wondered how much time it would take to become a skilled Full",
      date: "4 August 2023 ",
      content: "Full Stack Development",
    },
  ]
  return (
    <>
     <div className="row">
      {
        fullstack.map((e,i)=>(
          <Card key={i.id} details={e}/>
        ))
      }
    </div>
    </>
  )
}

export default Full
