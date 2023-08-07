import React from 'react'
import BasicCard from '../components/Card'

const Home = ({ data }) => {
  return (
    <main className="dark text-foreground bg-background">
      <div>
        <h1>API Data in Next.js</h1>
        <div className="flex flex-col space-y-8">
          
          {data.map((item) => (
            <BasicCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/products') // Replace with your API endpoint
  const data = await res.json()

  return {
    props: {
      data: data.products,
    },
  }
}

export default Home
