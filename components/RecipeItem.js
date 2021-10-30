import recipeStyles from '../styles/Recipe.module.css'
import Link from 'next/link'

const RecipeItem = ({ recipe }) => {
    return (
        <Link href="/recipe/[id]" as={`/recipe/${recipe.id}`}>
            <a className={recipeStyles.card}>
                <h3>
                    {recipe.name} &rarr;
                </h3>
                <p>Stars: {recipe.stars}</p>
                <p>{recipe.skill}</p>
                <p>{recipe.serves}</p>
            </a>
        </Link>
    )
}

export default RecipeItem
