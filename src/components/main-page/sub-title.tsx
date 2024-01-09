interface TitleProps {
    title: string;
}
export default function SubTitle(props: TitleProps) {
    return (
        <h2 className="text-white text-5xl my-3">{props.title}</h2>
    )
}