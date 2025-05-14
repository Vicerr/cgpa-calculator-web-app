export interface TableRowProps {
    id?: number
    courseName: string
    courseCode: string
    courseLoad: number
    grade: "a" | "b" | "c" | "d" | "e" | "f"
    calculated: number
}

export default function TableRowData({ id, courseName, courseCode, courseLoad, grade, calculated }: TableRowProps) {
    return (
        <tr className="odd:bg-white even:bg-gray-200 whitespace-nowrap text-gray-600">
            <td className="py-3 px-1.5 border border-gray-200 whitespace-nowrap text-center">{id}</td>
            <td className="py-3 px-1.5 border min-w-[max-content] capitalize whitespace-nowrap text-left border-gray-200 text-center">{courseName}</td>
            <td className="py-3 px-1.5 border  border-gray-200 uppercase text-center">{courseCode}</td>
            <td className="py-3 px-1.5 border border-gray-200 text-center">{courseLoad}</td>
            <td className="py-3 px-1.5 border border-gray-200 uppercase text-center">{grade}</td>
            <td className="py-3 px-1.5 border border-gray-200 text-center">{calculated}</td>
            <td className="py-3 px-1.5 border border-gray-200 text-center"></td>
        </tr>
    )
}
