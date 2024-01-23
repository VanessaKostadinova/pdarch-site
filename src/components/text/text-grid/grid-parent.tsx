
import GridItem from "./grid-item";
import { GridItemType } from "./grid-types";


export default function GridParent({ gridItems }: {gridItems: GridItemType[]}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-fit">
            {gridItems.map((gridItem, index) => (
                <GridItem gridItemProp={gridItem}></GridItem>
            ))}
        </div>
    );
}
