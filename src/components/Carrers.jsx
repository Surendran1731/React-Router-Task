import React from 'react'
import Card from './Card'
function Carrers() {
  const carrer=[
    {
      id:1,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Machine-Learning-Engineer-Resume-Guide.webp",
      title: "Machine Learning Engineer Resume Guide: 11 Important Things To Include!",
      description:
        "The current technological era is full of competition and those who have profound skillset are",
      date: "23 November 2023",
      content: "Career",
    },
    {
      id:2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp",
      title: "Top 13 Product Based Companies for AI Freshers",
      description:
        "Artificial intelligence (AI) has revolutionized various industries, and the demand for AI professionals is at",
      date: "10 November 2023",
      content: "Career",
    },
    {
      id:3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-based-Companies-for-UIUX-Designers.webp",
      title: "Top 8 Product-based Companies for UI/UX Designers [Freshers]",
      description:
        "As product-based companies continually innovate and strive to stay ahead of the competition, they seek",
      date: "10 November 2023 ",
      content: "Career",
    },
    {
      id:4,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      description:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
      date: "19 January 2024",
      content: "Career",
    },
    
   
    {
      id:5,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      description:
        "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      date: "2 December 2023",
      content: "Career",
    },
    {
      id:6,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      title: "Automation Test Engineer Resume: 10 Important Things To Consider",
      description:
        "The world is moving towards automating the testing of products in order to increase work",
      date: "1 December 2023",
      content: "Career",
    },
    {
      id:7,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-2048x1072.webp",
      title:
        "Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
      description:
        "The world is moving towards modernization leading to an increase in the popularity of civil",
      date: "1 December 2023",
      content: "Career",
    },
  ]
  return (
   <>
     <div className="row">
      {
        carrer.map((e,i)=>(
          <Card key={i.id} details={e}/>
        ))
      }
    </div>
   </>
  )
}

export default Carrers
