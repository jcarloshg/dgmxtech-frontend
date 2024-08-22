
export interface Props {
    label: string;
    onClick: () => void,
    className?: string,
}

export const PrimaryButton = ({ label, onClick, className, }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`
                h-min
                text-1xl px-2 py-1 rounded-md border-2 bg-white border-gray-300 text-gray-600
                ${className}`}
        >
            {label}
        </button>
    )
}