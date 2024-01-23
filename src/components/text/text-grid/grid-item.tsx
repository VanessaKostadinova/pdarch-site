import GridContent from './grid-content';
import GridTitle from './grid-title';
import { GridItemType } from './grid-types';

export default function GridItem({ gridItemProp }: { gridItemProp: GridItemType }) {
    return (
        <div className='w-full md:max-w-[20rem]'>
            <GridTitle title={gridItemProp.title} />
            <GridContent content={gridItemProp.content} />
        </div>
    )
}