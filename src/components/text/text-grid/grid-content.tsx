export default function GridContent(props: { content: string }) {
    return (
        <div className="text-gray-400 w-full break-words">
            {props.content}
        </div>
    )
}