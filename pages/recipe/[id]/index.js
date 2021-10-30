import Link from "next/link"

const recipe = ({ recipe }) => {
    return <>
        <h1>{recipe.name}</h1>
        <h2>{recipe.introduction}</h2>
        <ul>
            <h2>Ingredients:</h2>
            {recipe.ingredients.map((ing) => (<li key="Ings">{ing}</li>))}
        </ul>
        <h2>Cooking Steps:</h2>
        <ul>
            {recipe.cook_steps.map((steps) => (<li key="Steps">{steps}&nbsp;</li>))}
        </ul>
        <br />
        <Link href='/'>Go Back</Link>
    </>
}


// For Server side
// export const getServerSideProps = async (context) => {
//     const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1laGRpQGxhcm96YS5kZXYiLCJleHBpcmVzIjoxNjM1NTI2MTk2LjU2NDY4OTQsImlzX2FkbWluIjpmYWxzZX0.oEAJxYsMVwF1XDJf1zMep1GqdsJJXoDIR7Ly-8tunaY'

//     const res = await fetch(`https://api.laroza.dev/recipe/get_id/${context.params.id}`, { method: 'GET', headers: { 'Authorization': 'Bearer ' + token } })

//     const data = await res.json()
//     const recipe = data.data

//     return {
//         props: {
//             recipe
//         }
//     }
// }

// export default recipe




// For Static site generator
export const getStaticProps = async (context) => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1laGRpQGxhcm96YS5kZXYiLCJleHBpcmVzIjoxNjM1NjA3NjkxLjcwODM0NCwiaXNfYWRtaW4iOmZhbHNlfQ.8vRcEp1ZTGqBIqWUCO1cEO0z7aCnf5zwCZrM1rogp_E'

    const res = await fetch(`https://api.laroza.dev/recipe/get_id/${context.params.id}`, { method: 'GET', headers: { 'Authorization': 'Bearer ' + token } })

    const data = await res.json()
    const recipe = data.data

    return {
        props: {
            recipe
        }
    }
}

export const getStaticPaths = async () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1laGRpQGxhcm96YS5kZXYiLCJleHBpcmVzIjoxNjM1NjA3NjkxLjcwODM0NCwiaXNfYWRtaW4iOmZhbHNlfQ.8vRcEp1ZTGqBIqWUCO1cEO0z7aCnf5zwCZrM1rogp_E'

    const res = await fetch(`https://api.laroza.dev/recipe?pageNumber=0&nPerPage=50`, { method: 'GET', headers: { 'Authorization': 'Bearer ' + token } })
    const data = await res.json()
    const recipes = data.data

    const ids = recipes.map(recipe => recipe.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }

}

export default recipe
