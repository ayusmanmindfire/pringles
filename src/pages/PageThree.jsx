import { PringleDesign } from "../components/PringleDesign"
import orangePringles from "../assets/orangePringle.png"

export const PageThree = () => {
    return (
        <>
            <PringleDesign
                textColor="#E9982E"
                text="Cheddar Cheese"
                imageString={orangePringles}
                bgColor="#EED0A8" />
        </>
    )
}
