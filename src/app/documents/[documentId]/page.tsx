interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>
}

export default async function DocumentIdPage ({ params }: DocumentIdPageProps) {
    const {documentId} = await params

    return (
        <div>
            <h1>Document ID: {documentId}</h1>
        </div>
    )

}