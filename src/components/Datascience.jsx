import React from 'react'
import Card from './Card'
function Datascience() {
  const datascience=[
    {
      id:1,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      description:
        "Are you someone who’s not interested in coding, but wants to get placed in tech",
      date: "28 November 2023",
      content: "Data Science",
    },
    {
      id:2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
      title: "Impact of Certification Programs on Hiring Data Scientists",
      description:
        "Data scientists are the creators behind transforming the raw data into edible data insights. These",
      date: "15 November 2023 ",
      content: "Data Science",
    },
    {
      id:3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title: "Top Product-Based Companies for Data Science Freshers",
      description:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      date: "10 November 2023 ",
      content: "Data Science",
    },
    {
      id:4,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      title:
        "What is the Difference between Data Science and Data Engineering?",
      description:
        "India has been making some serious waves in the world of data. Just like the",
      date: "8 November 2023",
      content: "Data Science",
    },
    {
      id:5,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      title: "Best Data Science Books to Learn in 2024",
      description:
        "Today, we’re going to talk about something really cool: data science. It’s all about using",
      date: "26 October 2023",
      content: "Data Science",
    },
    {
      id:6,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      title: "Top Product-Based Companies for Data Scientists in 2024",
      description:
        "We all know about the kind of buzz surrounding data science right now, it is",
      date: "5 October 2023",
      content: "Data Science",
    },
    {
      id:7,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
      title: "Useful Python Libraries & Tools for Data Science Beginners",
      description:
        "In a world filled with information, knowing how to understand and use data is super",
      date: "29 September 2023 ",
      content: "Data Science",
    },
    {
      id:8,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
      title:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
      date: "28 August 2023 ",
      content: "Data Science",
    },
  ]
  return (
    <div>
      <div className="row">
        {
          datascience.map((e,i)=>(
            <Card key={i.id} details={e}/>
          ))
        }
      </div>
    </div>
  )
}

export default Datascience
