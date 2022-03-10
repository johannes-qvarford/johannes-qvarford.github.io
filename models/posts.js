import CaseBasedReasoning from "../components/posts/CaseBasedReasoning";
import WinterDreams from "../components/posts/WinterDreams";
import LunchLadySimulator from "../components/posts/LunchLadySimulator"
import TinyTrickyTiles from "../components/posts/TinyTrickyTiles"
import SmwHacking from "../components/posts/SmwHacking"
import BricknodeFinancialModule from "../components/posts/BricknodeFinancialModule"
import SolutionsSystem from "../components/posts/SolutionsSystem"
import TechStack from "../components/posts/TechStack"
import IndependentTeams from "../components/posts/IndependentTeams"
import GoodArchitect from "../components/posts/GoodArchitect"

function getPosts() {
    return [
        CaseBasedReasoning,
        WinterDreams,
        LunchLadySimulator,
        TinyTrickyTiles,
        SmwHacking,
        BricknodeFinancialModule,
        SolutionsSystem,
        TechStack,
        IndependentTeams,
        GoodArchitect,
    ]
}

export function findBySlug(slug) {
    return posts.filter(p => p.metadata.slug == slug)[0]
}

export const posts = getPosts()