import recipeStyles from '../styles/Recipe.module.css'
import RecipeItem from './RecipeItem'

const RecipeList = ({ recipes }) => {
    return (
        <div className={recipeStyles.grid}>
            {recipes.map((recipe) => (<RecipeItem key="RecipeItem" recipe={recipe} />))}
        </div>
    )
}

export default RecipeList
