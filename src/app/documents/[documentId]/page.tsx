import Editor from "@/app/documents/[documentId]/editor";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>
}

export default async function DocumentIdPage ({ params }: DocumentIdPageProps) {
    const {documentId} = await params

    return (
        <div>
            <Editor />
        </div>
    )

}