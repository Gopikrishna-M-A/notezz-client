
import Hero from './Components/Hero'
import TopRated from './Components/TopRated'
const baseUrl = process.env.BASE_URL

export default function Home() {
  return (
      <>

        <Hero />
        <TopRated baseUrl={baseUrl}/>

  

      </>
  )
}
