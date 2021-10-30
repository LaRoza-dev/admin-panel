import Head from 'next/head'
import RecipeList from '../components/RecipeList'

export default function Home({ recipes }) {
  return (
    <div >
      <Head>
        <title>Laroza API</title>
        <meta name='keywords' content='Recipes api' />
      </Head>
      <RecipeList recipes={recipes} />      
    </div>
  )
}


export const getStaticProps = async () => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1laGRpQGxhcm96YS5kZXYiLCJleHBpcmVzIjoxNjM1NjA3NjkxLjcwODM0NCwiaXNfYWRtaW4iOmZhbHNlfQ.8vRcEp1ZTGqBIqWUCO1cEO0z7aCnf5zwCZrM1rogp_E'


  const res = await fetch(`https://api.laroza.dev/recipe?pageNumber=0&nPerPage=50`, { method:'GET', headers: {'Authorization': 'Bearer ' + token}})

  const recipes = await res.json()
  // const recipes = data.data

  return {
    props: {
      recipes: recipes.data
    },
    // revalidate: 120 // seconds
  }

}